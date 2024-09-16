pipline {
    agent any
    environment{
        NODE_ENV = 'test'
    }
    tools{
        nodejs 'NodeJS'
    }

    stages{
        stage('Checkout'){
            steps{
                git branch: 'frameWorkDevelopment', url: 'https://github.com/knidadavolu/PlaywrightDemo.git'
            }
        }

        stage('Install Dependencies'){
            steps{
                script{
                    bat 'npm install'
                }
            }
        }

        stage('Run test'){
        steps{
         script{
            bat 'npx playwright test'
          }
         }
         }
    }

    post{
        always{

            cleanWs()
            
            publishHTML([
                reportDir:'playwright-report',
                reportFiles:'index.html',
                name:'Playwright Test Report'
            ])

            
        }
        


         


    }


    

}