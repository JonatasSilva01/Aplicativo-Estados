import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { api } from "../../service/api";

interface ApiEstado{
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
    btnItem: {
        paddingVertical: 10,
        marginTop: 5,

        backgroundColor: '#FFFFFF',
        flexDirection: 'row',

        borderRadius: 10,
    },
    avatarSigla: {
        width: 60,
        height: 60,

        backgroundColor: '#E76F51',
        borderRadius: 40,

        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    avatarTxt: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    legenda: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#000',

        marginLeft: 10,
        alignSelf: 'center',
    },
})

export default function Estado(){
    const[estados, setEstados] = useState<ApiEstado[]>([])

    async function getEstados(){
        const resposta = await api.get('?orderBy=nome')
        setEstados(resposta.data)
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
                renderItem={({item})=>{
                    return(
                        <View style={style.btnItem}>
                            <View style={style.avatarSigla}>
                                <Text style={style.avatarTxt}>
                                    {item.sigla}
                                </Text>
                            </View>
                            <Text style={style.legenda}>{item.nome}</Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}