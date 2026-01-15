export default function loadContact() {
    const content = document.getElementById('content');

    const container = document.createElement('div');

    const headline = document.createElement('h2');
    headline.textContent = 'Contattaci';
    container.appendChild(headline);

    const phone = document.createElement('p');
    phone.textContent = 'Telefono: 123-456-7890';
    container.appendChild(phone);

    const email = document.createElement('p');
    email.textContent = 'Email: info@odinrestaurant.it';
    container.appendChild(email);

    container.appendChild(document.createElement('p')).textContent = 'Indirizzo: Via Esempio 24, Città, Italia';

    content.appendChild(container);
}
