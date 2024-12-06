function Menu(...navList) {
    this.navList = navList;
    this.wrapperA = function(...anchor) {
        return this.navList.map(function(elem, i) {
            let str = `<a href='${elem}'>${anchor[i]}</a>`;
            return str;
        });
    };
}

let mainMenu = new Menu("home.html", "services.html", "price.html", "about.html");
console.log(mainMenu.wrapperA("Домой", "Услуги", "Цены", "О нас"));

let footerMenu = new Menu("newPage.html", "checkPage.html", "seoPage.html");
console.log(footerMenu.wrapperA("Создание страниц", "Проверка страниц", "Сеонизация страниц")); 