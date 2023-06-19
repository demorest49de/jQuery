export const createModal = () => {
    const modalOverlay = document.createElement('div');
    modalOverlay.classList.add('modal-overlay');

    const modalForm = document.createElement('form');
    modalForm.classList.add('modal-form', 'form');

    modalForm.insertAdjacentHTML('beforeend',
        `
      <div class="form__header">
          <h1 class="form__title">Введите имя пользователя</h1>
      </div>
        <div class="form__body">
            <label class="form__label form-group">
              <input class="form__input form-control" 
              tabindex="1" type="text" name="text"
              placeholder="введите имя">
            </label>
            <div class="form__message"><span class="form__text"></span></div>
        </div>
        <div class="form__footer">
          <button type="submit" class="btn btn-primary form__submit" 
          tabindex="2"> Сохранить </button>
        </div>
      </div>
    `);
    modalOverlay.append(modalForm);
    return {modalOverlay, modalForm};
};