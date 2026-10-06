import react from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import InicioScreen from "../screens/InicioScreen";
import DetalleClasesScreen from "../screens/DetalleClasesScreen";
import ClasesScreen from "../screens/ClasesScreen";
import PerfilScreen from "../screens/PerfilScreen";
import ReservasScreen from "../screens/ReservasScreen";

const Stack = createNativeStackNavigator();

export default function ClassesStack() {
    return(

        <Stack.Navigator>

            <Stack.Screen
                name="Home"
                component={InicioScreen}
                options={{title: "Inicio", headerShow: false}}
            />

            <Stack.Screen
                name="DetalleClase"
                component={DetalleClasesScreen}
                options={{title: 'Detalle de clase', headerBackTitle: 'Atras'}}
            />

            <Stack.Screen
                name="ClasesScreen"
                component={ClasesScreen}
                options={{title: "Mis clases", headerBackTitle: 'Atras'}}
            />

           {/*  <Stack.Screen
                name="PerfilScreen"
                component={PerfilScreen}
                options={{title: "Mi Perfil", headerBackTitle: 'Atras'}}
            />*/

            <Stack.Screen
                name="ReservasScreen"
                component={ReservasScreen}
                options={{title: "Mis Reservas", headerBackTitle: 'Atras'}}
            />}

        </Stack.Navigator>
    )
}