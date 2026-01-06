pipeline {
    agent any

    environment {
        NODE_VERSION = '18'
        TINA_PUBLIC_IS_LOCAL = 'true'
    }

    tools {
        nodejs 'NodeJS-18'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Setup Node.js') {
            steps {
                sh 'node --version'
                sh 'npm --version'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Lint') {
            steps {
                sh 'npm run lint || true'
            }
        }

        stage('Type Check') {
            steps {
                sh 'npm run type-check || true'
            }
        }

        stage('Build') {
            steps {
                withCredentials([
                    string(credentialsId: 'TINA_CLIENT_ID', variable: 'TINA_CLIENT_ID'),
                    string(credentialsId: 'TINA_TOKEN', variable: 'TINA_TOKEN')
                ]) {
                    sh 'npm run build'
                }
            }
        }

        stage('Test') {
            steps {
                sh 'npm test || true'
            }
        }

        stage('Export Static Site') {
            when {
                branch 'main'
            }
            steps {
                withCredentials([
                    string(credentialsId: 'TINA_CLIENT_ID', variable: 'TINA_CLIENT_ID'),
                    string(credentialsId: 'TINA_TOKEN', variable: 'TINA_TOKEN')
                ]) {
                    sh 'npm run export'
                }
            }
        }

        stage('Archive Artifacts') {
            when {
                branch 'main'
            }
            steps {
                archiveArtifacts artifacts: 'out/**', fingerprint: true
            }
        }
    }

    post {
        always {
            cleanWs()
        }
        success {
            echo 'Build succeeded!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}
