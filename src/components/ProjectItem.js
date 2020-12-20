import React, {Component} from 'react'

const ProjectItem = () => {
    return (
        <div>
            <img src="./img/App1.png" alt="Project 1" class="project_img"></img>
            <div class="project_description">
                <h2 class="project_title">Subway Trip Planner</h2>
                <p class="project_text">Ruby terminal application made for a Coder Academy assignment. The application is designed it simulate a subway network and calculate paths for commuters to take. The user can enter origin, destination stations and time to leave and the application returns the path to take with which stations to change at and how many minutes to wait at each station.</p>
                <a href="https://github.com/ChrisWhite12/Subway-Trip-Planner">GitHub</a>
            </div>
        </div>
    )
}

export default ProjectItem