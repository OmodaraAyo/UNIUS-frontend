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
  { id: 1, label: "Name" },
  { id: 2, label: "Price" },
  { id: 3, label: "Volume (24Hr)" },
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
      <View style={[styles.itemContainer, isLastItem && styles.lastItemContainer]}>
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
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {labeledList.map((item) => (
          <Text 
            key={item.id} 
            style={[
              styles.headerText,
              item.id === 1 ? styles.headerLeft :
              item.id === 2 ? styles.headerCenter :
              styles.headerRight
            ]}
          >
            {item.label}
          </Text>
        ))}
      </View>
      <View style={styles.listContainer}>
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
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  listContainer: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  headerContainer: {
    flexDirection: "row",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginBottom: 8,
  },
  headerText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1A436C",
  },
  headerLeft: {
    width: "33%",
    textAlign: "left",
  },
  headerCenter: {
    width: "33%",
    textAlign: "center",
  },
  headerRight: {
    width: "33%",
    textAlign: "right",
  },
  coinInfo: {
    flexDirection: "row",
    alignItems: "center",
    width: "48%",
  },
  priceContainer: {
    width: "17%",
    alignItems: "flex-start",
  },
  volumeContainer: {
    width: "33%",
    alignItems: "flex-end",
  },
  icon: {
    width: 32,
    height: 32,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: "500",
    color: "#1A436C",
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    color: "#16c784",
  },
  volume: {
    fontSize: 14,
    fontWeight: "500",
    color: "#1A436C",
  },
  positive: {
    // changePercent >= 0 ? styles.positive : styles.negative
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