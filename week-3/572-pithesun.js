/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

var answer = false

// return booolean
function dfs(root, subRoot){
    if(root == null && subRoot == null) return true
    if(root == null && subRoot != null) return false
    if(root != null && subRoot == null) return false
    
    if(root.val != subRoot.val){
        return false
    }
    return dfs(root.left, subRoot.left) && dfs(root.right, subRoot.right)
}

var isSubtree = function(root, subRoot) {
    
     if(root.val==subRoot.val && answer==false){
        answer = dfs(root,subRoot);
        if(answer==true) return answer;
     } 

     if(root.left!=null) isSubtree(root.left, subRoot);
     if(root.right!=null) isSubtree(root.right, subRoot);
    
     return answer
};
