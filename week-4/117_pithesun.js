/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

var arr = (new Array(6000)).fill(0).map((el) => [])

var connect = function(root) {
    
    dfs(root, 0);
    
    for(const sameDepth of arr){
      
        for(let i=0; i < sameDepth.length; i++){
           if( (i+1) ===  sameDepth.length ){ // 마지막 노드
               sameDepth[i].next = null
           }else{
               sameDepth[i].next = sameDepth[i+1]
           }
       }
    }
    return root
};

function dfs(root, depth){
   
    if(root === null) return;
    arr[depth].push(root)
    
    dfs(root.left, depth + 1)
    dfs(root.right, depth + 1)
}
