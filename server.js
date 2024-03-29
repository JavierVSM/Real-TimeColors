const express = require( 'express' );
const app = express();

app.use(express.static(__dirname + "/public"));

const server = app.listen(8080);

const io = require( 'socket.io' )( server );

io.on( 'connection', function( socket ){
    socket.on( 'sendColor', function(color ){
        io.sockets.emit( 'displayColor', color ); 
    });   
});