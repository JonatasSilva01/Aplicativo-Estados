import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Botao from "../../components/Botao";
import BotaoMunicipios from "../../components/BotaoMunicipios";
import { api } from "../../service/api";
import { ApiEstado } from "../Estado";

interface apiParams{
    estado: ApiEstado;
}

export interface Municipio{
    id: number;
    nome: string;
}

const style = StyleSheet.create({
    container:{
        flex: 1,

        backgroundColor: '#eeeeee',
        padding: 20,

        justifyContent: 'center',
    },
})

export default function Municipio(){
    const apiRotas = useRoute();
    const { estado } = apiRotas.params as apiParams;
    const [municipios, setMunicipios] = useState<Municipio[]>([])
    const navigation = useNavigation()

    async function getMunicipios(){
        const resposta = await api.get<Municipio[]>(`/${estado.id}/municipios?orderBy=nome`)
        setMunicipios(resposta.data)
    }

    useEffect(() => {
        getMunicipios();
        navigation.setOptions({title: estado.nome.toLocaleUpperCase()})
    },[])

    return(
        <View style={style.container}>
            <FlatList<Municipio>
                style={{flex: 1}}
                data={municipios}
                showsVerticalScrollIndicator={false}
                keyExtractor={(municipio)=> String(municipio.id)}
                renderItem={({item})=> 
                    <BotaoMunicipios item={item} />
                }
            />
        </View>
    )
}