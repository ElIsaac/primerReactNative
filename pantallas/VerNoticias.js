import React, { Component } from 'react'

import { Button } from 'react-native-elements'
import { View, Text, StyleSheet, SafeAreaView, ScrollView, FlatList } from 'react-native';
import inicio from '../helpers/token';
import axios from 'axios';
import Constants from 'expo-constants';

export default class VerNoticias extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cargando: false,
            DATA: [  {
                "__v": 0,
                "_id": "5edf32e207a0e700172ab0e2",
                "autor": "Clase",
                "createdAt": "2020-06-09T06:57:38.799Z",
                "descripcion": "Xd",
                "fecha": "2020-06-09T06:57:38.798Z",
                "id_autor": "5edf31f807a0e700172ab0e0",
                "titulo": "Isaac",
                "updatedAt": "2020-06-09T06:57:38.799Z",
              },
               {
                "__v": 0,
                "_id": "5edde6f6e083d0001759966e",
                "autor": "Lolo",
                "createdAt": "2020-06-08T07:21:26.009Z",
                "descripcion": "Xdx",
                "fecha": "2020-06-08T07:21:26.008Z",
                "id_autor": "5edde52be083d0001759966c",
                "titulo": "Porfiiiiin",
                "updatedAt": "2020-06-08T07:21:26.009Z",
              },
               {
                "__v": 0,
                "_id": "5edde553e083d0001759966d",
                "autor": "Lolo",
                "createdAt": "2020-06-08T07:14:27.735Z",
                "descripcion": "Xd",
                "fecha": "2020-06-08T07:14:27.735Z",
                "id_autor": "5edde52be083d0001759966c",
                "titulo": "Porfiiiiin",
                "updatedAt": "2020-06-08T07:14:27.735Z",
              },
               {
                "__v": 0,
                "_id": "5edde37ae083d0001759966b",
                "autor": "Isaac",
                "createdAt": "2020-06-08T07:06:34.844Z",
                "descripcion": "Y",
                "fecha": "2020-06-08T07:06:34.842Z",
                "id_autor": "5ed00be18334dc7cbba5ec99",
                "titulo": "Hola",
                "updatedAt": "2020-06-08T07:06:34.844Z",
              }]
        }
    }
  
   /*  componentDidMount(){
        this.traerDatos()
    } */



    delay = () => {
        // `delay` returns a promise
        return new Promise(function (resolve, reject) {
            // Only `delay` is able to resolve or reject the promise
            setTimeout(function () {
                resolve(42); // After 3 seconds, resolve the promise with value 42
            }, 1000);
        });
    }


    consultaNoticias = async (props) => {
        try {
            await this.delay();
            return axios.get('https://api-cool.herokuapp.com/noticias', {
                headers: {
                    'Content-Type': 'application/json',
                    authorization: "Bearer " + inicio.token
                }
            })
        } catch (err) {
            return err;
        }
    }


    
    traerDatos=async()=>{
        const noticias=await this.consultaNoticias();
        this.setState(
            {
            DATA: noticias.data,
            cargando: false
        })
    }



    /*  Item=({ title }) => {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
} */
render(props) {
    //this.traerDatos();
    /* if(this.state.cargando){
        return(
            <View>
            <Text>
            cargando
            </Text>
        </View>
        )
    } */
    return (
      /*   <SafeAreaView style={styles.container}>
            <FlatList
                data={this.state.DATA}
                renderItem={({ data }) => <Item title={data.tiulo} />}
            />
        </SafeAreaView>  */
            
            /* <View>
            <Button
                large
                rightIcon={{ name: 'code' }}
                title='wachar'
                onPress={()=>(async ()=>{
                    let usuarios = await this.consultaNoticias();
          console.log(usuarios);
                })()}
              />
          </View> */
              
                  
          <SafeAreaView style={styles.container}>
          <FlatList
            data={this.state.DATA}
            renderItem={({ item }) => <Text title={item.titulo} />}
            keyExtractor={item => item._id}
          />
        </SafeAreaView>
              
            
    )


}

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});