export default function loadMenu() {
    const content = document.getElementById('content');

    const container = document.createElement('div');
    container.classList.add('menu');

    const headline = document.createElement('h2');
    headline.textContent = 'Il nostro Menù';
    container.appendChild(headline);

const items = [
    { name: 'Bruschette miste', description: 'Pane tostato con pomodoro, basilico e olio extravergine', image: 'https://www.cucchiaio.it/content/cucchiaio/it/ricette/2009/11/ricetta-bruschetta-pomodoro/jcr:content/header-par/image_single.img.jpg/1596625322419.jpg' },
    { name: 'Tagliere di salumi e formaggi', description: 'Selezione di salumi italiani e formaggi stagionati', image: 'https://blog.giallozafferano.it/atavolacontea/wp-content/uploads/2025/11/tagliere-salumi-e-formaggi.jpg' },
    { name: 'Carpaccio di manzo', description: 'Manzo marinato, rucola e scaglie di parmigiano', image: 'https://www.ilcuoreinpentola.it/wp-content/uploads/2021/06/carpaccio-manzo.jpeg' },
    { name: 'Polpo alla griglia', description: 'Polpo grigliato con patate e prezzemolo', image: 'https://www.giallozafferano.it/images/296-29670/Polpo-alla-griglia_650x433_wm.jpg' },
    { name: 'Risotto ai funghi porcini', description: 'Risotto cremoso con funghi porcini e parmigiano', image: 'https://blog.giallozafferano.it/allacciateilgrembiule/wp-content/uploads/2018/09/risotto-funghi.jpg' },
    { name: 'Pappardelle al ragù di cinghiale', description: 'Pasta fresca con ragù tradizionale', image: 'https://www.giallozafferano.it/images/5-531/Pappardelle-al-ragu-di-cinghiale_780x520_wm.jpg' },
    { name: 'Linguine allo scoglio', description: 'Frutti di mare freschi e pomodorini', image: 'https://www.tavolartegusto.it/wp/wp-content/uploads/2019/07/Spaghetti-allo-scoglio-Ricetta-Spaghetti-allo-scoglio.jpg' },
    { name: 'Tagliata di manzo', description: 'Manzo alla griglia con rosmarino e sale grosso', image: 'https://www.tavolartegusto.it/wp/wp-content/uploads/2023/07/tagliate-di-manzo-ricetta.jpg' },
    { name: 'Filetto di salmone', description: 'Salmone scottato con agrumi e timo', image: 'https://www.giallozafferano.it/images/254-25433/Filetto-di-salmone-in-padella_650x433_wm.jpg' },
    { name: 'Cotoletta alla milanese', description: 'Cotoletta di vitello impanata e dorata', image: 'https://www.sfizioso.it/wp-content/uploads/2020/04/costolette-alla-milanese.jpg' },
    { name: 'Melanzane alla parmigiana', description: 'Melanzane fritte, pomodoro e mozzarella', image: 'https://d2sj0xby2hzqoy.cloudfront.net/kenwood_italy/attachments/data/000/008/122/medium/parmigiana-di-melanzane.jpg' }
];

    items.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('menu-item');

        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;

        const title = document.createElement('h3');
        title.textContent = item.name;

        const desc = document.createElement('p');
        desc.textContent = item.description;

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(desc);

        container.appendChild(card);
    });

    content.appendChild(container);
}

