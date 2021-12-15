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

function Remove(){
    let userInput = 
    userInput.replace(/\.\,\//g,"")
}