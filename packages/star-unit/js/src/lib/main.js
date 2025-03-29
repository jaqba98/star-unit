const StepRunner = require('./system/step-runner');
const AStep = require('./steps/a.step');
const BStep = require('./steps/b.step');

(() => new StepRunner().run([
    AStep,
    BStep
]))();
