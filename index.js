// for loop
// const n = 5
// for(let i = 1; i <= n; i++){
// 	console.log(i)
// }

// while
// let a = 4
// while (a < 5){
// 	console.log(a)
// 	a++
// }

// do while 
// do {
// 	console.log(1)
// } while (false)

// array[0,1,2]
// let arr = ["krisna", "andi", "lukman"]
// console.log(arr[1])
// console.log(arr.length)
// arr.pop()
// arr.push("husam")
// console.log(arr)
// asynchronous
// arr.forEach((a) => console.log(a))

// object
// const person = {
// 	name: "krisna",
// 	age: 26,
// 	nikah: false
// }

// person.name = "andi"
// console.log(person["name"]);

console.log("ok")

document.getElementById("name").innerHTML = "Krisna Firdaus"
document.getElementById("name").style.color = "red"
document.getElementById("name").style.fontSize = "100px"

function submitRegister(e) {
	e.preventDefault()
	let x = document.forms["register"]["email"].value;
	document.querySelector("value-email").textContent = x
	return false;
}

function clickMe(){
	alert("okkk")
}

document.getElementById("click-me").addEventListener("click", clickMe)