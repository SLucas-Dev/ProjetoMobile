import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from "react-native";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function Landing() {
  const styles = StyleSheet.create({
    scrollView: {
      flex: 1,
      backgroundColor: "#0f172a",
    },
    heroSection: {
      paddingTop: 80,
      paddingBottom: 64,
      paddingHorizontal: 24,
    },
    itemsCenter: {
      alignItems: "center",
      marginBottom: 32,
    },
    heroTitle: {
      color: "#ffffff",
      fontSize: 48,
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: 16,
    },
    heroSubtitle: {
      color: "#cbd5e1",
      fontSize: 20,
      textAlign: "center",
      marginBottom: 8,
    },
    heroDescription: {
      color: "#94a3b8",
      fontSize: 16,
      textAlign: "center",
      paddingHorizontal: 16,
    },
    featuresContainer: {
      paddingHorizontal: 24,
      paddingBottom: 48,
    },
    featureCard: {
      backgroundColor: "rgba(15, 23, 42, 0.5)",
      borderRadius: 16,
      padding: 24,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: "#1e293b",
    },
    featureRow: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 12,
    },
    featureTitle: {
      color: "#ffffff",
      fontSize: 18,
      fontWeight: "600",
      marginLeft: 12,
    },
    featureDescription: {
      color: "#94a3b8",
    },
    plansContainer: {
      paddingHorizontal: 24,
      paddingBottom: 64,
    },
    plansTitle: {
      color: "#ffffff",
      fontSize: 32,
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: 32,
    },
    planCard: {
      backgroundColor: "#1e293b",
      borderRadius: 16,
      padding: 24,
      marginBottom: 16,
      borderWidth: 2,
      borderColor: "#1e293b",
    },
    planCardPopular: {
      borderColor: "#10b981",
    },
    popularBadge: {
      position: "absolute",
      top: -12,
      alignSelf: "center",
      backgroundColor: "#10b981",
      paddingHorizontal: 16,
      paddingVertical: 4,
      borderRadius: 20,
    },
    popularBadgeText: {
      color: "#ffffff",
      fontSize: 12,
      fontWeight: "bold",
    },
    planName: {
      color: "#ffffff",
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 8,
    },
    planPrice: {
      color: "#10b981",
      fontSize: 32,
      fontWeight: "bold",
      marginBottom: 24,
    },
    planPriceUnit: {
      color: "#94a3b8",
      fontSize: 16,
      fontWeight: "normal",
    },
    featureItem: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 12,
    },
    featureItemText: {
      color: "#cbd5e1",
      marginLeft: 8,
    },
    planButton: {
      marginTop: 16,
      paddingVertical: 16,
      borderRadius: 12,
    },
    planButtonText: {
      color: "#ffffff",
      textAlign: "center",
      fontWeight: "600",
      fontSize: 18,
    },
    ctaContainer: {
      paddingHorizontal: 24,
      paddingBottom: 80,
    },
    ctaButton: {
      backgroundColor: "#10b981",
      paddingVertical: 20,
      borderRadius: 12,
    },
    ctaButtonText: {
      color: "#ffffff",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 18,
    },
  });

  const plans = [
    {
      name: "Básico",
      price: "R$ 49,90",
      features: [
        "Treinos personalizados",
        "Dashboard com estatísticas",
        "Plano alimentar básico",
        "Suporte por email",
      ],
      color: "#64748b",
    },
    {
      name: "Premium",
      price: "R$ 99,90",
      features: [
        "Tudo do Básico",
        "Correção de forma por câmera",
        "Plano alimentar completo",
        "Tracking de macros",
        "Suporte prioritário",
      ],
      color: "#10b981",
      popular: true,
    },
    {
      name: "Elite",
      price: "R$ 199,90",
      features: [
        "Tudo do Premium",
        "Personal trainer dedicado",
        "Consultoria nutricional",
        "Análise avançada de progresso",
        "Suporte 24/7",
      ],
      color: "#8b5cf6",
    },
  ];

  return (
    <>
      <StatusBar barStyle="light-content" />
      <ScrollView style={styles.scrollView}>
        <LinearGradient
          colors={["#0f172a", "#1e293b", "#0f172a"]}
          style={{ flex: 1 }}
        >
          {/* Hero Section */}
          <View style={styles.heroSection}>
            <View style={styles.itemsCenter}>
              <Ionicons name="fitness" size={64} color="#10b981" />
            </View>
            
            <Text style={styles.heroTitle}>
              AI Trainer
            </Text>
            
            <Text style={styles.heroSubtitle}>
              Seu Personal Trainer Digital
            </Text>
            
            <Text style={styles.heroDescription}>
              Treinos personalizados, correção de forma por IA e planos alimentares
            </Text>
          </View>

          {/* Features */}
          <View style={styles.featuresContainer}>
            <View style={styles.featureCard}>
              <View style={styles.featureRow}>
                <Ionicons name="barbell" size={24} color="#10b981" />
                <Text style={styles.featureTitle}>
                  Treinos com IA
                </Text>
              </View>
              <Text style={styles.featureDescription}>
                Exercícios personalizados baseados em seus objetivos e nível
              </Text>
            </View>

            <View style={styles.featureCard}>
              <View style={styles.featureRow}>
                <Ionicons name="camera" size={24} color="#10b981" />
                <Text style={styles.featureTitle}>
                  Correção de Postura
                </Text>
              </View>
              <Text style={styles.featureDescription}>
                Análise em tempo real para garantir execução perfeita
              </Text>
            </View>

            <View style={styles.featureCard}>
              <View style={styles.featureRow}>
                <Ionicons name="nutrition" size={24} color="#10b981" />
                <Text style={styles.featureTitle}>
                  Plano Nutricional
                </Text>
              </View>
              <Text style={styles.featureDescription}>
                Dieta personalizada com tracking completo de macros
              </Text>
            </View>
          </View>

          {/* Plans */}
          <View style={styles.plansContainer}>
            <Text style={styles.plansTitle}>
              Escolha seu Plano
            </Text>

            {plans.map((plan, index) => (
              <View
                key={index}
                style={[
                  styles.planCard,
                  plan.popular && styles.planCardPopular,
                ]}
              >
                {plan.popular && (
                  <View style={styles.popularBadge}>
                    <Text style={styles.popularBadgeText}>
                      MAIS POPULAR
                    </Text>
                  </View>
                )}

                <Text style={styles.planName}>
                  {plan.name}
                </Text>
                
                <Text style={styles.planPrice}>
                  {plan.price}
                  <Text style={styles.planPriceUnit}>/mês</Text>
                </Text>

                {plan.features.map((feature, i) => (
                  <View key={i} style={styles.featureItem}>
                    <Ionicons name="checkmark-circle" size={20} color="#10b981" />
                    <Text style={styles.featureItemText}>{feature}</Text>
                  </View>
                ))}

                <TouchableOpacity
                  style={[
                    styles.planButton,
                    { backgroundColor: plan.popular ? "#10b981" : "#334155" },
                  ]}
                >
                  <Text style={styles.planButtonText}>
                    Começar Agora
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>

          {/* CTA */}
          <View style={styles.ctaContainer}>
            <Link href="/(tabs)/dashboard" asChild>
              <TouchableOpacity style={styles.ctaButton}>
                <Text style={styles.ctaButtonText}>
                  Acessar Dashboard
                </Text>
              </TouchableOpacity>
            </Link>
          </View>
        </LinearGradient>
      </ScrollView>
    </>
  );
}
