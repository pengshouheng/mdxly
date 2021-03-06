'use strict';

goog.provide('Blockly.Blocks.Microduino');

goog.require('Blockly.Blocks');


var colorSet=65;

var mCookie_PORTS =[[Blockly.coreUSBBoard, "coreUSB"], [Blockly.coreBoard, "core"], [Blockly.corePlusBoard, "core+"]];


Blockly.Blocks.mCookie_Audio_Serial={
init:function(){
    var mCookie_MODE =[[Blockly.MODE_ONE, "MODE_ONE"], [Blockly.MODE_ONE_STOP, "MODE_ONE_STOP"], [Blockly.MODE_ALL, "MODE_ALL"],[Blockly.MODE_FOL, "MODE_FOL"],[Blockly.MODE_RAM, "MODE_RAM"]];

    var mCookie_DEVICE =[[Blockly.flashMemory, "DEVICE_FLASH"], [Blockly.tfCard, "DEVICE_TF"]];
    this.setColour(colorSet);
this.appendDummyInput("")
        .appendTitle(Blockly.chooseAudioPlay);

    this.appendDummyInput("")
        .appendTitle(Blockly.chooseAudioSerial)
        .appendTitle(new Blockly.FieldDropdown(mCookie_PORTS), "PIN")
        .appendTitle(Blockly.memoryDevice)
        .appendTitle(new Blockly.FieldDropdown(mCookie_DEVICE), "PIN1")
        .appendTitle(Blockly.playMode)
        .appendTitle(new Blockly.FieldDropdown(mCookie_MODE), "PIN2")
    this.appendValueInput("Vol", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.volume);
    //this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks.mCookie_Audio_Play={
init:function(){
    this.setColour(colorSet);
    this.appendDummyInput("")
         .appendTitle(Blockly.AudioPlay)
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};
Blockly.Blocks.mCookie_Audio_Pose={
init:function(){
    this.setColour(colorSet);
    this.appendDummyInput("")
         .appendTitle(Blockly.AudioPause)
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};
Blockly.Blocks.mCookie_Audio_Next={
init:function(){
    this.setColour(colorSet);
    this.appendDummyInput("")
         .appendTitle(Blockly.AudioNext)
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};
Blockly.Blocks.mCookie_Audio_Prev={
init:function(){
    this.setColour(colorSet);
    this.appendDummyInput("")
         .appendTitle(Blockly.AudioPrev)
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};
Blockly.Blocks.mCookie_Audio_VolUp={
init:function(){
    this.setColour(colorSet);
    this.appendDummyInput("")
         .appendTitle(Blockly.AudioVolUp)
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};
Blockly.Blocks.mCookie_Audio_VolDown={
init:function(){
    this.setColour(colorSet);
    this.appendDummyInput("")
         .appendTitle(Blockly.AudioVolDown)
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};