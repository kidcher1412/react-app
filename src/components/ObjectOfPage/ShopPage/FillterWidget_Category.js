import React from "react";


const FillterWidget_Category = ({data}) => {

    return(
        <div className="filter-widget">
            <h4 className="fw-title">Categories</h4>
            <ul className="filter-catagories">
                {data && data.map((item, index) => (
                    <li key={index}><a href={"/" + item.id}>{item.name}</a></li>
                ))}
            </ul>
        </div>
    )
}
export default FillterWidget_Category