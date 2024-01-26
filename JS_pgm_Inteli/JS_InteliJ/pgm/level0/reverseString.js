function solution(my_string, queries) {

    let newAnswer = my_string;
    for (let i = 0; i < queries.length; i++) {
        var answer="";
        if(queries[i][0]!==0){
            answer+=newAnswer.substring(0,queries[i][0]);
        }
        for (let j = queries[i][1]; j >= queries[i][0]; j--) {
            answer+=newAnswer.charAt(j);
        }
        answer+=newAnswer.substring(queries[i][1]+1);
        newAnswer=answer;
    }
    return newAnswer;
}

console.log(solution("rermgorpsam", [[2, 3], [0, 7], [5, 9], [6, 10]]));