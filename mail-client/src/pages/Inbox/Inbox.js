import React, {useEffect} from 'react';
import './Inbox.scss';
import EmailCards from '../../components/EmailCards/EmailCards';
import {connect} from "react-redux";
import {emailsLoadedAction} from "../../store/emails/emailActions";
import {emailsSelector} from "../../store/emails/emailsSelectors";

const Inbox = ({message, emails, loadEmails}) => {

  useEffect(() => {
    loadEmails();
  }, [loadEmails]);

  return (
    <div className='app-body'>
      <h2 className='app-body__title'>
        Inbox
      </h2>
      <h2 className="app-body__message">
        {message}
      </h2>
      <EmailCards emails={emails.result}/>
    </div>
  )
};

const mapStoreToProps = (store) => ({
  emails: emailsSelector(store)
});

const mapDispatchToProps = (dispatch) => ({
  loadEmails: (emails) => dispatch(emailsLoadedAction(emails))
});

export default connect(mapStoreToProps, mapDispatchToProps)(Inbox);