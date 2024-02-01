function solution(arr) {
    var answer = [];
    let firstIndex = arr.indexOf(2);
    let lastIndex=arr.lastIndexOf(2);
    if(firstIndex ===-1 && lastIndex===-1){
        answer.push(-1);
        return answer;
    }
    if(firstIndex===lastIndex){
        answer.push(2);
        return answer;
    }
    for (let i = firstIndex; i <=lastIndex; i++) {
        answer.push(arr[i]);
    }
    return answer;
}

console.log(solution([1,1]))