import Rightbar from "./RightBar";
import React, { useState } from 'react';
import "./rightbars.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { useLocation } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import logo1 from "./arrow-up.png"
import logo2 from "./down-arrow.png"
const RightBars = () => {
    const [isExpanded, setisExpanded] = useState(false);
    function navTgl() {
        setisExpanded(!isExpanded)
    }
    const [isExpanded1, setisExpanded1] = useState(false);
    function navTgll() {
        setisExpanded1(!isExpanded1)
    }
    const [isExpanded2, setisExpanded2] = useState(false);
    function navTglll() {
        setisExpanded2(!isExpanded2)
    }
    const [isExpanded3, setisExpanded3] = useState(false);
    function navTgllll() {
        setisExpanded3(!isExpanded3)
    }
    const [isExpanded4, setisExpanded4] = useState(false);
    function navTglllll() {
        setisExpanded4(!isExpanded4)
    }
    const [checkedSeasons, setCheckedSeasons] = useState({
        Rabi: false,
        Khareef: false,
        Zaid: false,
    });
    const [checkedWages, setCheckedWages] = useState({
        Under_1000: false,
        Under_1200: false,
        Under_1400: false,
        Under_1600: false,
        Under_1800: false,
        Under_2000: false,
    });
    const [checkedAge, setCheckedAge] = useState({
        Twenty_25: false,
        Twentyfive_30: false,
        Thirty_35: false,
        Thirtyfive_40: false,
        Forty_45: false,
        Fortyfive_50: false,
    });
    const [checkedWe, setCheckedWe] = useState({
        One_5: false,
        Five_10: false,
        Above_10: false,
    });
    // console.log(checkedWe)
    const handleCheckboxChange = (season) => {
        setCheckedSeasons((prevSeasons) => ({
            ...prevSeasons,
            [season]: !prevSeasons[season],
        }));
    };
    const handleCheckboxChangeWages = (wage) => {
        setCheckedWages((prevWages) => ({
            ...prevWages,
            [wage]: !prevWages[wage],
        }));
    };
    const handleCheckboxChangeAge = (age) => {
        setCheckedAge((prevAge) => ({
            ...prevAge,
            [age]: !prevAge[age],
        }));
    };
    const handleCheckboxChangeWe = (we) => {
        setCheckedWe((prevWe) => ({
            ...prevWe,
            [we]: !prevWe[we],
        }));
    };
    const { isLoading, error, data } = useQuery(["userss"], () =>
        makeRequest.get("/users/find").then((res) => {
            return res.data;
        })
    );
    const location = useLocation();
    const currentURL = location.pathname.split("/")[1];
    // console.log(currentURL)
    //   console.log(data)
    //  console.log(isLoading)
    return (
        <div className="rightbars">
            <div className="rightBar">
                <div className="container">
                    {
                        currentURL === 'hireworker' ?
                            <div className="item">
                                <p>Filter</p>
                                <hr></hr>
                                <div className="filters">
                                    <div className="filter-1">
                                        <span>Season</span>
                                        {isExpanded ? <img src={logo1} alt=" "  onClick={navTgl}/>
                                        :
                                        <img src={logo2} alt=" "  onClick={navTgl}/>}    
                                    </div>
                                    <div  className={isExpanded ? "boxes" : "boxes-hide"}>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox checked={checkedSeasons.Rabi} onChange={() => handleCheckboxChange('Rabi')} />}
                                                label="Rabi"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox checked={checkedSeasons.Khareef} onChange={() => handleCheckboxChange('Khareef')} />}
                                                label="Khareef"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox checked={checkedSeasons.Zaid} onChange={() => handleCheckboxChange('Zaid')} />}
                                                label="Zaid"
                                            />
                                        </FormGroup>
                                    </div>
                                </div>

                                <hr></hr>
                                <div className="filters">
                                    <div className="filter-1">
                                        <span>Wages</span>
                                        {isExpanded1 ? <img src={logo1} alt=" "  onClick={navTgll}/>
                                        :
                                        <img src={logo2} alt=" "  onClick={navTgll}/>}    
                                    </div>
                                    <div  className={isExpanded1 ? "boxes-2" : "boxes-hide"}>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox checked={checkedWages.Under_1000} onChange={() => handleCheckboxChangeWages('Under_1000')} />}
                                                label="Under 1000"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox checked={checkedWages.Under_1200} onChange={() => handleCheckboxChangeWages('Under_1200')} />}
                                                label="Under 1200"
                                            />
                                             <FormControlLabel
                                                control={<Checkbox checked={checkedWages.Under_1400} onChange={() => handleCheckboxChangeWages('Under_1400')} />}
                                                label="Under 1400"
                                            />
                                             <FormControlLabel
                                                control={<Checkbox checked={checkedWages.Under_1600} onChange={() => handleCheckboxChangeWages('Under_1600')} />}
                                                label="Under 1600"
                                            />
                                             <FormControlLabel
                                                control={<Checkbox checked={checkedWages.Under_1800} onChange={() => handleCheckboxChangeWages('Under_1800')} />}
                                                label="Under 1800"
                                            />
                                             <FormControlLabel
                                                control={<Checkbox checked={checkedWages.Under_2000} onChange={() => handleCheckboxChangeWages('Under_2000')} />}
                                                label="Under 2000"
                                            />
                                        </FormGroup>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="filters">
                                    <div className="filter-1">
                                        <span>Age</span>
                                        {isExpanded2 ? <img src={logo1} alt=" "  onClick={navTglll}/>
                                        :
                                        <img src={logo2} alt=" "  onClick={navTglll}/>}    
                                    </div>
                                    <div  className={isExpanded2 ? "boxes-2" : "boxes-hide"}>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox checked={checkedAge.Twenty_25} onChange={() => handleCheckboxChangeAge('Twenty_25')} />}
                                                label="20-25"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox checked={checkedAge.Twentyfive_30} onChange={() => handleCheckboxChangeAge('Twentyfive_30')} />}
                                                label="25-30"
                                            />
                                             <FormControlLabel
                                                control={<Checkbox checked={checkedAge.Thirty_35} onChange={() => handleCheckboxChangeAge('Thirty_35')} />}
                                                label="30-35"
                                            />
                                             <FormControlLabel
                                                control={<Checkbox checked={checkedAge.Thirtyfive_40} onChange={() => handleCheckboxChangeAge('Thirtyfive_40')} />}
                                                label="35-40"
                                            />
                                             <FormControlLabel
                                                control={<Checkbox checked={checkedAge.Forty_45} onChange={() => handleCheckboxChangeAge('Forty_45')} />}
                                                label="40-45"
                                            />
                                             <FormControlLabel
                                                control={<Checkbox checked={checkedAge.Fortyfive_50} onChange={() => handleCheckboxChangeAge('Fortyfive_50')} />}
                                                label="45-50"
                                            />
                                        </FormGroup>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="filters">
                                    <div className="filter-1">
                                        <span>Region</span>
                                        {isExpanded3 ? <img src={logo1} alt=" "  onClick={navTgllll}/>
                                        :
                                        <img src={logo2} alt=" "  onClick={navTgllll}/>}    
                                    </div>
                                    <div className = {isExpanded3 ? "State" : "State-hide"}>
                                        <select id="states" name="states"
                                            // onChange={(e) => {
                                            //     setAddress((prevAddress) => ({
                                            //         ...prevAddress,
                                            //         state: e.target.value
                                            //     }));
                                            // }}
                                        >
                                            <option disabled selected> --Select State--</option>
                                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                            <option value="Assam">Assam</option>
                                            <option value="Bihar">Bihar</option>
                                            <option value="Chhattisgarh">Chhattisgarh</option>
                                            <option value="Goa">Goa</option>
                                            <option value="Gujarat">Gujarat</option>
                                            <option value="Haryana">Haryana</option>
                                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                                            <option value="Jharkhand">Jharkhand</option>
                                            <option value="Karnataka">Karnataka</option>
                                            <option value="Kerala">Kerala</option>
                                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                                            <option value="Maharashtra">Maharashtra</option>
                                            <option value="Manipur">Manipur</option>
                                            <option value="Meghalaya">Meghalaya</option>
                                            <option value="Mizoram">Mizoram</option>
                                            <option value="Nagaland">Nagaland</option>
                                            <option value="Odisha">Odisha</option>
                                            <option value="Punjab">Punjab</option>
                                            <option value="Rajasthan">Rajasthan</option>
                                            <option value="Sikkim">Sikkim</option>
                                            <option value="Tamil Nadu">Tamil Nadu</option>
                                            <option value="Telangana">Telangana</option>
                                            <option value="Tripura">Tripura</option>
                                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                                            <option value="Uttarakhand">Uttarakhand</option>
                                            <option value="West Bengal">West Bengal</option>
                                            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                            <option value="Chandigarh">Chandigarh</option>
                                            <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                                            <option value="Lakshadweep">Lakshadweep</option>
                                            <option value="Delhi">Delhi</option>
                                            <option value="Puducherry">Puducherry</option>
                                        </select>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="filters">
                                    <div className="filter-1">
                                        <span>Work Experience</span>
                                        {isExpanded4 ? <img src={logo1} alt=" "  onClick={navTglllll}/>
                                        :
                                        <img src={logo2} alt=" "  onClick={navTglllll}/>}    
                                    </div>
                                    <div  className={isExpanded4 ? "boxes" : "boxes-hide"}>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox checked={checkedSeasons.One_5} onChange={() => handleCheckboxChangeWe('One_5')} />}
                                                label="1-5 years"
                                            />
                                           <FormControlLabel
                                                control={<Checkbox checked={checkedSeasons.Five_10} onChange={() => handleCheckboxChangeWe('Five_10')} />}
                                                label="5-10 years"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox checked={checkedSeasons.Above_10} onChange={() => handleCheckboxChangeWe('Above_10')} />}
                                                label="Above 10 years"
                                            />
                                        </FormGroup>
                                    </div>
                                </div>
                            </div>
                            :
                            // <div className="item">
                            //     <span>Suggestions For You</span>
                            //     <div className="user">
                            //         <div className="userInfo">
                            //             <img
                            //                 src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            //                 alt=""
                            //             />
                            //             <span>Jane Doe</span>
                            //         </div>
                            //         <div className="buttons">
                            //             <button>follow</button>
                            //             <button>dismiss</button>
                            //         </div>
                            //     </div>
                            //     <div className="user">
                            //         <div className="userInfo">
                            //             <img
                            //                 src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            //                 alt=""
                            //             />
                            //             <span>Jane Doe</span>
                            //         </div>
                            //         <div className="buttons">
                            //             <button>follow</button>
                            //             <button>dismiss</button>
                            //         </div>
                            //     </div>
                            // </div>
                            <></>
                    }


                    <div className="item">
                        <span>Available Workers</span>
                        {error
                            ? "Something went wrong!"
                            : isLoading
                                ? "loading"
                                : data.map((user) => <Rightbar user={user} key={user.id} />)}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default RightBars;