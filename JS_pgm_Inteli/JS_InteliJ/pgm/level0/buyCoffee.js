function solution(order) {
    let americano_cnt = 0;
    let latte_cnt=0;

    let americano_price=4500;
    let latte_price=5000;

    for (let drink of order){
        if(drink.includes("americano")){
            americano_cnt++;
        }else if(drink.includes("latte")){
            latte_cnt++;
        }else if(drink.includes("anything")){
            americano_cnt++;
        }
    }
    var answer = americano_price*americano_cnt+latte_cnt*latte_price;
    return answer;
}

console.log(solution(["cafelatte", "americanoice", "hotcafelatte", "anything"]));