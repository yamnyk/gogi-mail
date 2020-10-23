import React from 'react';
import {Link, withRouter} from "react-router-dom";
import './Email.scss';
import {useDispatch} from "react-redux";
import {deleteEmail} from "../../store/emails/emailActions";
import {addToFavourites} from "../../store/favs/favouritesActions";

const Email = (props) => {
  const {topic, id, text, showFull, history} = props;

  const dispatch = useDispatch()

  const goBack = () => {
    history.goBack()
  };

  return (
    <div className='email'>
      <div>
        <Link className='email__link' to={`/emails/${id}`}>
          {topic}
        </Link>
        <button onClick={() => dispatch(deleteEmail(id))}>Delete</button>
        <button onClick={() => dispatch(addToFavourites(id))}>Add to Favourites</button>
      </div>
      {
        showFull && <>
          <div>{text}</div>
          <div>
            <button onClick={goBack}>Go back</button>
          </div>
          <div>
            <Link to={`/emails/${id - 1}`}>Previous</Link>
            <Link to={`/emails/${id + 1}`}>Next</Link>
          </div>
        </>
      }
    </div>
  );
}

export default withRouter(Email);