import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#020617",
  },
  gradientContainer: {
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  gradientTodayWorkout: {
    borderRadius: 16,
    padding: 24,
  },
  welcomeContainer: {
    marginBottom: 32,
  },
  welcomeSubtitle: {
    color: "#94a3b8",
    fontSize: 16,
    marginBottom: 4,
  },
  welcomeTitle: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
    marginBottom: 32,
  },
  statCard: {
    backgroundColor: "rgba(15, 23, 42, 0.8)",
    borderRadius: 16,
    padding: 20,
    flex: 1,
    minWidth: 150,
    borderWidth: 1,
    borderColor: "#1e293b",
  },
  statIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  statValue: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 4,
  },
  statLabel: {
    color: "#94a3b8",
    fontSize: 14,
  },
  todayWorkoutContainer: {
    marginBottom: 32,
  },
  todayWorkoutTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  workoutHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  workoutTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 12,
  },
  workoutExercises: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  exerciseText: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 8,
  },
  startButton: {
    backgroundColor: "#fff",
    paddingVertical: 16,
    borderRadius: 12,
  },
  startButtonText: {
    color: "#059669",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  recentWorkoutsContainer: {
    marginBottom: 32,
  },
  recentWorkoutsTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  workoutCard: {
    backgroundColor: "rgba(15, 23, 42, 0.8)",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#1e293b",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  workoutCardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  workoutCardIcon: {
    backgroundColor: "rgba(16, 185, 129, 0.2)",
    borderRadius: 50,
    padding: 12,
    marginRight: 16,
  },
  workoutCardTextContainer: {
    flex: 1,
  },
  workoutCardName: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  workoutCardDate: {
    color: "#94a3b8",
    fontSize: 14,
  },
  aiTipContainer: {
    backgroundColor: "rgba(147, 51, 234, 0.3)",
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: "rgba(168, 85, 247, 0.3)",
  },
  aiTipHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  aiTipTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 8,
  },
  aiTipText: {
    color: "#cbd5e1",
    fontSize: 16,
    lineHeight: 24,
  },
});

export default function Dashboard() {
  const stats = [
    { label: "Treinos", value: "12", icon: "barbell", color: "#10b981" },
    { label: "Calorias", value: "2.4k", icon: "flame", color: "#f59e0b" },
    { label: "Tempo", value: "8h", icon: "time", color: "#06b6d4" },
    { label: "Streak", value: "7d", icon: "trophy", color: "#8b5cf6" },
  ];

  const recentWorkouts = [
    { name: "Peito e Tríceps", date: "Hoje", completed: true },
    { name: "Costas e Bíceps", date: "Ontem", completed: true },
    { name: "Pernas", date: "2 dias atrás", completed: true },
  ];

  return (
    <ScrollView style={styles.scrollView}>
      <LinearGradient
        colors={["#0f172a", "#1e293b"]}
        style={styles.gradientContainer}
      >
        {/* Welcome */}
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeSubtitle}>Bem-vindo de volta!</Text>
          <Text style={styles.welcomeTitle}>Vamos treinar?</Text>
        </View>

        {/* Stats Grid */}
        <View style={styles.statsGrid}>
          {stats.map((stat, index) => (
            <View
              key={index}
              style={styles.statCard}
            >
              <View style={styles.statIconContainer}>
                <Ionicons name={stat.icon as any} size={24} color={stat.color} />
              </View>
              <Text style={styles.statValue}>
                {stat.value}
              </Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>

        {/* Treino de Hoje */}
        <View style={styles.todayWorkoutContainer}>
          <Text style={styles.todayWorkoutTitle}>Treino de Hoje</Text>
          <LinearGradient
            colors={["#10b981", "#059669"]}
            style={styles.gradientTodayWorkout}
          >
            <View style={styles.workoutHeader}>
              <Ionicons name="fitness" size={32} color="#fff" />
              <Text style={styles.workoutTitle}>
                Ombros e Abs
              </Text>
            </View>
            
            <View style={styles.workoutExercises}>
              <Text style={styles.exerciseText}>
                • Desenvolvimento com Halteres - 4x12
              </Text>
              <Text style={styles.exerciseText}>
                • Elevação Lateral - 4x15
              </Text>
              <Text style={styles.exerciseText}>
                • Crucifixo Invertido - 3x15
              </Text>
              <Text style={[styles.exerciseText, { marginBottom: 0 }]}>
                • Prancha - 3x60s
              </Text>
            </View>

            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}>
                Começar Treino
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>

        {/* Treinos Recentes */}
        <View style={styles.recentWorkoutsContainer}>
          <Text style={styles.recentWorkoutsTitle}>
            Histórico Recente
          </Text>
          {recentWorkouts.map((workout, index) => (
            <View
              key={index}
              style={styles.workoutCard}
            >
              <View style={styles.workoutCardContent}>
                <View style={styles.workoutCardIcon}>
                  <Ionicons name="checkmark" size={20} color="#10b981" />
                </View>
                <View style={styles.workoutCardTextContainer}>
                  <Text style={styles.workoutCardName}>
                    {workout.name}
                  </Text>
                  <Text style={styles.workoutCardDate}>{workout.date}</Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#64748b" />
            </View>
          ))}
        </View>

        {/* Dica da IA */}
        <View style={styles.aiTipContainer}>
          <View style={styles.aiTipHeader}>
            <Ionicons name="bulb" size={24} color="#a78bfa" />
            <Text style={styles.aiTipTitle}>
              Dica da IA
            </Text>
          </View>
          <Text style={styles.aiTipText}>
            Você está tendo um ótimo progresso! Considere aumentar a carga no
            supino em 2.5kg na próxima sessão.
          </Text>
        </View>
      </LinearGradient>
    </ScrollView>
  );
}
