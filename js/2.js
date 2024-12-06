let orders=[
    {
        fio:"Ivan",
        tovar:"phone",
        price:10000,
        quantity:2
    },
    {
        fio:"Peter",
        tovar:"usb",
        price:2300,
        quantity:5
    },
    {
        fio:"Mary",
        tovar:"connector",
        price:100,
        quantity:100
    },
   ]

function showOrder(){
    let str=`Заказ покупателя ${this.fio} составил ${this.price*this.quantity}`;
    let ul=document.createElement("ul");
    document.body.append(ul);
    let li=document.createElement("li");
    li.textContent=str;
    ul.append(li);
}

orders.forEach(elem=>showOrder.call(elem));