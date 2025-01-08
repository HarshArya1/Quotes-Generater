const quotes = [
    "The best way to predict the future is to create it. — Peter Drucker",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
    "The only way to do great work is to love what you do. — Steve Jobs",
    "Don't watch the clock; do what it does. Keep going. — Sam Levenson",
    "It does not matter how slowly you go, as long as you do not stop. — Confucius",
    "Opportunities don't happen, you create them. — Chris Grosser",
    "You miss 100% of the shots you don’t take. — Wayne Gretzky",
    "In the middle of every difficulty lies opportunity. — Albert Einstein",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. — Ralph Waldo Emerson",
    "The harder you work for something, the greater you'll feel when you achieve it. — Anonymous",
    "Success is not how high you have climbed, but how you make a positive difference to the world. — Roy T. Bennett",
    "Dream big and dare to fail. — Norman Vaughan",
    "Don’t let yesterday take up too much of today. — Will Rogers",
    "The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt",
    "It always seems impossible until it's done. — Nelson Mandela",
    "The way to get started is to quit talking and begin doing. — Walt Disney",
    "Success usually comes to those who are too busy to be looking for it. — Henry David Thoreau",
    "It’s not whether you get knocked down, it’s whether you get up. — Vince Lombardi",
    "Your time is limited, so don’t waste it living someone else’s life. — Steve Jobs",
    "Everything you’ve ever wanted is on the other side of fear. — George Addair"
  ];
  // for color 
  const color=["burlywood","palegreen","pink","lightsalmon","cornsilk","lightcyan","lightblue","lightsteelblue","orange","lightgoldenrodyellow"];


  //***********************Mouse Event****************** */
// const button=document.querySelector("button");
// //'click',dblclick','mousemove,mouseover;
// button.addEventListener('mouseover',()=>{ //(action on button then effects, call back function what you wants to changes)
//   const text = document.getElementById("quote");
//   const text2=document.getElementById('color');
  
//   const index = Math.floor(Math.random()*quotes.length);
//   text.textContent = quotes[index];
//   text2.style.backgroundColor=color[Math.floor(Math.random()*color.length)];
// })


// **********************Keyboard Event*****************
// keydown any key press then react
// keyup means realse the key after than events happens
// document.addEventListener('keyup',(event)=>{
//   // console.log(event) // give power to indentify which key is pressed
//   // console.log(event.key) 
//   if(event.key=="Enter"){
//   const text = document.getElementById("quote");
//   const text2=document.getElementById('color');
  
//   const index = Math.floor(Math.random()*quotes.length);
//   text.textContent = quotes[index];
//   text2.style.backgroundColor=color[Math.floor(Math.random()*color.length)];
//   }
//   // //////console.log(event.target);
// })

// **************event.target*********
// by this we know ye event kis ke trigger hone se ho raha hai

const button=document.querySelector("button");
//'click',dblclick','mousemove,mouseover;
button.addEventListener('click',(event)=>{ //(action on button then effects, call back function what you wants to changes)
  console.log(event.target)
  console.log(event.type)
  console.log(event.clientX) // left se kitane pixel hai at X direction se mouse ke position
  console.log(event.clientY) // up se kitane pixel dowm hai se mouse ke position
  const text = document.getElementById("quote");
  const text2=document.getElementById('color');
  
  const index = Math.floor(Math.random()*quotes.length);
  text.textContent = quotes[index];
  text2.style.backgroundColor=color[Math.floor(Math.random()*color.length)];
})
