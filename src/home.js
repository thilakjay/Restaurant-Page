import './css/home.css';
import mainBurger from './images/mainburger.jpg';

const home = () => {   

    const container = document.body.querySelector('#container');
    const content = document.createElement('div');
    const title = document.createElement('h1');
    const mainBurgerImg = new Image(200,200);
    const caption = document.createElement('div');

    caption.innerText = `It's Friday night. Your friends are all out out on the town, or at a party... 
                        doesn't matter, it's not your scene and you have other ideas.
                        All a man needs is a nice, delicious big meal and an icy, refreshing 
                        drink to wash it down with - the simple things in life. Thi's got you covered. 
                        Tonight... it's table for one.`;
     
    title.innerText = "Thi's Burgers";
    mainBurgerImg.src = mainBurger;

    content.appendChild(title);
    content.appendChild(mainBurgerImg);
    content.appendChild(caption);
    content.classList.add('content');
    
    container.appendChild(content);
    
}

export default home;