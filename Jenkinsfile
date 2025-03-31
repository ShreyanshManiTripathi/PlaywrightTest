pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                npm install
                npx  playwright install
                npx playwright test tests/login.spec.js --project=chromium --headed
            }
        }
    }
}
