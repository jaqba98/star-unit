const {Config} = require("../../system/config");
const {ConfigStore} = require("../../store/config.store");

class LoadConfigStep {
    constructor() {
        this.config = new Config();
    }

    run() {
        this.config.initDefault();
        console.log(ConfigStore.root);
    }
}

module.exports = {LoadConfigStep};
