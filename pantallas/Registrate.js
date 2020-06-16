import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';

export default class Registrate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cargando: false,
            _id: "",
            autor: "",
            createdAt: "",
            descripcion: "",
            fecha: "",
            id_autor: "",
            titulo: "" ,
            updatedAt: ""
        }
    }
    componentDidMount(){

    }
     delay=()=> {
        // `delay` returns a promise
        return new Promise(function(resolve, reject) {
          // Only `delay` is able to resolve or reject the promise
          setTimeout(function() {
            resolve(42); // After 3 seconds, resolve the promise with value 42
          }, 1000);
        });
      }
      
       
    consultaNoticias=async()=>{
        this.state({cargando: true})

      try{
         await delay();
       return axios.get('https://api-cool.herokuapp.com/noticias',{
          headers: { 
            'Content-Type': 'application/json',
            authorization: "Bearer "+token 
            }
      })
      }catch(err){
       return null;
      }
      }
    render() {
        return (
            <View></View>
        )
    }
}
