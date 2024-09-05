function solution(n, slicer, num_list) {
    var answer = [];

    switch(n) {
        case 1:
            answer = num_list.slice(0,slicer[1]+1);
            break;
        case 2:
            answer = num_list.slice(slicer[0]);
            break;
        case 3:
            answer = num_list.slice(slicer[0], slicer[1]+1);
            break;
        case 4:
            console.log("for문 돌릴 예정")
            break;
    }   
    return answer;
}

console.log(solution(3,[1,5,2],[1,2,3,4,5,6,7,8,9]));