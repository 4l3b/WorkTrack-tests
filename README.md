# WorkTrack-tests

Automated Playwright tests for the [WorkTrack web app](https://github.com/4l3b/WorkTrack), using Page Object Model (POM). The tests validate core functionality of the WorkTrack web app, such as starting a work session and verifying clock-in/out timers.

This repository is linked to the main WorkTrack app repository (`4l3b/WorkTrack`). Whenever the WorkTrack repository is updated:

1. A GitHub Actions workflow triggers the test suite in this repository.
2. Tests run automatically on GitHub’s servers.
3. An HTML report is generated automatically for each test run.

![WorkTrack Tests](https://github.com/4l3b/WorkTrack-tests/actions/workflows/run-tests.yml/badge.svg)

[View Playwright Report](https://4l3b.github.io/WorkTrack-tests/playwright-report/index.html)


## License

[MIT License](LICENSE)
