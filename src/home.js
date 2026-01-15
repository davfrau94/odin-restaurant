export default function loadHome() {
    const content = document.getElementById('content');

    const container = document.createElement('div');

    const headline = document.createElement('h2');
    headline.textContent = 'Benvenuti a Odin Restaurant';
    container.appendChild(headline);

    const image = document.createElement('img');
    image.src = 'https://avecasa.com/wp-content/uploads/2023/06/ristorante-di-lusso-piante-verdi-stile-elegante-eichholtz-lampadari.jpg';
    image.alt = 'Foto del ristorante';
    image.style.width = '500px' //da inserire CSS
    container.appendChild(image);

    const text = document.createElement('p');
    text.textContent = 'Scopri i nostri piatti speciali preparati con ingredienti freschi e tanta passione!';
    container.appendChild(text);

    content.appendChild(container);
}
