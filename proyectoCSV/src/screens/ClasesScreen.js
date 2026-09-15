import React, {useState, useEffect, useMemo} from 'react';
import {View, Text, Image, Pressable, StyleSheet, TextInput, ScrollView, FlatList, TouchableOpacity} from 'react-native'

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import{ Ionicons } from '@expo/vector-icons';

import LabelLevel from '../components/LabelLevel';
import Card from '../components/Card';
import NivelChip from '../components/NivelChip';
import EstadoVacio from '../components/EstadoVacio';
import useResponsive from '../hooks/useResponsive'; 
import {colors, radius, spacing, typography} from '../theme';
import { FormatearPrecio, CLASES, NIVELES } from '../data/Clases';

export default function ClasesScreen ({ navigation }) {
    const insets = useSafeAreaInsets();
    const {columnas, paddingHorizontal}= useResponsive();

    const [nivel, setNivel] = useState('Todos')
    const [busqueda, setBusqueda] = useState('')

    const resultados = useMemo(()=>{
        const textoBusqueda = busqueda.trim().toLowerCase();
        return CLASES.filter((clase)=>{
            const coincidenciaNivel = nivel === 'Todos' || clase.nivel === nivel
            const coincidenciaTexto = textoBusqueda === '' || clase.titulo.toLowerCase().includes(textoBusqueda) ||
                                        clase.profesor.nombre.toLowerCase().includes(textoBusqueda);
            return coincidenciaNivel && coincidenciaTexto
        });
    },[ nivel, busqueda]);

    return(
        <View style={[style.pantalla, {paddingTop: insets.top + spacing.md}]}>
            <View>
                <Text style={typography.titulo}>Clases de ingles</Text>
                <View style={style.busqueda}>
                    <Ionicons name="search" size={18} color={colors.textoSuave}/>
                    <TextInput style = {style.input}
                        placeholder="Buscar por nivel"
                        value={busqueda}
                        onChangeText={setBusqueda}
                        autoCorrect={false}
                    />
                    {
                        busqueda.length > 0 && (
                            <Ionicons
                                name='close-circle'
                                size={18}
                                color={colors.textoSuave}
                                onPress={()=> setBusqueda('')}
                            />
                        )
                    }
                </View>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator = {false}
                style = {{flexGrow: 0}}    
            >
                {
                    NIVELES.map((item) => {
                        <NivelChip
                            key={item}
                            etiqueta={item}
                            activo={item}
                            onPress={() => setNivel(item)}
                        />
                    })
                }
            </ScrollView>
           <FlatList
                data={resultados}
                keyExtractor={(item) => item.id.toString()}
                numColumns={columnas}
                key={columnas}
                contentContainerStyle={{ paddingHorizontal }}
                renderItem={({ item }) => (
                    <View style={style.tarjeta}>
                        <Image source={{ uri: item.imagen }} style={{ width: '100%', height: 120, borderRadius: 8 }} />
                        <Text style={typography.titulo}>{item.titulo}</Text>
                        <Text style={{ color: colors.textoSuave }}>Nivel: {item.nivel}</Text>
                        <Text style={{ fontWeight: 'bold' }}>${item.precio}</Text>
                    </View>
                )}
                ListEmptyComponent={
                    <Text style={{ textAlign: 'center', marginTop: 20 }}>No se encontraron clases</Text>
                }
                />
                        </View>

                    )
                }

const style = StyleSheet.create({
  pantalla: { flex: 1, backgroundColor: colors.fondo },
  buscador: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: colors.superficie,
    borderRadius: radius.md,
    paddingHorizontal: spacing.lg,
    height: 46,
    marginTop: spacing.lg,
    borderWidth: 1,
    borderColor: colors.borde,
  },
  input: { flex: 1, fontSize: 14, color: colors.texto, paddingVertical: 0 },
  busqueda: { 
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 8},
});