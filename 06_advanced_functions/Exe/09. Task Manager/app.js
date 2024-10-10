function solve() {
    const addTaskFormElm = document.querySelector('form');

    const boxOpenElm = document.querySelector('.wrapper section:nth-child(2) > div:nth-child(2)');

    // const taskFieldElm = document.querySelector('#task');
    // const descriptionFieldElm = document.querySelector('#description');
    // const dateFieldElm = document.querySelector('#date');

    // const taskField = taskFieldElm.value;
    // const descriptionField = descriptionFieldElm.value;
    // const dateField = dateFieldElm.value;

    addTaskFormElm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskField = document.querySelector('#task').value;
        const descriptionField = document.querySelector('#description').value;
        const dateField = document.querySelector('#date').value;

        taskCreate(taskField, descriptionField, dateField);
    });

    function taskCreate(taskField, descriptionField, dateField) {
        const newSection = document.createElement('article');
        const newH3 = document.createElement('h3');
        const newP1 = document.createElement('p');
        const newP2 = document.createElement('p');

        newH3.textContent = taskField;
        newP1.textContent = descriptionField;
        newP2.textContent = dateField;

        newSection.append(newH3, newP1, newP2);

        const actionsEl = document.createElement('div');
        const btnProgress = document.createElement('button');
        const btnDelete = document.createElement('button');

        actionsEl.className = 'flex';
        btnProgress.textContent = 'Start';
        btnProgress.className = 'green';
        btnDelete.textContent = 'Delete';
        btnDelete.className = 'red';

        btnDelete.addEventListener('clicl', (e) => {
            taskDelete(newSection);
        });

        actionsEl.append(btnProgress, btnDelete);

        newSection.append(newH3, newP1, newP2, actionsEl);

        boxOpenElm.append(newSection);

        console.log(newSection);
    }

    function taskDelete(newSection) {
        newSection.remove();
    }

    // taskFieldElm.value = '';
    // descriptionFieldElm.value = '';
    // dateFieldElm.value = '';
}
