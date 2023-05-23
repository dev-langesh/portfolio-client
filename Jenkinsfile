pipeline {
  agent any
  stages {
    stage('checkout') {
      steps {
        git(url: 'https://github.com/dev-langesh/portfolio-client.git', branch: 'main')
      }
    }

    stage('list') {
      steps {
        sh 'ls'
      }
    }

  }
}