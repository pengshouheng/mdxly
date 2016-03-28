#include <SoftwareSerial.h>

#include "JQ6500.h"

SoftwareSerial audioSerial(2,3);
JQ6500 AUDIO(&audioSerial);
void setup()
{
  AUDIO.init(DEVICE_FLASH,MODE_ONE,20);
AUDIO.choose(1);
AUDIO.pause();

}


void loop()
{

}