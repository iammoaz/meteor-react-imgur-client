import React from 'react';
import ImageScore from './image-score.js';

const ImageDetail = (props) => {
   return (
      <li className="media list-group-item">
         <div className="media-left">
            <img src={props.image.link} />
         </div>
         <div className="media-left">
            <h4 className="media-heading">
               {props.image.title}
            </h4>
            <p>{props.image.description}</p>
            <ImageScore ups={props.image.ups} downs={props.image.downs} />
         </div>
      </li>
   );
};

export default ImageDetail;
