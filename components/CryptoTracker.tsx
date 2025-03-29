import { useEffect, useState } from "react";
import {
  FlatList,
  View,
  Image,
  Text,
  StyleSheet,
  ActivityIndicator,
  ImageSourcePropType,
} from "react-native";
import { currency } from "@/assets/Allcons";
import axios from "axios";

interface CryptoCoin {
  id: string;
  priceUsd?: string;
  volumeUsd24Hr?: string;
  marketCapUsd?: string;
  changePercent24Hr?: string;
}

interface Currency {
  id: string;
  coinCapId: string;
  names: string;
  icon: ImageSourcePropType;
}

type MergedCryptoData = Currency & CryptoCoin;

const labeledList = [
  { id: 1, label: "name" },
  { id: 2, label: "price" },
  { id: 3, label: "Volume(24Hr)" },
];

const formatLargeNumber = (num: number): string => {
  const absNum = Math.abs(num);
  const sign = num < 0 ? '-' : '';
  
  if (absNum >= 1000000000) {
    return `${sign}$${(absNum / 1000000000).toFixed(2)}b`;
  } else if (absNum >= 1000000) {
    return `${sign}$${(absNum / 1000000).toFixed(2)}m`;
  } else if (absNum >= 1000) {
    return `${sign}$${(absNum / 1000).toFixed(2)}k`;
  }
  return `${sign}$${absNum.toFixed(2)}`;
};

const CryptoTracker = () => {
  const [cryptoData, setCryptoData] = useState<MergedCryptoData[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const coinCapIds = currency
          .map((currency) => currency.coinCapId)
          .join(",");
        const response = await axios.get(
          `https://api.coincap.io/v2/assets?ids=${coinCapIds}`
        );

        const newData = currency.map((oldData) => {
          const cryptoCoin = response.data.data.find(
            (cryptoCoin: any) => cryptoCoin.id === oldData.coinCapId
          );
          return { ...oldData, ...cryptoCoin } as MergedCryptoData;
        });
        setCryptoData(newData);
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  const renderItem = ({
    item,
    index,
  }: {
    item: MergedCryptoData;
    index: number;
  }) => {
    const price = parseFloat(item.priceUsd || "0");
    const volume = parseFloat(item.volumeUsd24Hr || "0");
    const changePercent = parseFloat(item.changePercent24Hr || "0");
    const isLastItem = index === cryptoData.length - 1;
    
    return (
      <View className="flex flex-row items-center justify-between gap-3 border-b-2 border-b-[#E5E5E5] px-4 py-3" style={[styles.itemContainer, isLastItem && styles.lastItemContainer]}>
        <View style={styles.coinInfo}>
          <Image source={item.icon} style={styles.icon} />
          <Text style={styles.name}>{item.names}</Text>
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.price}>${price.toFixed(2)}</Text>
        </View>

        <View style={styles.volumeContainer}>
          <Text style={[
            styles.volume,
            changePercent >= 0 ? styles.positive : styles.negative
          ]}>
            {formatLargeNumber(volume)}
          </Text>
        </View>
      </View>
    );
  };

  if (isLoading) {
    return <ActivityIndicator size="large" style={styles.loader} />;
  }

  return (
    <View className="flex flex-col w-full h-full gap-3">
      <View style={styles.headerContainer}>
        {labeledList.map((item) => (
          <Text key={item.id} style={styles.headerText}>
            {item.label}
          </Text>
        ))}
      </View>
      <View>
        {cryptoData.map((item, index) => (
          <View key={item.id}>
            {renderItem({ item, index })}
          </View>
        ))}
      </View>
    </View>
  );
};

export default CryptoTracker;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  headerText: {
    color: "#1A436C",
    fontWeight: "600",
    fontSize: 14,
  },
  coinInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  priceContainer: {
    // width: "33%", // Takes 1/3 of the space
    // alignItems: "flex-start",
  },
  volumeContainer: {
    // width: "33%", // Takes 1/3 of the space
    alignItems: "flex-start",
  },
  icon: {
    width: 32,
    height: 32,
  },
  name: {
    fontSize: 16,
    fontWeight: "500",
    color: "#1A436C",
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1A436C",
  },
  volume: {
    fontSize: 14,
    fontWeight: "500",
  },
  positive: {
    color: "#16c784",
  },
  negative: {
    color: "#ea3943",
  },
  loader: {
    marginTop: 20,
    alignSelf: "center",
  },
  lastItemContainer: {
    borderBottomWidth: 0,
  },
});