function solution(begin, target, words) {
    var answer = 0;
    let visited = [];
    let queue = [[begin, answer]];

    if (!words.includes(target)) return 0;

    while(queue.length) {
        let [val, cnt] = queue.shift();
        if (val === target) return cnt;

        words.forEach(word => {
            let differentCnt = 0;
            
            if(visited.includes(word)) return;

            for (let i = 0; i < word.length; i++) {
                if (word[i] !== val[i]) differentCnt++; 
            }
            
            if (differentCnt === 1) {
                queue.push([word, ++cnt]);
                visited.push(word);
            }
        });
    }
    
    return answer;
}