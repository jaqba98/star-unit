const {StepRunner} = require("../system/step-runner");
const {LoadConfigStep} = require("../steps/config/load-config.step");

class RunTestProgram {
    constructor() {
        this.stepRunner = new StepRunner();
    }

    run() {
        this.stepRunner.run([LoadConfigStep]);
    }
}

module.exports = {RunTestProgram};
