FROM maven:3.8.7-eclipse-temurin-19 as buildstage

WORKDIR /app

COPY . .

RUN mvn package

FROM eclipse-temurin:17-jdk-alpine

RUN apk add curl

WORKDIR /app

COPY --from=buildstage app/target/zaliczenieISI-0.0.1-SNAPSHOT.jar aplikacja.jar

ENTRYPOINT ["java","-jar","aplikacja.jar"]

EXPOSE 8080

