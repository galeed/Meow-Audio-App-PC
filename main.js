const { app, BrowserWindow } = require('electron');
const path = require('path');

// Desactiva la aceleración por hardware para evitar el parpadeo en Arch Linux
app.disableHardwareAcceleration();

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,      // Más ancho para que el layout de 2 columnas respire bien
    height: 800,      // Altura cómoda
    minWidth: 950,    // Evita que el usuario la encoja tanto que rompa el diseño de PC
    minHeight: 600,
    title: "🐱 MEOW AUDIO APP PC",
    autoHideMenuBar: true, // Oculta la barra de menú (Archivo, Editar, etc.)
    icon: path.join(__dirname, 'icon-512.png'), // Añade el icono si tienes el archivo
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