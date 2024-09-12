pipline{
    agent any

    tools{
        nodejs 'nodejs'
    }
    environment{
        CI='true'
    }
    stages{
        stage('Install Dependencies'){
            steps{
                script{
                    bat 'npm install'
                }
            }
        }
    }

    stages('Run test'){
      steps{
        script{
            bat 'npx playwright test'
        }
      }
    }

    post{
        always{
            publishHTML([
                reportDir:'playwright-report',
                reportFiles:'index.html',
                name:'Playwright Test Report'
            ])
        }
    }

    post{
        always{
            cleanWs()
        }
    }
}