import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps, StyleSheet } from "react-native";

interface BotaoProps extends TouchableOpacityProps{
    legenda: string;
}

const style = StyleSheet.create({
    btn: {
        backgroundColor: "green",

        width: 200,
        height: 80,

        borderRadius: 40,
        elevation: 10,

        marginTop: 10,

        paddingVertical: 5,

        justifyContent: "center",
        alignItems: 'center',
    },
    textBtn: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF'
    },
})

const Botao = ({legenda, ...rest}: BotaoProps) => {
    return(
        <TouchableOpacity {...rest}
            style={style.btn}
        >
            <Text style={style.textBtn}>{legenda}</Text>
        </TouchableOpacity>
    )
}

export default Botao;