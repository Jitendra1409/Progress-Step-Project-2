 const progress = document.getElementById('progress');
 const prev = document.getElementById('prev');
 const next = document.getElementById('next');
 const circles = document.querySelectorAll('.circle');

 let curruntActive = 1;

next.addEventListener('click', ()=> {
    curruntActive++;
   if(curruntActive > circles.length){
    curruntActive = circles.length
}
    console.log(curruntActive);
    update()
 })

prev.addEventListener('click', ()=> {
    curruntActive--;
   if(curruntActive < 1){
    curruntActive = 1
}

console.log(curruntActive);
    update()
 })

 function update(){
    circles.forEach((circle, idx) => {
        if(idx < curruntActive){
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');  
        }
    })
 }

 const actives = document.querySelectorAll('.active')
//  console.log((actives.length/ circles.length)*100);
progress.style.width = (actives.length-1) / (circles.length-1) * 100 + '%'

if(curruntActive === 1){
    prev.disabled = false
}   else if (curruntActive === circles.length){
    next.disabled = true
} else {
    prev.disabled = false
    next.disabled = false
}