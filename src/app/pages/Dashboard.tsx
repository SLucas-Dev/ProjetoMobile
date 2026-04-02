import { Link } from "expo-router";
import {
  View,
  Text,
  Pressable,
  ScrollView,
} from "react-native";
import {
  Activity,
  Camera,
  TrendingUp,
  Flame,
  Target,
  Calendar,
  Clock,
  Award,
  ChevronRight,
  Zap,
} from "lucide-react-native";

export default function Dashboard() {
  const todayWorkout = {
    name: "Treino de Peito e Tríceps",
    duration: "45-60 min",
    exercises: 8,
    difficulty: "Intermediário",
    completed: 0,
    total: 8,
  };

  const stats = [
    { label: "Treinos", value: "4/5", icon: Activity },
    { label: "Calorias", value: "2847", icon: Flame },
    { label: "Sequência", value: "12", icon: Zap },
    { label: "Meta", value: "75%", icon: Target },
  ];

  const recentWorkouts = [
    { name: "Costas e Bíceps", date: "17 Mar", duration: "52 min" },
    { name: "Pernas", date: "16 Mar", duration: "68 min" },
    { name: "Ombros", date: "15 Mar", duration: "45 min" },
  ];

  const achievements = [
    { title: "Primeira Semana", icon: Award, unlocked: true },
    { title: "Forma Perfeita", icon: Camera, unlocked: true },
    { title: "Mestre Fitness", icon: Flame, unlocked: false },
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#020617" }}>
      <View style={{ padding: 16, gap: 16 }}>

        {/* Header */}
        <View>
          <Text style={{ fontSize: 26, fontWeight: "bold", color: "#fff" }}>
            Olá, Atleta 👋
          </Text>
          <Text style={{ color: "#94a3b8" }}>
            Vamos treinar hoje?
          </Text>
        </View>

        {/* Stats */}
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
          {stats.map((item, i) => {
            const Icon = item.icon;
            return (
              <View
                key={i}
                style={{
                  width: "48%",
                  backgroundColor: "#020617",
                  padding: 16,
                  borderRadius: 12,
                }}
              >
                <Icon color="#10b981" />
                <Text style={{ color: "#fff", fontSize: 18, marginTop: 8 }}>
                  {item.value}
                </Text>
                <Text style={{ color: "#94a3b8" }}>{item.label}</Text>
              </View>
            );
          })}
        </View>

        {/* Treino do dia */}
        <View
          style={{
            backgroundColor: "#022c22",
            padding: 16,
            borderRadius: 12,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
            Treino de Hoje
          </Text>

          <Text style={{ color: "#cbd5f5", marginTop: 4 }}>
            {todayWorkout.name}
          </Text>

          <View style={{ flexDirection: "row", gap: 10, marginTop: 10 }}>
            <Clock color="#94a3b8" size={16} />
            <Text style={{ color: "#94a3b8" }}>{todayWorkout.duration}</Text>
          </View>

          <View style={{ marginTop: 10 }}>
            <Text style={{ color: "#fff" }}>
              {todayWorkout.completed}/{todayWorkout.total}
            </Text>
          </View>

          {/* Botões */}
          <View style={{ flexDirection: "row", gap: 10, marginTop: 12 }}>
            <Link href="/workouts" asChild>
              <Pressable
                style={{
                  backgroundColor: "#10b981",
                  padding: 12,
                  borderRadius: 8,
                  flex: 1,
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "#fff" }}>Iniciar</Text>
              </Pressable>
            </Link>

            <Link href="/form-check" asChild>
              <Pressable
                style={{
                  borderWidth: 1,
                  borderColor: "#334155",
                  padding: 12,
                  borderRadius: 8,
                }}
              >
                <Camera color="#fff" />
              </Pressable>
            </Link>
          </View>
        </View>

        {/* Treinos recentes */}
        <View>
          <Text style={{ color: "#fff", fontSize: 18, marginBottom: 10 }}>
            Treinos Recentes
          </Text>

          {recentWorkouts.map((item, i) => (
            <View
              key={i}
              style={{
                backgroundColor: "#020617",
                padding: 12,
                borderRadius: 10,
                marginBottom: 8,
              }}
            >
              <Text style={{ color: "#fff" }}>{item.name}</Text>
              <Text style={{ color: "#94a3b8", fontSize: 12 }}>
                {item.date} • {item.duration}
              </Text>
            </View>
          ))}
        </View>

        {/* Conquistas */}
        <View>
          <Text style={{ color: "#fff", fontSize: 18, marginBottom: 10 }}>
            Conquistas
          </Text>

          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <View
                key={i}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                  padding: 12,
                  borderRadius: 10,
                  backgroundColor: item.unlocked ? "#022c22" : "#020617",
                  marginBottom: 8,
                }}
              >
                <Icon color={item.unlocked ? "#10b981" : "#64748b"} />
                <Text
                  style={{
                    color: item.unlocked ? "#fff" : "#64748b",
                  }}
                >
                  {item.title}
                </Text>
              </View>
            );
          })}
        </View>

      </View>
    </ScrollView>
  );
}