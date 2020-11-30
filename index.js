const tshirts = [
    {
        id: 1,
        src: "img/mil_falcon.png",
        label: "Millenium Falcon"
    },
    {
        id: 2,
        src: "img/tie_wing.png",
        label: "Tie-Wing"
    },
    {
        id: 3,
        src: "img/x_wing.png",
        label: "X-Wing"
    }
]

let imgIndex = 0;
document.querySelector('h3').textContent = tshirts[imgIndex].label;
document.getElementById('img-card').src = tshirts[imgIndex].src;

function move(valor) {
    if (valor === 'back' && imgIndex == 0 || 
    valor === 'next' && imgIndex === tshirts.length -1 ){
        document.querySelector('h5').style.visibility = 'visible';
        document.querySelector('h5').style.padding = '20px 0px 10px 0px';
    } else {
        document.querySelector('h5').style.visibility = 'hidden';
        document.querySelector('h5').style.padding = '0px';
        if (valor === 'next'){
            imgIndex += 1;
            document.querySelector('h3').textContent = tshirts[imgIndex].label;
            document.getElementById('img-card').src = tshirts[imgIndex].src;
        } else {
            imgIndex -= 1;
            document.querySelector('h3').textContent = tshirts[imgIndex].label;
            document.getElementById('img-card').src = tshirts[imgIndex].src;
        }
    }
}
