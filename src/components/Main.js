import React from 'react';
import avatar_edit_button from '../images/pen.svg';
import profile_avatar from '../images/jak_iv_kusto.png';
import add_button_image from '../images/plus.svg';

export const Main = () => {
    return (
        <main className="main">
  <section className="profile">
    <button className="profile__avatar-button" type="button">
      <div className="profile__avatar-edit-button-container">
        <img className="profile__avatar-edit-button" src={avatar_edit_button} alt="Кнопка Редактировать"/>
      </div>
      <img src={profile_avatar} alt="Аватар" className="profile__avatar-image profile__avatar"/>
    </button>
    <div className="profile__info">
      <h1 className="profile__title">Жак-Ив Кусто</h1>
      <button type="button" className="profile__edit-button">
        <img src={avatar_edit_button} alt="Кнопка редактирования" className="profile__edit-button-image"/>
      </button>
      <p className="profile__subtitle">Исследователь океана</p>
    </div>
    <button type="button" className="profile__add-button">
      <img className="profile__add-button-image" src={add_button_image} alt="Кнопка добавить"/>
    </button>
  </section>

  <section className="cards">
    <ul className="cards__container">

    </ul>
  </section>
</main>
    );
}