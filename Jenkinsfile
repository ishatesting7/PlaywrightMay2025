pipeline {
    agent any
    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    npm install
                    npx playwright install
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    npx playwright test --reporter=allure-playwright
                }
            }
        }
        stage('Publish Report') {
            steps {
                script {
                    allure([
                        results: [[path: 'allure-results']],
                        report: 'allure-report'
                    ])
                }
            }
        }
        post {
        always {
            slackSend (
                channel: '#automation',
                message: "Playwright API Tests completed. Check Jenkins for details.",
                color: 'good' // Use 'danger' for failures
            )
        }
    }
    }
}
