var five = require('johnny-five');
//set up board and arduino port
board = new five.Board({
    port: "COM4" // aruino port
});

board.on('ready', function(){
    var button = new five.Button('A0');// button pin analog pin
    var led = new five.Led('7');//led digital ping
//button press
    button.on('press', function(){
        console.log('button pressed!');
        led.on();
    });
//button release
    button.on('release', function(){
        console.log('button release!');
        led.off();
    });
});