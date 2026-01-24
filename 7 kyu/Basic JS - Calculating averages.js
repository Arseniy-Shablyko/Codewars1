var Calculator = {
 average: function(...items) {
   if(items.length === 0){
     return 0;
   }
   
   let counter = 0;
   let sum = 0;
   for(let i = 0; i < items.length; i++){
     sum += items[i];
     counter++;
   }
   
   return sum / counter;
 }
};
