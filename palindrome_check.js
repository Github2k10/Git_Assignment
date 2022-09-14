str="madam"
bag=""
for(i=0; i<=str.length-1; i++){

 for(j=str.length-1; j>=0; j--){

   if(str[i]===str[j]){

   bag=bag+str[j] 
   break;
}

}
}
//if(bag===str){console.log("yes")}
//else {console.log("no")}

//Just remove the // from the if else statement
