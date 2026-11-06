# Maintainer: galeed <galeedx@gmail.com>
pkgname=meow-audio-app-pc-git
pkgver=r124.7a31bde # Se autogenerará con tus commits actuales
pkgrel=1
pkgdesc="Reproductor de audio local PWA con sistema de Skins (HTML/CSS/JS)"
arch=('any')
url="https://github.com/galeed/Meow-Audio-App-PC"
license=('MIT')
depends=('electron')
makedepends=('git' 'npm')
source=("git+$url.git")
sha256sums=('SKIP')

pkgver() {
  cd "$srcdir/${pkgname%-git}"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
  cd "$srcdir/${pkgname%-git}"

  # 1. Instalar dependencias de desarrollo/producción requeridas en el entorno aislado
  npm install --production

  # 2. Crear las carpetas del sistema de destino
  install -d "$pkgdir/usr/lib/$pkgname"
  install -d "$pkgdir/usr/bin"
  install -d "$pkgdir/usr/share/applications"

  # 3. Copiar de forma exhaustiva todos los archivos necesarios de tu app
  # Asegúrate de incluir el sw.js, manifest.json y las dependencias
  cp -r index.html styles.css app.js main.js sw.js manifest.json package.json node_modules "$pkgdir/usr/lib/$pkgname/"

  # 4. Crear el script ejecutable para arrancar Electron nativo
  echo -e "#!/bin/sh\nexec electron /usr/lib/$pkgname/main.js \"\$@\"" > "$pkgdir/usr/bin/meow-audio-app"
  chmod +755 "$pkgdir/usr/bin/meow-audio-app"

  # 5. Lanzador para el Menú de Aplicaciones
  cat <<EOF > "$pkgdir/usr/share/applications/meow-audio-app.desktop"
[Desktop Entry]
Type=Application
Name=Meow Audio App
Comment=Reproductor PWA local con sistema de Skins
Exec=/usr/bin/meow-audio-app
Icon=audio-x-generic
Terminal=false
Categories=AudioVideo;Audio;Player;
EOF
}
