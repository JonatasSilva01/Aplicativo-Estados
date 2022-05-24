import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Estado from "../screen/Estado";
import Municipio from "../screen/Municipio";

const Stack = createNativeStackNavigator()

export default function Rotas(){
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerTitleAlign: 'center',
                    headerStyle:{backgroundColor: 'tomato'},
                    headerTintColor: 'white',
                }}
            >
                <Stack.Screen name="Estados" component={Estado} />
                <Stack.Screen name="Municipio" component={Municipio} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}