# Installer JS

Installer JS is a package that let's you download files. It was made for a plugin system but I remade it so it can download any files.

## Installation

Use the package manager [NPM](https:/npmjs.com/) to install InstallerJS.

```bash
npm i installerjs
```

## Usage

```javascript
const installer = require("installerjs");

installer("https://pajsen.se/drop.js");
```

## Coming Features
I will add so it will save the file with the extention as the URL, so it will have https://pajsen.se/drop.js as a JS file and not as a TXT file

Better path handling and async functions



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)