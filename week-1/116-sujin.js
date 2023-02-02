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
var connect = function(root) {
    // 종료조건: 자신이 null이거나, 자신의 left가 없어서 next를 넣어줄 필요가 없을 때
    if(root == null || root.left === null) return root;
    root.left.next = root.right;
    // 오른쪽 노드의 next 값은 root의 next가 있어야 존재할수 있음. 
    root.right.next = root.next ? root.next.left : null;

    // 아래 노르 left, right를 넣어주므로써, 모든 노드를 검사함.
    connect(root.left);
    connect(root.right);
    return root;
};