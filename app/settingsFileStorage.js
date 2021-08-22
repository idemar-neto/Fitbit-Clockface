import { unlinkSync, writeFileSync, readFileSync } from "fs";

//Clear the saved settings from the filesystem
export function clearSettings(settingsFilename) {
  try {
    unlinkSync(settingsFilename);
  } catch(e) {
    //File doesn't exist - no other way to check right now other than try/catch
  }
}

//Save the settings to the filesystem
export function saveSettings(settingsFilename, newSettings) {
  //Load current settings
  let settings = loadSettings(settingsFilename);
  
  //Assign the new settings values
  for (const key in newSettings) {
    if (newSettings[key] !== undefined)
      settings[key] = newSettings[key];
  }
  
  writeFileSync(settingsFilename, settings, "cbor");
}

//Get the settings from the filesystem
export function loadSettings(settingsFilename) {
  let settings = null;
  
  try {
    settings = readFileSync(settingsFilename, "cbor");
  } catch(e) {
    //File doesn't exist - no other way to check right now other than try/catch
    settings = {};
  }
  
  return settings;
}