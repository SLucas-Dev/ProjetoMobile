import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Switch,
  Alert,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function Profile() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  const currentPlan = {
    name: "Premium",
    price: "R$ 99,90",
    renewDate: "28/04/2026",
    features: ["Correção por câmera", "Plano alimentar completo", "Suporte prioritário"],
  };

  const stats = [
    { label: "Peso Atual", value: "78kg", icon: "barbell" },
    { label: "Altura", value: "175cm", icon: "resize" },
    { label: "IMC", value: "25.4", icon: "analytics" },
    { label: "Meta", value: "75kg", icon: "flag" },
  ];

  const menuSections = [
    {
      title: "Conta",
      items: [
        { icon: "person", label: "Dados Pessoais", color: "#10b981" },
        { icon: "lock-closed", label: "Segurança", color: "#06b6d4" },
        { icon: "card", label: "Pagamento", color: "#f59e0b" },
      ],
    },
    {
      title: "Preferências",
      items: [
        {
          icon: "notifications",
          label: "Notificações",
          color: "#8b5cf6",
          hasSwitch: true,
          value: notificationsEnabled,
          onChange: setNotificationsEnabled,
        },
        {
          icon: "moon",
          label: "Modo Escuro",
          color: "#64748b",
          hasSwitch: true,
          value: darkMode,
          onChange: setDarkMode,
        },
        { icon: "language", label: "Idioma", color: "#ec4899" },
      ],
    },
    {
      title: "Suporte",
      items: [
        { icon: "help-circle", label: "Central de Ajuda", color: "#10b981" },
        { icon: "chatbubble", label: "Falar com Suporte", color: "#06b6d4" },
        { icon: "star", label: "Avaliar App", color: "#f59e0b" },
      ],
    },
  ];

  const handleUpgrade = () => {
    Alert.alert("Upgrade de Plano", "Deseja fazer upgrade para o plano Elite?", [
      { text: "Cancelar", style: "cancel" },
      { text: "Continuar", onPress: () => console.log("Upgrade") },
    ]);
  };

  const handleLogout = () => {
    Alert.alert("Sair", "Tem certeza que deseja sair?", [
      { text: "Cancelar", style: "cancel" },
      { text: "Sair", style: "destructive", onPress: () => console.log("Logout") },
    ]);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <LinearGradient colors={["#0f172a", "#1e293b"]} style={styles.backgroundGradient}>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {/* Profile Header */}
          <View style={styles.profileHeader}>
            <LinearGradient
              colors={["#10b981", "#06b6d4"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.avatarContainer}
            >
              <Text style={styles.avatarText}>JD</Text>
            </LinearGradient>
            <Text style={styles.profileName}>João da Silva</Text>
            <Text style={styles.profileEmail}>joao@email.com</Text>
            <TouchableOpacity style={styles.editProfileButton} activeOpacity={0.7}>
              <Text style={styles.editProfileText}>Editar Perfil</Text>
            </TouchableOpacity>
          </View>

          {/* Stats Grid */}
          <View style={styles.statsContainer}>
            <View style={styles.statsGrid}>
              {stats.map((stat, index) => (
                <View key={index} style={styles.statCard}>
                  <Ionicons name={stat.icon as any} size={20} color="#10b981" />
                  <Text style={styles.statValue}>{stat.value}</Text>
                  <Text style={styles.statLabel}>{stat.label}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Current Plan */}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Assinatura Atual</Text>
            <LinearGradient
              colors={["#10b981", "#059669"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.planCard}
            >
              <View style={styles.planHeader}>
                <View>
                  <Text style={styles.planType}>Plano {currentPlan.name}</Text>
                  <Text style={styles.planPrice}>{currentPlan.price}</Text>
                  <Text style={styles.planPeriod}>por mês</Text>
                </View>
                <View style={styles.planIconBadge}>
                  <Ionicons name="trophy" size={32} color="#fff" />
                </View>
              </View>

              <View style={styles.planFeaturesList}>
                {currentPlan.features.map((feature, i) => (
                  <View key={i} style={styles.featureRow}>
                    <Ionicons name="checkmark-circle" size={18} color="#fff" />
                    <Text style={styles.featureText}>{feature}</Text>
                  </View>
                ))}
              </View>

              <View style={styles.planActions}>
                <TouchableOpacity
                  onPress={handleUpgrade}
                  style={styles.upgradeButton}
                  activeOpacity={0.8}
                >
                  <Text style={styles.upgradeButtonText}>Fazer Upgrade</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.manageButton} activeOpacity={0.8}>
                  <Text style={styles.manageButtonText}>Gerenciar</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.renewInfo}>Renovação em {currentPlan.renewDate}</Text>
            </LinearGradient>
          </View>

          {/* Menu Sections */}
          <View style={styles.menuContainer}>
            {menuSections.map((section, sIndex) => (
              <View key={sIndex} style={styles.menuSection}>
                <Text style={styles.menuSectionTitle}>{section.title.toUpperCase()}</Text>
                <View style={styles.menuList}>
                  {section.items.map((item, iIndex) => (
                    <TouchableOpacity
                      key={iIndex}
                      style={[
                        styles.menuItem,
                        iIndex !== section.items.length - 1 && styles.menuItemBorder,
                      ]}
                      activeOpacity={0.7}
                    >
                      <View style={styles.menuItemLeft}>
                        <View
                          style={[styles.menuIconBadge, { backgroundColor: `${item.color}33` }]}
                        >
                          <Ionicons name={item.icon as any} size={20} color={item.color} />
                        </View>
                        <Text style={styles.menuItemLabel}>{item.label}</Text>
                      </View>
                      {item.hasSwitch ? (
                        <Switch
                          value={item.value}
                          onValueChange={item.onChange}
                          trackColor={{ false: "#334155", true: "#10b981" }}
                          thumbColor="#fff"
                        />
                      ) : (
                        <Ionicons name="chevron-forward" size={20} color="#64748b" />
                      )}
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            ))}
          </View>

          {/* Logout Button */}
          <View style={styles.logoutContainer}>
            <TouchableOpacity
              onPress={handleLogout}
              style={styles.logoutButton}
              activeOpacity={0.8}
            >
              <View style={styles.logoutContent}>
                <Ionicons name="log-out" size={20} color="#ef4444" />
                <Text style={styles.logoutText}>Sair da Conta</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Version */}
          <View style={styles.versionContainer}>
            <Text style={styles.versionText}>AI Trainer v1.0.0</Text>
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
  profileHeader: {
    paddingHorizontal: 24,
    paddingVertical: 32,
    alignItems: "center",
  },
  avatarContainer: {
    width: 96,
    height: 96,
    borderRadius: 48,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  avatarText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  profileName: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 4,
  },
  profileEmail: {
    color: "#94a3b8",
    fontSize: 16,
    marginBottom: 16,
  },
  editProfileButton: {
    backgroundColor: "#1e293b",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#334155",
  },
  editProfileText: {
    color: "#fff",
    fontWeight: "600",
  },
  statsContainer: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  statCard: {
    width: "48%",
    backgroundColor: "rgba(15, 23, 42, 0.8)",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#334155",
    marginBottom: 12,
  },
  statValue: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 8,
    marginBottom: 4,
  },
  statLabel: {
    color: "#94a3b8",
    fontSize: 14,
  },
  sectionContainer: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  planCard: {
    borderRadius: 20,
    padding: 24,
  },
  planHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  planType: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: 14,
    marginBottom: 4,
  },
  planPrice: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },
  planPeriod: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: 14,
  },
  planIconBadge: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 30,
    padding: 16,
  },
  planFeaturesList: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  featureRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  featureText: {
    color: "#fff",
    marginLeft: 10,
    fontSize: 14,
  },
  planActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  upgradeButton: {
    flex: 0.48,
    backgroundColor: "#fff",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  upgradeButtonText: {
    color: "#059669",
    fontWeight: "bold",
    fontSize: 15,
  },
  manageButton: {
    flex: 0.48,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  manageButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
  renewInfo: {
    color: "rgba(255, 255, 255, 0.7)",
    textAlign: "center",
    fontSize: 13,
    marginTop: 16,
  },
  menuContainer: {
    paddingHorizontal: 24,
    paddingBottom: 12,
  },
  menuSection: {
    marginBottom: 24,
  },
  menuSectionTitle: {
    color: "#64748b",
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 12,
    marginLeft: 4,
  },
  menuList: {
    backgroundColor: "rgba(15, 23, 42, 0.8)",
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#334155",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  menuItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: "#334155",
  },
  menuItemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  menuIconBadge: {
    borderRadius: 12,
    padding: 8,
    marginRight: 12,
  },
  menuItemLabel: {
    color: "#fff",
    fontSize: 16,
    flex: 1,
  },
  logoutContainer: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  logoutButton: {
    backgroundColor: "rgba(239, 68, 68, 0.1)",
    borderWidth: 1,
    borderColor: "rgba(239, 68, 68, 0.2)",
    paddingVertical: 18,
    borderRadius: 16,
  },
  logoutContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logoutText: {
    color: "#ef4444",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 10,
  },
  versionContainer: {
    alignItems: "center",
    paddingBottom: 40,
  },
  versionText: {
    color: "#475569",
    fontSize: 14,
  },
});
