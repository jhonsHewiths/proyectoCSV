import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useUsuario } from './RegistroHecho';

const menuItems = [
    { route: 'InicioScreen', label: 'Inicio', icon: 'home' },
    { route: 'ClasesScreen', label: 'Clases', icon: 'book' },
    { route: 'PerfilScreen', label: 'Mi perfil', icon: 'person' },
    { route: 'ReservasScreen', label: 'Reservas', icon: 'calendar' },
];

export default function MenuGlobal({ activeRoute, onNavigate }) {
    const { usuario } = useUsuario();

    return (
        <View style={styles.container}>
            {menuItems.map((item) => {
                const route = item.route === 'PerfilScreen' && usuario ? 'DatosPerfil' : item.route;
                const activo = activeRoute === route;

                return (
                    <Pressable
                        key={item.route}
                        accessibilityRole="button"
                        accessibilityLabel={item.label}
                        accessibilityState={{ selected: activo }}
                        style={[styles.tab, activo && styles.tabActivo]}
                        onPress={() => onNavigate(route)}
                    >
                        <Ionicons
                            name={activo ? item.icon : `${item.icon}-outline`}
                            size={25}
                            color={activo ? '#007AFF' : '#777'}
                        />
                        <Text style={[styles.label, activo && styles.labelActivo]}>
                            {item.label}
                        </Text>
                    </Pressable>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 74,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        backgroundColor: '#fff',
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    tabActivo: {
        backgroundColor: '#EAF3FF',
    },
    label: {
        color: '#777',
        fontSize: 11,
        marginTop: 2,
    },
    labelActivo: {
        color: '#007AFF',
        fontWeight: '600',
    },
});
