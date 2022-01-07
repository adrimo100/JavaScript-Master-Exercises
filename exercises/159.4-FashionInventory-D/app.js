var inventory = [
    {
      name: 'Brunello Cucinelli',
      shoes: [
        {name: 'tasselled black low-top lace-up', price: 1000},
        {name: 'tasselled green low-top lace-up', price: 1100},
        {name: 'plain beige suede moccasin', price: 950},
        {name: 'plain olive suede moccasin', price: 1050}
      ]
    },
    {
      name: 'Gucci',
      shoes: [
        {name: 'red leather laced sneakers', price: 800},
        {name: 'black leather laced sneakers', price: 900}
      ]
    }
  ];

function getLaceNameDataForShoes(inventory) {

    var output = [];

    var auxObj = {};

    inventory.forEach(designer => {

        designer.shoes.forEach(shoe => {

            auxObj.nameWords = shoe.name.toLowerCase().split(" ");

            for(var i = 0; i < auxObj.nameWords.length; i++)
                if(auxObj["nameWords"][i] == "laced"){
                    auxObj["targetWordIndex"] = i;
                    output.push(auxObj);
                }

            auxObj = {};
        });
        
    });

    return output;

  
}

console.log(getLaceNameDataForShoes(inventory));