const specialsResponse = await fetch('api/menu-specials.json');
const specials = await specialsResponse.json();

renderMenuProducts(specials);

function renderMenuProducts(products) {
    const specialsContainer = document.getElementById('chefs-specials');
    specialsContainer.innerHTML = '';

    let menuItemsHtml = '<div class="menu--menu-items">';

    let count = 0;
    for (const product of products) {
        count++;
        if (count === 3) {
            menuItemsHtml += '</div><div class="menu--menu-items">';
            count = 0; // Скидаємо лічильник для нового блоку меню
        }

        menuItemsHtml += `
            <section class="menu--menu-item">
                <div class="menu--menu-item-title-price">
                    <h4 class="menu--menu-item-title">
                        ${product.title}
                    </h4>
                    <p class="menu--underline-item-price"></p>
                    <p class="menu--menu-item-price">                   
                        ${product.vault} ${product.price}
                    </p>
                </div>           
                <p class="menu--menu-item-description">
                    ${product.description}
                </p>
            </section>
        `;
    }

    menuItemsHtml += '</div>';
    specialsContainer.innerHTML = menuItemsHtml;
}

let currencies;
async function changeCurrency() {
    if (!currencies) {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        currencies = await response.json();
    }
    const currName = document.querySelector('.products__currency').value;
    const rate = currencies.rates[currName];
    renderProducts(products, rate);
}

//document.querySelector('.products__currency').addEventListener('change', changeCurrency);