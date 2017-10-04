var five = require('johnny-five');
var Barcli = require('barcli');
//set up board and arduino port
board = new five.Board({
    port: "COM4" // aruino port
});
var graph = new Barcli({
    label: 'Photocell',
    range: [0, 1023]
});

board.on('ready', function(){
    var photocell = new five.Sensor('A1');

    photocell.on('data', function(){
        graph.update(this.value);
    });
});