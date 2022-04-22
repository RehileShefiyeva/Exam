let arr=[2,"b",4,"d",3,"a","c","e",5,1];
let newArray=[];

function arraySort(a){
 for(var i=0;i<a.length;i++){
     if(typeof a[i]==='number'){
       newArray.push(a[i]);
     }
 }
 for(var i=0;i<a.length;i++){
    if(typeof a[i]==='string'){
       newArray.push(a[i]);
    }
}
console.log(newArray);
}
arraySort(arr);

