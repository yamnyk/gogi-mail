import React from 'react';
import Email from "../Email/Email";

// function EmailCards() {
const EmailCards = (props) => {
  const {emails} = props;

  const emailItems =
    emails
      .filter(email => !email.hidden)
      .map((email) => <Email {...email} key={email.id}/>)

  return (
    <div>
      {emailItems}
    </div>
  );
}

export default EmailCards;