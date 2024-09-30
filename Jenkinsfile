pipeline {
    agent {
        docker {
            image 'graphana/k6:latest-with-browser'
        }
    }
    stages {
        stage('Version k6') {
            steps {
              sh 'ls -la'
              sh 'k6 --version'
              //sh 'k6 run performance-test.js'
            }
        }
    }
}

