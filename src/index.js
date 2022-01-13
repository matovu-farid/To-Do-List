import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import ListListeners from './list_listeners';

import { listManager } from './list_manager';

const listListeners = new ListListeners(listManager);
listListeners.attachListeners();