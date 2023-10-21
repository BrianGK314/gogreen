// The ESP32 prototype makes a post request to save sensor data in Cloudant using Cloud Functions as seen below


//No feasible nodeRed support/IOT Platform support for MQTT

#include <WiFi.h>
#include <ArduinoJson.h>
#include <HTTPClient.h>

#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
int co2Pin = 2; // Pin for the MQ-135 sensor

//initialise oled display to view emissions at the same time
#define SCREEN_WIDTH 128 // OLED display width, in pixels
#define SCREEN_HEIGHT 32 // OLED display height, in pixels
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, -1);

char* ssid = "Wokwi-GUEST";
char* password = "";
char jsonOutput[128];


int limit;
int value;

//set up ultrasonic sensor to get area of chimney for in situ monitoring
const int trigPin = 15;
const int echoPin = 14;
long duration;
int distance;
int area;

void setup() {
  Serial.begin(115200);
  pinMode(co2Pin, INPUT);
  WiFi.begin(ssid, password);
  Serial.print("Connecting to WiFi");

  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }

  Serial.println("\nConnected to the WiFi network");
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());

      
  pinMode(trigPin, OUTPUT); 
  pinMode(echoPin, INPUT);
    
    
    if(!display.begin(SSD1306_SWITCHCAPVCC, 0x3C)) { // Address 0x3D for 128x64
      Serial.println(F("SSD1306 allocation failed"));
      for(;;);
    }
}

void loop() {

  value= analogRead(AOUTpin);

  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  duration = pulseIn(echoPin, HIGH);
  distance = duration * 0.034 / 2;
  
  area = 0.25*3.14159*distance*distance;

  display.clearDisplay();

  //diplsay chimney area and ppm of CO2 in chimney
  display.setTextSize(2);
  display.setCursor(0,0);
  display.setTextColor(WHITE);

  display.print("CO2: ");
  display.println(value);
  display.print("CCSA: ");
  display.println(area); 
  display.display();

  if ((WiFi.status() == WL_CONNECTED)) {
    HTTPClient client;
    client.begin("https://XXXXXXXXX.eu-gb.apigw.appdomain.cloud/api/YYYYYY"); // cloud function to place values into cloudant
    client.addHeader("Content-Type", "application/json");

    const size_t CAPACITY = JSON_OBJECT_SIZE(1);
    StaticJsonDocument<CAPACITY> doc;

    int co2Value = analogRead(co2Pin); // Read CO2 value from the sensor
    JsonObject object = doc.to<JsonObject>();
    object["co2"] = co2Value;

    serializeJson(doc, jsonOutput);
    int httpCode = client.POST(String(jsonOutput));

    if (httpCode > 0) {
      String payload = client.getString();
      Serial.println("\nStatuscode:" + String(httpCode));
      Serial.println(payload);

      client.end();
    } else {
      Serial.println("Error on HTTP request");
    }
  } else {
    Serial.println("Connection lost");
  }
  delay(1000);
}
