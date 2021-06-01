import React from "react";
import { View, Text, Image } from "react-native";
import { style } from './style';



function Produto (props){

  return(

      <View style={style.cardProduto}>
          <Image 
          source={props.image}
          style={style.img}
          />
          <Text style={style.name}>{props.name}</Text>
          <Text style={style.description}>{props.description}</Text>
          <Text style={style.price}>Preco: {props.price} </Text>
          {props.available ? (<Text style={style.available}>Produto disponível</Text>) : (<Text style={style.available} >Produto indisponível</Text>)}
          <Text></Text>
      </View>
    
    
  )
}


export default Produto