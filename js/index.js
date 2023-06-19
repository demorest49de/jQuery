import $ from 'jquery';
import {createModal} from './modal.js';
// <!-- Remember to include jQuery :) -->
// <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>
//
// <!-- jQuery Modal -->
// <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js"></script>
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.css" />

import 'jquery-modal/jquery.modal.min.js';
import 'jquery-modal/jquery.modal.min.css';

const div = $('<div>');
div.addClass('container');
$('body').append(div);

const {modalOverlay, modalForm} = createModal();
$('body').append(modalOverlay);
modalOverlay.classList.toggle('is-visible');
