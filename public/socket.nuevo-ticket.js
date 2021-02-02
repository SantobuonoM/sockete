var socket = io();

var label = $('#lblNuevoTicket');


socket.on('connect', function()  {

    console.log('Conectado al Servidor');

    });


socket.on('disconnect', () => {
        console.log('Desconectado del servidor');
    });

$('button').on('click', function() {
    
    socket.emit('siguienteTicket', "hola")
})   
