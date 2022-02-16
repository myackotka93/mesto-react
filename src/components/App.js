import React from 'react';
import {Header} from "./Header";
import {Main} from "./Main";
import {Footer} from "./Footer";


function App() {
  return (
<body className="page">

<Header/>
<Main/>
<Footer/>

<template id="card__template" className="default-card">
  <li className="card">
    <button type="button" className="card__button-delete">
      <img className="card__delete" src="<%=require('./images/delete.svg')%>" alt="Удалить"/>
    </button>
    <img src="#" alt="Домбай" className="card__image"/>
    <div className="card__discription">
      <h2 className="card__title">Домбай</h2>
      <div className="card__like-container">
        <button type="button" className="card__button-like"></button>
        <span className="card__like-count"></span>
      </div>
    </div>
  </li>
</template>

<section className="popup popup_delete-card popup_type_delete">
  <div className="popup__area popup__close"></div>
  <div className="popup__container">
    <form name="card-deleted" className="popup__form popup__form_type_delete">
      <h2 className="popup__title">Вы уверены?</h2>
      <button className="popup__save-button" type="submit">Да</button>
    </form>
    <button className="popup__close-button popup__close" type="button" aria-label="Закрыть"></button>
  </div>
</section>

<section className="popup popup_type_avatar">
  <div className="popup__area popup__close"></div>
  <div className="popup__container">
    <form name="profile-avatar-image" className='popup__form popup__form_type_avatar'>
      <h2 className="popup__title">Обновить аватар</h2>
      <input name="avatar" id="user-avatar" className="popup__item popup__item_type_card-name"
        placeholder="Ссылка на картинку" type="url" novalidate required/>
      <span id="user-avatar-error" className="popup__item-error"></span>
      <button className="popup__save-button" type="submit">Сохранить</button>
    </form>
    <button className="popup__close-button popup__close" type="button" aria-label="Закрыть"></button>
  </div>
</section>

<section className="popup popup_type_edit">
  <div className="popup__area popup__close"></div>
  <div className="popup__container">
    <form className="popup__form popup__form_type_edit" name="edit-form">
      <h2 className="popup__title">Редактировать профиль</h2>
      <input name="name" id="popup-name" className="popup__item popup__item_type_name" type="text" placeholder="Имя"
        minlength="2" maxlength="40" novalidate required/>
      <span id="popup-name-error" className="popup__item-error"></span>
      <input name="prof" id="popup-job" className="popup__item popup__item_type_job" type="text"
        placeholder="Вид деятельности" minlength="2" maxlength="200" novalidate required/>
      <span id="popup-job-error" className="popup__item-error"></span>
      <button className="popup__save-button" type="submit">Сохранить</button>
    </form>
    <button className="popup__close-button popup__close" type="button"></button>
  </div>
</section>

<section className="popup popup_type_add">
  <div className="popup__area popup__close"></div>
  <div className="popup__container">
    <form className="popup__form popup__form_type_add" name="add-form">
      <h2 className="popup__title">Новое место</h2>
      <input name="name" id="popup-place" className="popup__item popup__item_type_place" type="text"
        placeholder="Название" minlength="2" maxlength="40" novalidate required/>
      <span id="popup-place-error" className="popup__item-error"></span>
      <input name="link" id="popup-image" className="popup__item popup__item_type_image" type="url" pattern="https?://.+"
        placeholder="Ссылка на картинку" novalidate required/>
      <span id="popup-image-error" className="popup__item-error"></span>
      <button className="popup__save-button" type="submit">Создать</button>
    </form>
    <button className="popup__close-button popup__close" type="button"/>
  </div>
</section>

<section className="popup popup_type_image">
  <div className="popup__area popup__close"></div>
  <div className="popup__image-container">
    <img className="popup__image" src="#" alt="#"/>
    <h3 className="popup__image-title"></h3>
    <button className="popup__close-button" type="button"></button>
  </div>
</section>
</body>
  );
}

export default App;
