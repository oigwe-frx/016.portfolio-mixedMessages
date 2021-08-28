import { messageBuilder } from './tarotLibrary.js';


//DOM Manipulation


window.onload = function () {



  // JSON REQUEST FOR TAROT DATA

  async function fetchTarotData() {
    let response = await fetch('./data/tarotCards.json');

    if (!response.ok) {
      document.getElementById('js-message').innerHTML = `<h2>${response.status}</h2>`
    }

    return await response.json();
  }

  fetchTarotData()
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

          document.getElementById(cardFace).innerHTML = `<img src="${cardData[i].img}"/>`;
          document.getElementById(card).classList.toggle('is-flipped');
          document.getElementById(cardFace).classList.toggle('visible');

          i++;
        }

        clearInterval();
      }, 2000);

      return cardData;

    })
    .then((data) => {
      const cardData = data;

      //TIMEOUT (2) CONTROLS THE STEPS NEEDED TO DISPLAY THE TAROT READING MESSAGES TO THE USER
      setTimeout(function () {

        const subtitle = document.getElementById('js-subtitle');
        const refresh = document.getElementById('js-refresh');
        const btnRefreshIcon = document.getElementById('js-refresh-icon');


        //SUBTITLE BANNER DISAPPEARS
        subtitle.classList.toggle('visible');

        //REFRESH BUTTON APPEARS AND REFRESH FUNCTION IS ATTACHED TO BUTTON
        refresh.classList.toggle('visible');
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
          console.log(html)
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

}
