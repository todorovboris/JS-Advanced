let counter = 0;

function sayHello() {
    counter++;

    alert(`You clicked the button ${counter} times!`);
    let input = confirm('Are you having fun yet?');

    if ((input = true)) {
        console.log('The user said Yes');
    } else {
        console.log('The user said No');
    }
}

// console.log('--------------------');
