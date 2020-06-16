import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import axios from 'axios';

import { FormLabel, FormInput, Button } from 'react-native-elements'

export default class todo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            email: '',
            contrasenia: ''
        }
    }
  
    registroUsuarios=async(email, nombre, contrasenia)=>{
        const datoloco=JSON.stringify({ email, nombre, contrasenia });
        try{
          const { data }= await axios.post('https://api-cool.herokuapp.com/registrate',datoloco, {
          headers: { 
            'Content-Type': 'application/json'
            }
      })
       
       
        alert('Usuario creado; inicie sesion');
       }catch(err){
         alert(err)
       }
      }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }} >
                <View>
                    <View style={{ padding: 30 }}>
                        <Text >Bienvenido, Cree una cuenta</Text>
                    </View>

                    <View style={{ padding: 30 }}>


                        <Text>
                            Nombre
                        </Text>
                        <TextInput style={{ height: 40 }}
                            placeholder="Ingrese su nombre" onChangeText={nombre => this.setState({nombre})} />

                        <Text>
                            E-mail
                        </Text>
                        <TextInput
                            style={{ height: 40 }} placeholder="Ingrese su E-mail" onChangeText={email => this.setState({email})}
                        />

                        <Text>
                            contrasenia
                         </Text>
                        <TextInput style={{ height: 40 }} placeholder="Ingrese una Contrasenia"
                            onChangeText={contrasenia => this.setState({contrasenia})} />

                        <Button
                            large
                            rightIcon={{ name: 'code' }}
                            title='Registrar'
                            onPress={() => this.registroUsuarios(this.state.email, this.state.nombre, this.state.contrasenia)}
                        />
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text>o</Text>
                    </View>
                </View>

                <Button
                    large
                    rightIcon={{ name: 'code' }}
                    title='Inicia sesion'
                    onPress={() => props.navigation.navigate('Inicio')}
                />
            </View>
        )
    }
}
