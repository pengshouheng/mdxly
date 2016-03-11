#include <Microduino_Key.h>

Key Keyleft(A0, INPUT);
Key Keyright(A0, INPUT);
Key Keyup(A0, INPUT);
Key Keydown(A0, INPUT);
void setup()
{
  Serial.begin(9600);
}


void loop()
{
  if(Keyleft.read(0, 1023)==SHORT_PRESS) {
    Serial.println(String("sss"));
  }
  if(Keyright.read(0, 1023)==SHORT_PRESS) {
    Serial.println(String("sss"));
  }
  if(Keyup.read(0, 1023)==SHORT_PRESS) {
    Serial.println(String("sss"));
  }
  if(Keydown.read(0, 1023)==SHORT_PRESS) {
    Serial.println(String("sss"));
  }

}