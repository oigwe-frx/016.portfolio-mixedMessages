

    
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
export const messageBuilder = (array) => {
  const selectedCards = cardSelection(array);


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
        <div class="col card-border" >
          <div class="row">
            <img src="${card.img}" alt="Tarot Card ${card.img}" />
          </div>
          <div class="row">
            <div class="card text-center">
              <div class="card-body">
                <h6 class="card-title">
                  ${card.name.toUpperCase()}
                </h6>
                <p>
                  <strong>Mood:</strong> ${mood.toUpperCase()}
                </p>
                <p>
                  <strong>Meaning:</strong>
                  ${cardLeadin} ${card.meanings[mood][i].toLowerCase()}.
                </p>
                <p>
                  <strong>Guidance:</strong>
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
