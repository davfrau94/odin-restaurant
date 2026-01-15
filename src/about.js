export default function loadAbout() {
    const content = document.getElementById('content');

    const container = document.createElement('div');

    const headline = document.createElement('h2');
    headline.textContent = 'Chi Siamo';
    container.appendChild(headline);

    const text = document.createElement('p');
    text.textContent = 'Siamo un ristorante a conduzione familiare, appassionati di cucina italiana e creativa.';
    container.appendChild(text);

    content.appendChild(container);
}
