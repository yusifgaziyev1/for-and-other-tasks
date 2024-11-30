// 1) fordan isdifade ederek yuxaridaki hisseni logda cixaran kod yazin
// *
// **
// ***
// ****
// *****

for (let number = 1; number <= 5; number++) {
    console.log("*".repeat(number));
}

// 2) fordan isdifade ederek yuxaridaki neticeni alan kod yazin

// *****
// ****
// ***
// **
// * 

for (let number = 5; number >= 1; number--) {
    console.log("*".repeat(number));
}

// 3) istifadeciden ad soyad ve yas kimi deyerler alin 
// ve sonda isdifadecinin dogum ilini qeyd edib loga veren kod yazin
// meselen "Ali Aliyev siz 1999 cu ilde anadan olmusuz"

let ad = "Yusif";
let soyad = "Gaziyev";
let yas = 25;
let tevellud = new Date().getFullYear() - yas;

console.log(`${ad} ${soyad} siz ${tevellud}'cu ildə anadan olmusuz.`);

// 4)100 e kimi reqemlerden fordan isdifade ederek 5 e bolunenleri 
// logda cixaran kod yazin

for (let number = 1; number <= 100; number++) {
    if (number % 5 == 0) {
        console.log(number);
    }
}

// 5) 2 deyisen yaradin username ve password adinda eger isdifadeci
// prompda her ikisini duzgun daxil ederse yeni username ile password dogru 
// olarsa logda onu salamlayan kod cixsin burda prompt ve logical operatorlardan
// isdifade edeceksiz 

let userInput = prompt("Username daxil edin: ")
let passInput = prompt("Şifrə daxil edin: ");

let username = "yusif";
let password = "12345";

if (userInput == username && passInput == password) {
    alert("Username və Password doğrudur.");
} else if(userInput == username && passInput != password) {
    alert("Password yalnışdır.");
} else if(userInput != username && passInput == password) {
    alert("Username yalnışdır.");
} else {
    alert("Username və Password yalnışdır.");
}

