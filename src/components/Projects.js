import React from 'react'
import "../css/_projects.scss"
import Project from './Project'

import Icon from './Icon';

const Projects = () => {
    const data = {
        "project1":{
            "img": "./App1.png",
            "title": "Subway Trip Planner",
            "desc": "Ruby terminal application made for a Coder Academy assignment. The application is designed it simulate a subway network and calculate paths for commuters to take. The user can enter origin, destination stations and time to leave and the application returns the path to take with which stations to change at and how many minutes to wait at each station.",
            "github": "https://github.com/ChrisWhite12/Subway-Trip-Planner",
            "skills": ["ruby"]
        },
        "project2":{
            "img": "./rails_pro.jpg",
            "title": "Hotel DB",
            "desc": "Rails application made for a Coder Academy assignment. The application is similar to other hotel database websites where owners can post their listing with a number of rooms and manage bookings. Customers can search for a booking by inputing the location, date and no. of people.",
            "github": "https://github.com/ChrisWhite12/HotelDB_Rails",
            "livesite": "https://cw12-hoteldirectory.herokuapp.com/",
            "skills": ["ruby","html","css"]
        },
        "project3":{
            "img": "./Covid.png",
            "title": "Covid-19 Graph",
            "desc": "Graph showing COVID-19 cases for Australia. Javascript is used to get the json file and display the information on a graph using chart.js. Pages shows both linear cases against time and logarithmic daily against cumulative.",
            "github": "https://github.com/ChrisWhite12/Covid_19_graph",
            "livesite": "https://chriswhite12.github.io/Covid_19_graph/",
            "skills": ["js", "html", "css"]
        }
    }

    return (
        
        <div className="main_sec">
                <h1>Projects</h1>
                <div className="skills_icons">
                    <h3>Skills: </h3>
                    <Icon img="./Ruby-01.svg" name="ruby" idName="ruby_icon"/>
                    <Icon img="./CSS-3-01.svg" name="css" idName="css_icon"/>
                    <Icon img="./HTML-5-01.svg" name="html" idName="html_icon"/>
                    <Icon img="./JavaScript-01.svg" name="js" idName="js_icon"/>
                </div>
                <div className="project_list">
                    <Project data={data["project1"]} />
                    <Project data={data["project2"]} />
                    <Project data={data["project3"]} />
                </div>
        </div>
    )
}

export default Projects