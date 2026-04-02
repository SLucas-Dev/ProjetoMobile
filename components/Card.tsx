import React from "react";
import { 
  View, 
  Text, 
  TouchableOpacity, 
  ViewProps, 
  StyleSheet, 
  StyleProp, 
  ViewStyle,
  TouchableOpacityProps
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

// 1. Criamos uma interface apenas para as nossas propriedades customizadas
interface CustomCardProps {
  title: string;
  description?: string;
  icon?: keyof typeof Ionicons.glyphMap;
  iconColor?: string;
  onPress?: () => void;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

// 2. A CardProps agora aceita propriedades de View OU de TouchableOpacity
type CardProps = CustomCardProps & ViewProps & TouchableOpacityProps;

export function Card({
  title,
  description,
  icon,
  iconColor = "#10b981",
  onPress,
  children,
  style,
  ...rest
}: CardProps) {
  
  // Conteúdo interno isolado
  const renderContent = () => (
    <>
      {icon && (
        <View style={styles.iconWrapper}>
          <View style={[styles.iconCircle, { backgroundColor: `${iconColor}20` }]}>
            <Ionicons name={icon} size={24} color={iconColor} />
          </View>
        </View>
      )}
      
      <Text style={styles.title}>{title}</Text>
      
      {description && (
        <Text style={styles.description}>{description}</Text>
      )}
      
      {children}
    </>
  );

  // 3. Se houver onPress, tratamos explicitamente como TouchableOpacity
  if (onPress) {
    return (
      <TouchableOpacity
        {...(rest as TouchableOpacityProps)} // Cast para garantir que aceite props de toque
        onPress={onPress}
        activeOpacity={0.7}
        style={[styles.container, style]}
      >
        {renderContent()}
      </TouchableOpacity>
    );
  }

  // 4. Caso contrário, tratamos estritamente como View
  return (
    <View 
      {...(rest as ViewProps)} // Cast para garantir que aceite props de View
      style={[styles.container, style]}
    >
      {renderContent()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(15, 23, 42, 0.8)",
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: "#1e293b",
    marginBottom: 16,
  },
  iconWrapper: {
    marginBottom: 16,
  },
  iconCircle: {
    borderRadius: 999,
    padding: 12,
    alignSelf: "flex-start",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    color: "#94a3b8",
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 16,
  },
});