import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MenuItem } from "@/assets/Allcons";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TransactionOption } from "@/assets/Allcons";
import CryptoTracker from "@/components/CryptoTracker";
import { useRouter } from "expo-router";


const labeledList = [
  {id: 1, label: 'name'},
  {id: 2, label: 'price'},
  {id: 3, label: 'Volume(24Hr)'},
]

export default function Index() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const { height } = useWindowDimensions();

  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-white">
      <ScrollView
        style={{ height: height * 0.12 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <View
          className="w-full h-full rounded-b-2xl overflow-hidden border-b-2 border-transparent flex flex-column gap-4"
          style={styles.maincontainer}
        >
          <LinearGradient
            colors={["#011221", "#05366D"]}
            className="w-full px-8 py-6 flex flex-column gap-4 rounded-b-2xl"
            start={{ x: 1, y: 5 }}
            end={{ x: 2, y: 2 }}
          >
            <View style={styles.firstRow}>
              {/* First item (left side) */}
              <View className="flex flex-row items-center gap-3">
                <Image source={MenuItem[0].icon} />
                <TouchableOpacity className="flex flex-row items-center gap-2">
                  <Text className="text-white">u3...UNIUS</Text>
                  <Ionicons name="chevron-down" size={23} color="#fff" />
                </TouchableOpacity>
              </View>

              {/* Right side icons */}
              <View style={styles.rightIconsContainer}>
                {MenuItem.slice(1).map((item) => (
                  <TouchableOpacity key={item.id} style={styles.iconWrapper} onPress={() => router.push(item.page)}>
                    <Image source={item.icon} />
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* asset and balance */}
            <View className="flex flex-row justify-between items-center h-[6rem]">
              <View className="-mt-2">
                <View className="flex flex-row items-center gap-1">
                  <Text className="text-white text-xs">Total Assets</Text>
                  <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
                    <Ionicons
                      name={isVisible ? "eye" : "eye-off"}
                      size={12}
                      color="#fff"
                    />
                  </TouchableOpacity>
                </View>

                <View className="flex flex-row items-center">
                  <Text className="text-white text-[2.3rem]">
                    {isVisible ? "0.00" : "********"}
                  </Text>
                  {isVisible && (
                    <Text
                      className="text-[0.775rem] mt-[0.90rem] ml-1 text-white"
                      style={{
                        textDecorationLine: "line-through",
                        textDecorationStyle: "double",
                        textDecorationColor: "rgba(255, 255, 255, 0.5)",
                      }}
                    >
                      UWT
                    </Text>
                  )}
                </View>

                {isVisible ? (
                  <View className="flex flex-row items-center -mt-1 ">
                    <Text className="text-gray-400 text-[0.78rem]">
                      ≈$0.00000000{" "}
                    </Text>
                    <Ionicons
                      name="caret-down"
                      size={10}
                      style={styles.play}
                      color={"#9ca3af"}
                    />
                  </View>
                ) : (
                  <View className="flex flex-row items-center -mt-3">
                    <Text className="text-gray-400 text-xl">**** </Text>
                    <Ionicons
                      name="information-circle-outline"
                      size={12}
                      style={styles.warning}
                      color={"#9ca3af"}
                    />
                  </View>
                )}
              </View>
              <TouchableOpacity className="bg-white rounded-full px-5 py-1 flex justify-center items-center mt-12 font-semibold text-[#1A436C]" onPress={() => router.push('/amount')}>
                Buy
              </TouchableOpacity>
            </View>
          </LinearGradient>

          {/* Transaction options */}
          <View className="flex flex-row justify-between px-10 py-6 w-[95%] lg:w-[85%] mx-auto rounded-xl bg-transparent" style={{shadowColor: '#000', shadowOffset: {width: 0, height: 2}, shadowOpacity: 0.1, shadowRadius: 6, elevation: 10, backgroundColor:'transparent'}} >
            {TransactionOption.map((item, index) => (
              <TouchableOpacity key={index} className="flex flex-col items-center gap-2 justify-center" onPress={() => router.push(item.page)}>
                <Image source={item.icon} />
                <Text className="text-[#1A436C]">{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Currency */}
          <View className="flex flex-col justify-start px-10 py-6 w-[95%] lg:w-[85%] h-[55%] mx-auto rounded-xl bg-transparent mb-10" style={{shadowColor: '#000', shadowOffset: {width: 0, height: 2}, shadowOpacity: 0.1, shadowRadius: 6, elevation: 10, backgroundColor:'transparent'}} >
              <View className="flex items-start gap-2 justify-between">
                <CryptoTracker/>
              </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  maincontainer: {},
  firstRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  rightIconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  iconWrapper: {},
  play: {
    marginTop: 3.5,
  },
  warning: {
    marginTop: -3.5,
  },
});
