//To stały plik który pozwala na działanie dodawania ścieżek z zewnątrz do naszej innej aplikacji TS
const {override} = require('customize-cra');
const {aliasWebpack, configPaths} = require('react-app-alias-ex');

module.exports = {
    webpack: override(
        aliasWebpack(configPaths('./tsconfig.paths.json'))
    ),
};
