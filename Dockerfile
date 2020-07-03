FROM maven:3.5.2-jdk-10-alpine AS MAVEN_TOOL_CHAIN
RUN mkdir my_app
RUN cd my_app
ADD . .
WORKDIR /my_app/
RUN mvn install
RUN mvn package
FROM tomcat:9.0-jre10-alpine
COPY --from=MAVEN_TOOL_CHAIN /my_app/target/wizard*.war $CATALINA_HOME/webapps/my_app.war
HEALTHCHECK --interval=1m --timeout=3s CMD wget --quiet --tries=1 --spider http://localhost:8080/CheckTesting/ || exit