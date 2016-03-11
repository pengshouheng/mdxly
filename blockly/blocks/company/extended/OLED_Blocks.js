'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');


//Blockly.Blocks.Microduino.HUE = 120;
Blockly.Blocks.Microduino.GRE = 120;


Blockly.Blocks.OLED_begin = {
  init: function() {
	var FLIP = [['none', 'undoRotation'],['90', 'setRot90'],['180', 'setRot180'],['270', 'setRot270']];

    //this.setColour(Blockly.Blocks.Microduino.HUE);
    this.setColour(Blockly.Blocks.Microduino.GRE);
    this.appendDummyInput("")
        .appendTitle(Blockly.OLEDBegin)
    this.appendDummyInput("")
		.appendTitle(Blockly.OLEDFlip)
		.appendField(new Blockly.FieldDropdown(FLIP), 'FLIP')
	this.appendStatementInput('DO')
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
//    this.setTooltip("test");
	this.setInputsInline(true);
	},
};

Blockly.Blocks.OLED_print = {
  init: function() {
	var TYPE = [['Small', 'setFont_S'],['Middle', 'setFont_M'],['Large', 'setFont_L']];

    // this.setColour(Blockly.Blocks.Microduino.HUE);
    this.setColour(Blockly.Blocks.Microduino.GRE);
    this.appendDummyInput("")
        .appendTitle(Blockly.OLEDPrint)
    this.appendDummyInput("")
		.appendTitle(Blockly.OLEDFont)
		.appendField(new Blockly.FieldDropdown(TYPE), 'TYPE')
	this.appendValueInput("x", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("x:");
	this.appendValueInput("y", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("y:");
	this.appendValueInput("text", String)
        .setCheck([Number,String])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.OLEDContext);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
//    this.setTooltip("test");	
	this.setInputsInline(true);

	},
};


Blockly.Blocks.OLED_simplePrint = {
  init: function() {

    // this.setColour(Blockly.Blocks.Microduino.HUE);
    this.setColour(Blockly.Blocks.Microduino.GRE);
    this.appendDummyInput("")
        .appendTitle(Blockly.OLEDPrint)

    this.appendValueInput("text", String)
        .setCheck([Number,String])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.OLEDContext);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
//    this.setTooltip("test");  
    this.setInputsInline(true);

    },
};
