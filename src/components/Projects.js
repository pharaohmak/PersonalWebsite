import React from 'react';
import tetris from '../assets/projects/tetris.png';
import cryptoPunksClone from '../assets/projects/crypto-punks-clone.png'
import toDoList from '../assets/projects/to-do-list.jpg'
import spotifyMusicSearch from '../assets/projects/spotify-music-search.png'


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
                                    <div class="links "><a href="http://www.sleepingpharaoh.com/Crypto-Punks-Clone/" target="_blank " rel="noopener noreferrer " class="button ">Live Site</a><a href="https://github.com/pharaohmak/Crypto-Punks-Clone.git" target="_blank " rel="noopener
                                noreferrer " class="button ">GitHub Repo</a></div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="ProjectCard__ProjectCardStyles-sc-1ewjskk-0 latnFe ">
                                <div class="imageContainer transPink even ">
                                    <img src={ spotifyMusicSearch } alt="Screenshot of the Drag Name Generator project "/></div>
                                <div class="textContainer transPink even ">
                                    <p class="skills ">React -- JavaScript -- HTML -- CSS</p>
                                    <h3>Spotify Music Search App</h3>
                                    <p class="description ">Music search app lets you search for any song on Spotify with one button, by title, artist, or song name.</p>
                                    <div class="links "><a href="http://www.sleepingpharaoh.com/spotify-music-search-app/" target="_blank " rel="noopener noreferrer " class="button ">Live Site</a><a href="https://github.com/pharaohmak/spotify-music-search-app.git
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
                                    <p class="description ">Todolist for React Native is an app where you can list your tasks and read on updates. You can have update from within the app! This is an alternative to the native todo list.</p>
                                    <div class="links "><a href="http://www.sleepingpharaoh.com/tetris/" target="_blank " rel="noopener noreferrer " class="button ">Live Demo</a><a href="https://github.com/pharaohmak/tetris.git" target="_blank
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
                                    <p class="description ">Fly the spaceship and destroy the space ships on the way to destroy the alien base. A simple shoot-em-up game built using Python.</p>
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