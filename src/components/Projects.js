import React from 'react';
import tetris from '../assets/projects/tetris.png';
import cryptoPunksClone from '../assets/projects/crypto-punks-clone.png'
import toDoList from '../assets/projects/to-do-list.jpg'
import faceDetection from '../assets/projects/face-detection.jpeg'


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
                                    <p class="skills "> React -- JavaScript -- HTML -- CSS</p>
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
                                    <p class="skills ">JavaScript -- HTML -- CSS</p>
                                    <h3>JavaScript Facial Recognition Algorithm</h3>
                                    <p class="description ">A simple facial recognition algorithm  built using javascript designed to use as a universal web platform  that’s open source and free to use.</p>
                                    <div class="links "><a href="https://pharaohmak.github.io/facialRecognition/" target="_blank " rel="noopener noreferrer " class="button ">Live Site</a><a href="https://github.com/pharaohmak/facialRecognition.git
                                " target="_blank " rel="noopener noreferrer " class="button ">GitHub Repo</a></div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="ProjectCard__ProjectCardStyles-sc-1ewjskk-0 latnFe ">
                                <div class="imageContainer transBlue odd ">
                                    <img src={ tetris } alt="Screenshot of the Under the Sea project "/></div>
                                <div class="textContainer transBlue odd ">
                                    <p class="skills ">React Native -- Javascript -- Node.js</p>
                                    <h3>JavaScript Tetris</h3>
                                    <p class="description ">The object of the game is to clear falling blocks by forming horizontal lines of blocks without gaps or blocks of the same color touching.</p>
                                    <div class="links "><a href="https://pharaohmak.github.io/tetris/" target="_blank " rel="noopener noreferrer " class="button ">Live Demo</a><a href="https://github.com/pharaohmak/tetris.git" target="_blank
                                " rel="noopener noreferrer " class="button ">GitHub Repo</a></div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="ProjectCard__ProjectCardStyles-sc-1ewjskk-0 latnFe ">
                                <div class="imageContainer agenderGreen even ">
                                    <img src={ toDoList } alt="Screenshot of the New Identity, Who Dis project "/></div>
                                <div class="textContainer agenderGreen even ">
                                    <p class="skills ">Python</p>
                                    <h3>To Do List</h3>
                                    <p class="description ">Todolist for React Native is an app where you can list your tasks and read on updates. You can have update from within the app! This is an alternative to the native todo list.</p>
                                    <div class="links "><a href="https://expo.dev/@pharaohmak/todolist" target="_blank " rel="noopener noreferrer " class="button ">Live Demo</a><a href="https://github.com/pharaohmak/todolist.git" target="_blank " rel="noopener noreferrer " class="button ">GitHub Repo</a></div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>
        </div>
    );
};

export default Projects;