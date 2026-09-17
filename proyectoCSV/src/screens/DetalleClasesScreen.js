import React, {useState, useMemo} from "react";
import {View, Text, StyleSheet, ScrollView, Alert, Image, Pressable} from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import useResponsive from "../hooks/useResponsive";
import { colors, spacing, radius, typography } from "../theme/index";
import { formatearPrecio } from "../data/Clases";
import LabelLevel from "../components/LabelLevel";

export default function DetalleClase({route}){
    const insets = useSafeAreaInsets();
    const { clase } = route.params;
    const {paddingHorizontal, esTablet} = useResponsive();
    const [cupos, setCupos] = useState(Number(clase.cupos));

    return (
        <View style={styles.pantalla}>
          <ScrollView
                contentContainerStyle={{paddingBottom: 120}}
                showsVerticalScrollIndicator={false}
            >
            <Image 
              source={{uri: clase.imagen}}
              resizeMode="cover"
              style={[styles.portada, {height: esTablet ? 300: 200}]}
            />

            <View style={{  padding: spacing.lg  }}>
              <Text style={styles.datos}>
                Nivel: {clase.nivel}
              </Text>
              <Text style={typography.titulo}>
                {clase.titulo}
              </Text>
            </View>

            <View style={styles.datos}>
              <View style={styles.dato}>
                <Ionicons
                  name="star"
                  size={20}
                  color={colors.primario}
                />
                <Text style={styles.dato}>
                  Calificacion {clase.rating}
                </Text>
              </View>
              <View style={styles.dato}>
                <Text style={styles.dato}>
                  {clase.duracion}
                </Text>
                <Text style={styles.dato}>
                  Duración
                </Text>
              </View>
              <View style={styles.dato}>
                <Text style={styles.dato}>
                  {cupos}
                </Text>
                <Text style={styles.dato}>
                  Cupos
                </Text>
              </View>
            </View>

            <View style={styles.profesor}>
              <Image
                    source={{ uri: clase.profesor.foto }}
                    style={styles.avatar}
                />
                <View>
                    <Text style={styles.profesorNombre}>
                        {clase.profesor.nombre}
                    </Text>

                    <Text style={styles.descripcion}>
                        {clase.profesor.pais}
                    </Text>
                </View>
            </View>

            <View style={styles.dato}>
              <Text style={typography.titulo}>
                    Sobre la clase
              </Text>
              <Text style={styles.descripcion}>
                    {clase.descripcion}
              </Text>
            </View>

            <View style={{...styles.dato, paddingBottom: spacing.lg}}>
                <Text style={typography.titulo}>
                    Elige tu horario
                </Text>
                <Text style={styles.descripcion}>
                  {clase.horarios}
                </Text> 
            </View>

            <View style={{...styles.barra, paddingHorizontal: spacing.lg}}>
              <View style={styles.datos}>
                  <View style={{flex: 1}}>
                    <Text style={styles.descripcion}>
                        Precio Por Clase
                    </Text>

                    <Text style={styles.precio}>
                        ${clase.precio}
                    </Text>
                </View>

                 <Pressable
                    style={styles.boton}
                    onPress={() => {
                        if (cupos > 0) {
                            setCupos(restCupos => restCupos - 1);
                        } else {
                          Alert.alert("Lo sentimos, ya no restan cupos para esta clase.");
                        }
                    }}
                  >
                    <Text style={styles.textoBoton}>
                        Reservar
                    </Text>
                  </Pressable>
              </View>
            </View>
          </ScrollView>
        </View>
    );

}

const styles = StyleSheet.create({
  pantalla: { flex: 1, backgroundColor: colors.fondo },
  portada: { width: '100%', backgroundColor: colors.primarioSuave },
  datos: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.superficie,
    borderRadius: radius.lg,
    paddingVertical: spacing.lg,
  },
  dato: { alignItems: 'center', gap: 2 },
  datoValor: { fontSize: 16, fontWeight: '800', color: colors.texto },
  profesor: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    backgroundColor: colors.superficie,
    borderRadius: radius.lg,
    padding: spacing.lg,
  },
  avatar: { width: 48, height: 48, borderRadius: 24, backgroundColor: colors.borde },
  profesorNombre: { fontSize: 15, fontWeight: '700', color: colors.texto },
  descripcion: { ...typography.cuerpo, color: colors.textoSuave, lineHeight: 22, marginTop: spacing.sm },
  barra: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.superficie,
    borderTopWidth: 1,
    borderTopColor: colors.borde,
    paddingVertical: spacing.lg,
    paddingTop: spacing.lg
  },
precio: { fontSize: 18, fontWeight: '800', color: colors.primario },
boton: {
  backgroundColor: colors.primario,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.lg,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: spacing.md,
},
textoBoton: {
  color: '#fff',
  fontWeight: '700',
},
});