import React from "react";
import {TouchableOpacity, View, Text, StyleSheet, TouchableOpacityProps} from "react-native";
import { ApiEstado } from "../../screen/Estado";

interface ItemEstadoProps extends TouchableOpacityProps{
    item: ApiEstado;
}


const style = StyleSheet.create({
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

export default function BotaoEstados({item, ...rest}: ItemEstadoProps){
    return(
        <TouchableOpacity style={style.btnItem}
            {...rest}
        >
            <View style={style.avatarSigla}>
                <Text style={style.avatarTxt}>
                    {item.sigla}
                </Text>
            </View>
            <Text style={style.legenda}>{item.nome}</Text>
        </TouchableOpacity>
    )
}