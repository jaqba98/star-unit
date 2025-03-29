const { StepRunner } = require("../system/step-runner");
const { AStep } = require("../steps/a.step");
const { BStep } = require("../steps/b.step");

class InitProgram {
    run() {
        const stepRunner = new StepRunner();
        // todo: Add steps to init configuration
        stepRunner.run([AStep, BStep]);
    }
}

module.exports = { InitProgram };
