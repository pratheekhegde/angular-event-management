pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''npm install
ng build --prod'''
      }
    }
  }
  environment {
    Dev = ''
  }
}