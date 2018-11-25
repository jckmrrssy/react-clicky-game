import React from "react";
import "./Card.css"

const Card = props => (
    <div className = "card" data-clicked = {props.clicked}>
        <div className = "imgGuy" onClick={() => props.clickGuess(props.id)}>
            <img alt = {props.alt} src = {props.image} />
        </div>
    </div>
)

export default Card;