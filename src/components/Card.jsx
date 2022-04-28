import React, { useState , useEffect } from 'react';
import axios from 'axios';

function Card({elements}) {
  const [picture, setPicture] = useState("");
  useEffect(() => {
    console.log(elements);
    if (elements.cover) {axios.get(`https://api.trello.com/1/cards/${elements.id}/attachments/${elements.cover?.idAttachment}?key=${process.env.REACT_APP_TRELLO_KEY}&token=${process.env.REACT_APP_TRELLO_TOKEN}`)
    .then((response) => setPicture(response.data.previews[4].url));
  }
  },[elements]);
//
  return (
    <div>
      {console.log(picture)}
      <div className='card card-white'>
        <div className='card-content'>
            <img src={picture} className='card-img-top' alt="trello feature" />
          <h2>{elements.name}</h2>
          <p>{elements.desc}</p>
        </div>
      </div>  
    </div>
  )
}

export default Card