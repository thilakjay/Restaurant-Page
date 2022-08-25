import './css/home.css';
import burger1src from './images/home-burger1.jpg';
import burger2src from './images/home-burger2.jpg';
import burger3src from './images/home-burger3.jpg';

const home = () => {   

    const container = document.body.querySelector('#container');
    
    const gridContainer = document.createElement('div');
    const leftGrid = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.innerText = `Big Burgers.\n Big Taste.\n Big Happy.`;
    leftGrid.appendChild(h2);
    const rightGrid = document.createElement('div');
    const rightGridTop = document.createElement('div');
    const rightGridBottom = document.createElement('div');

    gridContainer.appendChild(leftGrid);
    
    leftGrid.classList.add('left-grid');
    rightGrid.classList.add('right-grid');

    const content = document.createElement('div');
    const h1 = document.createElement('h1');
    const burger1 = new Image(315,193);
    const burger2 = new Image(156,224);
    const burger3 = new Image(156,224);

    rightGridBottom.classList.add('right-grid-bottom');
    rightGridTop.appendChild(burger1);
    rightGridBottom.appendChild(burger2);
    rightGridBottom.appendChild(burger3);
    rightGrid.appendChild(rightGridTop);
    rightGrid.appendChild(rightGridBottom);
  
    gridContainer.appendChild(rightGrid);

     
    h1.innerText = "Big Time.";
    burger1.src = burger1src;
    burger2.src = burger2src;
    burger3.src = burger3src;

    content.appendChild(h1);
    // content.appendChild(mainBurgerImg);
    // content.appendChild(h2);
    content.classList.add('content');
    gridContainer.classList.add('grid-container');
    container.appendChild(content);
    container.appendChild(gridContainer);
    
}

export default home;