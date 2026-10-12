import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ClasesStack from './src/navigation/ClasesStack';
import MenuGlobal from './src/components/MenuGlobal';
import { colors } from './src/theme';
import { ReservasProvider } from './src/components/ReservasHechas';
import { UserProvider } from './src/components/RegistroHecho';

const temaNavegacion = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.fondo,
    card: colors.superficie,
    primary: colors.primario,
    text: colors.texto,
    border: colors.borde,
  },
};

const obtenerRutaActiva = (state) => {
  if (!state?.routes?.length) return null;

  const ruta = state.routes[state.routes.length - 1];
  if (ruta.state) return obtenerRutaActiva(ruta.state);
  return ruta.name;
};

export default function App() {
  const navigationRef = useRef(null);
  const [rutaActiva, setRutaActiva] = useState('InicioScreen');

  const navegar = (routeName) => {
    navigationRef.current?.navigate(routeName);
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer
        ref={navigationRef}
        theme={temaNavegacion}
        onStateChange={({ state }) => setRutaActiva(obtenerRutaActiva(state))}
      >
        <UserProvider>
          <ReservasProvider>
            <StatusBar style="dark" />
            <View style={{ flex: 1 }}>
              <View style={{ flex: 1 }}>
                <ClasesStack />
              </View>
              <MenuGlobal activeRoute={rutaActiva} onNavigate={navegar} />
            </View>
          </ReservasProvider>
        </UserProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

