'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');


var colorSet=230;

/*
var mCookie_PORTS =[[Blockly.coreUSBBoard, "coreUSB"], [Blockly.coreBoard, "core"], [Blockly.corePlusBoard, "core+"]];
Blockly.Blocks.mCookie_bluetooth_readString = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
	    .appendTitle(Blockly.LKL_BLUETOOTH)
		.appendField(new Blockly.FieldImage("../../media/Microduino/mCookie_BT.jpg", 45, 32))
		.appendTitle("#")
	    .appendTitle(new Blockly.FieldDropdown(mCookie_PORTS), "PIN")
		.appendTitle(Blockly.LKL_BLUETOOTH_READ_STR);
    this.setOutput(true, String);
	this.setInputsInline(true);
  }
};
Blockly.Blocks.mCookie_bluetooth_Robot_Direction = {	
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
	    .appendTitle(Blockly.LKL_BLUETOOTH_Car)
		.appendField(new Blockly.FieldImage("../../media/Microduino/mCookie_BT.jpg", 45, 32))
		.appendTitle("#")
	    .appendTitle(new Blockly.FieldDropdown(mCookie_PORTS), "PIN")
	    .appendTitle("#")
	    .appendTitle(new Blockly.FieldDropdown([[Blockly.LKL_Run_f, "1"], [Blockly.LKL_Run_b, "2"], [Blockly.LKL_Run_l, "3"], [Blockly.LKL_Run_r, "4"]]),'direction')
		.appendTitle(Blockly.LKL_Run_Direction);
    //this.setInputsInline(true);
    //this.setPreviousStatement(true);
    //this.setNextStatement(true);
    this.setInputsInline(true);
    this.setOutput(true);
  }
};


Blockly.Blocks.mCookie_bluetooth_available = {

  init: function() {
    this.setColour(colorSet);


    this.appendDummyInput("")
	    .appendTitle(Blockly.LKL_BLUETOOTH)
		.appendField(new Blockly.FieldImage("../../media/Microduino/mCookie_BT.jpg", 45, 32))
		.appendTitle("#")
	    .appendTitle(new Blockly.FieldDropdown(mCookie_PORTS), "PIN")
		.appendTitle(Blockly.LKL_AVAILABLE);
    this.setOutput(true, Boolean);
	this.setInputsInline(true);


  }
};
*/
var mCookie_PORTS =[[Blockly.coreUSBBoard, "coreUSB"], [Blockly.coreBoard, "core"], [Blockly.corePlusBoard, "core+"]];

Blockly.Blocks.bluetoothMicroduinoBegin = {

  init: function() {
    this.setColour(colorSet);

    this.appendDummyInput("")
	    .appendTitle(Blockly.bluePrepare)
		.appendField(new Blockly.FieldImage("../../media/Microduino/mCookie_BT.jpg", 45, 32))
		.appendTitle(Blockly.coreBoardType)
	    .appendTitle(new Blockly.FieldDropdown(mCookie_PORTS), "PIN")

    this.setPreviousStatement(true);
    this.setNextStatement(true);


  }
};


Blockly.Blocks.bluetoothMicroduinoReciver = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
	    .appendTitle(Blockly.microduinoBlueReciver)
		.appendField(new Blockly.FieldImage("../../media/Microduino/mCookie_BT.jpg", 45, 32))
    
	this.appendStatementInput("reciverDataInput");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};


Blockly.Blocks.btMicroduinoReciverData = {

  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
	    .appendTitle(Blockly.BTReciverData)

	this.setOutput(true, String);
  }
};


Blockly.Blocks.btMicroduinoSenderData = {

  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
      .appendTitle(Blockly.BTSenderData);

    this.appendValueInput('senderText')
        .setCheck(String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.BTSende);

    this.setPreviousStatement(true);
    this.setNextStatement(true);

  }
};

Blockly.Blocks.bluetoothmtankBegin = {

  init: function() {

    var Type_md_mc = [
                 ['mCookie', '1'],
                 ['Microduino', '2'],
              ];

    this.setColour(colorSet);

    this.appendDummyInput("")
      .appendTitle(Blockly.blueMtank)
    .appendField(new Blockly.FieldImage("../../media/Microduino/mCookie_BT.jpg", 45, 32))
    .appendTitle(Blockly.productType)
      .appendTitle(new Blockly.FieldDropdown(Type_md_mc), "Type_md_mc")

    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks.bluetoothmTankReciver = {
  init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
      .appendTitle(Blockly.mTankBlueReciver)
    .appendField(new Blockly.FieldImage("../../media/Microduino/mCookie_BT.jpg", 45, 32))
    
  this.appendStatementInput("reciverDataInput");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks.bluetoothmTankdata= {
  init: function() {

  var mTankchooseNumber = [
              [Blockly.mtankDIR1, '0'],
              [Blockly.mTankthr1, '1'],
              [Blockly.mtankDIR2, '2'],
              [Blockly.mTankthr2, '3'],
              ['aux1(1000,2000)', '4'],
              ['aux2(1000,2000)', '5'],
              ['aux3(1000,2000)', '6'],
              ['aux4(1000,2000)', '7'],
              ];


    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.mTankchannel)
        .appendField(new Blockly.FieldDropdown(mTankchooseNumber), 'mTankchooseNumber');

    this.setOutput(true, Number);
  }
};

Blockly.Blocks.bluetoothcolorled = {

  init: function() {
    this.setColour(colorSet);

    this.appendDummyInput("")
      .appendTitle(Blockly.blueled)
    .appendField(new Blockly.FieldImage("../../media/Microduino/mCookie_BT.jpg", 45, 32))
    .appendTitle(Blockly.ColorLEDControl)
    .appendField(new Blockly.FieldImage("../../media/Microduino/colorLEDBegin.png", 80, 32))

    this.setPreviousStatement(true);
    this.setNextStatement(true);


  }
};