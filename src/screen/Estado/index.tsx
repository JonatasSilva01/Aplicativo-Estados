import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Botao from "../../components/Botao";
import { api } from "../../service/api";

// pagina principal
// ?orderBy=nome

interface ApiEstado{
    id: number;
    nome: string;
    sigla: string;
    regiao: string;
}

export default function Estado(){
    const[estados, setEstados] = useState<ApiEstado[]>([])

    async function getEstados(){
        const resposta = await api.get('?orderBy=nome')
        console.log(resposta.data)
    }

    useEffect(() => {
        getEstados();
    },[])

    return(
        <View>
            <Botao legenda="Botao 2" />
        </View>
    )
}