import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function Nutrition() {
  const [selectedMeal, setSelectedMeal] = useState<string | null>(null);

  const macros = {
    consumed: { calories: 1850, protein: 145, carbs: 180, fat: 55 },
    goal: { calories: 2400, protein: 180, carbs: 240, fat: 70 },
  };

  const meals = [
    {
      name: "Café da Manhã",
      time: "07:00",
      icon: "sunny",
      color: "#f59e0b",
      foods: [
        { name: "Ovos Mexidos (3 unidades)", cal: 240, protein: 18 },
        { name: "Aveia (60g)", cal: 220, protein: 8 },
        { name: "Banana", cal: 105, protein: 1 },
      ],
    },
    {
      name: "Almoço",
      time: "12:30",
      icon: "restaurant",
      color: "#10b981",
      foods: [
        { name: "Frango Grelhado (200g)", cal: 330, protein: 62 },
        { name: "Arroz Integral (100g)", cal: 350, protein: 8 },
        { name: "Brócolis (150g)", cal: 50, protein: 5 },
      ],
    },
    {
      name: "Lanche",
      time: "16:00",
      icon: "fast-food",
      color: "#06b6d4",
      foods: [
        { name: "Whey Protein (30g)", cal: 120, protein: 24 },
        { name: "Pasta de Amendoim (20g)", cal: 120, protein: 5 },
      ],
    },
    {
      name: "Jantar",
      time: "19:30",
      icon: "moon",
      color: "#8b5cf6",
      foods: [
        { name: "Salmão (180g)", cal: 315, protein: 39 },
        { name: "Batata Doce (150g)", cal: 130, protein: 2 },
        { name: "Salada Verde", cal: 30, protein: 2 },
      ],
    },
  ];

  const getMacroPercentage = (consumed: number, goal: number) => {
    return Math.min((consumed / goal) * 100, 100);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <LinearGradient colors={["#0f172a", "#1e293b"]} style={styles.backgroundGradient}>
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Header Summary */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Nutrição</Text>
            <Text style={styles.headerSubtitle}>Acompanhe suas macros diárias</Text>

            {/* Calories Card */}
            <View style={styles.caloriesCard}>
              <View style={styles.caloriesInfo}>
                <Text style={styles.caloriesLabel}>Calorias Consumidas</Text>
                <Text style={styles.caloriesValue}>{macros.consumed.calories}</Text>
                <Text style={styles.caloriesGoal}>de {macros.goal.calories} kcal</Text>
              </View>

              <View style={styles.progressBarBackground}>
                <View
                  style={[
                    styles.progressBarFill,
                    {
                      width: `${getMacroPercentage(
                        macros.consumed.calories,
                        macros.goal.calories
                      )}%`,
                      backgroundColor: "#10b981",
                    },
                  ]}
                />
              </View>
            </View>

            {/* Macros Grid */}
            <View style={styles.macrosGrid}>
              {/* Proteína */}
              <View style={styles.macroSmallCard}>
                <View style={styles.macroHeader}>
                  <Ionicons name="fitness" size={18} color="#10b981" />
                  <Text style={styles.macroLabel}>Proteína</Text>
                </View>
                <Text style={styles.macroValue}>{macros.consumed.protein}g</Text>
                <Text style={styles.macroGoal}>de {macros.goal.protein}g</Text>
                <View style={styles.miniProgressBarBackground}>
                  <View
                    style={[
                      styles.miniProgressBarFill,
                      {
                        width: `${getMacroPercentage(
                          macros.consumed.protein,
                          macros.goal.protein
                        )}%`,
                        backgroundColor: "#10b981",
                      },
                    ]}
                  />
                </View>
              </View>

              {/* Carboidratos */}
              <View style={styles.macroSmallCard}>
                <View style={styles.macroHeader}>
                  <Ionicons name="leaf" size={18} color="#06b6d4" />
                  <Text style={styles.macroLabel}>Carbos</Text>
                </View>
                <Text style={styles.macroValue}>{macros.consumed.carbs}g</Text>
                <Text style={styles.macroGoal}>de {macros.goal.carbs}g</Text>
                <View style={styles.miniProgressBarBackground}>
                  <View
                    style={[
                      styles.miniProgressBarFill,
                      {
                        width: `${getMacroPercentage(
                          macros.consumed.carbs,
                          macros.goal.carbs
                        )}%`,
                        backgroundColor: "#06b6d4",
                      },
                    ]}
                  />
                </View>
              </View>
            </View>

            {/* Gorduras */}
            <View style={styles.macroWideCard}>
              <View style={styles.macroWideHeader}>
                <View style={styles.macroHeader}>
                  <Ionicons name="water" size={18} color="#f59e0b" />
                  <Text style={styles.macroLabel}>Gorduras</Text>
                </View>
                <View style={styles.macroWideValues}>
                  <Text style={styles.macroValueSmall}>{macros.consumed.fat}g</Text>
                  <Text style={styles.macroGoalSmall}>/ {macros.goal.fat}g</Text>
                </View>
              </View>
              <View style={styles.miniProgressBarBackground}>
                <View
                  style={[
                    styles.miniProgressBarFill,
                    {
                      width: `${getMacroPercentage(
                        macros.consumed.fat,
                        macros.goal.fat
                      )}%`,
                      backgroundColor: "#f59e0b",
                    },
                  ]}
                />
              </View>
            </View>
          </View>

          {/* Meals Section */}
          <View style={styles.mealsSection}>
            <Text style={styles.sectionTitle}>Refeições de Hoje</Text>

            {meals.map((meal, index) => (
              <View key={index} style={styles.mealCardContainer}>
                <TouchableOpacity
                  onPress={() =>
                    setSelectedMeal(selectedMeal === meal.name ? null : meal.name)
                  }
                  style={styles.mealCard}
                  activeOpacity={0.7}
                >
                  <View style={styles.mealCardHeader}>
                    <View style={styles.mealIconAndInfo}>
                      <View
                        style={[
                          styles.mealIconContainer,
                          { backgroundColor: `${meal.color}20` },
                        ]}
                      >
                        <Ionicons
                          name={meal.icon as any}
                          size={24}
                          color={meal.color}
                        />
                      </View>
                      <View style={styles.mealInfo}>
                        <Text style={styles.mealName}>{meal.name}</Text>
                        <Text style={styles.mealMeta}>
                          {meal.time} • {meal.foods.length} itens
                        </Text>
                      </View>
                    </View>
                    <Ionicons
                      name={
                        selectedMeal === meal.name
                          ? "chevron-up"
                          : "chevron-down"
                      }
                      size={20}
                      color="#64748b"
                    />
                  </View>

                  {selectedMeal === meal.name && (
                    <View style={styles.mealDetails}>
                      {meal.foods.map((food, i) => (
                        <View key={i} style={styles.foodRow}>
                          <View style={styles.foodInfo}>
                            <Text style={styles.foodName}>{food.name}</Text>
                            <Text style={styles.foodMeta}>
                              {food.protein}g proteína
                            </Text>
                          </View>
                          <Text style={styles.foodCalories}>{food.cal} cal</Text>
                        </View>
                      ))}
                      
                      <TouchableOpacity 
                        style={styles.addItemButton}
                        activeOpacity={0.6}
                      >
                        <Text style={styles.addItemButtonText}>+ Adicionar Item</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </TouchableOpacity>
              </View>
            ))}
          </View>

          {/* Water Intake */}
          <View style={styles.waterSection}>
            <LinearGradient
              colors={["rgba(30, 58, 138, 0.4)", "rgba(8, 145, 178, 0.4)"]}
              style={styles.waterCard}
            >
              <View style={styles.waterHeader}>
                <View style={styles.waterTitleRow}>
                  <Ionicons name="water" size={24} color="#06b6d4" />
                  <Text style={styles.waterTitle}>Hidratação</Text>
                </View>
                <Text style={styles.waterValue}>2.1 / 3.0L</Text>
              </View>
              <View style={styles.waterGrid}>
                {[...Array(8)].map((_, i) => (
                  <View
                    key={i}
                    style={[
                      styles.waterBar,
                      { backgroundColor: i < 5 ? "#06b6d4" : "#334155" },
                    ]}
                  />
                ))}
              </View>
            </LinearGradient>
          </View>
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
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 12,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 8,
  },
  headerSubtitle: {
    color: "#94a3b8",
    fontSize: 16,
    marginBottom: 24,
  },
  caloriesCard: {
    backgroundColor: "rgba(15, 23, 42, 0.8)",
    borderRadius: 24,
    padding: 24,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "#1e293b",
    alignItems: "center",
  },
  caloriesInfo: {
    alignItems: "center",
    marginBottom: 20,
  },
  caloriesLabel: {
    color: "#94a3b8",
    fontSize: 16,
    marginBottom: 8,
  },
  caloriesValue: {
    color: "#fff",
    fontSize: 48,
    fontWeight: "bold",
  },
  caloriesGoal: {
    color: "#94a3b8",
    fontSize: 18,
  },
  progressBarBackground: {
    width: "100%",
    backgroundColor: "#1e293b",
    borderRadius: 10,
    height: 12,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    borderRadius: 10,
  },
  macrosGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  macroSmallCard: {
    flex: 0.48,
    backgroundColor: "rgba(15, 23, 42, 0.8)",
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: "#1e293b",
  },
  macroHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  macroLabel: {
    color: "#94a3b8",
    fontSize: 14,
    marginLeft: 8,
  },
  macroValue: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },
  macroGoal: {
    color: "#64748b",
    fontSize: 12,
    marginBottom: 12,
  },
  miniProgressBarBackground: {
    width: "100%",
    backgroundColor: "#1e293b",
    borderRadius: 6,
    height: 6,
    overflow: "hidden",
  },
  miniProgressBarFill: {
    height: "100%",
    borderRadius: 6,
  },
  macroWideCard: {
    backgroundColor: "rgba(15, 23, 42, 0.8)",
    borderRadius: 20,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "#1e293b",
  },
  macroWideHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  macroWideValues: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  macroValueSmall: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  macroGoalSmall: {
    color: "#64748b",
    fontSize: 14,
    marginLeft: 4,
  },
  mealsSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  mealCardContainer: {
    marginBottom: 16,
  },
  mealCard: {
    backgroundColor: "rgba(15, 23, 42, 0.8)",
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: "#1e293b",
  },
  mealCardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  mealIconAndInfo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  mealIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  mealInfo: {
    flex: 1,
  },
  mealName: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 2,
  },
  mealMeta: {
    color: "#94a3b8",
    fontSize: 14,
  },
  mealDetails: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#1e293b",
  },
  foodRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  foodInfo: {
    flex: 1,
  },
  foodName: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 2,
  },
  foodMeta: {
    color: "#64748b",
    fontSize: 13,
  },
  foodCalories: {
    color: "#cbd5e1",
    fontSize: 15,
    fontWeight: "500",
  },
  addItemButton: {
    backgroundColor: "rgba(16, 185, 129, 0.1)",
    borderWidth: 1,
    borderColor: "rgba(16, 185, 129, 0.2)",
    borderRadius: 12,
    paddingVertical: 12,
    marginTop: 12,
    alignItems: "center",
  },
  addItemButtonText: {
    color: "#10b981",
    fontWeight: "600",
    fontSize: 15,
  },
  waterSection: {
    paddingHorizontal: 24,
  },
  waterCard: {
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: "rgba(59, 130, 246, 0.2)",
  },
  waterHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  waterTitleRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  waterTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  waterValue: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  waterGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  waterBar: {
    flex: 1,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 2,
  },
});
