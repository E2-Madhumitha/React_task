import React from "react";
import { connect, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export const View = (props) => {
    const navigate = useNavigate();
    // const data = JSON.parse(localStorage.getItem("details"));
    // console.log(data);
    const inputarr = useSelector((state) => state.inputarr);
    const [searchItem, setSearchItem] = useState("");
    return (
        <div className="view-container">
            {
                <div className="tablecontainer">
                    <input
                        type="text"
                        placeholder="search"
                        onChange={(e) => {
                            setSearchItem(e.target.value);
                        }}
                    />
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
                            {inputarr.length < 1 ? (
                                <tr>
                                    <td colSpan={4}>NO data Enter yet !</td>
                                </tr>
                            ) : (
                                inputarr
                                    .filter((val) => {
                                        if (searchItem === "") {
                                            return val;
                                        } else if (
                                            val.name
                                                .toLowerCase()
                                                .includes(
                                                    searchItem.toLowerCase()
                                                ) ||
                                            val.department
                                                .toLowerCase()
                                                .includes(
                                                    searchItem.toLowerCase()
                                                ) ||
                                            val.job_title
                                                .toLowerCase()
                                                .includes(
                                                    searchItem.toLowerCase()
                                                ) ||
                                            val.contact_number
                                                .toLowerCase()
                                                .includes(
                                                    searchItem.toLowerCase()
                                                ) ||
                                            val.years_of_experience
                                                .toLowerCase()
                                                .includes(
                                                    searchItem.toLowerCase()
                                                )
                                        ) {
                                            return val;
                                        }
                                    })
                                    .map((info, ind) => {
                                        return (
                                            <tr key={ind}>
                                                <td>{info.name}</td>
                                                <td>{info.department}</td>
                                                <td>{info.job_title}</td>
                                                <td>{info.contact_number}</td>
                                                <td>
                                                    {info.years_of_experience}
                                                </td>
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
// const mapStateToProps = (state) => {
//     return {
//         inputarr: state.inputarr,
//     };
// };
export default View;
//connect(mapStateToProps)(View);

