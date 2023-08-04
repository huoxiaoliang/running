import { app, BrowserWindow, Menu, ipcMain, dialog } from "electron";
import path from "node:path";

process.env.DIST = path.join(__dirname, "../dist");
process.env.PUBLIC = app.isPackaged
  ? process.env.DIST
  : path.join(process.env.DIST, "../public");

const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"] ?? "";
const isDev = VITE_DEV_SERVER_URL?.length > 0;

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: isDev ? 1200 : 800,
    height: 520,
    resizable: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  if (isDev) mainWindow.webContents.openDevTools();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
  if (isDev) {
    mainWindow.loadURL(VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(path.join(process.env.DIST ?? "", "index.html"));
  }
}

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.whenReady().then(() => {
  createWindow();
  app.on("activate", async () => {
    if (BrowserWindow.getAllWindows().length === 0) await createWindow();
  });
});
