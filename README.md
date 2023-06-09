# MousePSD

Source code of [MousePSD game engine](https://lampysprites.itch.io/mouse-psd). Please visit the linked page for a ready to use distribution of the program.

### Structure

- Exporter GUI is a python program that processes resources and bundles them with runtime files.
- Runtime, needed to run or export the project, is an executable (or js bundle) that is built separately.
- Audio encoding is done with FFmpeg, whose executable should be placed into `tools/` subfolder.

### Obtaining code
Unless you have Kha set up somewhere else (eg vscode extension), use recursive clone:
```sh
git clone --recursive --init --depth 1 ssh://git@github.com/lampysprites/mouse-psd
# if windows
mouse-psd\Kha\get_dlc.bat
# if linux or macox
./mouse-psd/Kha/get_dlc
```

### Running exporter

Requires [python3](https://python.org).

```py
pip install -r requirements.txt
python mouse.py
```

### Compiling runtimes
This project is build with [Kha framework](https://github.com/Kode/Kha), and all its build options can be used.

```sh
# html5 bundle
Kha\make.bat html5

# windows executable (needs a c++ compiler installed)
Kha\make.bat windows --build --compile

# createan xcode project for macox
Kha\make.bat osx
```

etc.


### Compiling your project

There's a way to build the game as Kha project for [a wider range of platforms](https://github.com/kode/kha#supported-platforms) not simply supported in the exporter, or add some custom logic to it. To do that place exported assets in a new folder inside the repo (say, `Assets`) and add following line to `khafile.js`:

```js
// const project = ... /* after this line */
project.addAssets('Assets/**');
// resolve(project) /* before this line*/
```

Then compile same as runtimes.
