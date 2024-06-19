setInterval(function() {
    document.getElementById("jam").innerText = new Date().toLocaleTimeString().replaceAll(".",":")
    }, 0);
const input = document.getElementById("suhu")
const cek = document.getElementById("button")
const fahrenheit= document.getElementById("fahrenheit")
const cara = document.getElementById("rumus")
const reverse= document.getElementById("reverse")

cek.addEventListener("click", function(){
if(input.value){
fahrenheit.value = Number(input.value)*9/5+32
cara.value = input.value.toString()+"x9/5+32"
}
})
reverse.addEventListener("click", function(){
if(fahrenheit.value){
input.value = (Number(fahrenheit.value)-32)*5/9;
}
})
console.log(suhu(30))

