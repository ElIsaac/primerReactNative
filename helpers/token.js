import axios from 'axios';
var inicio={
    token: '',
    iniciarSesion: async function(email, contrasenia){
        const datoloco=JSON.stringify({ email, contrasenia });
        try{
          const { data }= await axios.post('https://api-cool.herokuapp.com/inicia-sesion',datoloco, {
          headers: { 
            'Content-Type': 'application/json'
            }
      })
       
       this.token=data.token;
       alert(this.token)
       }catch(err){
         alert(err)
       }
    }
}
export default inicio;