'use strict';

goog.provide('Blockly.Arduino.Microduino');

goog.require('Blockly.Arduino');


Blockly.Arduino.IRSenderCode = function() {

  Blockly.Arduino.definitions_['define_ir_recv'] = '#include <IRremote.h>\n';
  Blockly.Arduino.definitions_['var_ir_send'] = 'IRsend irsend;\n';
  var data = Blockly.Arduino.valueToCode(this, 'data',Blockly.Arduino.ORDER_ATOMIC) || '0';
  var bits = Blockly.Arduino.valueToCode(this, 'bits',Blockly.Arduino.ORDER_ATOMIC) || '0';
  var type = this.getFieldValue('TYPE');
  var code='irsend.send'+type+'('+data+','+bits+');\n';
  return code;
};


Blockly.Arduino.IRSenderRaw = function() {

  Blockly.Arduino.definitions_['define_ir_recv'] = '#include <IRremote.h>\n';
  Blockly.Arduino.definitions_['var_ir_send'] = 'IRsend irsend;\n';
  var length = Blockly.Arduino.valueToCode(this, 'length',Blockly.Arduino.ORDER_ATOMIC) || '0';
  var freq = Blockly.Arduino.valueToCode(this, 'freq',Blockly.Arduino.ORDER_ATOMIC) || '0';
  var text = this.getTitleValue('TEXT');
  var code='unsigned int buf_raw['+length+']={'+text+'};\n'
  code=code+'irsend.sendRaw(buf_raw,'+length+','+freq+');\n';
  return code;
  
};

