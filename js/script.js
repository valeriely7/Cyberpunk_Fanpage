    
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