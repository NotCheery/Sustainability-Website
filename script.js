//You can also write React code here since have installed React in Shell
//You can also write React code here since have installed React in Shell

//Note*** If have time, create modules or quizzes about sustainability. 
//Key tasks: Accurate information, Guides, Links, Quizzes, Petition, Volunteer


//Changing the color of the links when hovered over in Knowledge section.
document.addEventListener("DOMContentLoaded", function() {
  // Change color of specific links on hover
  const customLinks = document.querySelectorAll('.custom-link');
  customLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
      link.style.color = '#1cb611'; // Change color on hover
    });
    link.addEventListener('mouseout', () => {
      link.style.color = 'inherit'; // Revert color after hover
    });
  });
});


//Upon clicking 'Take the Survey' button, open a new tab
document.getElementById('survey-button').onclick = function() {
  window.open('https://forms.gle/yuoFsPTEmP4WgWJo8', 'blank');
};

//Upon clicking volunteer links, it should take you to a new tab 
document.addEventListener("DOMContentLoaded", function() {
  const volunteerLinks = document.querySelectorAll('#volunteer-link');
  volunteerLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      window.open(link.href, '_blank');
    });
  });
});

//Bold when hovering over volunteer links.
//We start with a function, and in this function contains a loop.
document.addEventListener("DOMContentLoaded", function() {      //ensures js runs only when entire html doc is loaded.
  //querySelectorAll selects everything in html that has class=volunteer-link
  const volunteerLinks = document.querySelectorAll('.volunteer-link');

  //forEach loop
  volunteerLinks.forEach(link => {
    
    //When hovering over the link...
    link.addEventListener('mouseover', () => {
      link.style.fontWeight = 'bold';
      link.style.color = 'green';
    });

    //When you move your mouse away after hovering over the link, it goes back to normal.
    link.addEventListener('mouseout', () => {
      link.style.fontWeight = 'normal';
    });

    //When user clicks on link, the color changes to light green.
    link.addEventListener('click', () => {
      link.style.color = '#15e115';
    });

  });
});


//Validate the email for subscribe


//Click 'subscribe' button should lead to a pop-up thank you note.
document.getElementById('pop-up-note').onclick = function() {
  
}