const {StepRunner} = require("../system/step-runner");
const {InitConfigStep} = require("../steps/config/init-config.step");

class InitProgram {
    constructor() {
        this.stepRunner = new StepRunner();
    }

    run() {
        this.stepRunner.run([InitConfigStep]);
    }
}

module.exports = {InitProgram};
