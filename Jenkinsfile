pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Cloning latest code from GitHub...'
                checkout scm
            }
        }

        stage('Verify Tools') {
            steps {
                echo 'Checking Docker tools on PC 1...'
                sh 'docker --version'
                sh 'docker compose version'
            }
        }

        stage('Build Containers') {
            steps {
                echo 'Building Cafe Frontend and Backend Docker images...'
                sh 'docker compose build'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Starting Cafe Management System containers...'
                sh 'docker compose up -d'
            }
        }
    }

    post {
        success {
            echo '🎉 Cafe Management System successfully built and deployed on PC 1!'
        }
        failure {
            echo '❌ Deployment failed. Please inspect the log.'
        }
    }
}
