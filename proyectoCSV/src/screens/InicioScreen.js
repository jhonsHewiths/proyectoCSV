import React, {useState} from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";

export default function menuTab({}){

    const [tabPress] = useState("inicioScreen");
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <View style={styles.contenido}>

                <Text style={[styles.titulo, { color: "#007AFF", fontSize: 70}]}>
                    Bienvenido
                </Text>

                <Ionicons
                    name="happy-outline"
                    size={250}
                    color= "#007AFF"
                />

            </View>

            <View style={styles.tabs}>

                <Pressable
                    style={styles.tab}
                    onPress={() => navigation.navigate('InicioScreen')}
                >

                    <Ionicons
                        name={tabPress === "InicioScreen" ? "home" : "home-outline"}
                        size={25}
                        color={tabPress === "InicioScreen" ? "#007AFF" : "#777"}
                    />

                    <Text>Inicio</Text>

                </Pressable>

                <Pressable
                    style={styles.tab}
                    onPress={() => navigation.navigate('ClasesScreen')}
                >

                    <Ionicons
                        name={tabPress === "ClasesScreen" ? "book" : "book-outline"}
                        size={25}
                        color={tabPress === "ClasesScreen" ? "#007AFF" : "#777"}
                    />

                    <Text>Clases</Text>

                </Pressable>

                <Pressable
                    style={styles.tab}
                    onPress={() => navigation.navigate('PerfilScreen')}
                >

                    <Ionicons
                        name={tabPress === "PerfilScreen" ? "person" : "person-outline"}
                        size={25}
                        color={tabPress === "PerfilScreen" ? "#007AFF" : "#777"}
                    />

                    <Text>Mi Perfil</Text>

                </Pressable>

                <Pressable
                    style={styles.tab}
                    onPress={() => navigation.navigate('ReservasScreen')}
                >

                    <Ionicons
                        name={tabPress === "ReservasScreen" ? "calendar" : "calendar-outline"}
                        size={25}
                        color={tabPress === "ReservasScreen" ? "#007AFF" : "#777"}
                    />

                    <Text>Mis Reservas</Text>

                </Pressable>

            </View>

        </View>
    )


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

  tabs: {
    height: 70,
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    justifyContent: "space-around",
    alignItems: "center",
  },

  tab: {
    alignItems: "center",
  },
});