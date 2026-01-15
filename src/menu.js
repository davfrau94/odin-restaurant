export default function loadMenu() {
    const content = document.getElementById('content');

    const container = document.createElement('div');

    const headline = document.createElement('h2');
    headline.textContent = 'Il nostro Menu';
    container.appendChild(headline);

    const item1 = document.createElement('p');
    item1.textContent = 'Pizza Margherita – Pomodoro, mozzarella e basilico';
    container.appendChild(item1);

    const item2 = document.createElement('p');
    item2.textContent = 'Risotto ai Funghi – Risotto cremoso con funghi porcini';
    container.appendChild(item2);

    const item3 = document.createElement('p');
    item3.textContent = 'Tiramisu – Dolce classico italiano';
    container.appendChild(item3);

    content.appendChild(container);
}
