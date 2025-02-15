import{_ as i,c as a,o as n,ae as e}from"./chunks/framework.BHrE6nLq.js";const d=JSON.parse('{"title":"CI/CD con Jenkins para AWS","description":"","frontmatter":{},"headers":[],"relativePath":"automatization.md","filePath":"automatization.md"}'),l={name:"automatization.md"};function t(p,s,h,r,k,o){return n(),a("div",null,s[0]||(s[0]=[e(`<h1 id="ci-cd-con-jenkins-para-aws" tabindex="-1">CI/CD con Jenkins para AWS <a class="header-anchor" href="#ci-cd-con-jenkins-para-aws" aria-label="Permalink to &quot;CI/CD con Jenkins para AWS&quot;">​</a></h1><h2 id="_1-introduccion" tabindex="-1">1. Introducción <a class="header-anchor" href="#_1-introduccion" aria-label="Permalink to &quot;1. Introducción&quot;">​</a></h2><p>Este documento describe la configuración de un pipeline de CI/CD en Jenkins para automatizar la integración y despliegue de una aplicación en AWS. Se incluyen pruebas unitarias, pruebas de integración y una estrategia de rollback automatizada en caso de fallos.</p><h2 id="_2-arquitectura-y-herramientas" tabindex="-1">2. Arquitectura y Herramientas <a class="header-anchor" href="#_2-arquitectura-y-herramientas" aria-label="Permalink to &quot;2. Arquitectura y Herramientas&quot;">​</a></h2><ul><li><strong>Jenkins</strong>: Para la orquestación del pipeline.</li><li><strong>AWS (EC2, S3, RDS, Load Balancer, etc.)</strong>: Infraestructura de producción.</li><li><strong>Docker y Kubernetes (EKS)</strong>: Contenedorización y orquestación.</li><li><strong>GitHub/GitLab</strong>: Repositorio de código fuente.</li><li><strong>Terraform o CloudFormation</strong>: Infraestructura como código (IaC).</li><li><strong>SonarQube</strong>: Análisis de calidad del código.</li><li><strong>Prometheus y Grafana</strong>: Monitoreo.</li><li><strong>Jest/Mocha</strong>: Para pruebas unitarias.</li><li><strong>Postman/Newman</strong>: Para pruebas de integración.</li></ul><h2 id="_3-pipeline-de-ci-cd" tabindex="-1">3. Pipeline de CI/CD <a class="header-anchor" href="#_3-pipeline-de-ci-cd" aria-label="Permalink to &quot;3. Pipeline de CI/CD&quot;">​</a></h2><h3 id="_3-1-etapas-del-pipeline" tabindex="-1">3.1 Etapas del Pipeline <a class="header-anchor" href="#_3-1-etapas-del-pipeline" aria-label="Permalink to &quot;3.1 Etapas del Pipeline&quot;">​</a></h3><ol><li><strong>Checkout del Código</strong></li><li><strong>Compilación y Dependencias</strong></li><li><strong>Ejecutar Pruebas Unitarias</strong></li><li><strong>Ejecutar Pruebas de Integración</strong></li><li><strong>Análisis de Código con SonarQube</strong></li><li><strong>Construcción y Publicación de la Imagen Docker</strong></li><li><strong>Despliegue en AWS (EKS o EC2)</strong></li><li><strong>Monitoreo y Notificación</strong></li><li><strong>Rollback Automático (en caso de fallo)</strong></li></ol><h3 id="_3-2-configuracion-de-pruebas-unitarias-y-de-integracion" tabindex="-1">3.2 Configuración de Pruebas Unitarias y de Integración <a class="header-anchor" href="#_3-2-configuracion-de-pruebas-unitarias-y-de-integracion" aria-label="Permalink to &quot;3.2 Configuración de Pruebas Unitarias y de Integración&quot;">​</a></h3><h4 id="_3-2-1-configuracion-de-pruebas-unitarias" tabindex="-1">3.2.1 Configuración de Pruebas Unitarias <a class="header-anchor" href="#_3-2-1-configuracion-de-pruebas-unitarias" aria-label="Permalink to &quot;3.2.1 Configuración de Pruebas Unitarias&quot;">​</a></h4><ol><li><strong>Instalar dependencias</strong>:<div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --save-dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> jest</span></span></code></pre></div></li><li><strong>Configurar Jest</strong> en <code>package.json</code>:<div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;test&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;jest&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li><li><strong>Escribir tests en la carpeta <code>__tests__</code></strong>:<div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;suma de números&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    expect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toBe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div></li><li><strong>Ejecutar pruebas</strong>:<div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span></span></code></pre></div></li></ol><h4 id="_3-2-2-configuracion-de-pruebas-de-integracion" tabindex="-1">3.2.2 Configuración de Pruebas de Integración <a class="header-anchor" href="#_3-2-2-configuracion-de-pruebas-de-integracion" aria-label="Permalink to &quot;3.2.2 Configuración de Pruebas de Integración&quot;">​</a></h4><ol><li><strong>Instalar Newman (CLI de Postman)</strong>:<div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> newman</span></span></code></pre></div></li><li><strong>Crear una colección de Postman</strong> con los endpoints a probar.</li><li><strong>Ejecutar las pruebas con Newman</strong>:<div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">newman</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pruebas.postman_collection.json</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ambiente.postman_environment.json</span></span></code></pre></div></li></ol><h3 id="_3-3-definicion-en-jenkinsfile" tabindex="-1">3.3 Definición en Jenkinsfile <a class="header-anchor" href="#_3-3-definicion-en-jenkinsfile" aria-label="Permalink to &quot;3.3 Definición en Jenkinsfile&quot;">​</a></h3><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pipeline {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    agent any</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    environment {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        AWS_REGION</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;us-east-1&#39;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        AWS_CREDENTIALS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> credentials(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;aws-credentials&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        DOCKER_IMAGE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;mi-aplicacion:latest&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    stages {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        stage(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Checkout&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            steps {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                git </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">branch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;main&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://github.com/usuario/repositorio.git&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        stage(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Compilación&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            steps {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                sh </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;npm install&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        stage(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Pruebas Unitarias&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            steps {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                sh </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;npm test&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        stage(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Pruebas de Integración&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            steps {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                sh </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;newman run pruebas.postman_collection.json -e ambiente.postman_environment.json&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        stage(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Análisis de Código&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            steps {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                sh </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;sonar-scanner&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        stage(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Construcción Docker&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            steps {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                sh </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;docker build -t $DOCKER_IMAGE .&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        stage(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Publicación en AWS ECR&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            steps {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                sh </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $AWS_ACCOUNT_ID.dkr.ecr $AWS_REGION.amazonaws.com</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                docker tag $DOCKER_IMAGE $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$DOCKER_IMAGE</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                docker push $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$DOCKER_IMAGE</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &#39;&#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        stage(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Despliegue en AWS&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            steps {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                sh </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;kubectl apply -f kubernetes/deployment.yaml&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    post {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        failure {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            script {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                sh </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;kubectl rollout undo deployment mi-aplicacion&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="_4-rollback-automatico" tabindex="-1">4. Rollback Automático <a class="header-anchor" href="#_4-rollback-automatico" aria-label="Permalink to &quot;4. Rollback Automático&quot;">​</a></h2><p>Si una nueva versión presenta fallos, Jenkins ejecutará automáticamente un rollback usando <code>kubectl rollout undo</code>. Además, se puede integrar con CloudWatch para detectar errores y activar una reversión basada en métricas.</p><h2 id="_5-monitoreo-y-notificacion" tabindex="-1">5. Monitoreo y Notificación <a class="header-anchor" href="#_5-monitoreo-y-notificacion" aria-label="Permalink to &quot;5. Monitoreo y Notificación&quot;">​</a></h2><ul><li><strong>Prometheus/Grafana</strong>: Métricas del sistema.</li><li><strong>CloudWatch Logs</strong>: Registro de errores y alertas.</li><li><strong>Slack/Email</strong>: Notificación de éxito o fallo del pipeline.</li></ul><h2 id="_6-resumen" tabindex="-1">6. Resumen <a class="header-anchor" href="#_6-resumen" aria-label="Permalink to &quot;6. Resumen&quot;">​</a></h2><p>Este pipeline garantiza que cada cambio en el código pase por validaciones antes de llegar a producción. El uso de AWS EKS y Jenkins asegura escalabilidad, confiabilidad y automatización del rollback en caso de fallos.</p>`,21)]))}const c=i(l,[["render",t]]);export{d as __pageData,c as default};
