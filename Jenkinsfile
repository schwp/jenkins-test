pipeline {
    agent any
    stages {
        stage('Version k6') {
            steps {
              sh 'ls -la'
              sh 'k6'
              //sh 'k6 run performance-test.js'
            }
        }
    }
}

