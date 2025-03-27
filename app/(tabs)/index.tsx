import { Text, View, ScrollView, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import watermelon from "@/assets/images/waterlemon.png";

export default function Index() {
  return (
    <View className="flex-1 bg-white">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false} contentContainerStyle={{minHeight: "100%", paddingBottom: 10}}>
        <View className="w-full h-[12rem] rounded-b-2xl overflow-hidden border-b-2 border-transparent">
          {/* Gradient takes full space of the rounded container */}
          <LinearGradient
            colors={["#011221", "#05366D"]}
            className="w-full h-full p-4"
            start={{ x: 1, y: 5 }}
            end={{ x: 2, y: 2 }}
          >
            <View>
              <Image source={watermelon} />
              <Text className="text-white p-4">Your content here</Text>
            </View>
          </LinearGradient>
        </View>
      </ScrollView>
    </View>
  );
}
