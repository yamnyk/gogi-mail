import React from 'react';
import {useSelector} from "react-redux";
import {getFavouritesEmails} from "../../store/favs/favouritesEmailsSelector";
import EmailCards from "../../components/EmailCards/EmailCards";

const Favourites = () => {
  const favourites = useSelector(getFavouritesEmails);

  return (
    <div className='app-body'>
      <h2 className='app-body__title'>
        Favourites
      </h2>
      <EmailCards emails={favourites}/>
    </div>
  );
};

export default Favourites;