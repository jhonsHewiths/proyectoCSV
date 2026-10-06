import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert, StyleSheet, ScrollView } from 'react-native';

export default function FormularioScreen() {
  const [form, setForm] = useState({ 
    nombre: '', 
    apellido: '',
    telefono: '', 
    cedula: '', 
    nivelIngles: 'Básico'
  });
  
  const [errores, setErrores] = useState({});
  
  const validar = () => {
    const nuevosErrores = {};
    if (!form.nombre.trim()) nuevosErrores.nombre = 'El nombre es obligatorio';
    if (!form.apellido.trim()) nuevosErrores.apellido = 'El apellido es obligatorio';
    if (!form.telefono.trim()) nuevosErrores.telefono = 'El telefono es obligatorio';
    if (!form.cedula.trim()) nuevosErrores.cedula = 'La cedula es obligatoria';
    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleEnviar = () => {  
    if (!validar()) return;
    Alert.alert('Registro exitoso', `Bienvenido, ${form.nombre} ${form.apellido}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.contenedor}>
        <Text>Nombre</Text>
        <TextInput
            style={styles.input}
            value={form.nombre}
            placeholder="Tu Nombre"
            onChangeText={(texto) => setForm({ ...form, nombre: texto })}
        />
        {errores.nombre && <Text style={styles.error}>{errores.nombre}</Text>}

        <Text>Apellido</Text>
        <TextInput
            style={styles.input}
            value={form.apellido} 
            placeholder="Tu Apellido"
            onChangeText={(texto) => setForm({ ...form, apellido: texto })}
        />
        {errores.apellido && <Text style={styles.error}>{errores.apellido}</Text>}
      
        <Text>Telefono</Text>
        <TextInput
            style={styles.input}
            value={form.telefono}
            placeholder="Tu Telefono"
            keyboardType="phone-pad"
            onChangeText={(texto) => setForm({ ...form, telefono: texto })}
        />
        {errores.telefono && <Text style={styles.error}>{errores.telefono}</Text>}

        <Text>Nivel de Inglés</Text>
        <View style={styles.contenedorOpciones}>
            {['Básico', 'Intermedio', 'Avanzado'].map((nivel) => (
                <Pressable
                    key={nivel}
                    onPress={() => setForm({ ...form, nivelIngles: nivel })}
                    style={[
                        styles.opcionBoton,
                        form.nivelIngles === nivel && styles.opcionSeleccionada
                    ]}
                >
                    <Text style={[
                        styles.textoOpcion,
                        form.nivelIngles === nivel && styles.textoOpcionSeleccionada
                    ]}>
                        {nivel}
                    </Text>
                </Pressable>
            ))}
        </View>

        <Text>Cedula</Text>
        <TextInput
            style={styles.input}
            value={form.cedula}
            placeholder="Tu Cedula"
            keyboardType="numeric"
            onChangeText={(texto) => setForm({ ...form, cedula: texto })}
        />
        {errores.cedula && <Text style={styles.error}>{errores.cedula}</Text>}

      <Pressable style={styles.boton} onPress={handleEnviar}>
        <Text style={styles.textoBoton}>Registrarse</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor: { padding: 16, gap: 8, paddingBottom: 40 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10 },
  error: { color: 'red', fontSize: 12 },
  
  contenedorOpciones: {
    flexDirection: 'row',
    gap: 8,
    marginVertical: 4,
  },
  opcionBoton: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  opcionSeleccionada: {
    borderColor: '#007AFF',
    backgroundColor: '#EAF3FF',
  },
  textoOpcion: {
    color: '#333',
    fontSize: 14,
  },
  textoOpcionSeleccionada: {
    color: '#007AFF',
    fontWeight: 'bold',
  },

  boton: { backgroundColor: '#007AFF', padding: 12, borderRadius: 8, alignItems: 'center', marginTop: 8 },
  textoBoton: { color: '#fff', fontWeight: '700' },
});