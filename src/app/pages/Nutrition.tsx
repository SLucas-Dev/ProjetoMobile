import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";
import { Flame, Droplet, Apple } from "lucide-react-native";

export default function Nutrition() {
  const [water, setWater] = useState(6);

  const dailyGoals = {
    calories: { current: 1847, target: 2200 },
    protein: { current: 145, target: 180 },
    carbs: { current: 210, target: 250 },
    fat: { current: 52, target: 70 },
  };

  const meals = [
    { name: "Café da Manhã", time: "07:00", calories: 520, done: true },
    { name: "Almoço", time: "13:00", calories: 680, done: true },
    { name: "Jantar", time: "19:30", calories: 580, done: false },
  ];

  const progress = (current: number, target: number) =>
    Math.min((current / target) * 100, 100);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Plano Alimentar</Text>
      <Text style={styles.subtitle}>
        Nutrição personalizada para seus objetivos
      </Text>

      {/* CARDS DE METAS */}
      <View style={styles.grid}>
        <Card title="Calorias" value={`${dailyGoals.calories.current}/${dailyGoals.calories.target}`}>
          <Flame size={20} color="#f97316" />
          <Progress value={progress(dailyGoals.calories.current, dailyGoals.calories.target)} />
        </Card>

        <Card title="Proteína" value={`${dailyGoals.protein.current}/${dailyGoals.protein.target}g`}>
          <Apple size={20} color="#22c55e" />
          <Progress value={progress(dailyGoals.protein.current, dailyGoals.protein.target)} />
        </Card>

        <Card title="Carbs" value={`${dailyGoals.carbs.current}/${dailyGoals.carbs.target}g`}>
          <Apple size={20} color="#eab308" />
          <Progress value={progress(dailyGoals.carbs.current, dailyGoals.carbs.target)} />
        </Card>

        <Card title="Gordura" value={`${dailyGoals.fat.current}/${dailyGoals.fat.target}g`}>
          <Droplet size={20} color="#3b82f6" />
          <Progress value={progress(dailyGoals.fat.current, dailyGoals.fat.target)} />
        </Card>
      </View>

      {/* ÁGUA */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Água</Text>
        <View style={styles.waterRow}>
          {[...Array(8)].map((_, i) => (
            <TouchableOpacity
              key={i}
              style={[
                styles.waterDot,
                i < water && { backgroundColor: "#06b6d4" },
              ]}
              onPress={() => setWater(i + 1)}
            />
          ))}
        </View>
      </View>

      {/* REFEIÇÕES */}
      <Text style={styles.section}>Refeições</Text>

      {meals.map((meal, index) => (
        <View key={index} style={styles.card}>
          <View style={styles.row}>
            <View>
              <Text style={styles.mealTitle}>{meal.name}</Text>
              <Text style={styles.mealTime}>{meal.time}</Text>
            </View>

            <View>
              <Text style={styles.calories}>{meal.calories} kcal</Text>
              <Text style={{ color: meal.done ? "#22c55e" : "#facc15" }}>
                {meal.done ? "✔ Concluído" : "Pendente"}
              </Text>
            </View>
          </View>

          {!meal.done && (
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Marcar como feito</Text>
            </TouchableOpacity>
          )}
        </View>
      ))}
    </ScrollView>
  );
}

function Card({ title, value, children }: any) {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.cardTitle}>{title}</Text>
        {children?.[0]}
      </View>
      <Text style={styles.cardValue}>{value}</Text>
      {children?.[1]}
    </View>
  );
}

function Progress({ value }: { value: number }) {
  return (
    <View style={styles.progressBg}>
      <View style={[styles.progressFill, { width: `${value}%` }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
    padding: 16,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },

  subtitle: {
    color: "#94a3b8",
    marginBottom: 20,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },

  card: {
    backgroundColor: "#0f172a",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    flexGrow: 1,
  },

  cardTitle: {
    color: "#cbd5f5",
    fontSize: 14,
  },

  cardValue: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 6,
  },

  progressBg: {
    height: 6,
    backgroundColor: "#1e293b",
    borderRadius: 10,
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    backgroundColor: "#22c55e",
  },

  section: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  mealTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  mealTime: {
    color: "#94a3b8",
    fontSize: 12,
  },

  calories: {
    color: "#fff",
    fontWeight: "bold",
  },

  button: {
    marginTop: 10,
    backgroundColor: "#22c55e",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  waterRow: {
    flexDirection: "row",
    gap: 6,
    marginTop: 10,
  },

  waterDot: {
    flex: 1,
    height: 10,
    backgroundColor: "#1e293b",
    borderRadius: 5,
  },
});