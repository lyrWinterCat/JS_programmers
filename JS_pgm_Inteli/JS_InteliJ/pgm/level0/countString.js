function solution(my_string) {
    var answer = Array.apply(null, new Array(52)).map(Number.prototype.valueOf,0);

    for (let i = 0; i < my_string.length; i++) {
        var index = my_string.charCodeAt(i)
        if(index<92){
            answer[index-65]++;
        }else{
            answer[index-71]++;
        }
    }
    return answer;
}

console.log(solution("myString"));