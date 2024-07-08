import express from "../images/Skills_images/express.png"
import ansible from "../images/Skills_images/ansible.png"
import trivy from "../images/Skills_images/trivy.png"
import sonarcube from "../images/Skills_images/sonarqube.png"
import circleci from "../images/Skills_images/circle-ci.png"
import nodejs from "../images/Skills_images/nodejs.svg"
import redis from "../images/Skills_images/redis.png"
import prisma from "../images/Skills_images/prisma.png"
import grafana from "../images/Skills_images/grafana.png"
import prometheus from "../images/Skills_images/Prometheus.png"
import terraform from "../images/Skills_images/terraform.png"
import jenkins from "../images/Skills_images/jenkins.png"
// import kubernetes from "../images/Skills_images/Kubernetes.svg"
import vitejs from "../images/Skills_images/vitejs.svg"
import react from "../images/Skills_images/react.svg"
import python from "../images/Skills_images/python.svg"
import nginx from "../images/Skills_images/nginx.svg"
import mysql from "../images/Skills_images/mysql.svg"
// import mongoDB from "../images/Skills_images/mongoDB.svg"
import javascript from "../images/Skills_images/javascript.svg"
import java from "../images/Skills_images/java.svg"
import html from "../images/Skills_images/html.svg"
import graphql from "../images/Skills_images/graphql.svg"
import git from "../images/Skills_images/git.svg"
import docker from "../images/Skills_images/docker.svg"
import css from "../images/Skills_images/css.svg"
import canva from "../images/Skills_images/canva.svg"
import bootstrap from "../images/Skills_images/bootstrap.svg"
import azure from "../images/Skills_images/azure.svg"
import aws from "../images/Skills_images/aws.svg"
import tailwind from "../images/Skills_images/tailwind.svg"


export const skillsImage = (skill) =>{
    const skillID = skill.toLowerCase();
    switch(skillID){
        case 'express':
            return express;
        case 'ansible':
            return ansible;
        case "trivy":
            return trivy;
        case "sonarcube":
            return sonarcube;
        case "circleci":
            return circleci;
        // case "mongoDB":
        //    return mongoDB;
        case "nodejs":
            return nodejs;
        case "redis":
            return redis;
        case "prisma":
            return prisma;
        case "grafana":
            return grafana;
        case "prometheus":
            return prometheus;
        case "terraform":
            return terraform;
        case "jenkins":
            return jenkins;
        // case "kubernetes":
        //     return kubernetes;
        case "vitejs":
            return vitejs;
        case "react":
            return react;
        case "python":
            return python;
        case "nginx":
            return nginx;
        case "mysql":
            return mysql;
        case "javascript":
            return javascript;
        case "java":
            return java;
        case "html":
            return html;
        case "graphql":
            return graphql;
        case "git":
            return git;
        case "docker":
            return docker;
        case "css":
            return css;
        case "canva":
            return canva;
        case "bootstrap":
            return bootstrap;
        case "azure":
            return azure;
        case "aws":
            return aws;
        case "tailwind":
            return tailwind;
        default:
            break;
    }
}