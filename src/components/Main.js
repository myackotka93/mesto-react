import React, {useState, useEffect} from 'react';
import {api} from '../utils/api';
import avatar_edit_button from '../images/pen.svg';
import profile_avatar from '../images/jak_iv_kusto.png';
import add_button_image from '../images/plus.svg';
import Card from './Card';

const Main = ({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) => {

    const [userName, setUserName] = useState("Жак-Ив Кусто");
    const [userDescription, setUserDescription] = useState("Исследователь океана");
    const [userAvatar, setUserAvatar] = useState(profile_avatar);
    const [cards, setCards] = useState([]);

  useEffect(() => {
        api.getProfile()
            .then ((data) => {
                setUserName(data.name);
                setUserDescription(data.about);
                setUserAvatar(data.avatar);
            })
            .catch((err) => { console.log(err) });

        api.getInitialCards()
            .then((data) => {
                setCards([...data]);
            })
            .catch((err) => { console.log(err) });
        }, []); 

    return (
        <main className="main">
  <section className="profile">
    <button className="profile__avatar-button" type="button" onClick={onEditAvatar}>
      <div className="profile__avatar-edit-button-container">
        <img className="profile__avatar-edit-button" src={avatar_edit_button} alt="Кнопка Редактировать"/>
      </div>
      <img src={userAvatar} alt="Аватар" className="profile__avatar-image profile__avatar"/>
    </button>
    <div className="profile__info">
      <h1 className="profile__title">{userName}</h1>
      <button type="button" className="profile__edit-button" onClick={onEditProfile}>
        <img src={avatar_edit_button} alt="Кнопка редактирования" className="profile__edit-button-image"/>
      </button>
      <p className="profile__subtitle">{userDescription}</p>
    </div>
    <button type="button" className="profile__add-button" onClick={onAddPlace}>
      <img className="profile__add-button-image" src={add_button_image} alt="Кнопка добавить"/>
    </button>
  </section>

  <section className="cards">
    <ul className="cards__container">
    {cards.map((card, index) => {
        return <Card
        key={index}
        card={card}
        onCardClick={onCardClick}
        />
     })}
    </ul>
  </section>
</main>
    );
}

export default Main;