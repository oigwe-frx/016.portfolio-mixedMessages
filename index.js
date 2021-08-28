import { messageBuilder } from './tarotLibrary.js';


//DOM Manipulation


window.onload = function () {
 
// JSON REQUEST FOR TAROT DATA

  fetch('./data/tarotCards.json')
    .then(response => {
      return response.json();
    })
    .then((data) => {

    //MESSAGEBUILDER FUNCTION WILL PARSE JSON OBJECT DATA AND BUILD THE READING  
      const cardData = messageBuilder(data);

      
    //SET TIMEOUTS PRESENT TAROT DATA TO USER
      //TIMEOUT (1) FLIPS CARDS FROM BACK TO FRONT PRESENTING TAROT CARD IMAGES
      setTimeout(function () {

        let i = 0;

        while (i < 3) {
          let card = 'js-card-' + `${i}`;
          let cardFace = 'js-card-face-' + `${i}`;
          
          document.getElementById(card).classList.toggle('flip-card');
          document.getElementById(cardFace).innerHTML = `<img src="${cardData[i].img}"/>`;
          i++;
        }

        clearInterval();
      }, 2000);

      
     //TIMEOUT (2) CONTROLS THE STEPS NEEDED TO DISPLAY THE TAROT READING MESSAGES TO THE USER
      setTimeout(function () {
        
       //SUBTITLE BANNER DISAPPEARS
        const subtitle = document.getElementById('js-subtitle');
        subtitle.classList.toggle('visible');

       
       //REFRESH BUTTON APPEARS AND REFRESH FUNCTION IS ATTACHED TO BUTTON
        const refresh = document.getElementById('js-refresh')
        refresh.classList.toggle('visible');
        const btnRefreshIcon = document.getElementById('js-refresh-icon');
        btnRefreshIcon.onclick = function () {
         location.reload()
        }
       
       //DOM MANIPULATION TO DISPLAY THE MESSAGE
        let html = ''
        let i = 0;
        
        while (i < 3) {
          let cardBack = 'js-card-back-' + `${i}`
          document.getElementById(cardBack).classList.toggle('visible');

          html += cardData[i].message;
          i++;
        }
        
        
        document.getElementById('js-message').innerHTML = `<section class="row grey">
        <div class="col">
          <div class="row">
            <!--Card Data-->
            ${html}
          </div>
        </div>
        </section>`

        clearInterval();
      }, 6000);
    });



};
