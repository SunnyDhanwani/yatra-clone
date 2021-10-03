import React, { useContext, useState } from "react";
import styles from "./../Css/Booking.module.css";
import styled from "styled-components";
import { BookingDetailsContext } from "../../Contexts/BookingDetailsContext";
// import { FlightDataContext, FlightDetailsContext } from "../../Contexts/FlightDataContext";
// import AirplaneTicketOutlinedIcon from "@mui/icons-material/AirplaneTicketOutlined";
// import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
// import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
// import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
// import ArrowUpwardSharpIcon from "@mui/icons-material/ArrowUpwardSharp";
// import { Navbar } from '../Header/Navbar'

const Heading = styled.div`
    background-image: linear-gradient(to right, #43264e,#ea2331);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0 0 0.7143rem 0;
    padding: 0;
    font-size: 30px;
    text-decoration: double;
    letter-spacing: -0.2px;
    text-align: left;
    display: inline-block;
    color: #333;
    font-weight: bold;
`;

function FlightReview() {
    const {flightDetails} = useContext(BookingDetailsContext)
    var data = []
    data.push(flightDetails)
    console.log("data print", data)
    const [vFair,setVFair] = useState(false)

    const handleVFair = ()=>{
      if(vFair){
          setVFair(false)
        }else{
            setVFair(true)
      }
  }

    
    return (
        <>
            <Heading>
                <div>Review Your Booking</div>
            </Heading>
            <div className={styles.flightmain} style={{maxWidth: "780px", boxShadow: "0 2px 4px 0 #c8c8c8"}}>
                {data.map((e) => (
                    <div className={styles.flights}>
                        <div className={styles.up_section}>
                            <div className={styles.icFlDate}>
                                <div>
                                    <img
                                        width="20px"
                                        src={e.airplane.logo}
                                        alt="carrier-icon"
                                    />
                                </div>
                                <div className={styles.fliDate}>
                                    <div style={{ fontWeight: "bold" }}>{e.airplane.name}</div>
                                </div>
                            </div>
                            <div className={styles.fliDate}>
                                <div className={styles.time}>{e.departure.time}</div>
                                <div>{e.origin}</div>
                            </div>
                            <div className={styles.fliDate}>
                                <div className={styles.time}>{e.arrival}</div>
                                <div>{e.destination}</div>
                            </div>
                            <div className={styles.fliDate}>
                                <div className={styles.time}>
                                    {e.duration.hours} {e.duration.mins}m
                                </div>
                                <div>0 stop</div>
                            </div>
                            <div className={styles.icFlDate}>
                                <div style={{ fontSize: "19px", fontWeight: "600" }}>
                                    <img
                                        width="15px"
                                        src="https://cdn-icons-png.flaticon.com/512/3104/3104891.png"
                                        alt="rupee-icon"
                                    />
                                    {e.pricePerHead}
                                </div>
                                {/* <div>
                                    <button onClick={handleVFair} className={styles.vbtn}>View Fares</button>
                                </div> */}
                            </div>
                        </div>
                        {vFair ? (<div className={styles.viewFair}>
                            Total fair : {e.totalFare}
                        </div>) : <div></div>}
                    </div>

                ))}
            </div>
        </>
    );
}

export { FlightReview };