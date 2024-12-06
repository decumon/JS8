function createLinkTovar(category){
    return function(artikul){
        return `https://decumon-shop.ru/${category}/${artikul}`;
    }
}

let categories=["pc", "monitors", "notebooks"];

let createPCLink=createLinkTovar(categories[0]);
let createNotebooksLink=createLinkTovar(categories[2]);
let createMonitorLink=createLinkTovar(categories[1]);

console.log(createPCLink(1001));
console.log(createNotebooksLink(4004));
console.log(createMonitorLink(345));

