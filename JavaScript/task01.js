let age = prompt("Enter your age: ");
 
if(age >18 && age < 100){

    if(age>=18 && age<32){
        console.log("you are junior developer");
    }else if(age>=32 && age<45){
        console.log("you are mid level developer");
    }else if(age>=45 && age<55){    
        console.log("you are senior developer");
    }else{
        console.log("you are lead developer");
    }
}else{
    console.log("Invalid age entered");
}