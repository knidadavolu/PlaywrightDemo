pipeline {

    agent any

    environment {

        PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD = '1'
        ALLURE_RESULTS_DIR ='allure-results'

    }

    tools {

        nodejs 'NodeJS_18'
        allure 'Allure CLI'

    }

    stages {

        stage('clean workspace'){
            steps{
                cleanWs()
            }
        }

        stage('Clone Repository') {

            steps {

                 git branch: 'venkatesh', 

                    credentialsId: 'git-token', 

                    url: 'https://github.com/knidadavolu/PlaywrightDemo.git'

            }

        }

        stage('Install Dependencies') {

            steps {

                script {
                    bat 'npm ci'
                    bat 'npx playwright install'  


                }

            }

        }

        stage('Run Playwright Tests In Parallel') {
            parallel{
                stage ('Run Web Tests'){
                    steps {
                        bat 'npx playwright test --config=playwright-web.config.ts'
                    }
                }
                stage ('Run Mobile Tests'){
                    steps {
                        
                            bat 'npx playwright test --config=playwright-mobile.config.ts'
                             
                        }
                    }
            }    

        }

    }

    post{
        always{

            echo 'Generate Allure Report!!!!'

            bat 'npm install -g allure-commandline --save-dev'

            bat 'allure --version'

            bat 'allure generate allure-results --clean -o allure-report'



            allure( [
                includeProperties: false,
                jdk: '',
                properties: [],
                reportBuildPolicy: 'ALWAYS',
                results:[[path:"allure-results"]],
                report:'allure-report'    
             ])

        }
        
         failure {
             
               emailext attachmentsPattern: 'target/test-output/index.html',
               subject: 'Status Tests Failed' ,
               body: "$env.BUILD_URL/console",
               to: 'venkatesh.ramasubbu@ascension-external.org'
               }
           success {
              emailext attachmentsPattern: 'target/test-output/index.html',
              subject: 'Status Tests Passed',
              body: "$env.BUILD_URL/console",
              to: 'venkatesh.ramasubbu@ascension-external.org'
        }

    }

}
