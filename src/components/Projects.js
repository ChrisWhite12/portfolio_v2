import React from 'react'
import "../css/_projects.scss"

const Projects = () => {
    return (
        <div className="main_sec">
            <h1>Projects</h1>
            <div className="project_list">
                <div className="project_item project1">
                    <img src="./App1.png" alt="Project 1" className="project_img"></img>
                    <div className="project_description">
                        <h2 className="project_title">Subway Trip Planner</h2>
                        <p className="project_text">Ruby terminal application made for a Coder Academy assignment. The application is designed it simulate a subway network and calculate paths for commuters to take. The user can enter origin, destination stations and time to leave and the application returns the path to take with which stations to change at and how many minutes to wait at each station.</p>
                        <a href="https://github.com/ChrisWhite12/Subway-Trip-Planner">GitHub</a>
                    </div>
                </div>
                <div className="project_item project2">
                    <img src="./rails_pro.jpg" alt="Project 2" className="project_img"></img>
                    <div className="project_description">
                        <h2 className="project_title">Hotel DB</h2>
                        <p className="project_text">Rails application made for a Coder Academy assignment. The application is similar to other hotel database websites where owners can post their listing with a number of rooms and manage bookings. Customers can search for a booking by inputing the location, date and no. of people</p>
                        <a href="https://github.com/ChrisWhite12/HotelDB_Rails">GitHub</a>
                        <a href="https://cw12-hoteldirectory.herokuapp.com/">Live Site</a>
                    </div>
                </div>
                <div className="project_item project3">
                    <img src="./Covid.png" alt="Project 3" className="project_img"></img>
                    <div className="project_description">
                        <h2 className="project_title">Covid-19 Graph</h2>
                        <p className="project_text">Graph showing COVID-19 cases for Australia. Javascript is used to get the json file and display the information on a graph using chart.js. Pages shows both linear cases against time and logarithmic daily against cumulative.</p>
                        <a href="https://github.com/ChrisWhite12/Covid_19_graph">GitHub</a>
                        <a href="https://chriswhite12.github.io/Covid_19_graph/">Live Site</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects