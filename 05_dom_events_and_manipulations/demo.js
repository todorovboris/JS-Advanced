//
//                          DOM Manipulations
//      We can do the following thins with HTML elements dynamically:
//  -   elm.remove()            => премахва го от неговия реодител, т.е. го премахва от екрана;
//  -   elm.appendChild(elm2)   => към elm В КРАЯ, добавяме дете с референция към HTML елемента elm2;
//  -   elm.prepend(elm3)       => към elm В НАЧАЛОТО, добавяме дете с референция към HTML елемента elm3;
//  -   еlm.replaceChild(newChild, oldChild)    => земеня референцията на едното дете с референцията на другото;
//
//  -   let li = document.createElement('li');  => factory function, на която подаваме вида на елемента(като стринг), който искаме да създадем
//      let p = document.createElement('p');
//
//  -   let li = document.getElementById("my-list");
//      let newLi - li.cloneNode(true);

//  -   !!! Elements are created IN MEMORY - they DO NOT EXIST on the page !!!
//  -   !!! To became visible, they must be APPENDED to teh DOM tree       !!!

// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------
