import React from "react";
import { View, Text, Image,TouchableOpacity, ScrollView, FlatList } from "react-native";
import Produto from "components/Produto"
import DATA from "utils/DATA"
import AppBar from "components/AppBar2"
import { style } from "./style"
//Componente Produtos

const Loja = () => {
    return(
        <ScrollView style={style.tela}>
            <View>
                <AppBar></AppBar>
                <Text style={style.title}>Loja</Text>
            </View>
            <View>

                <FlatList
                    horizontal= {true}
                    data ={DATA}
                    style={style.flatList}
                    renderItem={({item}) =>
                        <Produto
                        id={item.id}  
                        name = {item.name}
                        description = {item.description}
                        price = {item.price}
                        available = {item.available}
                        image = {item.image}
                        />
                        
                    }
                />
            </View>
        </ScrollView>
    )
}

export default Loja