import React from "react";
import { 
  TouchableOpacity, 
  Text, 
  ActivityIndicator, 
  TouchableOpacityProps, 
  StyleSheet, 
  View, 
  StyleProp, 
  ViewStyle 
} from "react-native";
import { router } from "expo-router";

<TouchableOpacity onPress={() => router.push("/(tabs)/form-check")} />
import { Ionicons } from "@expo/vector-icons";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: "primary" | "secondary" | "outline" | "danger";
  size?: "sm" | "md" | "lg";
  icon?: keyof typeof Ionicons.glyphMap;
  iconPosition?: "left" | "right";
  loading?: boolean;
  fullWidth?: boolean;
  style?: StyleProp<ViewStyle>; // Para permitir estilos customizados extras
}

export function Button({
  title,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  loading = false,
  fullWidth = false,
  disabled,
  style,
  ...props
}: ButtonProps) {
  
  // Define a cor do ícone e do ActivityIndicator baseada na variante
  const iconColor = variant === "outline" ? "#10b981" : "#fff";
  
  // Define o tamanho do ícone
  const iconSize = size === "sm" ? 16 : size === "md" ? 18 : 20;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={disabled || loading}
      style={[
        styles.base,
        styles[variant],
        styles[size],
        fullWidth && styles.fullWidth,
        disabled && styles.disabled,
        style, // Estilo passado via props por último para ter prioridade
      ]}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color={iconColor} />
      ) : (
        <View style={styles.content}>
          {icon && iconPosition === "left" && (
            <Ionicons
              name={icon}
              size={iconSize}
              color={iconColor}
              style={{ marginRight: 8 }}
            />
          )}

          <Text style={[styles.textBase, styles[`text_${variant}`], styles[`text_${size}`]]}>
            {title}
          </Text>

          {icon && iconPosition === "right" && (
            <Ionicons
              name={icon}
              size={iconSize}
              color={iconColor}
              style={{ marginLeft: 8 }}
            />
          )}
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  fullWidth: {
    width: "100%",
  },
  disabled: {
    opacity: 0.5,
  },
  // Variantes de Fundo
  primary: {
    backgroundColor: "#10b981", // emerald-500
  },
  secondary: {
    backgroundColor: "#1e293b", // slate-800
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#10b981",
  },
  danger: {
    backgroundColor: "#ef4444", // red-500
  },
  // Tamanhos de Padding
  sm: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  md: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  lg: {
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  // Estilos de Texto
  textBase: {
    fontWeight: "600",
  },
  text_primary: { color: "#fff" },
  text_secondary: { color: "#fff" },
  text_danger: { color: "#fff" },
  text_outline: { color: "#10b981" },
  // Tamanhos de Texto
  text_sm: { fontSize: 14 },
  text_md: { fontSize: 16 },
  text_lg: { fontSize: 18 },
});