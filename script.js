function calculator2() {
    let a = parseFloat(prompt("Enter First Number"));
    let b = parseFloat(prompt("Enter Second Number"));

    let add, sub, multiply, divide, modulus;
    add = a + b;
    sub = a - b;
    divide = a / b;
    multiply = a * b;
    modulus = a % b;

    alert(+a + "+" + b + "=" + add);
    alert(+a + "-" + b + "=" + sub);
    alert(+a + "*" + b + "=" + multiply);
    alert(+a + "/" + b + "=" + divide);
    alert(+a + "%" + b + "=" + modulus);
  }
  function calculate() {
    let num1 = parseFloat(prompt("Number1"));
    let oprator = prompt("Enter operator : +,-,/,*,% ");
    let num2 = parseFloat(prompt("Number2"));

    let oprations = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "*": (a, b) => a * b,
      "/": (a, b) => a / b,
      "%": (a, b) => a % b,
    };

    alert("Result:" + (oprations[oprator]?.(num1, num2)?? "Invalid oprator!!!"));
    //alert("result:" + oprations[oprator]?.(num1, num2));
  }


  //Assignment oprators
  function assignment() {
    let x,y;
     x = 10;
     y = 20;

    alert("Result:" + (x = y));
    alert("Result:" + (x += y));
    alert("Result:" + (x -= y));
    alert("Result:" + (x *= y));
    alert("Result:" + (x /= y));
    alert("Result:" + (x %= y));
  }

  //comparision oprators
  function comparision() {
    let a = parseFloat(prompt("Enter first no."));
    let b = parseFloat(prompt("Enter second no."));

    alert("a == b : " + a + "==" + b + " : " + (a == b));
    alert("a === b : " + a + "===" + b + " : " + (a === b));
    alert("a != b : " + a + "!=" + b + " : " + (a != b));
    alert("a !== b : " + a + "!==" + b + " : " + (a !== b));
    alert("a > b : " + a + ">" + b + " : " + (a > b));
    alert("a < b : " + a + "<" + b + " : " + (a < b));
    alert("a <= b : " + a + "<=" + b + " : " + (a <= b));
    alert("a >= b : " + a + ">=" + b + " : " + (a >= b));
  }


   //logical operators

   function log() {
    let a = parseFloat(prompt("Enter first no."));
    let b = parseFloat(prompt("Enter second no."));

    alert("Result : " + a + " && " + b + " = " + (a > b && a < b));
    alert("Result : " + a + " || " + b + " = " + (a > b || a < b));
    alert("Result : " + a + " != " + b + " = " + (a > b != a < b));
  }


  //Ternary Operators

  function tern() {
    let age = parseFloat(prompt("Enter Your Age Here.."));
    let vote = (age >= 18) ? "You Can Vote!😊" : "You Cannot Vote!";

    alert (vote);
  }

  //string operators
  function strings(){
    let fname = prompt("First Name");
  let mname = prompt("Middle Name");
  let lname = prompt("Last Name");
  let fullname = fname+ " " +  mname + " " + lname;
  alert('Welcome To My Website.. ' +fullname + '!✨');
 }


 //typeof

 function checktype() {
    alert("Hello AVN! " + typeof "Hello AVN!"); // "string"
    alert("48 " + typeof 48); // "number"
    alert("99n" + typeof 99n); // "number"
    alert("true " + typeof true); // "boolean"
    alert("undefined " + typeof undefined); // "undefined"
    alert("null " + typeof null); // "object"  ❗(JavaScript bug)
    alert("{} " + typeof {}); // "object"
    alert("[] " + typeof []); // "object"
    alert("function() {} " + typeof function () {}); // "function"
  }

  //nullish
  function nullish(){
    let user;
  alert(user?? 'I am printing because user is undefined. (I am Nullish Operator!😵)' );

  var userName = " (I am Vannamma!😄) I am printing because userName is defined.";
  alert(userName?? 'I am Not printing because userName is defined. (I am Nullish Operator!😵)' );
  }

  //unary
  function unary() {
    let a = parseFloat(prompt("Enter A Number"));

    alert(a++ + " a++");
    alert(++a + " ++a");
    alert(--a + " --a");
    alert(a-- + " a--");
  }