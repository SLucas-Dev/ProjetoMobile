import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons, Feather, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation, NavigationProp } from "@react-navigation/native";

type RootStackParamList = {
  FormCheck: undefined;
};

export default function Workouts() {
  const [selectedWorkout, setSelectedWorkout] = useState<number | null>(null);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const workoutPlans = [
    {
      id: 1,
      name: "Peito e Tríceps",
      duration: "45-60 min",
      calories: 450,
      difficulty: "Intermediário",
      exercises: [
        { name: "Supino Reto com Barra", sets: "4x8-10", rest: "90s", focus: "Peitoral maior" },
        { name: "Supino Inclinado com Halteres", sets: "3x10-12", rest: "60s", focus: "Peitoral superior" },
      ],
      completed: 0,
      total: 6,
    },
    {
      id: 2,
      name: "Costas e Bíceps",
      duration: "50-65 min",
      calories: 480,
      difficulty: "Intermediário",
      exercises: [
        { name: "Barra Fixa Pronada", sets: "4x6-8", rest: "90s", focus: "Dorsais" },
      ],
      completed: 0,
      total: 6,
    },
  ];

  const aiSuggestions = [
    "Baseado no seu progresso, aumente 2.5kg no supino",
    "Sua forma no agachamento melhorou 15% esta semana",
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Meus Treinos</Text>
          <Text style={styles.subtitle}>Planos personalizados pela IA baseados nos seus objetivos</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("FormCheck")}
        >
          <MaterialCommunityIcons name="camera" size={20} color="white" />
          <Text style={styles.buttonText}>Correção de Forma</Text>
        </TouchableOpacity>
      </View>

      {/* AI Suggestions */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Feather name="zap" size={20} color="#10B981" />
          <Text style={styles.cardTitle}>Sugestões da IA</Text>
        </View>
        <View style={styles.cardContent}>
          {aiSuggestions.map((s, i) => (
            <View key={i} style={styles.suggestion}>
              <FontAwesome5 name="chart-line" size={16} color="#10B981" />
              <Text style={styles.suggestionText}>{s}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Workout Plans */}
      {workoutPlans.map((w) => (
        <View key={w.id} style={styles.card}>
          <View style={styles.cardHeader}>
            <View>
              <Text style={styles.cardTitle}>{w.name}</Text>
              <View style={styles.cardMeta}>
                <Feather name="clock" size={16} color="#94A3B8" />
                <Text style={styles.metaText}>{w.duration}</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => setSelectedWorkout(selectedWorkout === w.id ? null : w.id)}
            >
              <Text style={styles.detailsButton}>
                {selectedWorkout === w.id ? "Ocultar" : "Ver Detalhes"}
              </Text>
            </TouchableOpacity>
          </View>

          {selectedWorkout === w.id && (
            <View style={styles.cardContent}>
              {w.exercises.map((e, idx) => (
                <View key={idx} style={styles.exercise}>
                  <View style={styles.exerciseIndex}>
                    <Text style={styles.exerciseIndexText}>{idx + 1}</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.exerciseName}>{e.name}</Text>
                    <Text style={styles.exerciseMeta}>
                      {e.sets} • Descanso: {e.rest} • {e.focus}
                    </Text>
                  </View>
                  <TouchableOpacity>
                    <Feather name="check" size={20} color="#94A3B8" />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0F172A", padding: 16 },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 16 },
  title: { color: "white", fontSize: 24, fontWeight: "bold" },
  subtitle: { color: "#94A3B8", fontSize: 14 },
  button: { flexDirection: "row", backgroundColor: "#10B981", padding: 8, borderRadius: 6, alignItems: "center" },
  buttonText: { color: "white", marginLeft: 4 },
  card: { backgroundColor: "#1E293B", borderRadius: 8, padding: 12, marginBottom: 12 },
  cardHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 8 },
  cardTitle: { color: "white", fontSize: 16, fontWeight: "bold", marginLeft: 6 },
  cardContent: { marginTop: 4 },
  cardMeta: { flexDirection: "row", alignItems: "center", marginTop: 2 },
  metaText: { color: "#94A3B8", marginLeft: 4 },
  suggestion: { flexDirection: "row", alignItems: "center", marginBottom: 4 },
  suggestionText: { color: "#CBD5E1", marginLeft: 4, flex: 1 },
  detailsButton: { color: "#94A3B8", fontWeight: "bold" },
  exercise: { flexDirection: "row", alignItems: "center", marginBottom: 8, backgroundColor: "#334155", padding: 8, borderRadius: 6 },
  exerciseIndex: { width: 24, height: 24, borderRadius: 12, backgroundColor: "#10B98133", alignItems: "center", justifyContent: "center", marginRight: 8 },
  exerciseIndexText: { color: "#10B981", fontWeight: "bold" },
  exerciseName: { color: "white", fontWeight: "bold" },
  exerciseMeta: { color: "#94A3B8", fontSize: 12, marginTop: 2 },
});