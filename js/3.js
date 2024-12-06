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


   function showOrder(action){
    let str=`Заказ покупателя ${this.fio} составил ${this.price*this.quantity*(100-action)/100}, скидка составила ${action}%`;
    let ul=document.createElement("ul");
    document.body.append(ul)
    let li=document.createElement("li");
    li.textContent=str;
    ul.append(li);
   }

   //showOrder(10);
   orders.forEach(elem=>showOrder.call(elem,0));
   orders.forEach(elem=>showOrder.call(elem,10));
   //showOrder.call(orders[0],10);
   //showOrder.call(orders[1],20);