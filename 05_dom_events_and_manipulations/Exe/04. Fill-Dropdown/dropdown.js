function addItem() {
    const newItemTextElm = document.querySelector('#newItemText');
    const newItemValueElm = document.querySelector('#newItemValue');
    const droptDownMenuElm = document.querySelector('#menu');

    // console.log(newItemTextElm.value);
    // console.log(newItemValueElm.value);

    if (newItemTextElm.value == '' || newItemValueElm.value == '') {
        return;
    }

    newOption = document.createElement('option');
    newOption.textContent = newItemTextElm.value;
    newOption.value = newItemValueElm.value;

    // console.log(newOption);

    droptDownMenuElm.appendChild(newOption);

    newItemTextElm.value = '';
    newItemValueElm.value = '';
}
