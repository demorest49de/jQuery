import $ from 'jquery';
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
btnclckMe.click(function () {
    $('.modal-form').show(1000);
});

btnFormClose.click(function () {
    $('.modal-form').hide(1000);
})