function solve() {
    const buttonGenerate = document.querySelector('button');

    buttonGenerate.addEventListener('click', (e) => {
        const inputElm = document.querySelector('textarea');
        const data = JSON.parse(inputElm.value);

        const productListElm = document.querySelector('table.table tbody');

        data.forEach((item) => {
            const product = document.createElement('tr');

            const productImageCell = document.createElement('td');
            const productImage = document.createElement('img');
            productImage.setAttribute('src', item.img);
            productImageCell.appendChild(productImage);

            const productNameCell = document.createElement('td');
            productNameCell.textContent = item.name;

            const productPriceCell = document.createElement('td');
            productPriceCell.textContent = item.price;

            const productDecFac = document.createElement('td');
            productDecFac.textContent = item.decFactor;

            const productMarkCell = document.createElement('td');
            const productMarkCheckbox = document.createElement('input');
            productMarkCheckbox.setAttribute('type', 'checkbox');
            productMarkCell.appendChild(productMarkCheckbox);

            product.append(productImageCell, productNameCell, productPriceCell, productDecFac, productMarkCell);

            productListElm.appendChild(product);
        });
    });
}
