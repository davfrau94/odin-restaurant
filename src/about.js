export default function loadAbout() {
    const content = document.getElementById('content');
    const container = document.createElement('div');
    container.classList.add('about');

    const headline = document.createElement('h2');
    headline.textContent = 'La nostra storia';
    container.appendChild(headline);
    

    const text1 = document.createElement('p');
    text1.textContent = 'Siamo un ristorante a conduzione familiare, nato dalla passione per la cucina italiana e dalla voglia di condividere sapori autentici.';
    container.appendChild(text1);

    const text2 = document.createElement('p');
    text2.textContent = 'Ogni piatto nasce da ingredienti selezionati con cura, privilegiando produttori locali e stagionalità.';
    container.appendChild(text2);

    const text3 = document.createElement('p');
    text3.textContent = 'La nostra cucina unisce tradizione e creatività, rispettando le ricette classiche ma lasciando spazio alla sperimentazione.';
    container.appendChild(text3);

    const text4 = document.createElement('p');
    text4.textContent = 'Il nostro obiettivo è farvi sentire a casa, in un ambiente accogliente dove il cibo diventa un momento di convivialità.';
    container.appendChild(text4);

    content.appendChild(container);
}
