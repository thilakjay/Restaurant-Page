import './css/menu.css';
import menuSrc from './images/menu.jpg';

const menu = () => {   

    const container = document.body.querySelector('#container');
    const content = document.createElement('div');
    const title = document.createElement('h1');
    const menu = new Image(1240,780);


    title.innerText = "Specialties";
    menu.src = menuSrc;

    content.appendChild(title);
    content.appendChild(menu);
    
    container.appendChild(content);
    
}

export default menu;