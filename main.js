const path = require('path');
const url = require('url');
const {app, BrowserWindow} = require('electron');
const { create } = require('domain');
const {session}   = require('electron');

let win;

function createWindow(){
    win = new BrowserWindow({width:700,height:500,
         icon: __dirname + "/img/icon.png", webPreferences:{
             devTools: false
         }});

    win.setResizable(false);
    win.removeMenu();
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    session.defaultSession.clearStorageData();


    win.on('closed', ()=>{
        win = null;
    });
}

app.on('ready', createWindow);
