import Email from "./email.js";
import { useState } from "react";

import initialEmails from "./data/emails";

function Emails(props) {
   
  return (
    <ul>
      {props.filteredEmails.map((email, index) => (
        <Email
          key={index}
          email={email}
          toggleRead={props.toggleRead}
          toggleStar={props.toggleStar}
        />
      ))}
    </ul>
  );
}

export default Emails;
