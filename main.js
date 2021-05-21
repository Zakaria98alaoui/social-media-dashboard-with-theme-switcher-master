const switchBtn = document.querySelector(".switch-btn");
const switchClass = document.querySelector(".switch");
const cards = document.querySelectorAll(".card");
const cardState = document.querySelectorAll(".card-stat");
const navHeaderTitle = document.querySelector(".nav-header h1");
const navHeaderSpan = document.querySelector(".nav-header span");
const navCenterSpan = document.querySelector(".nav-center span");
const cardTitleStat = document.querySelector(".title-card-stat h2");
const Emails = document.querySelectorAll('.email');
const folowersCount = document.querySelectorAll(".folowers-count");
const Attribution = document.querySelector(".attribution");
switchBtn.addEventListener('click', () => {
  if (!switchBtn.classList.contains("slide")) {
    switchBtn.classList.add("slide");
    document.body.style.backgroundColor = "#121212";
    switchClass.style.backgroundColor = "#242424";
    // change text and color nav center span
    navCenterSpan.textContent = "Dark mode";
    navCenterSpan.style.color = "hsl(0, 0%, 100%)";
    switchBtn.style.backgroundColor = "hsl(163, 72%, 41%)";
    switchBtn.style.borderColor = "hsl(163, 72%, 41%)";
    // change card background color 
    cards.forEach(card => {
      card.style.backgroundColor = "hsl(228, 28%, 20%)";
    });
    // change card stat backgound color
    cardState.forEach(stat => {
      stat.style.backgroundColor = "hsl(228, 28%, 20%)"
    });
    // nav header color chang to white color
    navHeaderTitle.style.color = "hsl(0, 0%, 100%)";
    // card title stat color chang to white 
    cardTitleStat.style.color = "hsl(0, 0%, 100%)";
    // chang color emeils
    Emails.forEach(email => email.style.color = "hsl(0, 0%, 100%)");
    // change folowers count color
    folowersCount.forEach(followrCount => followrCount.style.color = "hsl(0, 0%, 100%)");
    // change attribution font color
    Attribution.style.color = "hsl(0, 0%, 100%)"
  } else {
    switchBtn.classList.remove("slide");
    document.body.style.backgroundColor = "hsl(0, 0%, 100%)";
    switchClass.style.backgroundColor = "hsl(0, 0%, 100%)"
    switchBtn.style.backgroundColor = "hsl(230, 22%, 74%)";
    switchBtn.style.borderColor = "hsl(230, 22%, 74%)"
    // change card background color 
    cards.forEach(card => {
      card.style.backgroundColor = "hsl(227, 47%, 96%)";
    });
    // change card stat backgound color
    cardState.forEach(stat => {
      stat.style.backgroundColor = "hsl(227, 47%, 96%)";
    });
    // nav header color chang to white color
    navHeaderTitle.style.color = "hsl(230, 17%, 14%)";
    // card title stat color chang to white 
    cardTitleStat.style.color = "hsl(230, 17%, 14%)";
    // chang color emeils
    Emails.forEach(email => email.style.color = "hsl(230, 17%, 14%)");
    // change folowers count color
    folowersCount.forEach(followrCount => followrCount.style.color = "hsl(230, 17%, 14%)");
    // change text nav center span
    navCenterSpan.textContent = "Light mode";
    navCenterSpan.style.color = "hsl(228, 12%, 44%)";
    // change attribution font color
    Attribution.style.color = "hsl(228, 12%, 44%)"
  }
});