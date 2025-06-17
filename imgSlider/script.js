
let card=document.createElement('div');
card.className='card';
card.style.width='28rem' ;
card.style.marginTop='100px';
card.style.marginLeft='400px';

let image=document.createElement('img');
image.className='card-img-top';

let cardBody=document.createElement('div');
let cardTitle=document.createElement('h5');
cardTitle.innerHTML='Image Slider'
cardTitle.className='text-center';

let button1=document.createElement('button');
button1.className='btn btn-primary';
button1.innerHTML='Start';
button1.onclick=showImage;

let button2=document.createElement('button');
button2.className='btn btn-primary';
button2.innerHTML='Previous';
button2.onclick=previous;

let button3=document.createElement('button');
button3.className='btn btn-primary ';
button3.innerHTML='Next'
button3.onclick=next;


cardBody.appendChild(cardTitle);
cardBody.appendChild(button1);
cardBody.appendChild(button2);
cardBody.appendChild(button3);
card.appendChild(image);
card.appendChild(cardBody);

const imgs=[
    './images/html.jpg',
    './images/css.jpg',
    './images/bootstrap.jpg',
    './images/js.png',
    './images/node.jpeg',
    './images/react.png',
];

let index=0;
function showImage() {
    image.src = imgs[index];
    index = (index + 1) % imgs.length;
     
  }
  setInterval(showImage, 5000);

function previous(){
    index=(index-1+imgs.length)%imgs.length;
    image.src=imgs[index];
}  
  
function next(){
    index=(index+1)%imgs.length;
    image.src=imgs[index]
}
document.body.append(card)
