pipeline {

    agent any

    environment {

        PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD = '1'
        ALLURE_RESULTS_DIR ='allure-results'

    }

    tools {

        nodejs 'NodeJS_18'

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
                        bat 'npx playwright test --config=web-playwright.config.ts'
                    }
                }
                stage ('Run Mobile Tests'){
                    steps {
                        
                            bat 'npx playwright test --config=mobile-playwright.config.ts'
                             
                        }
                    }
            }    

        }
    }

    post{
        always{

            echo 'Generate Allure Report!!!!'

            bat 'npx allure generate allure-results --clean -o allure-report'

            echo 'Display Allure Report!!!!'

            bat 'allure open allure-report'
        }
        
         failure {
                allure( [
                    includeProperties: false,
                    jdk: '',
                    results:[[path:"${ALLURE_RESULTS_DIR}"]]
                    ])
             
               emailext attachmentsPattern: 'target/test-output/index.html',
               subject: 'Status Service Tests Failed' + "For Branch " + env.BRANCH_NAME + "with build id" + BUILD_ID,
               body: "$env.BUILD_URL/console",
               to: ''
               }
           success {
                    allure( [
                    includeProperties: false,
                    jdk: '',
                    results:[[path:"${ALLURE_RESULTS_DIR}"]]
                    ])

              emailext attachmentsPattern: 'target/test-output/index.html',
              subject: 'Status Service Tests Passed' + "For Branch " + env.BRANCH_NAME + "with build id" + BUILD_ID,
              body: "$env.BUILD_URL/console",
              to: ''
        }

    }

}
