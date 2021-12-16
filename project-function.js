function factorialize() {
    let num = prompt("Enter a number:");
    var firstNum = num
    if (num == 1 || num==0){
        alert("The factorial is 1");
    }else if (num>=1){
        for (let i = num-1; i >=1; i --){
            num = num *i;
         }
         alert("The factorial of " + firstNum + " is " + num);
    }else{
        alert('Invalid Input')
    }
  }
  
function valueN(){
    let number = parseInt(prompt('Enter a number: '));
    let sum = 0;
    if (number >= 1){
        for (let i = 0; i <= number; i++){
            sum += i
        }
        alert(sum)
    }else{
        alert('Invalid Input!')
    }
}
function isOdd(n){
    return Boolean(n % 2 );
}

function OddandEven(){
    let number = parseInt(prompt('Enter a number:'));
    let sumOdd = 0;
    let sumEven = 0;
    for(let i =0; i<=number;i++){
        if(isOdd(i)){
            sumOdd += i;
        }
    }

    for (let a = 0; a<=number;a++){
        if(number % 2 == 0){
            sumEven += a;
        }
    }
    alert('Sum of even is: '+sumEven +'\n' +'Sum of odd is: '+sumOdd);
}

function letterFind(){
    const letterInput = prompt("Please enter your string:")
    const Lletter = /[L]/gi;
    const letterFound = letterInput.match(Lletter); 
    const count = letterFound.length;
    alert(letterInput+" contains "+count+" "+"L") 
}

function vowelFind(){
    const vowelInput = prompt("Please enter your string:")
    const vowels = /[A,E,I,O,U]/gi;
    const vowelFound = vowelInput.match(vowels); 
    const count = vowelFound.length;
    alert(vowelInput+" contains "+count+" "+"vowels")
}

function Palindrome(){
    let isPalindrome = true;
    let orgpInput = prompt("Please enter your string:");
    let pInput = orgpInput.toLocaleLowerCase().trim();
    for(let i = 0 , j = pInput.length; i <= j ; i++ , j--){
        if(pInput[i] != pInput[j-1]){
            isPalindrome = false;
            break   
        }
    }

    if (!isPalindrome){
        alert('This is not a Palindrome')
    }else{
    alert('This is a palindrome')
    }
}
//131052-308T//
function Remove(input){
    ouput = input.replace(/\.\,\//g,"");
}

function lengthCheck(input){
    let ouput = input.length;
    if(ouput != 11 ){
        alert('Invalid Input')
    }
}

function  intCalc(){
    
    let userInt =  document.getElementById("id-display").value;

    Remove(userInt);
    lengthCheck(userInt);
    let gender = userInt.slice(7,10);
    let birthday = userInt.slice(0,7);
    let dob = userInt.slice(4,6)+"-"+userInt.slice(2,4)+"-"+userInt.slice(0,2)

    

    let removedStr = userInt.replace(userInt.slice(6,7),"");
    let middleStr = userInt.slice(6,7);
    if (middleStr !== "-" && middleStr !="A" && middleStr != "+"){
        alert("Invalid")
    }

    let firstStr =  Number(removedStr.slice(0,9));
    let dividedStr = firstStr/31;
    let decimal = dividedStr - Math.floor(dividedStr);
    let multipliedStr = decimal*31;
    let finalNum = Math.round(multipliedStr);
    let lastChar = removedStr.charAt(removedStr.length -1);
    let values = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y"];
    let control = values[finalNum];
    if (lastChar == control){
        document.getElementById("id-display").value = "True"
        Sex(gender);
        Age(dob);
        ageArrange(birthday,middleStr);

    }else{
        document.getElementById("id-display").value = "Wrong"
    }
}

function Sex(input){
    if (isOdd(input)){
        document.getElementById("sex").value = "Male";
    }else{
        document.getElementById("sex").value = "Female";
    }
}
function ageArrange(input,yearControl){
    let day = input.slice(0,2);
    let month = input.slice(2,4);
    let year = input.slice(4,6);
    let date = year+month+day;
    if(yearControl == "A"){
        date = day +"-"+ month+"-" + "20"+year;
    }else if(yearControl == "+"){
        date = day +"-"+ month+"-" + "18"+year
    }else{
        date = day +"-"+ month+"-" + "19"+year
    }
    document.getElementById("birthday").value = date;
}

function Age(input){
    let date1 = new Date(input);
    let date2 = new Date(); //current day

    // difference in time
    let differenceInTime = date2.getTime()-date1.getTime();

    //convert mili to days
    let differenceInDays = Math.round(Math.abs((differenceInTime/(3600*1000*24))));

    // convert days to years
    let ageYears = differenceInDays/365;
    let ageMonths = (ageYears-parseInt(ageYears))*12;
    let tmp = parseInt(ageMonths);
    let ageDays = (ageMonths-parseInt(ageMonths))*30; 
    document.getElementById("spe-day").value = "D:"+differenceInDays+" Y:"+parseInt(ageYears)+" M:"+parseInt(ageMonths);
    document.getElementById("age").value = Math.round(ageYears);
}

function clear(){
    document.getElementById("id-display").value = "";
    document.getElementById("sex").value = "";
}
