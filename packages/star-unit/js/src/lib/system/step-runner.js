class StepRunner {
    run(steps) {
        for (let step of steps) {
            new step().run();
        }
    }
}

module.exports = StepRunner;
