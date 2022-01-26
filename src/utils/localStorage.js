export function getAllStorage(){
 var keys = Object.keys(localStorage),
 i = keys.length;
 var newTasks = [];
 while ( i-- ) {
  //console.log(localStorage.getItem(keys[i]));
  newTasks.push(JSON.parse(localStorage.getItem(keys[i])));
 }
// console.log(...newTasks);
 return newTasks;   
}