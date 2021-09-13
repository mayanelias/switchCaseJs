// נתון מספר:
// אם המספר הוא 2  הדפס המספר כפול 2
// אם המספר הוא 5  הדפס המספר כפול 5
// אם המספר הוא 7  הדפס המספר כפול 7
// אם המספר הוא 10  הדפס המספר כפול 10
// אחרת הדפס את המספר עצמו
// var num1=2;
// if(num1==2){ 
//     console.log(num1*2);    
// }
// else if(num1==5){
//     console.log(num1*5);
// }
// else if(num1==7){
//     console.log(num1*7);
// }
// else if(num1==10){
//     console.log(num1*10);
// }
// else{console.log(num1);}
// switch (num1) {
//     case 2:console.log(num1*2);        
//         break;
//         case 5:console.log(num1*5);        
//         break;
//         case 7:console.log(num1*7);        
//         break;
//         case 10:console.log(num1*10);        
//         break;      
//     default:console.log(num1);
//         break;
// }
// var day=3;
// switch (day) {
//     case 1:console.log("sunday");        
//         break;
//         case 2:console.log("monday");        
//         break;
//         case 3:console.log("tuesday");        
//         break;
//         case 4:console.log("wedensday");        
//         break;   
//         case 5:console.log("thursday");        
//         break;  
//         case 6:console.log("friday");        
//         break;  
//         case 7:console.log("saturday");        
//         break; 
//     default:console.log("not one of the days");
//         break;
// }
// נתון אובייקט של משתמש: שם, אימייל וסוג משתמש(admin, super admin, client)
// במקרה והוא מנהל הדפס "you are admin"
// במקרה והוא סופר מנהל הדפס "you are a super admin"
// אחרת הדפס "you are our loyal client"
// var object={name:"mayan",email:"eliasmayan@gmail.com",userType:"admin"};
// switch (object.userType) {
//     case "admin":
//         console.log("you are admin");        
//         break;
//         case "super admin":
//             console.log("you are super admin");        
//         break;
//     default:
//         console.log("you are our loyal client");
//         break;
// }
// var but1=document.getElementById("but1");
// var but2=document.getElementById("but2");
// var but3=document.getElementById("but3");
// var but4=document.getElementById("but4");
// var but5=document.getElementById("but5");
// but1.onclick=()=>{printFriut("apple")};
// but2.onclick=()=>{printFriut("pear")};
// but3.onclick=()=>{printFriut("mango")};
// but4.onclick=()=>{printFriut("banana")};
// but5.onclick=()=>{printFriut("melon")};
// function printFriut(fruit){
//     p.innerHTML="";
//     switch (fruit) {
//     case "apple":
//         console.log("apple");        
//         break;
//         case "pear":
//             console.log("pear");        
//         break;
//         case "mango":
//             console.log("mango");        
//         break;
//         case "banana":
//             console.log("banana");        
//         break;
//         case "melon":
//             console.log("melon");        
//         break;   
// }

// }

// נתון מערך של 5 רכבים: דגם, שנתון, מחיר, הנחה(כמה אחוז), תמונה(קישור)
// הצג את כל הרכבים על המסך כולל מחיר רגיל ומחיר אחרי הנחה
// במידה וההנחה הוא 25 אחוז הקפץ הודעה "crazy sell"
// במידה וההנחה הוא 10 אחוז הקפץ הודעה "  good deal for you" 
// במידה וההנחה הוא 7 אחוז הקפץ הודעה "not bad" 
// במידה וההנחה הוא 3 אחוז הקפץ הודעה "this is joke" 
// var cars=[{brand:"mazda",year:"2005",price:20000,discount:25,image:"https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278__340.jpg"},
// {brand:"kia",year:"2012",price:40000,discount:30,image:"https://cdn.pixabay.com/photo/2016/11/22/23/44/porsche-1851246__340.jpg"},
// {brand:"mercedes",year:"2010",price:30000,discount:50,image:"https://cdn.pixabay.com/photo/2016/04/01/12/16/car-1300629__480.png"},
// {brand:"fiat",year:"2008",price:60000,discount:7,image:"https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019__480.jpg"},
// {brand:"subaru",year:"2009",price:70000,discount:3,image:"https://cdn.pixabay.com/photo/2017/01/06/05/28/car-1957037__480.jpg"},]
// var p=document.getElementById("p");
// for(var i=0;i<cars.length;i++){
//     // p.innerHTML="";
//     p.innerHTML+=`<br><br><br>brand:${cars[i].brand} year:${cars[i].year} price:${cars[i].price} price discount:${cars[i].price-cars[i].price/100*cars[i].discount} discount:${cars[i].discount} 
//     <img width=600px hieght=600px src=${cars[i].image}>`
//     switch (cars[i].discount) {
//         case 25:
//             alert("crazy sell");        
//             break;
//             case 10:
//                 alert("good deal for you");        
//             break;
//             case 7:
//                 alert("not bad");        
//             break;
//             case 3:
//                 alert("this is joke");        
//             break;
           
//     } 
// }




