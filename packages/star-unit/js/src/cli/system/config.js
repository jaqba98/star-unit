const fs = require('fs');
const {ConfigStore} = require("../store/config.store");
const {ParamsStore} = require("../store/params.store");

class Config {
    initDefault() {
        ConfigStore.root = './packages';
    }

    init() {
        ConfigStore.root = ParamsStore.getItem('root');
    }

    save() {
        fs.writeFileSync('star-unit.config.json', JSON.stringify({
            root: ConfigStore.root
        }, null, 2));
    }
}

module.exports = {Config};
