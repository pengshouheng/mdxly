'use strict';

goog.provide('Blockly.Arduino.Microduino');

goog.require('Blockly.Arduino');


/*
Blockly.Arduino.mCookie_bluetooth_readString = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>';
  //Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';

  if(dropdown_pin=='core')
    Blockly.Arduino.definitions_['define_SoftwareSerial'] = 'SoftwareSerial mySerial(4, 5);';
    Blockly.Arduino.definitions_['define_mySerial'] = '#define my_Serial  mySerial';  
  else {
    Blockly.Arduino.definitions_['define_mySerial'] = '#define my_Serial Serial1';
  }
  
  Blockly.Arduino.setups_['setup_mCookie_bluetooth'] = 'my_Serial.begin(9600);';
  //Blockly.Arduino.setups_['setup_mCookie_Serial'] = 'Serial.begin(9600);';
  var code = 'my_Serial.readString()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.mCookie_bluetooth_available = function() {


  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.definitions_['define_Software'] = '#include <SoftwareSerial.h>';
  if(dropdown_pin=='core')
    Blockly.Arduino.definitions_['define_SoftwareSerial'] = 'SoftwareSerial mySerial(4, 5);';
    Blockly.Arduino.definitions_['define_mySerial'] = '#define my_Serial  mySerial';  
  else {
    Blockly.Arduino.definitions_['define_mySerial'] = '#define my_Serial Serial1';
  }
  
  Blockly.Arduino.setups_['setup_mCookie_bluetooth'] = 'my_Serial.begin(9600);';
  Blockly.Arduino.setups_['setup_mCookie_Serial'] = 'Serial.begin(9600);';


  var code = 'my_Serial.available()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
*/


Blockly.Arduino.bluetoothMicroduinoBegin = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.definitions_['define_Software'] = '#include <SoftwareSerial.h>';
  Blockly.Arduino.definitions_['define_blueReciveInfo'] = 'String currentInfo="";';

  
  if(dropdown_pin=='core') {
    Blockly.Arduino.definitions_['define_SoftwareSerial'] = 'SoftwareSerial mySerial(4, 5);';
    Blockly.Arduino.definitions_['define_mySerial'] = '#define my_Serial  mySerial';  
  }
  else {
    Blockly.Arduino.definitions_['define_mySerial'] = '#define my_Serial Serial1';
  }
  Blockly.Arduino.setups_['setup_mCookie_bluetooth'] = 'my_Serial.begin(9600);';
  var code = '';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.bluetoothMicroduinoReciver = function() {

var branch = Blockly.Arduino.statementToCode(this, 'reciverDataInput');

  var code = 'if (my_Serial.available() > 0) { \n';
  code+=" currentInfo = my_Serial.readStringUntil('\\n');\n";
  code+=branch;
  code+='}\n';
  return code;
};



Blockly.Arduino.btMicroduinoReciverData = function() {

  var code = 'currentInfo';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
  //return code;
};



Blockly.Arduino.btMicroduinoSenderData = function() {
var str = Blockly.Arduino.valueToCode(this, 'senderText', Blockly.Arduino.ORDER_ATOMIC) || 'String(\"\")';

  var code = 'my_Serial.println('+str+');\n';
  //return [code, Blockly.Arduino.ORDER_ATOMIC];
  return code;
};