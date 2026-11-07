# Maintainer: galeed <galeed@archlinux.local>
pkgname=meow-audio-app-pc-git
pkgver=r124.7a31bde
pkgrel=1
pkgdesc="Reproductor de audio local PWA con sistema de skins (Electron wrapper)"
arch=('any')
url="https://github.com/galeed/Meow-Audio-App-PC"
license=('MIT')
depends=('electron')
makedepends=('git' 'npm')
source=("git+$url.git")
sha256sums=('SKIP')

pkgver() {
  cd "$srcdir/Meow-Audio-App-PC"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "$srcdir/Meow-Audio-App-PC"
  # Si en el futuro añades dependencias de npm, se instalarían aquí
  # npm install --omit=dev
  true
}

package() {
  cd "$srcdir/Meow-Audio-App-PC"

  # 1. Instalar los archivos de la app
  install -d "$pkgdir/usr/share/meow-audio-app"
  cp -r * "$pkgdir/usr/share/meow-audio-app/"

  # 2. Crear el lanzador ejecutable apuntando a main.js
  install -d "$pkgdir/usr/bin"
  cat <<EOF > "$pkgdir/usr/bin/meow-audio-app"
#!/bin/bash
exec electron /usr/share/meow-audio-app/main.js "\$@"
EOF
  chmod +x "$pkgdir/usr/bin/meow-audio-app"

  # 3. Crear el acceso directo (.desktop)
  install -d "$pkgdir/usr/share/applications"
  cat <<EOF > "$pkgdir/usr/share/applications/meow-audio-app.desktop"
[Desktop Entry]
Name=Meow Audio App
Comment=Reproductor de audio local
Exec=meow-audio-app %U
Terminal=false
Type=Application
Icon=meow-audio-app
Categories=Audio;Music;Player;
EOF

  # 4. Copiar el icono (asumiendo que tienes un icon-512.png en tu repo)
  install -d "$pkgdir/usr/share/pixmaps"
  if [ -f "icon-512.png" ]; then
    cp icon-512.png "$pkgdir/usr/share/pixmaps/meow-audio-app.png"
  fi
}