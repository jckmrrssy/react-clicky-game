import React from "react";
import "./Card.css"

const Card = props => (
    <div className = "card">
        <div className = "imgGuy">
            <img alt = {props.alt} src = {props.image} />
        </div>
    </div>
)

export default Card;