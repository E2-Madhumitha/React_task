import React, { useState,useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

export const View = (props) => {
    const navigate = useNavigate();
    const data = JSON.parse(localStorage.getItem("details"));
    console.log(data);

    return (
        <div className="view-container">
            {
                <div className="tablecontainer">
                     <input type="search" placeholder="search" />
                    <table border={1} className="table">
                        <thead>
                            <tr>
                                <th>name</th>
                                <th>department</th>
                                <th>jobtitle</th>
                                <th>contact number</th>
                                <th>experience</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {props.inputarr.length < 1 ? (
                                <tr>
                                    <td colSpan={4}>NO data Enter yet !</td>
                                </tr>
                            ) : (
                                props.inputarr.map((info, ind) => {
                                    return (
                                        <tr key={ind}>
                                            <td>{info.name}</td>
                                            <td>{info.department}</td>
                                            <td>{info.job_title}</td>
                                            <td>{info.contact_number}</td>
                                            <td>{info.years_of_experience}</td>
                                        </tr>
                                    );
                                })
                            )}
                        </tbody>
                    
                    </table>
                    {/* <button type="button" onClick={() => navigate("/")}>back</button> */}
                </div>
            }
        </div>
    );
    
   
};
const mapStateToProps = (state) => {
    return {
        inputarr: state.inputarr,
    };
};
export default connect(mapStateToProps)(View);
