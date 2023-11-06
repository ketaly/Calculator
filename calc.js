let inpt = document.getElementById("int");
let butt = document.querySelectorAll('.cal-but')
let equal = document.querySelector('.equal')
let clear = document.querySelector('.clear')
let clear1 = document.querySelector('.clear1')


    
butt.forEach(function (butts) {
    butts.addEventListener('click',function(event) {
    let val = event.target.dataset.num;
    inpt.value +=  val;  
    })
})

equal.addEventListener('click',function (event) {
   if (inpt.value === ""){

    inpt.value = "";
   } 
else{
    let answer = eval(inpt.value);
    inpt.value = answer
}
})


clear.addEventListener('click', function (event) {
    inpt.value=''
    
})

clear1.addEventListener('click', function (event) {
    inpt.value= inpt.value.slice(0, -1)
    
})
