import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Deptview = () => {
    const navigate = useNavigate();
    // const data = JSON.parse(localStorage.getItem("deptdetails"));
    // console.log(data);
    const iparr = useSelector((state) => state.iparr);
    return (
        <div className="view-container">
            {
                <div className="tablecontainer">
                    <input type="search" placeholder="search" />
                    <table border={1} className="table">
                        <thead>
                            <tr>
                                <th>department</th>
                            </tr>
                        </thead>

                        <tbody>
                            {iparr.length < 1 ? (
                                <tr>
                                    <td colSpan={4}>NO data Enter yet !</td>
                                </tr>
                            ) : (
                                iparr.map((info, ind) => {
                                    return (
                                        <tr key={ind}>
                                            <td>{info.department}</td>
                                        </tr>
                                    );
                                })
                            )}
                        </tbody>
                    </table>
                    {/* <button
                        type="button"
                        onClick={() => navigate("/deptdetails")}
                    >
                        back
                    </button> */}
                </div>
            }
        </div>
    );
};
export default Deptview;
