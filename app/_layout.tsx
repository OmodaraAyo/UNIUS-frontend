import { Stack } from "expo-router";
import "./globals.css";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="notifications" options={{ headerShown: false,}} />
      <Stack.Screen name="sendUwt" options={{ headerShown: false }} />
      <Stack.Screen name="otherwallet" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
