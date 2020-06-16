// In App.js in a new project

import React, { Component, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FormLabel, FormInput, Button } from 'react-native-elements'
import axios from 'axios';
import todo from '../pantallas/todo.js';
import VerNoticias from '../pantallas/VerNoticias.js';
import Iniciasesion from '../pantallas/Inicia-sesion.js';


var token='xd';
var noticiasJson;
////////////////////////////////////////FUNCIONES///////////////////////////////////////////////////////////
async function guardarDatos(titulo, descripcion) {

  const datoloco=JSON.stringify({ titulo, descripcion });
  try{
     const { data }= await axios.post('https://api-cool.herokuapp.com/nueva-noticia',datoloco, {
     headers: { 
       'Content-Type': 'application/json',
       authorization: "Bearer "+token 
       }
 })
  const {mensaje}=data;
   alert(mensaje);
  }catch(err){
    alert(err)
  }
}
async function iniciarSesion(email, contrasenia){
  const datoloco=JSON.stringify({ email, contrasenia });
  try{
    const { data }= await axios.post('https://api-cool.herokuapp.com/inicia-sesion',datoloco, {
    headers: { 
      'Content-Type': 'application/json'
      }
})
 
 token=data.token;
  alert(token);
 }catch(err){
   alert(err)
 }
}

async function registroUsuarios(email, nombre, contrasenia){
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

function delay() {
  // `delay` returns a promise
  return new Promise(function(resolve, reject) {
    // Only `delay` is able to resolve or reject the promise
    setTimeout(function() {
      resolve(42); // After 3 seconds, resolve the promise with value 42
    }, 1000);
  });
}

 
 async function consultaNoticias(){
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
///////////////////////////////////////////////COMPONENTES////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////Consultar noticias

/* function VerNoticias() {
 
 consultaNoticias()
    return (
  <View>
    <Button
        large
        rightIcon={{ name: 'code' }}
        title='wachar'
        onPress={()=>(async ()=>{
          let usuarios = await consultaNoticias();
          console.log(usuarios.data);
        })()}
      />
  </View>
      
    );
  } */


///////////////////////////////////////////////inicio
function Inicio(props) {
  const [email, setEmail] = useState('');
  const [contrasenia, setContrasenia] = useState('');
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
            onChangeText={email => setEmail(email)}
          />

          <Text>
            Contraseña
      </Text>
          <TextInput
            style={{ height: 40 }}
            placeholder="Ingrese su contraseña"
            onChangeText={contrasenia => setContrasenia(contrasenia)}
          />



          <Button
            large
            rightIcon={{ name: 'code' }}
            title='Iniciar'

            onPress={() => iniciarSesion(email, contrasenia)}
          />

        </View>
        <View style={{ alignItems: 'center' }}>
          <Text>o</Text>
        </View>
      </View>

      <Button
        large
        rightIcon={{ name: 'code' }}
        title='Registrate'
        onPress={() => props.navigation.navigate('Registrate')}
      />
    </View>
  );
}
///////////////////////////////////////////////////////registrate

//////////////////////////////////////////////////7agregar

 function AgregarNoticias() {
 
const [titulo, setTitulo] = useState('');
const [descripcion, setDescripcion] = useState('');

  return (

     <View>
       <View style={{ padding: 30 }}>
       <Text >Ingrese una noticia</Text>
       </View>
      
    <View style={{ padding: 30 }}>


      <Text>
        Titulo
      </Text>
      <TextInput
        style={{ height: 40 }}
        placeholder="Ingrese un titulo"
       onChangeText={titulo => setTitulo(titulo)}
      />

      <Text>
        Descripcion
      </Text>
      <TextInput
        style={{ height: 40 }}
        placeholder="Ingrese una descripcion"
       
       onChangeText={descripcion => setDescripcion(descripcion)}
       
      />

      <Button
        large
        rightIcon={{ name: 'code' }}
        title='Guardar'
        
        onPress={()=>guardarDatos(titulo, descripcion)}
        />
        
    </View>
     </View>
  );
}
//////////////////////////////////drawer
  const Drawer = createDrawerNavigator();

function MyDrawer() {
  if(token==='cd'){
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Agregar Noticias" component={AgregarNoticias} />
          <Drawer.Screen name="wachar" component={VerNoticias} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
    }
    return (
      <NavigationContainer>
        <Drawer.Navigator drawerStyle={{
    backgroundColor: '#c6cbef',
    width: 240,
  }}>
          <Drawer.Screen name="Inicio" component={Iniciasesion} options={{ props: 'Home' }} />
          <Drawer.Screen name="Registrate" component={todo} />
          <Drawer.Screen name="Agregar Noticias" component={AgregarNoticias} />
          <Drawer.Screen name="wachar" component={VerNoticias} options={{ params: token }} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  
}
export default MyDrawer;
