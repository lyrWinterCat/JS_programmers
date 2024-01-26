function solution(ineq, eq, n, m) {
    var answer = 0;
    switch (ineq){
        case ">":
            if(eq==="!"){
                if(n>m){
                    answer=1;
                }else{
                    answer=0;
                }
            }else{
                if(n>=m){
                    answer=1;
                }else{
                    answer=0;
                }
            }
            break;
        case "<":
            if(eq==="!"){
                if(n<m){
                    answer=1;
                }else{
                    answer=0;
                }
            }else{
                if(n<=m){
                    answer=1;
                }else{
                    answer=0;
                }
            }
            break;
    }
    return answer;
}

console.log(solution("<","=",20,50));