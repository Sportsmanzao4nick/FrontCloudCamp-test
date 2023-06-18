import React from "react";
import {TabTypes} from "./types";

function Tab({ label, isActive, onClick } : TabTypes) {
    return (
        <div className={`tab ${isActive ? 'active' : ''}`} onClick={onClick}>
            {label}
        </div>
    );
}

export default Tab;