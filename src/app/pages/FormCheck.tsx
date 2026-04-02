import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";

export default function FormCheck() {
  const [permission, requestPermission] = useCameraPermissions();
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [hasAnalysis, setHasAnalysis] = useState(false);

  if (!permission) return <Text>Carregando...</Text>;

  if (!permission.granted) {
    return (
      <View style={styles.center}>
        <Text style={{ color: "#fff" }}>Permissão da câmera necessária</Text>
        <TouchableOpacity onPress={requestPermission} style={styles.button}>
          <Text style={styles.buttonText}>Permitir</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* HEADER */}
      <Text style={styles.title}>Correção de Forma</Text>
      <Text style={styles.subtitle}>
        IA analisa seus movimentos
      </Text>

      {/* CAMERA */}
      <View style={styles.card}>
        {isCameraOpen ? (
          <CameraView style={styles.camera} />
        ) : (
          <View style={styles.cameraPlaceholder}>
            <Ionicons name="camera" size={50} color="#10b981" />
            <Text style={{ color: "#ccc", marginTop: 10 }}>
              Inicie a câmera para análise
            </Text>
          </View>
        )}

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => setIsCameraOpen(!isCameraOpen)}
          >
            <Text style={styles.buttonText}>
              {isCameraOpen ? "Parar" : "Abrir Câmera"}
            </Text>
          </TouchableOpacity>

          {isCameraOpen && (
            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={() => setHasAnalysis(true)}
            >
              <Text style={styles.buttonText}>Analisar</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* RESULTADO */}
      {hasAnalysis && (
        <View style={styles.card}>
          <Text style={styles.resultTitle}>Resultado</Text>

          <Text style={styles.score}>85%</Text>

          <View style={styles.resultItem}>
            <Text style={styles.good}>✔ Costas corretas</Text>
          </View>

          <View style={styles.resultItem}>
            <Text style={styles.warn}>
              ⚠ Joelhos avançando muito
            </Text>
          </View>

          <View style={styles.resultItem}>
            <Text style={styles.good}>
              ✔ Boa amplitude
            </Text>
          </View>

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => setHasAnalysis(false)}
          >
            <Text style={styles.buttonText}>Nova análise</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
    padding: 16,
  },
  center: {
    flex: 1,
    backgroundColor: "#020617",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#94a3b8",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#0f172a",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  camera: {
    width: "100%",
    height: 250,
    borderRadius: 10,
  },
  cameraPlaceholder: {
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    gap: 10,
    marginTop: 12,
  },
  button: {
    backgroundColor: "#10b981",
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  primaryButton: {
    flex: 1,
    backgroundColor: "#10b981",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: "#2563eb",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  resultTitle: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 10,
  },
  score: {
    color: "#10b981",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
  },
  resultItem: {
    marginBottom: 8,
  },
  good: {
    color: "#10b981",
  },
  warn: {
    color: "#f59e0b",
  },
});