// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
//
//                          Execution Context (this)
//
//  - determines what is the value of "this" in a specific function
//  - value of "this" depends on how we invoke the function:
//      - in GLOBAL SCOPE:
//          function showThis() {
//              console.log(this);      => this points to the global scope;
//          }
//          showThis();
//
//      - Object method:
//          const obj = {
//              name: 'Object Example',
//              showThis: function () {
//                  console.log(this);  => this points to the object;
//              },
//          };
//          obj.showThis(); // this = obj
//
//      - DOM Event: element.addEventListener()
//
//      - Using call() / apply() / bind() => manually determines the value of this, using these methods;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
