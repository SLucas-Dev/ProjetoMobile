import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function Workouts() {
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const categories = [
    { id: "todos", label: "Todos", icon: "grid" },
    { id: "peito", label: "Peito", icon: "body" },
    { id: "costas", label: "Costas", icon: "body" },
    { id: "pernas", label: "Pernas", icon: "walk" },
    { id: "ombros", label: "Ombros", icon: "body" },
  ];

  const workouts = [
    {
      name: "Supino Reto",
      category: "peito",
      sets: "4x12",
      difficulty: "Intermediário",
      calories: 85,
      icon: "barbell",
    },
    {
      name: "Agachamento",
      category: "pernas",
      sets: "4x15",
      difficulty: "Avançado",
      calories: 120,
      icon: "fitness",
    },
    {
      name: "Remada Curvada",
      category: "costas",
      sets: "4x12",
      difficulty: "Intermediário",
      calories: 95,
      icon: "barbell",
    },
    {
      name: "Desenvolvimento",
      category: "ombros",
      sets: "4x10",
      difficulty: "Intermediário",
      calories: 80,
      icon: "barbell",
    },
    {
      name: "Leg Press",
      category: "pernas",
      sets: "4x15",
      difficulty: "Intermediário",
      calories: 110,
      icon: "fitness",
    },
    {
      name: "Pulldown",
      category: "costas",
      sets: "4x12",
      difficulty: "Iniciante",
      calories: 75,
      icon: "barbell",
    },
  ];

  const filteredWorkouts =
    selectedCategory === "todos"
      ? workouts
      : workouts.filter((w) => w.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Iniciante":
        return "#10b981";
      case "Intermediário":
        return "#f59e0b";
      case "Avançado":
        return "#ef4444";
      default:
        return "#64748b";
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <LinearGradient colors={["#0f172a", "#1e293b"]} style={styles.backgroundGradient}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Ionicons name="search" size={20} color="#64748b" />
            <TextInput
              placeholder="Buscar exercícios..."
              placeholderTextColor="#64748b"
              style={styles.searchInput}
            />
          </View>
        </View>

        {/* Categories */}
        <View style={styles.categoriesContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesScrollContent}
          >
            {categories.map((cat) => (
              <TouchableOpacity
                key={cat.id}
                onPress={() => setSelectedCategory(cat.id)}
                activeOpacity={0.7}
                style={[
                  styles.categoryItem,
                  selectedCategory === cat.id
                    ? styles.categoryItemActive
                    : styles.categoryItemInactive,
                ]}
              >
                <Ionicons
                  name={cat.icon as any}
                  size={18}
                  color={selectedCategory === cat.id ? "#fff" : "#64748b"}
                />
                <Text
                  style={[
                    styles.categoryText,
                    selectedCategory === cat.id
                      ? styles.categoryTextActive
                      : styles.categoryTextInactive,
                  ]}
                >
                  {cat.label}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Workouts List */}
        <ScrollView 
          style={styles.workoutsScrollView}
          contentContainerStyle={styles.workoutsScrollContent}
          showsVerticalScrollIndicator={false}
        >
          {filteredWorkouts.map((workout, index) => (
            <TouchableOpacity
              key={index}
              style={styles.workoutCard}
              activeOpacity={0.8}
            >
              <View style={styles.workoutCardHeader}>
                <View style={styles.workoutInfoMain}>
                  <Text style={styles.workoutName}>{workout.name}</Text>
                  <View style={styles.workoutBadgesRow}>
                    <View
                      style={[
                        styles.difficultyBadge,
                        {
                          backgroundColor: `${getDifficultyColor(
                            workout.difficulty
                          )}20`,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.difficultyText,
                          { color: getDifficultyColor(workout.difficulty) },
                        ]}
                      >
                        {workout.difficulty}
                      </Text>
                    </View>
                    <View style={styles.setsBadge}>
                      <Text style={styles.setsText}>{workout.sets}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.workoutIconBadge}>
                  <Ionicons name={workout.icon as any} size={24} color="#10b981" />
                </View>
              </View>

              <View style={styles.workoutCardFooter}>
                <View style={styles.caloriesRow}>
                  <Ionicons name="flame" size={16} color="#f59e0b" />
                  <Text style={styles.caloriesText}>{workout.calories} cal</Text>
                </View>
                <TouchableOpacity style={styles.startButton} activeOpacity={0.7}>
                  <Text style={styles.startButtonText}>Começar</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}

          {/* AI Suggestion */}
          <LinearGradient
            colors={["rgba(88, 28, 135, 0.4)", "rgba(131, 24, 67, 0.4)"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.aiSuggestionCard}
          >
            <View style={styles.aiHeader}>
              <Ionicons name="sparkles" size={24} color="#c084fc" />
              <Text style={styles.aiTitle}>Sugestão da IA</Text>
            </View>
            <Text style={styles.aiDescription}>
              Baseado no seu histórico, recomendamos focar em exercícios de
              pernas esta semana para equilibrar seu desenvolvimento.
            </Text>
            <TouchableOpacity style={styles.aiButton} activeOpacity={0.8}>
              <Text style={styles.aiButtonText}>Ver Treino Recomendado</Text>
            </TouchableOpacity>
          </LinearGradient>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#020617",
  },
  backgroundGradient: {
    flex: 1,
  },
  searchContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  searchBar: {
    backgroundColor: "rgba(15, 23, 42, 0.8)",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#1e293b",
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    color: "#fff",
    fontSize: 16,
  },
  categoriesContainer: {
    marginBottom: 16,
  },
  categoriesScrollContent: {
    paddingHorizontal: 24,
    gap: 12,
  },
  categoryItem: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  categoryItemActive: {
    backgroundColor: "#10b981",
  },
  categoryItemInactive: {
    backgroundColor: "rgba(15, 23, 42, 0.8)",
    borderWidth: 1,
    borderColor: "#1e293b",
  },
  categoryText: {
    marginLeft: 8,
    fontWeight: "600",
  },
  categoryTextActive: {
    color: "#fff",
  },
  categoryTextInactive: {
    color: "#94a3b8",
  },
  workoutsScrollView: {
    flex: 1,
  },
  workoutsScrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  workoutCard: {
    backgroundColor: "rgba(15, 23, 42, 0.8)",
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#1e293b",
  },
  workoutCardHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  workoutInfoMain: {
    flex: 1,
  },
  workoutName: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },
  workoutBadgesRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  difficultyBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    marginRight: 8,
  },
  difficultyText: {
    fontSize: 12,
    fontWeight: "600",
  },
  setsBadge: {
    backgroundColor: "#1e293b",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  setsText: {
    color: "#94a3b8",
    fontSize: 12,
  },
  workoutIconBadge: {
    backgroundColor: "rgba(16, 185, 129, 0.1)",
    borderRadius: 20,
    padding: 12,
  },
  workoutCardFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#1e293b",
  },
  caloriesRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  caloriesText: {
    color: "#94a3b8",
    fontSize: 14,
    marginLeft: 6,
  },
  startButton: {
    backgroundColor: "#10b981",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 8,
  },
  startButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  aiSuggestionCard: {
    borderRadius: 20,
    padding: 24,
    marginTop: 8,
    borderWidth: 1,
    borderColor: "rgba(168, 85, 247, 0.3)",
  },
  aiHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  aiTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  aiDescription: {
    color: "#cbd5e1",
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 20,
  },
  aiButton: {
    backgroundColor: "#8b5cf6",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  aiButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
});
