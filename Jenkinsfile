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
        stage('Stage: Remove dist folder'){
            steps {
                sh "rm -rf dist"
            }
        }     
        stage('Stage: Remove node_modules folder'){
            steps {
                sh "rm -rf node_modules"
            }
        }       
        stage('Stage: Install node_modules'){
            steps {
                sh "npm install"
            }
        }       
        stage('Stage: Run build'){
            steps {
                sh "npm run build"
            }
        }     
        stage('Stage: Run start'){
            steps {
                sh "npm run start:production"
            }
        }                                                          
    }
}