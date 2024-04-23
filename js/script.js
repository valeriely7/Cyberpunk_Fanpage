
//Button
const send = document.getElementById("btn-alert");
    let sent = "Johnny Silverhand: Give yourself time. Ideas'll come. Life'll shake you, roll you, maybe embrace you. The music'll find you.";
    send.addEventListener("click", () => {
        alert(sent);
    })    

//Accordion
const accordionItemHeaders = document.querySelectorAll(".accordion-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
        const OpenHeader = document.querySelector(".accordion-header.active")
        if(OpenHeader && OpenHeader!==accordionItemHeader){
           OpenHeader.classList.toggle("active");
          OpenHeader.nextElementSibling.style.maxHeight = 0;
    }
        accordionItemHeader.classList.toggle("active");
       const accordionItemBody = accordionItemHeader.nextElementSibling;
        if(accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }
      else{
        accordionItemBody.style.maxHeight = 0;
      }
    });
});

// Copyright
const currentDate = new Date();
let year = currentDate.getFullYear();
            document.getElementById("year").outerHTML = year;

//Accessbility
document.getElementById('btn-alert').addEventListener('keydown', function(e) {
  if (e.key === 'Enter' || e.key === ' ') {
      // trigger your button action
  }
});