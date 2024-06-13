pipeline {
    agent any	
    tools {nodejs "DiennkNodejs"}
    stages {
        stage('Stage: Check node npm git version') {
            steps {
                sh "node --version"
                sh "npm --version"
                sh "git --version"
            }
        }                                            
    }
}