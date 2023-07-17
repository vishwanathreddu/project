function printArray(a){
    var len=a.length,i=0;
    if(len==0)
    console.log("empty array");
    else{
        do{
            console.log(a[i]);
        }while(++i<len);
    }
}
printArray([2,3,4,6])
