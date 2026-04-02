import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Landing() {
  const router = useRouter();

  const features = [
    {
      title: "Treinos com IA",
      description: "Treinos personalizados baseados no seu nível",
    },
    {
      title: "Correção de Postura",
      description: "IA analisa sua execução em tempo real",
    },
    {
      title: "Plano Alimentar",
      description: "Nutrição personalizada para seus objetivos",
    },
    {
      title: "Acompanhamento",
      description: "Veja sua evolução com dados e estatísticas",
    },
  ];

  const plans = [
    {
      name: "Básico",
      price: "R$ 49,90",
      desc: "Perfeito para começar",
    },
    {
      name: "Premium",
      price: "R$ 99,90",
      desc: "Máxima performance",
    },
    {
      name: "Elite",
      price: "R$ 199,90",
      desc: "Para atletas sérios",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* HERO */}
      <View style={styles.hero}>
        <Text style={styles.badge}>🔥 Powered by AI</Text>

        <Text style={styles.title}>
          Seu Personal Trainer{"\n"}
          <Text style={styles.highlight}>com IA</Text>
        </Text>

        <Text style={styles.subtitle}>
          Treinos personalizados, correção de postura e planos alimentares.
        </Text>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => router.push("/dashboard")}
        >
          <Text style={styles.buttonText}>Começar Agora</Text>
        </TouchableOpacity>
      </View>

      {/* STATS */}
      <View style={styles.stats}>
        <View>
          <Text style={styles.statNumber}>50k+</Text>
          <Text style={styles.statLabel}>Usuários</Text>
        </View>
        <View>
          <Text style={styles.statNumber}>4.9</Text>
          <Text style={styles.statLabel}>Avaliação</Text>
        </View>
        <View>
          <Text style={styles.statNumber}>2M+</Text>
          <Text style={styles.statLabel}>Treinos</Text>
        </View>
      </View>

      {/* FEATURES */}
      <Text style={styles.sectionTitle}>Recursos</Text>
      {features.map((item, i) => (
        <View key={i} style={styles.card}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardDesc}>{item.description}</Text>
        </View>
      ))}

      {/* PLANS */}
      <Text style={styles.sectionTitle}>Planos</Text>
      {plans.map((plan, i) => (
        <View key={i} style={styles.card}>
          <Text style={styles.cardTitle}>{plan.name}</Text>
          <Text style={styles.price}>{plan.price}</Text>
          <Text style={styles.cardDesc}>{plan.desc}</Text>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => router.push("/dashboard")}
          >
            <Text style={styles.buttonText}>Escolher</Text>
          </TouchableOpacity>
        </View>
      ))}

      {/* CTA */}
      <View style={styles.cta}>
        <Text style={styles.ctaTitle}>
          Pronto para transformar seu corpo?
        </Text>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => router.push("/dashboard")}
        >
          <Text style={styles.buttonText}>Começar Grátis</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
    padding: 16,
  },
  hero: {
    marginBottom: 30,
  },
  badge: {
    color: "#10b981",
    marginBottom: 10,
  },
  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },
  highlight: {
    color: "#10b981",
  },
  subtitle: {
    color: "#94a3b8",
    marginVertical: 10,
  },
  primaryButton: {
    backgroundColor: "#10b981",
    padding: 14,
    borderRadius: 10,
    marginTop: 10,
  },
  secondaryButton: {
    backgroundColor: "#1e293b",
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 30,
  },
  statNumber: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  statLabel: {
    color: "#94a3b8",
    textAlign: "center",
  },
  sectionTitle: {
    color: "white",
    fontSize: 20,
    marginBottom: 10,
    marginTop: 20,
  },
  card: {
    backgroundColor: "#0f172a",
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
  },
  cardTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  cardDesc: {
    color: "#94a3b8",
    marginTop: 5,
  },
  price: {
    color: "#10b981",
    fontSize: 18,
    marginTop: 5,
  },
  cta: {
    marginTop: 30,
    padding: 20,
    backgroundColor: "#0f172a",
    borderRadius: 12,
    alignItems: "center",
  },
  ctaTitle: {
    color: "white",
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
  },
});