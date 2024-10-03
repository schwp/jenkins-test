#!groovy

node {
  docker.image('grafana/k6:latest-with-browser').inside('--entrypoint="" -p 5665:5665') {
    stage('Version') {
      sh 'k6 --version'
    }

    stage('Content') {
      sh 'cat performance-test.js'
    }

    stage('Running') {
      sh 'K6_WEB_DASHBOARD=true k6 run performance-test.js'
    }
  }
}
