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
            document.querySelector('.bg-modal').style.display ='fixed';
              console.log("you clicked button number " + index);
              modal.classList.toggle('modal-active');
              console.log(modal);
            })
      })(i);
}
}

const cancel = () => {
   const cancelBtn = document.querySelector('.close-btn');
   const modal = document.querySelector(".bg-modal");

   cancelBtn.addEventListener('click', () =>{
      modal.classList.toggle('modal-active');
   });
  
  }

navSlide();
popUp();
cancel();