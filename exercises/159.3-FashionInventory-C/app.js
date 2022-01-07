function renderInventory(inventory) {
  
    var output = [], aux = [];

    var blackTrigger = false;

     var charStr = [];

    for(var i = 0; i < inventory.length; i++){

        

        inventory[i].shoes.forEach(element2 => {

            charStr = element2.name.toLowerCase().split(" ");

            for(var j = 0; j < charStr.length; j++)
                if(charStr[j] == "black"){
                    blackTrigger = true;
                    break;
                }


            if(blackTrigger){
                aux.push(inventory[i]["name"])

                aux.push(element2.name);

                aux.push(element2.price);


                output.push(aux);

                aux = [];
            }

            blackTrigger = false;

        });  

    };
    
    return output;

}