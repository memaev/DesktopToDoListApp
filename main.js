const { app, BrowserWindow, Menu } = require('electron')
const { markAsUntransferable } = require('worker_threads')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 500,
      height: 700
    })
  
    win.loadFile('index.html')
    win.setMenuBarVisibility(false);
}

  app.whenReady().then(() => {
    createWindow()
  })