const dis = document.querySelector("#dis");
const inc = document.querySelector("#inc");
const rest = document.querySelector("#rest");
let num = document.querySelector("#number");
let numb = 0;
num.innerHTML = numb;

inc.addEventListener("click", ()=>{
  numb++;
  num.innerHTML = numb;
});
dis.addEventListener("click",()=>{
  numb--;
  num.innerHTML = numb;
});
rest.addEventListener("click", ()=>{
  numb = 0;
  num.innerHTML = numb;
});