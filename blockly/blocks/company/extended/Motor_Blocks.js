'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');


var colorSet=120;


Blockly.Blocks.MotorBegin = {
   init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.CubeCar)
        .appendField(new Blockly.FieldImage("../../media/Microduino/mCookie_Motor.jpg", 45, 32))
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    }
};

Blockly.Blocks.MotorBeginchange = {
   init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.N20begin)
        .appendField(new Blockly.FieldImage("../../media/Microduino/mCookie_Motor.jpg", 45, 32))
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    }
};

Blockly.Blocks.Motor_run = {
   init: function() {

    var Break_left_right = [
                 [Blockly.motor_left, '1'],
                 [Blockly.motor_right, '2'],
              ];

    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.N20choose)
        .appendField(new Blockly.FieldDropdown(Break_left_right), 'Break_left_right');
    this.appendDummyInput("")
        .appendField(Blockly.motor_ctrl)
        .appendField(new Blockly.FieldTextInput("255"), "motor_ctrl")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    }
};

Blockly.Blocks.MotorBreak = {
  init: function() {

  var Break_left_right = [
                 [Blockly.motor_left, '1'],
                 [Blockly.motor_right, '2'],
              ];

    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.N20Break)
        .appendField(new Blockly.FieldDropdown(Break_left_right), 'Break_left_right');

    //this.setOutput(true, Number);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

Blockly.Blocks.MotorFree = {
  init: function() {

  var Free_left_right = [
                 [Blockly.motor_left, '1'],
                 [Blockly.motor_right, '2'],
              ];

    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendTitle(Blockly.N20Free)
        .appendField(new Blockly.FieldDropdown(Free_left_right), 'Free_left_right');

    //this.setOutput(true, Number);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

Blockly.Blocks.Car_Motor = {
  init: function() {
    this.setColour(colorSet);


  this.appendValueInput('speed')
        .setCheck(Number)
        .appendTitle(' '+Blockly.carSpeed);
  this.appendValueInput('angle')
        .setCheck(Number)
        .appendTitle(' '+Blockly.carAngle);
  this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  this.setTooltip(Blockly.LKL_IR_SEND_RAW_TOOLTIP);
  }
};

Blockly.Blocks.mCookie_Motor = {
   init: function() {
    this.setColour(colorSet);
    this.appendDummyInput("")
        .appendField(Blockly.carSpeed)
        .appendField(new Blockly.FieldTextInput("255"), "speed")
        .appendField(Blockly.carAngle)
        .appendField(new Blockly.FieldTextInput("0"), "angle");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setInputsInline(true);
    }
};
