// Обекти и Асоциативни масиви

// - обекти    => колекцията от свойства се отнасят към описанието на 1 явление;
// - ас. масви => колекцията от свойства се отнасят за различни явления;

//-------------------------------------------------------------------------------------------------

// Методи(функции) и контекст

// 1) замяна и повече ползван похват вместо Swtich:
function switchh(command) {
    let count1 = 5;
    switch (command) {
        case 'increment':
            count1++;
            break;
        case 'decrement':
            count1--;
            break;
        case 'reset':
            count1 = 0;
            break;
    }

    console.log(count1);
}

function methods(command) {
    let count2 = 5;

    const check = {
        increment() {
            count2++;
        },
        decrement() {
            count2--;
        },
        reset() {
            count2 = 0;
        },
    };
    check[command]();
    console.log(count2);
}

switchh('increment'); // => връща 6
methods('decrement'); // => връща 4;

//-------------------------------------------------------------------------------------------------

// Композиция
