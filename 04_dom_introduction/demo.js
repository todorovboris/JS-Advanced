// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
// !!!!!!!!!!!!!!!!!!!!!!! ЦЯЛОТО СЪДЪРЖАНИЕ НА DOM Е СТРИНГОВО !!!!!!!!!!!!!!!!!!!!!!
//
//                          DOM Manipulations
// - HTML DOM allows JS to change the content of HTML elements:
//  .innerHTML   => съдържание на текущо избрания елемент;
//  .textContent => текстово съдържание на текущо избрания елемент; ЗА СТАТИЧНИ ТЕКСТОВЕ
//  .value       => input поле (това, което потребителя пише);      ЗА ДИНАМИЧНИ ТЕКСТОВЕ
//  .style       => CSS style (цвят, ширина, позиция и тн.)

//  !!! разликата между .innerHTML и .textContent е ако даденият елемент има childElements !!!
//  !!! ако ИМА childElements => innerHTML променя цялото съдържание(+децата) на елемента  !!!
//  !!! ако НЯМА childElements => функционално двете извършват едно и също                 !!!

// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
//                          Targeting Elements
// - These method return a REFERENCE to the element, which can be manipulated with JS:
//  .getElementById()           => by ID (MOST USABLE). ID is ATTRIBUTE, which should be UNIQUE;
//  .getElementsByClassName()   => by class name;   => връща КОЛЕКЦИЯ (дори и 1 елемент да е!!!)
//  .getElementsByTagName()     => by tag name;     => връща КОЛЕКЦИЯ (дори и 1 елемент да е!!!)
//  .querySelector()            => by CSS selector;
//  .querySelectorAll()         => by CSS selector; => връща КОЛЕКЦИЯ (дори и 1 елемент да е!!!)
//
//  - CSS selectors are strings that follow CSS syntax for matching. They allow fast element matching:
//      "#main"                 - returns the element with ID "main";
//      "#content div"          - selects all <div>s inside #content;
//      ".note, .alert"         - all elms. with class "note" or "alert";
//      "input[name='login']"   - <input> with name "login";
//
//  - Колекциите, които получаваме НЕ СА масиви, но можем да ги обхождаме с индексиращ оператор []

let counterHello = 0;

function sayHello() {
    counterHello++;

    alert(`You clicked the button ${counterHello} times!`);
    let input = confirm('Are you having fun yet?');

    if ((input = true)) {
        console.log('The user said Yes');
    } else {
        console.log('The user said No');
    }
}

function printText() {
    let text = temp1.textContent;
    temp1.textContent = 'DOM Introduction - CHANGED';
}
//---------------------------------------------------
