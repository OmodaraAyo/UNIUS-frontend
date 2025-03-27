import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-xl text-primary">Edit app/index.tsx to edit this screen.</Text>
      <Link href="/transaction">Transaction</Link>
      <Link href="/earn">Earn</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/settings">Settings</Link>
    </View>
  );
}
