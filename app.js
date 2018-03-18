'use strict';
function fub(n){
    if(n == 0){
        return 0 ;
    }else if (n == 1){
        return 1 ;
    }
    return fub(n-2)+fub(n-1);
}
const length = 40 ;
for(let i = 0 ; i <= length; i++){
    console.log(fub(i));
}