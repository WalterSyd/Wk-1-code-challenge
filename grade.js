/*Challenge 1: Student Grade Generator (Toy Problem)
Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 
 A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40
*/


function studentMarks(marks){
    
    if (marks >= 79){
        return "You got an A";
    }else if (marks >=70 && marks <=79){
        return"You got a B";
    }else if (marks >= 60 && marks <=69){
        return "You got a C";
    }else if(marks >= 50 && marks <=59){
        return "You got a D";
    }else{
        return "This is an E!";
    }
       
}
    
console.log(studentMarks(79));