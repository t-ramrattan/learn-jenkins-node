pipeline {
    agent any

    stages {
        
        stage('Test') {
            steps {
                nodejs('Node 10.20.1') {
                    sh '''
                        node index.js
                    '''
                }
            }
        }

        stage('Build') {
            steps {
                sh 'echo "done"'
            }
        }
    }
}

