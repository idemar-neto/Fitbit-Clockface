import clock from "clock";
import * as messaging from "messaging";

import * as jpeg from "jpeg"
import { inbox } from "file-transfer"
import * as fs from 'fs'
import document from 'document'

import * as settingsFileStorage from "./settingsFileStorage";
import * as clockface from "./simpleCorners";

const settingsFilename = "settings.txt";

let state = {
  sec:        true,         // false=date
  activity:   0,            // ACTIVITY_TYPE currently displayed
  col:        '#40e0e0',    // non-white text colour
  background: undefined     // filename of background image
};
const DATA_DIR = '/private/data/';

initClockface();
;(function() {
  receiveFiles()
  inbox.onnewfile = receiveFiles
})();

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

function receiveFiles() {
  let fileName
  
  while (fileName = inbox.nextFile()) {
    let fileExtIndex, extension;
    fileExtIndex = fileName.lastIndexOf('.')
    extension = fileName.slice(fileExtIndex + 1)
    switch(extension) {
      case 'jpg': receiveImage(fileName); break
    }
    fs.unlinkSync(fileName)
  }

  saveState()
}

function receiveImage(fileName) {
  if (state.background) fs.unlinkSync(state.background);  // delete previous image file, if any

  state.background = Date.now() + ".txi"
  jpeg.decodeSync(fileName, state.background, {overwrite:true})
  let background_path = DATA_DIR + state.background;
  clockface.setbgPath(background_path);
  clockface.loadSettings(settingsFileStorage.loadSettings(settingsFilename));
}

function saveState() {
  fs.writeFileSync("state.cbor", state, "cbor")
}