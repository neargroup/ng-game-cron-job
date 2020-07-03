FROM maven:3.6.3-jdk-11 AS MAVEN_TOOL_CHAIN
RUN mkdir my_app
COPY * /my_app/
WORKDIR /my_app/
RUN mvn install
FROM tomcat:jdk11-corretto
COPY --from=MAVEN_TOOL_CHAIN /my_app/target/*.war $CATALINA_HOME/webapps/my_app.war
EXPOSE 8080
CMD ["java -jar my_app.war"]
