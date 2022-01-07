function detectOutlierValue(string) {
    // your code here

    var type = "even";
    var arr = [];

    for(var i = 0; i < string.length; i++)
        if(string[i] != " ")
            if(string[i + 1] == " ")
            arr.push(Number(string[i]));
            else{
                arr.push(Number(string[i] + string[i + 1]));
                i++;
            }


    console.log(arr);

    if(arr[0] % 2 == 0 && arr[1] % 2 == 0)
        type = "even";
    else if(arr[1] % 2 == 0 && arr[2] % 2 == 0)
        type = "even";
    else
        type = "odd";

    switch(type){

        case "even":
            for(var i = 0; i < arr.length; i++)
                if(arr[i] % 2 != 0)
                    return i + 1;
            break;

            case "odd":
                for(var i = 0; i < arr.length; i++)
                    if(arr[i] % 2 == 0)
                        return i + 1;
                break;
    }


}

// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // => 3 

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1"))  //=> 2