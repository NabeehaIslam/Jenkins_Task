pipeline {
    agent any

    tools {
        maven 'Maven'   // Must match the name from Jenkins "Global Tool Configuration"
    }

    parameters {
        string(name: 'BRANCH_NAME', defaultValue: 'main', description: 'Git branch to build')
        string(name: 'BUILD_ENV', defaultValue: 'dev', description: 'Build environment (dev/prod)')
    }

    environment {
        NEW_VERSION = "1.3.0"
    }

    stages {

        stage('Build') {
            steps {
                echo "Building version ${NEW_VERSION} on branch ${params.BRANCH_NAME}"
                // Uncomment below line once Maven is configured properly
                // bat "mvn clean package -Dversion=${NEW_VERSION}"
            }
        }

        stage('Unit Test') {
            when {
                expression { return params.BUILD_ENV == 'dev' }
            }
            steps {
                echo 'Running unit tests...'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
            }
        }
    }

    post {
        always {
            echo 'Cleaning up workspace...'
            // deleteDir()
        }
        success {
            echo 'Pipeline succeeded.'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
