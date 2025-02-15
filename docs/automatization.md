# CI/CD con Jenkins para AWS

## 1. Introducción
Este documento describe la configuración de un pipeline de CI/CD en Jenkins para automatizar la integración y despliegue de una aplicación en AWS. Se incluyen pruebas unitarias, pruebas de integración y una estrategia de rollback automatizada en caso de fallos.

## 2. Arquitectura y Herramientas
- **Jenkins**: Para la orquestación del pipeline.
- **AWS (EC2, S3, RDS, Load Balancer, etc.)**: Infraestructura de producción.
- **Docker y Kubernetes (EKS)**: Contenedorización y orquestación.
- **GitHub/GitLab**: Repositorio de código fuente.
- **Terraform o CloudFormation**: Infraestructura como código (IaC).
- **SonarQube**: Análisis de calidad del código.
- **Prometheus y Grafana**: Monitoreo.
- **Jest/Mocha**: Para pruebas unitarias.
- **Postman/Newman**: Para pruebas de integración.

## 3. Pipeline de CI/CD

### 3.1 Etapas del Pipeline
1. **Checkout del Código**
2. **Compilación y Dependencias**
3. **Ejecutar Pruebas Unitarias**
4. **Ejecutar Pruebas de Integración**
5. **Análisis de Código con SonarQube**
6. **Construcción y Publicación de la Imagen Docker**
7. **Despliegue en AWS (EKS o EC2)**
8. **Monitoreo y Notificación**
9. **Rollback Automático (en caso de fallo)**

### 3.2 Configuración de Pruebas Unitarias y de Integración

#### 3.2.1 Configuración de Pruebas Unitarias

1. **Instalar dependencias**:
   ```sh
   npm install --save-dev jest
   ```
2. **Configurar Jest** en `package.json`:
   ```json
   "scripts": {
     "test": "jest"
   }
   ```
3. **Escribir tests en la carpeta `__tests__`**:
   ```javascript
   test('suma de números', () => {
       expect(1 + 2).toBe(3);
   });
   ```
4. **Ejecutar pruebas**:
   ```sh
   npm test
   ```

#### 3.2.2 Configuración de Pruebas de Integración

1. **Instalar Newman (CLI de Postman)**:
   ```sh
   npm install -g newman
   ```
2. **Crear una colección de Postman** con los endpoints a probar.
3. **Ejecutar las pruebas con Newman**:
   ```sh
   newman run pruebas.postman_collection.json -e ambiente.postman_environment.json
   ```

### 3.3 Definición en Jenkinsfile
```groovy
pipeline {
    agent any
    environment {
        AWS_REGION = 'us-east-1'
        AWS_CREDENTIALS = credentials('aws-credentials')
        DOCKER_IMAGE = 'mi-aplicacion:latest'
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/usuario/repositorio.git'
            }
        }
        
        stage('Compilación') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Pruebas Unitarias') {
            steps {
                sh 'npm test'
            }
        }
        
        stage('Pruebas de Integración') {
            steps {
                sh 'newman run pruebas.postman_collection.json -e ambiente.postman_environment.json'
            }
        }
        
        stage('Análisis de Código') {
            steps {
                sh 'sonar-scanner'
            }
        }
        
        stage('Construcción Docker') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }
        
        stage('Publicación en AWS ECR') {
            steps {
                sh '''
                aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $AWS_ACCOUNT_ID.dkr.ecr $AWS_REGION.amazonaws.com
                docker tag $DOCKER_IMAGE $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$DOCKER_IMAGE
                docker push $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$DOCKER_IMAGE
                '''
            }
        }
        
        stage('Despliegue en AWS') {
            steps {
                sh 'kubectl apply -f kubernetes/deployment.yaml'
            }
        }
    }
    
    post {
        failure {
            script {
                sh 'kubectl rollout undo deployment mi-aplicacion'
            }
        }
    }
}
```

## 4. Rollback Automático
Si una nueva versión presenta fallos, Jenkins ejecutará automáticamente un rollback usando `kubectl rollout undo`. Además, se puede integrar con CloudWatch para detectar errores y activar una reversión basada en métricas.

## 5. Monitoreo y Notificación
- **Prometheus/Grafana**: Métricas del sistema.
- **CloudWatch Logs**: Registro de errores y alertas.
- **Slack/Email**: Notificación de éxito o fallo del pipeline.

## 6. Resumen
Este pipeline garantiza que cada cambio en el código pase por validaciones antes de llegar a producción. El uso de AWS EKS y Jenkins asegura escalabilidad, confiabilidad y automatización del rollback en caso de fallos.

