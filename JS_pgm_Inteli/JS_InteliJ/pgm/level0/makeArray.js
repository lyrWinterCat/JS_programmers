function solution(arr) {
    let i = 0;
    var stk = [];
    // console.log(stk.length)
    while(i<arr.length){
        if(stk.length===0){
            stk.push(arr[i]);
            i++;
        }else{
            if(stk.at(-1)===arr[i]){
                stk.pop();
                i++;
            }else{
                stk.push(arr[i]);
                i++;
            }
        }
    }

    if(stk.length===0){
        return [-1];
    }
    return stk;
}
console.log(solution([0,1,1,1,0]));