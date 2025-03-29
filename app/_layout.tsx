import { Stack } from "expo-router";
import "./globals.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="notifications" options={{ headerShown: false, animation: 'slide_from_right'}} />
      <Stack.Screen name="sendUwt" options={{ headerShown: false }} />
      <Stack.Screen name="otherwallet" options={{ headerShown: false }} />
      <Stack.Screen name="amount" options={{ headerShown: false, animation: 'slide_from_right' }} />
      <Stack.Screen name="customerCare" options={{ headerShown: false, animation: 'slide_from_right' }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
