const {Config} = require("../../system/config");

class InitConfigStep {
    constructor() {
        this.config = new Config();
    }

    run() {
        this.config.init();
        this.config.save();
    }
}

module.exports = {InitConfigStep};
