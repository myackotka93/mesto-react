import React, {useState} from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

const App = () => {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }

  const handleCardClick = (card) => {
    setSelectedCard(card);
  }  

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
}

  return (
<div className="page">

<Header/>
<Main
  onAddPlace={handleAddPlaceClick}
  onEditAvatar={handleEditAvatarClick}
  onEditProfile={handleEditProfileClick}
  onCardClick={handleCardClick}
/>
<Footer/>

<PopupWithForm
  title={"Вы уверены?"}
  name={"type_delete"}
  textBtn={"Да"}
  isOpen={false}
  onClose={closeAllPopups}
>
</PopupWithForm>

<PopupWithForm
  title={"Обновить аватар"}
  name={"type_avatar"}
  textBtn={"Сохранить"}
  isOpen={isEditAvatarPopupOpen}
  onClose={closeAllPopups}
>
  <input name="avatar" id="user-avatar" className="popup__item popup__item_type_card-name"
        placeholder="Ссылка на картинку" type="url" noValidate required/>
  <span id="user-avatar-error" className="popup__item-error"/>
</PopupWithForm>

<PopupWithForm
  title={"Редактировать профиль"}
  name={"type_edit"}
  textBtn={"Сохранить"}
  isOpen={isEditProfilePopupOpen}
  onClose={closeAllPopups}
>
  <input name="name" id="popup-name" className="popup__item popup__item_type_name" type="text" placeholder="Имя"
        minLength="2" maxLength="40" noValidate required/>
  <span id="popup-name-error" className="popup__item-error"/>
  <input name="prof" id="popup-job" className="popup__item popup__item_type_job" type="text"
        placeholder="Вид деятельности" minLength="2" maxLength="200" noValidate required/>
  <span id="popup-job-error" className="popup__item-error"/>
</PopupWithForm>

<PopupWithForm
  title={"Новое место"}
  name={"type_add"}
  textBtn={"Создать"}
  isOpen={isAddPlacePopupOpen}
  onClose={closeAllPopups}
>
  <input name="name" id="popup-place" className="popup__item popup__item_type_place" type="text"
        placeholder="Название" minLength="2" maxLength="40" noValidate required/>
  <span id="popup-place-error" className="popup__item-error"/>
  <input name="link" id="popup-image" className="popup__item popup__item_type_image" type="url" pattern="https?://.+"
        placeholder="Ссылка на картинку" noValidate required/>
  <span id="popup-image-error" className="popup__item-error"/>
</PopupWithForm>

<ImagePopup
  card={selectedCard}
  isOpen={selectedCard !== null}
  onClose={closeAllPopups}
/>
</div>
  );
}

export default App;
