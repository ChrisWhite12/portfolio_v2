import React from 'react'
import {useGlobalState} from '../config/store';

const Project = ({data}) => {
    const {dispatch} = useGlobalState()

    const handleMouseEnter = () => {
        dispatch({
            type: "setIcons",
            data: data["skills"]
        })
    }
    
    const handleMouseLeave = () => {
        dispatch({
            type: "setIconsOff",
            data: data["skills"]
        })
    }
    
    return (
        <div className="project_item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={data["img"]} alt="Project" className="project_img"></img>
            <div className="project_description">
                <h2 className="project_title">{data["title"]}</h2>
                <p className="project_text">{data["desc"]}</p>
                {data["github"] ? <a href={data["github"]}>GitHub</a> : <p></p>}
                {(data["livesite"])?<a href={data["livesite"]}>Live Site</a>: <p></p>}
            </div>
        </div>
    )
}

export default Project