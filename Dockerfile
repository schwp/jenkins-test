FROM jenkins/jenkins:lts
USER root
RUN apt update && curl -sSL https://get.docker.com | sh
USER jenkins
