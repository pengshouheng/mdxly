#include <SoftwareSerial.h>
#include "Microduino_Audio.h"
#include <Microduino_Key.h>

#define key_pin A6

Key KeyA(key_pin, INPUT);

SoftwareSerial mySerial(2, 3); // RX, TX
JQ6500 AUDIO(&mySerial);     //音频控制类实例,使用软串口（2，3）
//JQ6500 AUDIO(&Serial1);

//musicload: DEVICE_TF DEVICE_FLASH
//musicMode: MODE_ALL MODE_FOL MODE_ONE MODE_RAM MODE_ONE_STOP
//musicVol:0-30

boolean music_status;
int musicVol = 25;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);

  AUDIO.init(DEVICE_TF, MODE_ONE, musicVol);
  AUDIO.choose(1);
  AUDIO.pause();

  Serial.println("AUDIO init___");
}

void loop() {
  /*
    AUDIO.next();
    AUDIO.prev();
    AUDIO.choose(uint16_t num);
    AUDIO.volUp();
    AUDIO.volDown();
    AUDIO.volumn(uint8_t vol);
    AUDIO.play();
    AUDIO.pause();
  */
  // put your main code here, to run repeatedly:
  if (KeyA.read(PRESS, 0, 100))
  {
    delay(200);
    music_status = !music_status;
    music_status ? AUDIO.play() : AUDIO.pause();
  }
  else if (KeyA.read(PRESS, 100, 180))
  {
    delay(100);
    AUDIO.next();
  }
  else if (KeyA.read(PRESS, 180, 250))
  {
    delay(100);
    AUDIO.prev();
  }
  //Serial.println(analogRead(key_pin));
  //delay(100);
}
