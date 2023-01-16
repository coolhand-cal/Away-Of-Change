const navSlide = () => {
 const burger = document.querySelector('.burger')
 const nav = document.querySelector('.rightLinks')

 burger.addEventListener('click', () =>{
    nav.classList.toggle('nav-active');
 });

}

const popUp = () => {
   const signUpButtons = document.querySelectorAll(".signup-btn");
   const modal = document.querySelector(".bg-modal");

   for (var i = 0; i < signUpButtons.length; i++) {
      (function(index) {
           signUpButtons[index].addEventListener("click", () =>{
              modal.classList.toggle('modal-active');
            })
      })(i);
}
}

const cancel = () => {
   const cancelBtn = document.querySelector('.bgclose-btn');
   const modal = document.querySelector(".bg-modal");

   cancelBtn.addEventListener('click', () =>{
      modal.classList.toggle('modal-active');
   });
  
  }

const cancelAppt = () => {
   const cancelBtn = document.querySelector('.aptoggle-btn');
   const modal = document.querySelector(".appt-modal");

   cancelBtn.addEventListener('click', () =>{
      modal.classList.toggle('modal-active');
   });
  
  }

   const togggleAppt = () => {
   const toggleButtons = document.querySelectorAll(".aptoggle-btn");
   const modal = document.querySelector(".appt-modal");

   for (var i = 0; i < toggleButtons.length; i++) {
      (function(index) {
           toggleButtons[index].addEventListener("click", () =>{
              modal.classList.toggle('modal-active');
            })
      })(i);
}
}

navSlide();
popUp();
cancel();
togggleAppt();