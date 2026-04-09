import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Redirect } from "expo-router";

export default function Index() {
  const router = useRouter();
  return <Redirect href="/(tabs)/dashboard" />;
}