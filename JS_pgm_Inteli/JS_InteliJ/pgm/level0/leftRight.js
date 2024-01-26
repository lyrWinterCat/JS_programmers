function solution(str_list) {
    let rightIndex=str_list.indexOf("r"); //해당 인덱스 기준 오른쪽
    let leftIndex=str_list.indexOf("l"); //해당 인덱스 기준 왼쪽

    if(leftIndex===-1 && rightIndex===-1){
        return [];
    }

    var answer = [];
    if(leftIndex===-1 || rightIndex===-1){
        if(leftIndex===-1){
            for (let i = rightIndex+1; i <str_list.length ; i++) {
                answer.push(str_list[i]);
            }
        }else{
            for (let i = 0; i < leftIndex; i++) {
                answer.push(str_list[i]);
            }
        }
        return answer;
    }

    if(leftIndex<rightIndex){
        for (let i = 0; i < leftIndex; i++) {
            answer.push(str_list[i]);
        }
    }
    if(rightIndex<leftIndex){
        for (let i = rightIndex+1; i <str_list.length ; i++) {
            answer.push(str_list[i]);
        }
    }

    return answer;
}

console.log(solution(["u", "u", "l", "r"]));
// console.log(solution(["u", "u"]));

function solution2(arr) {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === 'l') return arr.slice(0, i);
        if (arr[i] === 'r') return arr.slice(i + 1);
    }
    return [];
}