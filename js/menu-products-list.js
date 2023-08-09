const specialsResponse = await fetch('api/menu-specials.json');
const specials = await specialsResponse.json();
const lunchResponse = await fetch('api/menu-lunch.json');
const lunch = await lunchResponse.json();
const mainResponse = await fetch('api/menu-main-courses.json');
const main = await mainResponse.json();
const drinksResponse = await fetch('api/menu-drinks.json');
const drinks = await drinksResponse.json();
const desertsResponse = await fetch('api/menu-drinks.json');
const deserts = await desertsResponse.json();

renderMenuProducts(specials,lunch,main,drinks,deserts,1);

function renderMenuProducts(specials,lunch,main,drinks,desserts,rate) {
    const specialsContainer = document.getElementById('chefs-specials');
    specialsContainer.innerHTML = '';
    let menuItemsHtml = '<div class="menu--menu-items">';
    let count = 0;
    for (const product of specials) {
        count++;
        if (count === 3) {
            menuItemsHtml += '</div><div class="menu--menu-items">';
        }

        menuItemsHtml += `
            <section class="menu--menu-item">
                <div class="menu--menu-item-title-price">
                    <h4 class="menu--menu-item-title">
                        ${product.title}
                    </h4>
                    <p class="menu--underline-item-price"></p>
                    <p class="menu--menu-item-price">                   
                        ${product.vault}${(Math.floor(product.price * rate)).toFixed(0)}
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
    ///
    const lunchContainer = document.getElementById('lunch');
    lunchContainer.innerHTML = '';
    menuItemsHtml = '<div class="menu--menu-items">';
    count = 0;
    for (const product of lunch) {
        count++;
        if (count === 4) {
            menuItemsHtml += '</div><div class="menu--menu-items">';
        }

        menuItemsHtml += `
            <section class="menu--menu-item">
                <div class="menu--menu-item-title-price">
                    <h4 class="menu--menu-item-title">
                        ${product.title}
                    </h4>
                    <p class="menu--underline-item-price"></p>
                    <p class="menu--menu-item-price">                   
                        ${product.vault}${(Math.floor(product.price * rate)).toFixed(0)}
                    </p>
                </div>           
                <p class="menu--menu-item-description">
                    ${product.description}
                </p>
            </section>
        `;
    }
    menuItemsHtml += '</div>';
    lunchContainer.innerHTML = menuItemsHtml;
    ///
    const mainCoursesContainer = document.getElementById('main-courses');
    mainCoursesContainer.innerHTML = '';
    menuItemsHtml = '<div class="menu--menu-items">';
    count = 0;
    for (const product of main) {
        count++;
        if (count === 4) {
            menuItemsHtml += '</div><div class="menu--menu-items">';
        }

        menuItemsHtml += `
            <section class="menu--menu-item">
                <div class="menu--menu-item-title-price">
                    <h4 class="menu--menu-item-title">
                        ${product.title}
                    </h4>
                    <p class="menu--underline-item-price"></p>
                    <p class="menu--menu-item-price">                   
                        ${product.vault}${(Math.floor(product.price * rate)).toFixed(0)}
                    </p>
                </div>           
                <p class="menu--menu-item-description">
                    ${product.description}
                </p>
            </section>
        `;
    }
    menuItemsHtml += '</div>';
    mainCoursesContainer.innerHTML = menuItemsHtml;
    ///
    const drinksContainer = document.getElementById('drinks');
    drinksContainer.innerHTML = '';
    menuItemsHtml = '<div class="menu--menu-items">';
    count = 0;
    for (const product of drinks) {
        count++;
        if (count === 4) {
            menuItemsHtml += '</div><div class="menu--menu-items">';
        }

        menuItemsHtml += `
            <section class="menu--menu-item">
                <div class="menu--menu-item-title-price">
                    <h4 class="menu--menu-item-title">
                        ${product.title}
                    </h4>
                    <p class="menu--underline-item-price"></p>
                    <p class="menu--menu-item-price">                   
                        ${product.vault}${(Math.floor(product.price * rate)).toFixed(0)}
                    </p>
                </div>           
                <p class="menu--menu-item-description">
                    ${product.description}
                </p>
            </section>
        `;
    }
    menuItemsHtml += '</div>';
    drinksContainer.innerHTML = menuItemsHtml;
    ///
    const desertsContainer = document.getElementById('deserts');
    desertsContainer.innerHTML = '';
    menuItemsHtml = '<div class="menu--menu-items">';
    count = 0;
    for (const product of desserts) {
        count++;
        if (count === 4) {
            menuItemsHtml += '</div><div class="menu--menu-items">';
        }

        menuItemsHtml += `
            <section class="menu--menu-item">
                <div class="menu--menu-item-title-price">
                    <h4 class="menu--menu-item-title">
                        ${product.title}
                    </h4>
                    <p class="menu--underline-item-price"></p>
                    <p class="menu--menu-item-price">                   
                        ${product.vault}${(Math.floor(product.price * rate)).toFixed(0)}
                    </p>
                </div>           
                <p class="menu--menu-item-description">
                    ${product.description}
                </p>
            </section>
        `;
    }
    menuItemsHtml += '</div>';
    desertsContainer.innerHTML = menuItemsHtml;
}

let currencies;
async function changeCurrency() {
    if (!currencies) {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        currencies = await response.json();
    }
    const currName = document.querySelector('.menu-title-select-selected').value;
    const rate = currencies.rates[currName];
    const updatedSpecials = specials.map(special => {
        let val;
        if(currName === 'EUR'){
            val = '€';
        }
        else if(currName === 'UAH'){
            val = '₴';
        }
        else{
            val = '$';
        }
        return {
          ...special,
          vault: val
        };
    });
    const updatedLunch = lunch.map(special => {
        let val;
        if(currName === 'EUR'){
            val = '€';
        }
        else if(currName === 'UAH'){
            val = '₴';
        }
        else{
            val = '$';
        }
        return {
          ...special,
          vault: val
        };
    });
    const updatedMain = main.map(special => {
        let val;
        if(currName === 'EUR'){
            val = '€';
        }
        else if(currName === 'UAH'){
            val = '₴';
        }
        else{
            val = '$';
        }
        return {
          ...special,
          vault: val
        };
    });
    const updatedDrinks = drinks.map(special => {
        let val;
        if(currName === 'EUR'){
            val = '€';
        }
        else if(currName === 'UAH'){
            val = '₴';
        }
        else{
            val = '$';
        }
        return {
          ...special,
          vault: val
        };
    });
    const updatedDeserts = deserts.map(special => {
        let val;
        if(currName === 'EUR'){
            val = '€';
        }
        else if(currName === 'UAH'){
            val = '₴';
        }
        else{
            val = '$';
        }
        return {
          ...special,
          vault: val
        };
    });
    renderMenuProducts(updatedSpecials,updatedLunch,updatedMain,updatedDrinks,updatedDeserts,rate);
}

document.querySelector('.menu-title-select-selected').addEventListener('change', changeCurrency);