import {createModal} from './modal.js';

const container = $('<div>');
container.css({
    marginTop: `20px`
});
container.addClass('container');
$('body').append(container);

const button = $('<button type="button" class="btn btn-secondary">нажми меня</button>');
button.css({
    padding: `5px 10px`,
});


container.append(button);

const {modalForm} = createModal();

$('body').append(modalForm);

const btnclckMe = $('.btn');
const btnFormClose = $('.form__btn-close');
const form = $('.modal-form');
const overlay = $('body');
btnclckMe.click(function () {
    event.stopPropagation();
    form.show(1000);
});

btnFormClose.click(function () {
    form.hide(1000);
})

overlay.click(function (event) {
    const target = event.target;
    console.log(' : ',target);
    if(!target.closest('.modal-form')){
        form.hide(1000);
    }
})