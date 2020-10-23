import React, {useEffect, useState} from 'react';
import Email from "../../components/Email/Email";
import axios from 'axios';
import Loader from "../../components/Loader/Loader";

const OneEmail = (props) => {
  const [email, setEmail] = useState(null);
  // const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const {match} = props;
  const emailId = +match.params.emailId;

  useEffect(() => {
    setIsLoading(true);
    axios(`/api/emails/${emailId}`)
      .then(res => {
        setEmail(res.data);
        setIsLoading(false)
      })
      // .catch(setError)
  }, [emailId])

  if (isLoading) {
    return <Loader />
  }

  if (!email) {
    return `Email with id ${emailId} not found`
  }

  return (
    <div>
      <Email {...email} showFull/>
    </div>
  );
}

export default OneEmail;