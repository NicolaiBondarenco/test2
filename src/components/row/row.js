import React from "react"

import './row.css';

const Row = ({left, right}) => {
    return(
        <div className="people-page">
            <div className="page-list">
                {left}
            </div>
            <div className="page-person">
                {right}
            </div>
        </div>
    )
}
export default Row;