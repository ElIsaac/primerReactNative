import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import axios from 'axios';
import {token} from '../MyDrawer/index.js';
import inicio from '../helpers/token';

import { Button } from 'react-native-elements'

export default class iniciarsesion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            contrasenia: ''
        }
    }
  
   

    render() {
        return (
<View style={{ flex: 1, justifyContent: 'center' }} >


                <View>
                    <View style={{ padding: 30 }}>
                        <Text >Bienvenido, Inicie sesion</Text>
                    </View>

                    <View style={{ padding: 30 }}>


                        <Text>
                            Email
                        </Text>
                        <TextInput
                            style={{ height: 40 }}
                            placeholder="Ingrese su E-mail"
                            onChangeText={email => this.setState({email})}
                        />

                        <Text>
                            Contraseña
                        </Text>
                        <TextInput
                            style={{ height: 40 }}
                            placeholder="Ingrese su contraseña"
                            onChangeText={contrasenia => this.setState({contrasenia})}
                        />



                        <Button
                            large
                            rightIcon={{ name: 'code' }}
                            title='Iniciar'

                            onPress={() => inicio.iniciarSesion(this.state.email, this.state.contrasenia)}
                        />




                    </View>
                </View>
            </View>
        )
    }
}
