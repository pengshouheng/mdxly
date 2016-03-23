#include <Microduino_KeyOld.h>

KeyOld KeyA(4, INPUT_PULLUP);
KeyOld KeyB(5, INPUT_PULLUP);
KeyOld KeyC(A6, INPUT);

void setup()
{
  Serial.begin(9600);
}

void loop()
{
  if (KeyA.read(RELEASE))
    Serial.println("KEY A(digital)!");                  // sets the servo position according to the scaled value
  if (KeyB.read(PRESS))
    Serial.println("KEY B(digital)!");                  // sets the servo position according to the scaled value
  if (KeyC.read(PRESS, 500, 530))
    Serial.println("KEY C(analog)!");                  // sets the servo position according to the scaled value
  delay(15);                           // waits for the servo to get there
}
