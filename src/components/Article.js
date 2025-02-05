import React from "react";

function Article({ title, date="January 1, 1970", preview, minutes}){
    const icons = ["."]
    if (minutes < 30) {
        const numberOfCup = Math.ceil(minutes/5)
        for (let index = 1; index <= numberOfCup; index++) {
            icons.push("☕️")
        }
        
    } else {
        const numberOfCup = Math.ceil(minutes/10)
        const cups = []
        for (let index = 1; index <= numberOfCup; index++) {
            icons.push("🍱")
        }
    }
    const iconsElements = icons.map((icon, index) => {
        return <small key={index}>{icon}</small>
    })

    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            {iconsElements}
            <p>{preview}</p>
        </article>
    )
}

export default Article