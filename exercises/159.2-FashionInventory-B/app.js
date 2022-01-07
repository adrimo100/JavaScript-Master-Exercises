function renderInventory(inventory) {

    var obj = {};

    var aux = [];
    
    inventory.forEach(element => {

        var sum = 0, numElem = 0;

        var auxObj = {};

        auxObj.name = element.name;

        element.shoes.forEach(shoe => {

            sum += shoe.price;

            numElem++;
        });

        auxObj.averagePrice = sum / numElem;

        aux.push(auxObj);
        
    });

    obj.designers = aux;

    return obj;
  
}
