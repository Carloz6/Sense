var five = require("johnny-five"),
board = new five.Board({
    port: "COM4"
});

board.on("ready", function() {

    var lcd = new five.LCD({
        // LCD pin name  RS  EN  DB4 DB5 DB6 DB7
        pins: [8, 9, 10, 11, 12, 13],
      });

      this.repl.inject({
        lcd: lcd 
    });

      lcd.useChar("duck");
      lcd.cursor(0, 0).print("Hunt :duck:");
      lcd.blink();
});