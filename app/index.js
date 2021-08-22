import clock from "clock";
import * as messaging from "messaging";

import * as settingsFileStorage from "./settingsFileStorage";
import * as clockface from "./simpleCorners";

const settingsFilename = "settings.txt";

initClockface();

function initClockface() {
  //Configure a socket for receiving new settings values from the companion
  messaging.peerSocket.onmessage = function(evt) {
    settingsFileStorage.saveSettings(settingsFilename, evt.data);
    clockface.loadSettings(settingsFileStorage.loadSettings(settingsFilename));
    clockface.updateClockface();
  };
  
  //Initialize the clockface
  clockface.initClockface(settingsFileStorage.loadSettings(settingsFilename));
  
  //Configure the clock
  clock.granularity = "seconds";
  clock.ontick = function() { 
    clockface.updateClockface();
  };
}