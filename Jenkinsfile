pipeline {
    agent any	
    tools {nodejs "DiennkNodejs"}
    stages {
        stage('Stage: Check node npm git version') {
            steps {
                sh "node --version"
                sh "npm --version"
                sh "git --version"
				sh "pwd"
            }
        }                   
        stage('Stage: Chmod folder') {
            steps {
                sh "chmod -R 777 ."                   
            }
        }                 
        stage('Stage: Terminate node server'){
            steps{                      
                sh "./script-bash/terminate-node-server.sh"                          
            }
        }                                           
    }
}