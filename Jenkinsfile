pipeline {
    agent any
    stages {
        stage('Version k6') {
            steps {
              sh 'ls -la'
              sh '/usr/local/bin/k6 --version'
              //sh 'k6 run performance-test.js'
            }
        }
    }
}

