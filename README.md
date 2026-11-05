# 🐱 MEOW AUDIO APP v9.2

**Un reproductor de audio local PWA con sistema de Skins, construido 100% con HTML, CSS y JavaScript puro.**

Meow Audio App es una aplicación web progresiva (PWA) diseñada para reproducir tu música local con una calidad de interfaz excepcional. No requiere frameworks, no requiere backend, y todos tus datos se quedan en tu dispositivo.

> 🚧 **Estado del proyecto:** Beta (v9.2) - En desarrollo activo.

## 📸 Captura de Pantalla

*(Sube una imagen de tu app a la carpeta del repositorio, por ejemplo `screenshot.png`, y ponla aquí)*
![Vista previa del Skin TUI](screenshot.png)

## ✨ Características Principales

*   🎵 **Reproducción Local:** Soporte para MP3, WAV, OGG, FLAC, M4A y AAC.
*   🏷️ **Metadatos:** Lectura de ID3 (título, artista, álbum, portada) y specs Hi-Res (FLAC 24bit).
*   🎛️ **Audio Pro:** Ecualizador de 10 bandas con 13 presets, Dolby Spatial Audio (simulado), normalización LUFS, limitador de picos y crossfade real.
*   🎨 **Sistema de Skins:**
    *   *Classic:* Glassmorphism moderno.
    *   *Consola TUI:* Estética CRT retro con 6 temas de color + editor personalizado.
    *   *@distro_01 y @distro_02:* Inspirados en *fastfetch*, con 26 temas basados en distros de Linux.
    *   *Seasons:* Navidad, Halloween, Cyberpunk y Matrix con animaciones temáticas.
*   📊 **Visualizadores:** Barras LED, osciloscopio, híbrido, espiral, partículas y 3D. Con 4 paletas científicas (Neon, Viridis, Plasma, Cividis).
*   📱 **PWA & Segundo Plano:** Instálala en móvil o desktop, soporte para pantalla de bloqueo (Media Session API) y reproducción en segundo plano.
*   💾 **Privacidad Total:** Persistencia en IndexedDB. Todo es local, nada viaja a la nube.
*   🖱️ **Drag & Drop:** Arrastra archivos o carpetas enteras al reproductor (desktop).

## 🖥️ Uso en escritorio

### Opción 1: Servidor local (recomendado)

La app necesita servirse por HTTP (no funciona abriendo `index.html` con doble clic, por el Service Worker y los módulos).

```bash
# Con Python 3 (preinstalado en Linux/macOS)
python3 -m http.server 8080

# Con Node.js
npx serve .

# Con PHP
php -S localhost:8080