import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function FormCheck() {
  const [facing, setFacing] = useState<CameraType>("front");
  const [permission, requestPermission] = useCameraPermissions();
  const [isRecording, setIsRecording] = useState(false);
  const [showResults, setShowResults] = useState(false);

  if (!permission) {
    return (
      <View style={styles.centered}>
        <Text style={styles.loadingText}>Carregando...</Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <SafeAreaView style={styles.permissionContainer}>
        <Ionicons name="camera-outline" size={80} color="#64748b" />
        <Text style={styles.permissionTitle}>Permissão de Câmera</Text>
        <Text style={styles.permissionSubtitle}>
          Precisamos de acesso à câmera para analisar sua forma de execução
        </Text>
        <TouchableOpacity
          onPress={requestPermission}
          style={styles.permissionButton}
          activeOpacity={0.8}
        >
          <Text style={styles.permissionButtonText}>Permitir Acesso</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  function handleStartRecording() {
    setIsRecording(true);
    // Simular análise após 3 segundos
    setTimeout(() => {
      setIsRecording(false);
      setShowResults(true);
    }, 3000);
  }

  function handleStopRecording() {
    setIsRecording(false);
    Alert.alert("Análise Cancelada", "A análise de forma foi interrompida.");
  }

  if (showResults) {
    return (
      <SafeAreaView style={styles.resultsContainer}>
        <StatusBar barStyle="light-content" />
        <LinearGradient colors={["#0f172a", "#1e293b"]} style={styles.resultsGradient}>
          <TouchableOpacity
            onPress={() => setShowResults(false)}
            style={styles.backButton}
            activeOpacity={0.7}
          >
            <Ionicons name="arrow-back" size={28} color="#fff" />
          </TouchableOpacity>

          <Text style={styles.resultsTitle}>Análise Completa</Text>
          <Text style={styles.resultsSubtitle}>Sua execução do Supino Reto</Text>

          {/* Score Card */}
          <LinearGradient
            colors={["#10b981", "#059669"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.scoreCard}
          >
            <Text style={styles.scoreLabel}>Pontuação Geral</Text>
            <Text style={styles.scoreValue}>8.5</Text>
            <Text style={styles.scoreStatus}>Muito Boa!</Text>
          </LinearGradient>

          {/* Detailed Analysis */}
          <View style={styles.analysisCard}>
            <View style={styles.analysisRow}>
              <View style={[styles.iconBadge, { backgroundColor: "rgba(16, 185, 129, 0.2)" }]}>
                <Ionicons name="checkmark-circle" size={24} color="#10b981" />
              </View>
              <View style={styles.analysisTextContent}>
                <Text style={styles.analysisItemTitle}>Posição das Costas</Text>
                <Text style={styles.analysisItemDesc}>Excelente alinhamento</Text>
              </View>
            </View>

            <View style={styles.analysisRow}>
              <View style={[styles.iconBadge, { backgroundColor: "rgba(16, 185, 129, 0.2)" }]}>
                <Ionicons name="checkmark-circle" size={24} color="#10b981" />
              </View>
              <View style={styles.analysisTextContent}>
                <Text style={styles.analysisItemTitle}>Amplitude do Movimento</Text>
                <Text style={styles.analysisItemDesc}>Completa e controlada</Text>
              </View>
            </View>

            <View style={[styles.analysisRow, { marginBottom: 0 }]}>
              <View style={[styles.iconBadge, { backgroundColor: "rgba(245, 158, 11, 0.2)" }]}>
                <Ionicons name="warning" size={24} color="#f59e0b" />
              </View>
              <View style={styles.analysisTextContent}>
                <Text style={styles.analysisItemTitle}>Velocidade</Text>
                <Text style={styles.analysisItemDesc}>Tente descer mais devagar</Text>
              </View>
            </View>
          </View>

          {/* Recommendations */}
          <LinearGradient
            colors={["rgba(139, 92, 246, 0.2)", "rgba(59, 130, 246, 0.2)"]}
            style={styles.recommendationCard}
          >
            <View style={styles.recommendationHeader}>
              <Ionicons name="bulb" size={24} color="#a78bfa" />
              <Text style={styles.recommendationTitle}>Recomendações</Text>
            </View>
            <Text style={styles.recommendationText}>• Mantenha a fase excêntrica em 2-3 segundos</Text>
            <Text style={styles.recommendationText}>• Continue com o excelente controle da barra</Text>
          </LinearGradient>

          <TouchableOpacity
            onPress={() => setShowResults(false)}
            style={styles.newAnalysisButton}
            activeOpacity={0.8}
          >
            <Text style={styles.newAnalysisButtonText}>Nova Análise</Text>
          </TouchableOpacity>
        </LinearGradient>
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.cameraRoot}>
      <StatusBar hidden />
      <CameraView style={styles.camera} facing={facing}>
        {/* Top Overlay */}
        <LinearGradient
          colors={["rgba(0,0,0,0.8)", "transparent"]}
          style={styles.cameraTopOverlay}
        >
          <Text style={styles.cameraTitle}>
            {isRecording ? "Analisando Forma..." : "Posicione-se na Câmera"}
          </Text>
          <Text style={styles.cameraSubtitle}>
            {isRecording
              ? "Executando análise em tempo real"
              : "Fique visível do pescoço aos joelhos"}
          </Text>
        </LinearGradient>

        {/* Guide Overlay */}
        <View style={styles.cameraGuideContainer}>
          {!isRecording ? (
            <View style={styles.guideFrame} />
          ) : (
            <View style={styles.activeGuideFrame}>
              <Ionicons name="scan" size={60} color="#10b981" />
            </View>
          )}
        </View>

        {/* Bottom Controls */}
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.8)"]}
          style={styles.cameraBottomOverlay}
        >
          <View style={styles.controlsRow}>
            <TouchableOpacity
              onPress={toggleCameraFacing}
              style={styles.iconButton}
              disabled={isRecording}
              activeOpacity={0.7}
            >
              <Ionicons name="camera-reverse" size={28} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={isRecording ? handleStopRecording : handleStartRecording}
              style={[
                styles.recordButton,
                { backgroundColor: isRecording ? "#ef4444" : "#10b981" },
              ]}
              activeOpacity={0.8}
            >
              <Ionicons name={isRecording ? "stop" : "play"} size={36} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
              <Ionicons name="settings" size={28} color="#fff" />
            </TouchableOpacity>
          </View>

          <Text style={styles.controlHint}>
            {isRecording
              ? "Toque no botão vermelho para parar"
              : "Toque no botão verde para iniciar"}
          </Text>
        </LinearGradient>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    backgroundColor: "#020617",
    alignItems: "center",
    justifyContent: "center",
  },
  loadingText: {
    color: "#fff",
  },
  permissionContainer: {
    flex: 1,
    backgroundColor: "#020617",
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  permissionTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 24,
    marginBottom: 12,
    textAlign: "center",
  },
  permissionSubtitle: {
    color: "#94a3b8",
    textAlign: "center",
    marginBottom: 32,
    fontSize: 16,
  },
  permissionButton: {
    backgroundColor: "#10b981",
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 12,
  },
  permissionButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  resultsContainer: {
    flex: 1,
    backgroundColor: "#020617",
  },
  resultsGradient: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  backButton: {
    marginBottom: 24,
    width: 40,
  },
  resultsTitle: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 8,
  },
  resultsSubtitle: {
    color: "#94a3b8",
    fontSize: 16,
    marginBottom: 32,
  },
  scoreCard: {
    borderRadius: 20,
    padding: 32,
    alignItems: "center",
    marginBottom: 24,
  },
  scoreLabel: {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: 16,
    marginBottom: 8,
  },
  scoreValue: {
    color: "#fff",
    fontSize: 64,
    fontWeight: "bold",
  },
  scoreStatus: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
  },
  analysisCard: {
    backgroundColor: "rgba(15, 23, 42, 0.8)",
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#1e293b",
  },
  analysisRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  iconBadge: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  analysisTextContent: {
    flex: 1,
  },
  analysisItemTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
  },
  analysisItemDesc: {
    color: "#94a3b8",
    fontSize: 14,
  },
  recommendationCard: {
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "rgba(139, 92, 246, 0.3)",
  },
  recommendationHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  recommendationTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  recommendationText: {
    color: "#cbd5e1",
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 8,
  },
  newAnalysisButton: {
    backgroundColor: "#10b981",
    paddingVertical: 18,
    borderRadius: 16,
    marginTop: 24,
    alignItems: "center",
  },
  newAnalysisButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  cameraRoot: {
    flex: 1,
    backgroundColor: "#000",
  },
  camera: {
    flex: 1,
  },
  cameraTopOverlay: {
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },
  cameraTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  cameraSubtitle: {
    color: "#cbd5e1",
    textAlign: "center",
    marginTop: 8,
    fontSize: 16,
  },
  cameraGuideContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  guideFrame: {
    borderWidth: 4,
    borderColor: "rgba(16, 185, 129, 0.5)",
    borderRadius: 30,
    width: 280,
    height: 400,
  },
  activeGuideFrame: {
    backgroundColor: "rgba(16, 185, 129, 0.15)",
    borderWidth: 4,
    borderColor: "#10b981",
    borderRadius: 30,
    width: 280,
    height: 400,
    alignItems: "center",
    justifyContent: "center",
  },
  cameraBottomOverlay: {
    paddingHorizontal: 24,
    paddingBottom: 40,
    paddingTop: 40,
  },
  controlsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  iconButton: {
    backgroundColor: "rgba(30, 41, 59, 0.8)",
    borderRadius: 30,
    padding: 16,
  },
  recordButton: {
    borderRadius: 40,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  controlHint: {
    color: "#94a3b8",
    textAlign: "center",
    marginTop: 24,
    fontSize: 14,
  },
});