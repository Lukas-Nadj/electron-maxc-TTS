const { app, BrowserWindow, ipcMain, Tray } = require("electron");
const fs = require("fs");
const path = require("path");
const contextMenu = require("electron-context-menu");

contextMenu({
  showSaveImageAs: true,
  showInspectElement: true,
});
let mainWindow;

app.on("ready", () => {

  mainWindow = new BrowserWindow({
    width: 900,
    height: 800,
    icon: "Icon.png",
    webPreferences: {
      preload: path.join(__dirname, "src/preload.js"),
      nodeIntegration: true,
      contextIsolation: true,
    },
  });
 // mainWindow.removeMenu();
  mainWindow.loadFile("public/index.html"); // Adjust the path to your HTML file
  
});

app.on('window-all-closed', () => {
  //request json from frontend
  //saveToJSON()
  app.quit();
})

/*
ipcMain.handle('read', async (string => {
    try {
      // Convert the ArrayBuffer to a Buffer
      const bufferData = Buffer.from(binaryData);
  
      // Construct the file path
      const filePath = path.join(app.getPath("userData"), fileName);
      const directoryPath = path.dirname(filePath);
      
      await fs.promises.mkdir(directoryPath, { recursive: true });
      // Write the file to the specified path
      await fs.promises.writeFile(filePath, bufferData);
  
      return true; // Return success
    } catch (error) {
      console.error('Error saying', error);
      return false; // Return failure
    }
  });*/