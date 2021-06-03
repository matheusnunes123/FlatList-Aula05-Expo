import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


const AppBar = () => {
    return(
        <View style={style.AppBar}>
            <Text style={style.textoNav}>Bem Vindo</Text>
        </View>
    );
}

const style = StyleSheet.create({
    AppBar: {
        flexDirection:'row',
        height: 50,
        width:'100%',
        textAlign:'center',
        backgroundColor: "#735ac2",
    },

    textoNav: {
        alignSelf:'flex-start',
        paddingBottom:15,
        paddingTop:15,
        paddingLeft:25,
        fontSize:20,
        color:"white",
        fontWeight:'bold'
    }
})

export default AppBar;