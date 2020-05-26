pipeline {
    agent any

    stages {
        
        stage('Test') {
            steps {
                nodejs('Node 10.20.1') {
                    sh '''
                        npm i
                        npm test
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

