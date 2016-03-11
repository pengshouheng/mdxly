'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');


var colorSet=0;

Blockly.Blocks.serialBegin = {
  init: function() {

        var FLIP = [['9600 baud', '9600'],
                    ['38400 baud', '38400'],
                    ['57600 baud', '57600'],
                    ['115200 baud', '115200'],
                    ['300 baud', '300'],
                    ['1200 baud', '1200'],
                    ['2400 baud', '2400'],
                    ['4800 baud', '4800'],
                    ['19200 baud', '19200'],
                    ['230400 baud', '230400'],
                    ['250000 baud', '250000']];

    //this.setColour(Blockly.Blocks.Microduino.HUE);
    this.setColour(colorSet);

    this.appendDummyInput("")
        //.appendField(new Blockly.FieldImage("../../media/Microduino/CoreUSB.png", 60, 90))
        .appendTitle(Blockly.serialSetup)
        
        .appendField(new Blockly.FieldDropdown(FLIP), 'FLIP')


    //this.appendStatementInput('DO')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
//    this.setTooltip("test");  
    this.setInputsInline(true);
    },
};



Blockly.Blocks.serialPrint = {
  init: function() {
    this.setColour(colorSet);
    
    this.appendValueInput("serialData")
    .appendTitle(Blockly.serialPrint);

    // this.appendDummyInput("")
    //     .appendTitle(Blockly.serialPrint)

    //this.appendStatementInput('DO')
    // this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
//    this.setTooltip("test");  
    //this.setInputsInline(true);
    },
};


Blockly.Blocks.serialPrintln = {
  init: function() {
    this.setColour(colorSet);
    
    this.appendValueInput("serialData")
    .appendTitle(Blockly.serialPrintln);

    this.setPreviousStatement(true);
    this.setNextStatement(true);
//    this.setTooltip("test");  
    //this.setInputsInline(true);
    },
};


Blockly.Blocks.microduinoAnaloyWrite = { 
  init: function() {

  var mCookie_pwmPin =[["3", "3"], ["4", "4"], ["5", "5"],
                    ["6", "6"], ["7", "7"], ["8", "8"], 
                    ["9", "9"], ["10", "10"], ["11", "11"]];


    this.setColour(colorSet);


    this.appendDummyInput("")
    .appendTitle(Blockly.LKL_ANALOGWRITE_PIN)
    .appendTitle(new Blockly.FieldDropdown(mCookie_pwmPin), "mCookie_pwmPin")

    this.appendValueInput("pwmNumber", Number)
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendTitle(Blockly.LKL_VALUE2);


    var tip="设置指定管脚值(0~255)\n";
    //tip+="数字接口\n";
    this.setTooltip(tip);

    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setInputsInline(true);
  },
};

