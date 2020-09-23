import React from "react";
import "./Background.css"

export default ({ children }) => {

    return (
        <div className="background">
            {children}
        </div>
    )
}