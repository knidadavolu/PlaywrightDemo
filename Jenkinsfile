pipeline {

    agent { label 'playwright' }

    environment {

        PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD = '1'

    }

    tools {

        nodejs 'NodeJS 14'

    }

    stages {

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

                }

            }

        }

        stage('Run Playwright Tests') {

            steps {

                script {

                    bat 'npx playwright install'  

                    bat 'npx playwright test'    

                }

            }

        }

    }

}