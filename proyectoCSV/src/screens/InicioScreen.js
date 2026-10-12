import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function InicioScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.contenido}>
                <Text style={[styles.titulo, { color: "#007AFF", fontSize: 70 }]}>
                    Bienvenido
                </Text>
                <Ionicons
                    name="happy-outline"
                    size={250}
                    color="#007AFF"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contenido: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    fontSize: 25,
    fontWeight: "bold",
  },
});