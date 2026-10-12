import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useUsuario } from '../components/RegistroHecho';

export default function DatosScreen() {
  
  const { usuario } = useUsuario(); 

  return (
    <View style={styles.container}>      
      <View style={styles.card}>
        <Text style={styles.label}>Nombre: <Text style={styles.valor}>{usuario?.nombre}</Text></Text>
        <Text style={styles.label}>Apellido: <Text style={styles.valor}>{usuario?.apellido}</Text></Text>
        <Text style={styles.label}>Teléfono: <Text style={styles.valor}>{usuario?.telefono}</Text></Text>
        <Text style={styles.label}>Cédula: <Text style={styles.valor}>{usuario?.cedula}</Text></Text>
        <Text style={styles.label}>Nivel de Inglés: <Text style={styles.valor}>{usuario?.nivelIngles}</Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, justifyContent: 'center', backgroundColor: '#f9f9f9' },
  card: { backgroundColor: '#fff', padding: 16, borderRadius: 8, borderWidth: 1, borderColor: '#ccc', gap: 12 },
  label: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  valor: { fontWeight: 'normal', color: '#666' }
});