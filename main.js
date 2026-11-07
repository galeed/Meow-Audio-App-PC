const { app, BrowserWindow } = require('electron');
const path = require('path');

// Desactiva la aceleración por hardware para evitar el parpadeo en Arch Linux
app.disableHardwareAcceleration();

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 950,
    minHeight: 600,
    title: "🐱 MEOW AUDIO APP PC",
    autoHideMenuBar: true,
    backgroundColor: '#0f1015', // <--- AÑADE ESTO
    icon: path.join(__dirname, 'icon-512.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  // Carga tu archivo HTML principal
  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});