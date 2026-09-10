import react from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ClasesScreen from "../screens/ClasesScreen";
import DetalleClasesScreen from "../screens/DetalleClasesScreen";

const Stack = createNativeStackNavigator();

export default function ClassesStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name = "Home"
                component={ClasesScreen}
                options={{headerShow: false}}
            />
            <Stack.Screen
                name="DetalleClase"
                component={DetalleClasesScreen}
                options={{title: 'Detalle', headerBackTitle: 'Atras'}}
            />
        </Stack.Navigator>
    )
}