import React from 'react';
import tetris from '../assets/projects/tetris.png';
import cryptoPunksClone from '../assets/projects/crypto-punks-clone.png'
import toDoList from '../assets/projects/to-do-list.jpg'
import faceDetection from '../assets/projects/face-detection.jpeg'
import pnk from '../assets/projects/project-nuba-kingdom.png'


const Projects = () => {
    return (
        <div>
        
        <section class="Projects__ProjectsStyles-sc-1it6o5i-0 hsOxpx grid-wrapper ">
                    <h2>Projects</h2>
                    <p class="visualHeading ">Projects I've Worked On.</p>
                    <ul class="projectsList ">
                        <li>
                            <div class="ProjectCard__ProjectCardStyles-sc-1ewjskk-0 latnFe ">
                                <div class="imageContainer genderQueerPurple odd ">
                                    <img src={ cryptoPunksClone } alt="Screenshot of the Madlibs App project "/></div>
                                <div class="textContainer genderQueerPurple odd ">
                                    <p class="skills "> Web Development & Design</p>
                                    <h3>Cypto Punks Clone</h3>
                                    <p class="description ">Crypto punks was created as a way to have fun with crypto and also to educate others on the crypto world they live in. It was originally designed with Bitcoin in mind, but has later become compatible with over 400 other different cryptocoins.</p>
                                    <div class="links "><a href="https://crypto-punks-clone.herokuapp.com/" target="_blank " rel="noopener noreferrer " class="button ">Live Site</a><a href="https://github.com/pharaohmak/Crypto-Punks-Clone.git" target="_blank " rel="noopener
                                noreferrer " class="button ">GitHub Repo</a></div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="ProjectCard__ProjectCardStyles-sc-1ewjskk-0 latnFe ">
                                <div class="imageContainer transPink even ">
                                    <img src={ faceDetection } alt="Screenshot of the Drag Name Generator project "/></div>
                                <div class="textContainer transPink even ">
                                    <p class="skills ">Software Development</p>
                                    <h3>Facial Recognition Software</h3>
                                    <p class="description ">A simple facial recognition algorithm  built using javascript designed to use as a universal web platform  that’s open source and free to use.</p>
                                    <div class="links "><a href="https://pharaohmak.github.io/facialRecognition/" target="_blank " rel="noopener noreferrer " class="button ">Live Demo</a><a href="https://github.com/pharaohmak/facialRecognition.git
                                " target="_blank " rel="noopener noreferrer " class="button ">GitHub Repo</a></div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="ProjectCard__ProjectCardStyles-sc-1ewjskk-0 latnFe ">
                                <div class="imageContainer transBlue odd ">
                                    <img src={ pnk } alt="Screenshot of the Under the Sea project "/></div>
                                <div class="textContainer transBlue odd ">
                                    <p class="skills ">eCommerce Development</p>
                                    <h3>Wordpress Blog</h3>
                                    <p class="description ">This is a blog about the volunteer work i do for Omarang Youth Organization, where our goal is to empower the youth of immigrant youth to persue a entreperuership.</p>
                                    <div class="links "><a href="https://pharaohmak.wordpress.com" target="_blank " rel="noopener noreferrer " class="button ">Visit Blog</a><a href="https://github.com/pharaohmak/tetris.git" target="_blank
                                " rel="noopener noreferrer " class="button ">GitHub Repo</a></div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="ProjectCard__ProjectCardStyles-sc-1ewjskk-0 latnFe ">
                                <div class="imageContainer agenderGreen even ">
                                    <img src={ toDoList } alt="Screenshot of the New Identity, Who Dis project "/></div>
                                <div class="textContainer agenderGreen even ">
                                    <p class="skills ">Mobile App Development</p>
                                    <h3>To Do List</h3>
                                    <p class="description ">Todolist for React Native is an app where you can list your tasks and read on updates. You can have update from within the app! This is an alternative to the native todo list.</p>
                                    <div class="links "><a href="https://expo.dev/@pharaohmak/todolist" target="_blank " rel="noopener noreferrer " class="button ">Download App</a><a href="https://github.com/pharaohmak/todolist.git" target="_blank " rel="noopener noreferrer " class="button ">GitHub Repo</a></div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>
        </div>
    );
};

export default Projects;