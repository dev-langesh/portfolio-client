pipeline {
  agent any
  stages {
    stage('checkout') {
      steps {
        git(url: 'https://github.com/dev-langesh/portfolio-client.git', branch: 'main')
      }
    }

    stage('build') {
      steps {
        sh 'docker build -t portfolio .'
      }
    }

    stage('docker hub push'){

       steps {
        withCredentials(bindings: [[$class: 'UsernamePasswordMultiBinding', credentialsId:'auth_dockerhub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD']                                                                   ]) {
          sh 'sudo docker login -u $USERNAME -p $PASSWORD'
        }

        sh 'sudo docker push "devlangesh/portfolio:$BUILD_NUMBER"'
      }
    }

  }
}