//Ex1
let length=20
let width=4
area=4*20
console.log (`The area of the rectangle is: ${area}`);


//Ex2
let temperature=30
let fahrenheit = temperature*9/5 + 32
console.log(temperature+`°C is `+ fahrenheit+ `°F`);
let fahrenheit_temperature =86
let temperature1=(fahrenheit_temperature - 32) / 1.8
console.log(fahrenheit_temperature+`°F is `+ temperature1+ `°C`);


//Ex3
let H = 2
let seconds = H * 3600
console.log(H + " hour = " + seconds + " seconds.")

//Ex4
let year=1994
if((year%4==0 && year%100 !=0)|| year%400==0)
{
   console.log(`The ${year}  is leap` );
}
else{
    console.log(`The ${year} is not leap`);
}
//Ex5
let start = 11
let end = 30
let num =14
if(start<=num && end>=num){
    console.log( num +` ture if in range`);
}else{
    console.log( num +` false out of range`);  
}

//Ex6
let result=1;
for(let r= 1 ; r <= 9 ; r++){
    result*= r;
    console.log(`The Factorial ${r} =result is ${result}`);

}

