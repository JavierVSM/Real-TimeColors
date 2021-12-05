let socket = io( 'http://localhost:8080' );

$( '.toRed' ).on( 'submit', function(event){
    event.preventDefault();
    socket.emit( 'sendColor', 'red' );
});

$( '.toBlue' ).on( 'submit', function(event){
    event.preventDefault();
    socket.emit( 'sendColor', 'blue' );
});

$( '.toGreen' ).on( 'submit', function(event){
    event.preventDefault();
    socket.emit( 'sendColor', 'green' );
});

socket.on( 'displayColor', function( color ){
    document.body.style.backgroundColor = color;
});