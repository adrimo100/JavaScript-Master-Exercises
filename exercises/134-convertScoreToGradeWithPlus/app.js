function convertScoreToGradeWithPlusAndMinus(score) {
    // your code here

    output = "INVALID SCORE";

    if(score <= 100 && score >= 90)
        output = "A";
    else if(score <= 89 && score >= 80)
        output = "B";
    else if(score <= 79 && score >= 70)
        output = "C";
    else if(score <= 69 && score >= 60)
        output = "D";
    else if(score <= 59 && score >= 0)
        output = "F";
  

    if(output != "INVALID SCORE" && output != "F"){
        score = score.toString();

        score = Number(score[score.length - 1]);

        if(score >= 0 && score <= 2)
            output += "-";
        
        if(score >= 8 && score <= 9)
        output += "+";
    }

    return output;
}

var output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'