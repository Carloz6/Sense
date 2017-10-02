var five = require("johnny-five"),
board = new five.Board({
    port: "COM4"
});

board.on("ready", function() {

    var lcd = new five.LCD({
        // LCD pin name  RS  EN  DB4 DB5 DB6 DB7
        pins: [8, 9, 10, 11, 12, 13],
        rows: 2,
        cols: 16
      });

      this.repl.inject({
        lcd: lcd 
    });

      lcd.clear();
     // lcd.cursor(0, 0);
    //  var values = ["hello ", "World!", "array ", "de ", "texto"];
      lcd.useChar("duck");
      lcd.cursor(0, 0).print("Hunt :duck:");
     // lcd.home().print( values + ":duck:");
      lcd.blink();
      lcd.autoscroll();
});