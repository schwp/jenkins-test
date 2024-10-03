pipeline {
  agent {
    docker {
      image 'grafana/k6:latest-with-browser'
      args '--entrypoint=""'
    }
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

    stage ('Running ...') {
      steps {
        sh 'k6 run performance-test.js'
      }
    }
  }
}
