pipeline {
  agent any
  stages {
    stage('dependency install') {
      steps {
        sh 'npm install'
      }
    }

    stage('build') {
      steps {
        echo 'building the project'
        sh 'npm run build'
      }
    }

    stage('build image') {
      steps {
        sh 'docker build -t weatherapp .'
      }
    }

  }
}