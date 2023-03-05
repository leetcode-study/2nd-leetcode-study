function getDiffCharCount(word1, word2){
   let count = 0;
    for(let i=0; i < word1.length ; i++){
        if(word1[i] != word2[i]) count++;
    }
    return count
}

function solution(begin, target, words) {
    var answer = 0;
    var realanswer = 0;
    
    
    let visited = {}
    words.forEach(word => {
        visited[word]  = false
    })
    
    let que = []
    que.push(begin)

    while(que.length > 0){
        answer++; 
        let curword = que.pop();
        visited[curword] = true
        //console.log("curword " + curword)
        if(curword === target) {
            realanswer = answer - 1
            break;
        }
        
        for(let i=0; i < words.length; i++){
            let nextword = words[i]
            if(visited[nextword]) continue;
            //console.log("nextword " + nextword)
            
            if(getDiffCharCount(curword, nextword) === 1){
                que.push(nextword);
                
            }
        }
    }
    
    
    
    // hit -> cog
    // c, o, g
    
    // begin 글자와 불일치하는 char가 1일 때 -> 이동 가능 
    
    // hot 1  - 2
    // dot 1  - 1
    // dog 2  - 0
    // cig 2  - 0
    // lot 1  - 1
    // log 2  - 3
    // cog 3  - 3 
    
    return realanswer;
}
