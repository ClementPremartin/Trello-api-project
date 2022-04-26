import React, { useState , useEffect } from 'react';
import axios from 'axios';

function Card({elements}) {
  const [picture, setPicture] = useState("");
  useEffect(() => {
    console.log(elements);
    if (elements.cover) {axios.get(`https://api.trello.com/1/cards/${elements.id}/attachments/${elements.cover?.idAttachment}?key=5657b57008134bb95cf12e85caa61c71&token=7bac74fb60f2277495928b6ebe21f7e297731b1a4aa870e3a2fed171b59a5e58`).then((response) => setPicture(response.data.previews[4].url));
  }
  },[elements]);
//
  return (
    <div>
      {console.log(picture)}
      <div className='card card-white'>
        <div className='card-content'>
            <img src={picture} className='card-img-top' alt="trello feature" />
          <h1>{elements.name}</h1>
          <p>{elements.desc}</p>
        </div>
      </div>  
    </div>
  )
}

export default Card