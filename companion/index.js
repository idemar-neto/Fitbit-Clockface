import { me } from "companion";
import * as messaging from "messaging";
import { settingsStorage } from "settings";
import { outbox } from "file-transfer"
import { Image } from "image"

import * as util from "../common/utils";

if (me.launchReasons.settingChanged)
  sendSettingsToApp(getAllSettingsValues());

messaging.peerSocket.onopen = function () {
  sendSettingsToApp(getAllSettingsValues());
};

settingsStorage.onchange = function (evt) {
  if (evt.key === "background-image") {
    compressAndTransferImage(evt.newValue)
  } else {
    let settings = {};
    settings[evt.key] = parseJsonSetting(evt.newValue);
    sendSettingsToApp(settings);
  }
};

function getAllSettingsValues() {
  let settings = {};

  let index = 0;
  let key = settingsStorage.key(index);
  while (key !== null && key !== undefined) {
      if(key !== "background-image"){
      settings[key.toString()] = parseJsonSetting(settingsStorage.getItem(key.toString()));

      index++;
      key = settingsStorage.key(index);
      }
  }

  return settings;
}

function compressAndTransferImage(settingsValue) {
  if (!settingsValue) return    // assume we're removing the image

  const imageData = JSON.parse(settingsValue)
  Image.from(imageData.imageUri)
    .then(image =>
      image.export("image/jpeg", {
        background: "#FFFFFF",
        quality: 80
      })
    )
    .then(buffer => outbox.enqueue(`${Date.now()}.jpg`, buffer)).then((ft) => {
      console.log(`Transfer of ${ft.name} successfully queued.`);
    })
    .catch((error) => {
      console.log(`Failed to queue ${filename}: ${error}`);
    })
    .then(fileTransfer => {
    })
}

function sendSettingsToApp(settings) {
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN)
    messaging.peerSocket.send(settings);
}

function parseJsonSetting(value) {
  if (value !== undefined && value !== null) {
    let parsedValue = JSON.parse(value);

    if (parsedValue.hasOwnProperty("values"))
      parsedValue = parsedValue["values"];
    else if (parsedValue.hasOwnProperty("value"))
      parsedValue = parsedValue["value"];
    else if (parsedValue.hasOwnProperty("name"))
      parsedValue = parsedValue["name"];

    return parsedValue;
  } else
    return value;
}

