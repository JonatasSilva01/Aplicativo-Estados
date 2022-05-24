import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import BotaoEstados from "../../components/BotaoEstados";
import { api } from "../../service/api";

export interface ApiEstado{
    id: number;
    nome: string;
    sigla: string;
    regiao: string;
}

const style = StyleSheet.create({
    container:{
        flex: 1,

        backgroundColor: '#eeeeee',
        padding: 20,

        justifyContent: 'center',
    },
})

export default function Estado(){
    const[estados, setEstados] = useState<ApiEstado[]>([])
    const navigation = useNavigation()

    async function getEstados(){
        const resposta = await api.get('?orderBy=nome')
        setEstados(resposta.data)
    }

    function hendlerMunicipio(item:ApiEstado){
        navigation.navigate('Municipio', {estado:item});
    }

    useEffect(() => {
        getEstados();
    },[])

    return(
        <View style={style.container}>
            <FlatList<ApiEstado>
                style={{flex: 1}}
                data={estados}
                showsVerticalScrollIndicator={false}
                keyExtractor={(estados)=> String(estados.id)}
                renderItem={({item})=> 
                    <BotaoEstados item={item} onPress={() => hendlerMunicipio(item)} />
                }
            />
        </View>
    )
}