function fromJSONToHTMLTable(input) {
    let data = JSON.parse(input);

    const headers = Object.keys(data[0]);
    return `
    <table>
        <tr>${headers.map((h) => `<th>${h}</th>`).join('')}</tr>
        ${data.map((entry) => `<tr>${headers.map((h) => `<td>${entry[h]}</td>`).join('')}</tr>`).join('\n')}
    </table>`;
}

window.onload = function () {
    let container = document.getElementById('wrapper');
    container.innerHTML = fromJSONToHTMLTable(['[{"Name":"Stamat","Price":5.5},{"Name":"Rumen","Price":6}]']);
};
