import React, { useState } from "react";
// import { Link } from "react-router-dom";
import ecom from "../images/ecomerce.png";
import file from "../images/file-uploader.jpg";
import gro from "../images/grocery.jpg";
import lib from "../images/Library.jpg";
import news from "../images/news.jpg";
// import sch from "../images/SchloarWorld.jpg";
import vikash from "../images/vikash.png";
import chat from "../images/chat-app.jpg";
import image from "../images/image.jpg";
import "./project.css";
// import Footer from './Footer';

const Project = () => {
  const projectsArray = [
    {
      // cls: "cont1",
      img: ecom,
      name: "Ecommerce",
      projectLink: "https://github.com/sibasish934/FoodApp",
      description:
        "This is a project with the objective to develop a ecommerce website using mern stack tools and also to know about the technologies used to develop such an application. This projects provides the UI for the consumers to add , delete , select products with proper cart management system.",
      tags: "mern",
    },
    {
      img: news,
      name: "News_website",
      projectLink: "https://github.com/sibasish934/news-website",
      description:
        "This is a project with a objective to develop a basic news-website using HTML,CSS AND JS. This projects provides top 10 lastest news updates fetching it from google-news-api.",
      tags: "basic",
    },
    {
      img: lib,
      name: "Libarary-system",
      projectLink: "https://github.com/sibasish934/Library_System",
      description:
        "This is a project with a objective to develop a library management system using python, tkinter and mysql-workbench. This project basically provides a interface to keep a record of the library books using proper management system.",
      tags: "python",
    },
    {
      // cls: "cont4",
      img: file,
      name: "File-Uploader",
      projectLink: "https://github.com/sibasish934/file-uploader",
      description:
        "This is a project with a objective to develop a file uploader system using mern stack. This basically provides you with a UI to upload single or multiple picture into our system.",
      tags: "mern",
    },
    {
      img: vikash,
      name: "Villages Blogger",
      projectLink: "https://github.com/sibasish934/vikash-client",
      description:
        "This was a group project made by me and my friends.In this we had to tried to develop a website through people can post blogs, sell items manufactured in their villages and even sell their services. I had worked on frontend, login and logout functionality.",
      tags: "group",
    },
    {
      // cls: "cont7",
      img: gro,
      name: "Grocery-App",
      projectLink: "https://github.com/sibasish934/Grocery-app",
      description:
        "This was a group project made by me and my friend. In this project we had made a grocery app where we had provided a online billing system for the shopkeepers. The tech stack used is python, mysql, python flask.",
      tags: "group",
    },
    {
        img:chat,
        name:"Chat Application In Java",
        projectLink:"https://github.com/sibasish934/Chatapp",
        description:"This is a chat application made by me using java socket and swing package. The main objective of the project is that it provides a interface for the server and client to transfer message among each other.",
        tags:"java"
        
    },
    {
        img:image,
        name:"Image Encrpytion In Java",
        projectLink:"https://github.com/sibasish934/ImageEncrpytion",
        description:"This project is basically in two ways :- Its encrypts a image to make it a unsupported file in our device and If we enter the same key again then we can decrypt the image again into viewing format.",
        tags:"java"
    },
  ];

  const [items, setItems] = useState(projectsArray);

  const filter = (category) => {
    const updatedItems = projectsArray.filter((elem) => {
      return elem.tags === category;
    });
    setItems(updatedItems);
  };

  return (
    <>
      <div className="Project">
        <h2 className="Project-title">
          Project<span>s</span>
        </h2>
        <p className="project-text">
          Making projects improves confidence and helps to understand the
          concepts properly.
        </p>
        <div className="filter-button">
          <button onClick={() => setItems(projectsArray)}>All</button>
          <button onClick={() => filter("mern")}>Mern</button>
          <button onClick={() => filter("python")}>Python</button>
          <button onClick={() => filter("group")}>Group</button>
          <button onClick={() => filter("java")}>Java</button>
          <button onClick={() => filter("basic")}>HTML & CSS</button>
        </div>
        <div className="Projects_tile">
          {items.map((elem) => {
            return (
                <div className="square">
                <img
                  src={elem.img}
                  className="mask"
                  alt="project"
                />
                <div className="h1">{elem.name}</div>
                <p className="p">
                  {elem.description}
                </p>
            
                <div>
                  <a
                    href={elem.projectLink}
                    target="_"
                    className="project-link"
                  >
                    Read More
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Project;