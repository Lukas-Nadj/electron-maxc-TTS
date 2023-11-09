// src/preload.js
const { contextBridge, ipcRenderer } = require('electron');
const { exec } = require('child_process');

contextBridge.exposeInMainWorld('electronApi', {
  read: async (string, lang) => {
    let command = "";
    if (lang == "Danish"){
      command = "-v Magnus "
    }
    exec('say '+ command+'"'+string+ '"', (err, stdout, stderr) => {
      if (err) {
        return;
      }
    
      // the *entire* stdout and stderr (buffered)
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    });
  }
});