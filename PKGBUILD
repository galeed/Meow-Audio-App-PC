# Maintainer: Galeed León <galeedx@gmail.com>

pkgname=meow-audio-app-git
pkgver=r1.0
pkgrel=1
pkgdesc="Mi aplicación HTML/CSS/JS instalable como app nativa de escritorio"
arch=('any')
url="https://github.com/galeed/Meow-Audio-App-PC.git
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

  # 1. Instalar dependencias de Node.js si las hay
  npm install --production

  # 2. Crear las rutas en el sistema del usuario
  install -d "$pkgdir/usr/lib/$pkgname"
  install -d "$pkgdir/usr/bin"
  install -d "$pkgdir/usr/share/applications"

  # 3. Copiar los archivos que ya tienes en GitHub al sistema del usuario
  # Puedes usar * si quieres copiar absolutamente todo lo que hay en tu repo
  cp -r index.html styles.css app.js manifest.js sw.js main.js app-icon.ico package.json node_modules "$pkgdir/usr/lib/$pkgname/"

  # 4. Crear el ejecutable del sistema
  echo -e "#!/bin/sh\nexec electron /usr/lib/$pkgname/main.js \"\$@\"" > "$pkgdir/usr/bin/$pkgname"
  chmod +755 "$pkgdir/usr/bin/$pkgname"

  # 5. Crear el acceso directo para el menú de inicio
  cat <<EOF > "$pkgdir/usr/share/applications/$pkgname.desktop"
[Desktop Entry]
Type=Application
Name=Meow Audio App
Comment=Aplicación nativa de escritorio
Exec=/usr/bin/$pkgname
Icon=utilities-terminal
Terminal=false
Categories=Utility;
EOF
}
