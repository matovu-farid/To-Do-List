import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';


// import {listManager} from './list_manager'
import ListListeners from './list_listeners'
import { DisplayList } from './display_list';
import ListManager from './list_manager';


const listManager = new ListManager()
const displayList = new DisplayList(listManager)
displayList.render()
const listListeners = new ListListeners(listManager);
listListeners.attachListeners();