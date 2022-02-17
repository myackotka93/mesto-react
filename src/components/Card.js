import React from 'react';
import delete_svg from "../images/delete.svg";


const Card = ({card, onCardClick}) => {
  const handleClick = () => {
    onCardClick(card);
  }

  return (
    <li className="card">
      <button type="button" className="card__button-delete">
        <img className="card__delete" src={delete_svg} alt="Удалить"/>
      </button>
      <img src={card.link} alt={card.name} className="card__image" onClick={handleClick}/>
      <div className="card__discription">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-container">
          <button type="button" className="card__button-like"></button>
          <span className="card__like-count">{card.likes.length}</span>
        </div>
      </div>
    </li>
  )
}

export default Card;