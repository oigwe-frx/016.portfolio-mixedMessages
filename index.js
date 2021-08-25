// Card Selection
const cardSelection = (array) => {
  const cardHolder = [];
  let arrayCopy = array;
  let cardDeckCount = arrayCopy.length-1;


  while(cardHolder.length < 3) {
     let cardIndex = Math.floor(Math.random() * cardDeckCount); 
     let card = arrayCopy[cardIndex];
     cardHolder.push(card);
    
    arrayCopy = arrayCopy.slice(0,cardIndex).concat(arrayCopy.slice(cardIndex+1));
  }
    return cardHolder;
}


// Mood Selection
const messageMood = () => {
  const posOrNeg = ['light', 'shadow'];
  const moodHolder = [];

  while(moodHolder.length < 3) {
    let moodIndex = Math.floor(Math.random() * 2);
    let mood = posOrNeg[moodIndex];
    moodHolder.push(mood);
    }

  return moodHolder
}


// Message Composition
const messageBuilder = () => {
  const selectedCards = cardSelection(tarotInterpretations);


  const cardMoods = messageMood();
  const state = ["During your past, you were always", "Today, you are", "In the future you are"]
  let cardData = [];

  if(selectedCards.length === cardMoods.length) {
    let i = 0;
    while(i<selectedCards.length) {
      let card = selectedCards[i];
      let mood = cardMoods[i];
      let cardLeadin = state[i] ;


      cardData.push({
        img: card.img,
        message: ` 
        <div class="col" style="border-left: 1px solid #161616; border-right: 1px solid #161616">
          <div class="row">
            <img src="${card.img}" alt="Tarot Card ${card.img}" style="width:80%; margin: 0 auto;"/>
          </div>
          <div class="row">
            <div class="card text-center">
              <div class="card-body">
                <h6 class="card-title">
                  <b>Card ${i+1}:</b>
                  ${card.name.toUpperCase()}
                </h6>
                <hr/>
                <p class="card-text">
                  <b>Mood:</b> ${mood.toUpperCase()} <br/><br/>
                  <b>Meaning:</b>
                  ${cardLeadin} ${card.meanings[mood][i].toLowerCase()}.
                  <br/><br/>
                  <b>Guidance:</b>
                  ${card.fortune_telling[i] || card.fortune_telling[0]}.
                </p>
              </div>
            </div>
          </div>
        </div>`
      })
      i++;
    }
  }
  return cardData
};


//DOM Manipulation


const btnRefreshIcon = document.getElementById('js-refresh');
const btnRefresh = document.getElementById('do-over')
const subtitle = document.getElementById('subtitle');





 window.onload = function () {
  const cardData = messageBuilder();

 
  btnRefreshIcon.onclick = function () {
    location.reload()
  }
  
  let i = 0;
    setTimeout(function(){ 
     
      while(i < 3){
        let card = 'card-'+`${i}`;
        let back = 'back-'+`${i}`;
        document.getElementById(card).classList.toggle('flipCard');
        document.getElementById(back).innerHTML = `<img src="${cardData[i].img}"/>`;
        i++;
      }
    
      clearInterval();
     }, 2000);

     subtitle.classList.toggle('visible');

     setTimeout(function(){ 
       let html = ''
       let i = 0;
      while(i < 3){
        html += cardData[i].message;
        i++;
      }
      btnRefresh.classList.toggle('visible');


       document.getElementById('message').innerHTML = `<section class="grey row align-items-center" style="padding: 5%;">
        <div class="col">
          <div class="row">
            <!--Card Data-->
            ${html}
          </div>
        </div>
        </section>`
      
      clearInterval();
     }, 6000);
  };

