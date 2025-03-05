pipeline {
  agent any
  stages {
    stage('dependency install') {
      steps {
        sh 'yarn install'
      }
    }

    stage('build') {
      steps {
        echo 'building the project'
        sh 'yarn build'
      }
    }

  }
}