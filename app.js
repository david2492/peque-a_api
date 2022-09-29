const express = require('express');
   //sirve para requerir 



const app = express();

app.get('/me', (request, response) =>{
    response.status(200).json({
        names: 'Jonathan David Rodriguez Tejada',
        age: '30',
        country: 'Colombia',
        verb: request.method
    })
    
})



app.post('/metas', (request, response) => {
    console.log(request.method)
    response.status(200).json({
    Hobbie_1:'Jugar Call of Dutty Mobile',
    Hobbie_2:'Ver peliculas en Netflix',
    Hobbie_3:'Ver partidos de la UEFA champions league',
    verb: request.method
})

})


app.patch('/metas', (request, response) => {
    response.status(200).json({
        message: [{
            meta_1:'Ser Desarrolador web Full Stack',
            meta_2:'Estudiar mas lenguajes de Programacion',
        }],
        verb: request.method
    })
})
// localHost:8000/hola
app.put('/business', (request, response) => {
    console.log(request.method)
    response.status(200).json({
        Empresa_1:'	Microsoft',
        Empresa_2:'IBM',
        Empresa_3:'Oracle',
        verb: request.method
    })

})

app.listen(9000, () => {
    console.log('server started at port 9000')
})


//? HTTP 
//? verbos 
    //- get obteber datos
    //- post crear datos
    //- put actualizaciones de toda la informacion 
    //- patch actualizaciones de un dato en especifico
    //- delete eliminar datos
//? status o tipos de errores 
    // 100 - 199 respuestas informativas
    // 200 - 299 respuestas exitosas
    // 300 - 399 Redirecciones
    // 400 - 499 errores de los clientes
    // 500 - 599 errores de los servidores
//? headers 