import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { colors, radius, spacing, typography } from "../theme/index";
import { useReservas } from "../components/ReservasHechas";

export default function ReservasScreen() {

    const { reservas } = useReservas();

    return (
        <View style={styles.pantalla}>
            <FlatList
                data={reservas}
                keyExtractor={(reserva) => reserva.id}
                contentContainerStyle={[
                    styles.lista,
                    reservas.length === 0 && styles.listaVacia,
                ]}
                ListHeaderComponent={<Text style={typography.titulo}></Text>}
                ListEmptyComponent={<Text style={styles.vacio}>No tienes reservas realizadas</Text>}
                renderItem={({ item }) => (
                <View style={styles.reserva}>
                    <Text style={typography.titulo}>{item.clase.titulo}</Text>
                    <Text style={styles.detalleReserva}>Profesor: {item.clase.profesor.nombre}</Text>
                    <Text style={styles.horarioReserva}>{item.horario}</Text>
                    <Text style={styles.detalleReserva}>{item.clase.precio} COP por clase</Text>
                </View>
            )}
                ItemSeparatorComponent={() => <View style={styles.separador} />}
            />
        </View>
        
    )
}

const styles = StyleSheet.create({
    pantalla: {flex: 1, backgroundColor: colors.fondo},
    lista: {padding: spacing.lg, paddingBottom: spacing.xxl},
    listaVacia: {flexGrow: 1},
    reserva:{
        backgroundColor: colors.superficie,
        borderColor: colors.borde,
        borderRadius: radius.md,
        borderWidth: 1,
        padding: spacing.md,
    },
    detalleReserva: {... typography.secundario, marginTop: spacing.sm},
    horarioReserva: {...typography.cuerpo, color: colors.primario, fontWeight: '700', marginTop: spacing.md},
    vacio: {...typography.cuerpo, color: colors.textoSuave, marginTop: spacing.xl},
    separador: {height: spacing.md},
});