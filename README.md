# 🐱 MEOW AUDIO APP PC (v9.5)

**Un reproductor de audio local para escritorio (Linux/Arch) construido con HTML, CSS, JavaScript puro y empaquetado con Electron.**

Meow Audio App es una aplicación de escritorio diseñada para reproducir tu música local con una calidad de interfaz excepcional. No requiere backend, todo el procesamiento de audio es local y tus datos se quedan en tu dispositivo.

## ✨ Características Principales (PC)

*   🖥️ **Diseño de Escritorio:** Interfaz adaptada a pantallas grandes con vista de 2 columnas (Reproductor + Fila/Listas).
*   🔍 **Búsqueda Inteligente:** Filtra tu biblioteca en tiempo real por título, artista o álbum usando el botón de la lupa o el atajo `Ctrl + F`.
*   🎵 **Reproducción Local:** Soporte para MP3, WAV, OGG, FLAC, M4A y AAC.
*   🏷️ **Metadatos:** Lectura de ID3 (título, artista, álbum, portada) y specs Hi-Res (FLAC 24bit).
*   🎛️ **Audio Pro:** Ecualizador de 10 bandas, Dolby Spatial Audio, Crossfade, Normalización LUFS y Limitador de picos.
*   🎨 **Sistema de Skins:**
    *   *Classic:* Glassmorphism moderno.
    *   *Consola TUI:* Estética CRT retro con 6 temas de color + editor personalizado.
    *   *@distro_01 y @distro_02:* Inspirados en *fastfetch*, con 26 temas basados en distros de Linux y fondos ASCII gigantes con efecto neón.
    *   *Seasons:* Navidad, Halloween, Cyberpunk y Matrix.
*   ⌨️ **Atajos de Teclado:** Control total sin usar el ratón (`Espacio`, `Flechas`, `N`, `P`, `M`, `F`, etc.).
*   💾 **Privacidad Total:** Persistencia en IndexedDB. Todo es local.

---

## 🚀 Instalación en Arch Linux

Tienes dos formas de instalar la aplicación: usando el paquete pre-compilado (más fácil) o compilando desde el código fuente.

### Opción 1: Instalar el paquete pre-compilado (.pkg.tar.zst)

1. Ve a la sección **Releases** de este repositorio.
2. Descarga el archivo `meow-audio-app-pc-git-...pkg.tar.zst` más reciente.
3. Abre una terminal en la carpeta donde descargaste el archivo y ejecuta:

   sudo pacman -U meow-audio-app-pc-*.pkg.tar.zst

4. ¡Listo! Ya puedes abrir la app desde tu menú de aplicaciones buscando "Meow Audio App" o ejecutando `meow-audio-app` en la terminal.


### Opción 2: Compilar desde el código fuente (Recomendado para desarrolladores)

Si quieres modificar el código o compilarlo tú mismo:

1. Asegúrate de tener instaladas las dependencias de desarrollo:

   sudo pacman -S base-devel git electron

2. Clona este repositorio y entra a la carpeta:

   git clone https://github.com/galeed/Meow-Audio-App-PC.git
   cd Meow-Audio-App-PC

3. Compila e instala usando `makepkg`:

   makepkg -si

*(`makepkg` descargará las fuentes, creará el paquete y lo instalará automáticamente con `pacman`).*

---

## ⌨️ Atajos de Teclado

| Tecla | Acción |
|-------|--------|
| `Espacio` | Play / Pausa |
| `←` / `→` | Retroceder / Avanzar 10 segundos |
| `N` / `P` | Siguiente / Anterior pista |
| `↑` / `↓` | Subir / Bajar volumen |
| `M` | Mute / Unmute |
| `F` | Pantalla completa |
| `O` | Abrir archivos |
| `Ctrl + F` | Abrir barra de búsqueda |
| `Esc` | Cerrar paneles o menús |

## 🛠️ Tecnologías Utilizadas

*   **HTML5 & CSS3** (Estilos puros, variables CSS para los temas).
*   **JavaScript (Vanilla)** (Lógica del reproductor, Web Audio API, IndexedDB).
*   **Electron** (Entorno de escritorio y ventana nativa).
*   **Arch Linux (PKGBUILD)** (Sistema de empaquetado para Linux).

## 📝 Notas para Desarrolladores

*   **Caché de Service Worker:** Si haces cambios en el CSS o JS, recuerda subir la versión en `sw.js` (ej. de `v9.1` a `v9.2`) para forzar la actualización en los navegadores.
*   **Hardware Acceleration:** En Arch Linux (especialmente con ciertas GPUs), Electron puede parpadear. Hemos añadido `app.disableHardwareAcceleration()` en `main.js` para solucionarlo.
*   **Actualizar PKGBUILD:** Si subes cambios a GitHub, recuerda actualizar el `pkgver` en el `PKGBUILD` o simplemente borrar las carpetas `src` y `pkg` antes de volver a compilar.

## 📄 Licencia

MIT — ver [LICENSE](LICENSE).
