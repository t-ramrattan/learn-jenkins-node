pipeline {
    agent any

    stages {
        stage('Test') {
            nodejs('Node 10.20.1') {
                sh '''
                    node index.js
                '''
            }
        stage('Build') {
            sh 'echo "done"'
        }
    }
}
