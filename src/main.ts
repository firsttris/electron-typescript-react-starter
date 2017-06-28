import {app, BrowserWindow} from 'electron';
const url = require('url');

let mainWindow: Electron.BrowserWindow;

// Keep a reference for dev mode
let dev = false;
if (process.argv.indexOf('--dev') > 0) {
    dev = true;
}

function onReady() {
    mainWindow = new BrowserWindow({
        width: 1024,
        height: 768
    });

    // and load the index.html of the app.
    let indexPath: string;
    if (dev) {
        console.log("Development Mode");
        indexPath = url.format({
            protocol: 'http:',
            host: 'localhost:8080',
            pathname: 'index.html',
            slashes: true
        });
    } else {
        console.log("production");
        indexPath = url.format({
            protocol: 'file:',
            pathname: __dirname + '/index.html',
            slashes: true
        });
    }

    mainWindow.loadURL(indexPath);
    if (dev) {
        mainWindow.webContents.openDevTools();
    }
    mainWindow.on('close', () => app.quit());
}

app.on('ready', () => onReady());
app.on('window-all-closed', () => app.quit());
console.log(`Electron Version ${app.getVersion()}`);
