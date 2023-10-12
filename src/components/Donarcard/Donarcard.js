import React from "react";
import "./Donarcard.css";
import DonationCertificate from "../Certificate/DonatioCertificate";
import { Link } from "react-router-dom";

function Donarcard({name, mobile, email, amount}){
  return(
    <div className="donar-card"> 
           <p className="donar-name">🧑🏿 {name}</p>
           <p className="donar-mobile">📞 {mobile}</p>
           <p className="donar-email">📧 {email}</p>
           <p className="donar-amount">💸 ₹ {amount}</p>

           <Link to ="../Certificate/DonationCertificate" target="blank" className="get-certificate-btn"> Get Certificate</Link>
     </div>
  )
}
export default Donarcard
