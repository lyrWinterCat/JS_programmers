
function solution(code) {

    var ret=[];
    let mode=0;
    for (let i = 0; i < code.length; i++) {

        if(mode===0){
            if(code.charAt(i)==='1'){
                mode=1;
            }
            if(code.charAt(i)!=='1' && i%2===0){
                ret.push(code[i]);
            }
        }else if(mode===1){
            if(code.charAt(i)!=='1' && i%2===1){
                ret.push(code[i]);
            }
            if(code.charAt(i)==='1'){
                mode=0;
            }
        }
    }

    if(ret.length===0){
        return "EMPTY"
    }

    var answer = ret.join('');
    return answer;
}

console.log(solution("abc1abc1abc"));