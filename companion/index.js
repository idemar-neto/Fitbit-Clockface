import { me } from "companion";
import * as messaging from "messaging";
import { settingsStorage } from "settings";

import * as util from "../common/utils";

if (me.launchReasons.settingChanged)
  sendSettingsToApp(getAllSettingsValues());

messaging.peerSocket.onopen = function() {
  sendSettingsToApp(getAllSettingsValues());
};

settingsStorage.onchange = function(evt) {
  let settings = {};
  settings[evt.key] = parseJsonSetting(evt.newValue);
  
  sendSettingsToApp(settings);
};

function getAllSettingsValues() {
  let settings = {};
  
  let index = 0;
  let key = settingsStorage.key(index);
  while (key !== null && key !== undefined) {
    settings[key.toString()] = parseJsonSetting(settingsStorage.getItem(key.toString()));

    index++;
    key = settingsStorage.key(index);
  }
  
  return settings;
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

