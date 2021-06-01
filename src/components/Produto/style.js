import {StyleSheet} from 'react-native'


const style = StyleSheet.create({
    

    
    cardProduto: {
        flex: 1,
        width: 300,
        height: 500,
        marginLeft:75,
        marginRight:75,
        borderRadius:25,
        backgroundColor:"#475AE6",
        alignSelf:'right',
    },
    
    img:{  
      height:300,
      width:300,
      borderTopLeftRadius:20,
      borderTopRightRadius:20,
    },
    
    name:{
       fontSize:20,
       alignSelf:'center' ,
       color: 'white',
       fontWeight:'bold',
    },

    description:{
        marginTop:25,
        padding:10,
        textAlign: 'justify',
        color: 'white',
    },

    price:{
        marginTop:10,
        paddingLeft:10,
        color: 'white',
        fontWeight:'bold'
    },

    available:{
        marginTop:10,
        color: 'white',
        paddingLeft:10
    },
    
  })
  
  export {style};