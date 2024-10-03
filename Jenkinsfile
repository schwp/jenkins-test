pipeline {
  agent {
    docker {
      image 'grafana/k6:latest-with-browser'
      args '--entrypoint="" -p 5665:5665'
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
        sh 'K6_WEB_DASHBOARD=true k6 run performance-test.js'
      }
    }
  }
}
