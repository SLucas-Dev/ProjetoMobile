import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Profile() {
  const userStats = {
    name: "João Silva",
    email: "joao@email.com",
    plan: "Premium",
    streak: 12,
    workouts: 47,
    minutes: 2340,
    score: 87,
  };

  const goals = [
    { name: "Perder 5kg", progress: 60 },
    { name: "Ganhar massa", progress: 45 },
    { name: "Flexibilidade", progress: 70 },
  ];

  const achievements = [
    { title: "Primeira Semana", unlocked: true },
    { title: "Forma Perfeita", unlocked: true },
    { title: "30 dias seguidos", unlocked: false },
  ];

  return (
    <ScrollView style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>JS</Text>
        </View>

        <Text style={styles.name}>{userStats.name}</Text>
        <Text style={styles.email}>{userStats.email}</Text>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>{userStats.plan}</Text>
        </View>
      </View>

      {/* Stats */}
      <View style={styles.stats}>
        <Stat title="Sequência" value={userStats.streak} />
        <Stat title="Treinos" value={userStats.workouts} />
        <Stat title="Minutos" value={userStats.minutes} />
        <Stat title="Score" value={`${userStats.score}%`} />
      </View>

      {/* Goals */}
      <Text style={styles.sectionTitle}>Metas</Text>
      {goals.map((g, i) => (
        <View key={i} style={styles.card}>
          <Text style={styles.cardTitle}>{g.name}</Text>

          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${g.progress}%` }]} />
          </View>

          <Text style={styles.progressText}>{g.progress}%</Text>
        </View>
      ))}

      {/* Achievements */}
      <Text style={styles.sectionTitle}>Conquistas</Text>
      {achievements.map((a, i) => (
        <View key={i} style={styles.cardRow}>
          <Ionicons
            name={a.unlocked ? "checkmark-circle" : "lock-closed"}
            size={24}
            color={a.unlocked ? "#10b981" : "#555"}
          />
          <Text style={styles.cardTitle}>{a.title}</Text>
        </View>
      ))}

      {/* Settings */}
      <Text style={styles.sectionTitle}>Configurações</Text>

      <View style={styles.card}>
        <TextInput
          placeholder="Nome"
          placeholderTextColor="#888"
          style={styles.input}
          defaultValue={userStats.name}
        />
        <TextInput
          placeholder="Email"
          placeholderTextColor="#888"
          style={styles.input}
          defaultValue={userStats.email}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

/* COMPONENTE STAT */
function Stat({ title, value }: any) {
  return (
    <View style={styles.statBox}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statTitle}>{title}</Text>
    </View>
  );
}

/* ESTILOS */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    padding: 16,
  },

  header: {
    alignItems: "center",
    marginBottom: 20,
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#10b981",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  avatarText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },

  name: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },

  email: {
    color: "#94a3b8",
  },

  badge: {
    marginTop: 8,
    backgroundColor: "#10b981",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },

  badgeText: {
    color: "#fff",
    fontWeight: "bold",
  },

  stats: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  statBox: {
    alignItems: "center",
  },

  statValue: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  statTitle: {
    color: "#94a3b8",
    fontSize: 12,
  },

  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10,
  },

  card: {
    backgroundColor: "#1e293b",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },

  cardRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#1e293b",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },

  cardTitle: {
    color: "#fff",
  },

  progressBar: {
    height: 6,
    backgroundColor: "#334155",
    borderRadius: 10,
    marginTop: 8,
  },

  progressFill: {
    height: 6,
    backgroundColor: "#10b981",
    borderRadius: 10,
  },

  progressText: {
    color: "#94a3b8",
    marginTop: 4,
  },

  input: {
    backgroundColor: "#0f172a",
    color: "#fff",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },

  button: {
    backgroundColor: "#10b981",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});