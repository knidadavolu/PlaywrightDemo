pipeline {

    agent any

    environment {

        PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD = '1'
        ALLURE_RESULTS_DIR ='allure-results'

    }

    tools {

        nodejs 'NodeJS 14'

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

        stage('Run Playwright Tests In Parallell') {
            Parallell{
                stage ('Run Web Tests'){
                    steps {
                        script {
                            bat 'npx playwright test --config=web-palywright.config.ts'
                             }
                        }
                }
                stage ('Run Mobile Tests'){
                    steps {
                        script {
                            bat 'npx playwright test --config=mobile-palywright.config.ts'
                             }
                        }
                    }
            }    

        }

        stage ('Generate Test Report'){
            steps{
                script{
                    bat 'npx allure generate ${ALLURE_RESULTS_DIR} --clean'
                }
            }
        }

        stage ('Display Allure Report'){
            steps{
                allure includeProperties: false,jdk: '',results:[[path:"${ALLURE_RESULTS_DIR}"]]
            }
        }

    }

}