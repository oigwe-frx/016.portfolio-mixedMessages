import {messageBuilder} from './tarotLibrary.js';


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
