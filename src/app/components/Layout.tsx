import { Stack, Link, usePathname } from "expo-router";
import { View, Text, Pressable, ScrollView } from "react-native";
import {
  Dumbbell,
  Home,
  Activity,
  Camera,
  User,
} from "lucide-react-native";

export default function Layout() {
  const pathname = usePathname();

  const navItems = [
    { path: "/dashboard", icon: Home, label: "Início" },
    { path: "/workouts", icon: Activity, label: "Treinos" },
    { path: "/form-check", icon: Camera, label: "Correção" },
    { path: "/profile", icon: User, label: "Perfil" },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "#020617" }}>
      
      {/* Header */}
      <View
        style={{
          paddingTop: 50,
          paddingHorizontal: 16,
          paddingBottom: 16,
          borderBottomWidth: 1,
          borderBottomColor: "#1e293b",
          backgroundColor: "#020617",
        }}
      >
        {/* Logo */}
        <Link href="/dashboard" asChild>
          <Pressable style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <Dumbbell size={28} color="#10b981" />
            <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
              AI Trainer
            </Text>
          </Pressable>
        </Link>

        {/* Navigation */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 16 }}
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.path;

            return (
              <Link key={item.path} href={item.path} asChild>
                <Pressable
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingVertical: 8,
                    paddingHorizontal: 12,
                    marginRight: 8,
                    borderRadius: 8,
                    backgroundColor: isActive ? "#1e293b" : "transparent",
                  }}
                >
                  <Icon
                    size={16}
                    color={isActive ? "#fff" : "#94a3b8"}
                  />
                  <Text
                    style={{
                      marginLeft: 6,
                      color: isActive ? "#fff" : "#94a3b8",
                    }}
                  >
                    {item.label}
                  </Text>
                </Pressable>
              </Link>
            );
          })}
        </ScrollView>
      </View>

      {/* Conteúdo das páginas */}
      <View style={{ flex: 1, padding: 16 }}>
        <Stack />
      </View>
    </View>
  );
}