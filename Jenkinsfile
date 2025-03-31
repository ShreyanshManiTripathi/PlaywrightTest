pipeline {
    agent any

    environment {
        // Set NODE_HOME to the Node.js installation directory
        NODE_HOME = 'C:\\Program Files\\nodejs'

        // Update PATH to include the Node.js directory (append NODE_HOME to the existing PATH)
        PATH = "${NODE_HOME};${env.PATH}"  // This ensures that Node.js and npm are found in PATH
    }

    stages {
        stage('Checkout Repository') {
            steps {
                script {
                    // Checkout the repository
                    echo "Cloning Git repository..."
                    git url: 'https://github.com/ShreyanshManiTripathi/PlaywrightTest.git'
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    echo "Installing npm dependencies..."
                    bat 'npm install'
                }
            }
        }

        stage('Install Playwright') {
            steps {
                script {
                    echo "Installing Playwright..."
                    bat 'npx playwright install'
                }
            }
        }

        stage('Run Playwright Tests') {
            steps {
                script {
                    echo "Running Playwright tests..."
                    bat 'npx playwright test tests'
                }
            }
        }
    }
}
