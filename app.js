'use strict';
const memo = new Map();
memo.set(0,0);
memo.set(1,1);
function fub(n){
    if(memo.has(n)){
        return memo.get(n) ;
    }
    const value = fub(n-1) + fub(n-2);
    memo.set(n,value);
    return value;
}
const length = 40 ;
for(let i = 0 ; i <= length; i++){
    console.log(fub(i));
}