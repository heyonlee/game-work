window.onload = function () {
  const body = document.body;
  console.log(body);

  // 1. Create a <div> with the class "duck" and add it to the body.  Do this step by step
  // ( 1. create the element
  //   2. add a class to the element
  //   3. append the element to the body )
    const d = document.createElement('div')
    d.className= "duck"
    document.body.append(d)
    const dd = document.querySelector('.duck')
  // 2. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)
  // https://www.w3schools.com/jsref/met_win_setinterval.asp
    const a = document.querySelector('div')
   setInterval(() => a.classList.toggle('flap'), 250);

  // 3. Now, let's move the duck using CSS "top" and "left". Create
  // a function `moveDuck` that takes a duck object as an argument and sets the
  // "top" and "left" CSS properties.
  // let moveDuck(){
  //   dd.style.left = Math.random() * window.innerWidth
  //   dd.style.top = Math.random() * window.innerHeight
  //    }
  const moveDuck = () => {
    let h = Math.round(Math.random() * window.innerHeight) 
    let w = Math.round(Math.random() * window.innerWidth)
    dd.style.left = w + "px"
    dd.style.top =  h + "px"
    const randomPosition=()=>{
    random  =Math.ceil(Math.random*50)+1
    dd.style.left= random + 'px'; 
    dd.style.top = random + 'px';
  }
   
 }


  // HINT: Use Math.random() * window.innerWidth    for "left"
  //       And Math.random() * window.innerHeight   for "top"

  // 4. Try making the duck move to a different location every second (what did we use to do this several lines up??)
  setInterval(()=>moveDuck(),250)
  // 5. Congratulations! Move on to part 2!

  // ---------------------------- PART 2 ---------------------------------

  // 6. Now we will organize this better. Let's create
  //    a "function" called createDuck() that does everything in 1-4
  //    and "returns" the duck object

const createDuck=()=>{
    const d = document.createElement('div');
    d.className= "duck";
    document.body.append(d);
    const dd = document.querySelector("div")
  //   const randomPosition=()=>{
  //   random  = Math.ceil(Math.random*50)+1
  //   dd.style.left= random +'px'; 
  //   dd.style.top = random +'px';
  // }
    setInterval(() => d.classList.toggle('flap'), 250);
    function moveDuck(){
    let h = Math.round(Math.random() * window.innerHeight) 
    let w = Math.round(Math.random() * window.innerWidth)
    d.style.left = w + "px";
    d.style.top =  h + "px";
      }
   setInterval(()=>moveDuck(),250)
}
  // 7. Now, let's create lots of ducks!  Use a "for" loop to create 5 ducks
  //    using our fancy new createDuck() function
  for(let i=0;i<5;i++){
    createDuck()
  
    }
    dd.addEventListener('click', ()=> { 
      a.className='duck shot';
      setTimeout(()=>{dd.removeChild(a)},1000)
      });
     
    // dd.addEventListener('click', ()=> { 
    //   a.className='duck shot'
    //         setTimeout(()=>{dd.removeChild(a)},1000)
    // })
  // 8. The ducks are overlapping.  Modify createDuck so each time
  //     it creates a duck, it appears in a random location
  // HINT: You may want to create a `randomPosition()` function that you can use
  //       to set the ducks' initial locations and in your `moveDuck()` function;

  // 9. Keep going! Move onto part 3!

  // --------------------------- PART 3 ------------------------------------

  // 11. BOOM. Attach a "click" handler that adds the "shot" class to
  //     the duck when you click on it!
    // document.body.addEventListener('click', ()=> { 
    //   a.className='duck shot'
       
    //  setTimeout(()=>{document.body.removeChild(a)},1000)
    //   });

     document.querySelectorAll('.duck').forEach(item => {
       item.addEventListener('click', () => { 
          
         item.className='duck shot'

          setTimeout(()=>{document.body.removeChild(item)},1000)
          //handle click
        })
      })





  // 12. After a duck has been clicked on, remove it from the DOM after
  //     a short delay (1 second) Hint Hint...use setTimeout
  //     as for removing the element check out https://dzone.com/articles/removing-element-plain

  // 13. Create a new function named checkForWinner() that reads the DOM
  //     to see if there are any ducks left. 
    //(How can we check the DOM for more than one element?, and how can we see how many elements we get back) If not, alert "YOU WIN!"
 
    checkForWinner=()=>{ 
   if (document.getElementsByTagName("div").length == 0){
     alert("YOU WIN!")
   } 
 }
  // 14. BONUS: The ducks are moving pretty erratically, can you think
  //     of a way to adjust the ducks speed based on how far needs to move?

  // 15. BONUS: Add the "left" and "right" class to the duck based on the
  //     direction the duck is flying and change the way the duck is facing

  // Done, you have accomplish another level of skill
};
