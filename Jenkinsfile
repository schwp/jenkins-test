pipeline {
  agent {
    docker { image 'grafana/k6:latest-with-browser' }
  }
  stages {
    stage('Test') {
      steps {
        sh 'k6 --version'
      }
    }

    stage('Content') {
      steps {
        sh 'cat performance-test.js'
      }
    }
  }
}
