/**
 * Link- https://practice.geeksforgeeks.org/problems/top-view-of-binary-tree/1
 * T- O(n)
 * Trick- level order plus maintain distance from root node
 * @param {*} root 
 
*/

function topView(root) {
    if (!root) return [];
    let queue = [[[root, 0]]];
    let levelOrder = [];
    let map = {};
    let result = [];

    while (queue.length) {
        let curr = queue.shift();
        levelOrder.push([...curr]);

        let temp = [];

        for (let i = 0; i < curr.length; i++) {
            let [node, level] = curr[i];

            if (!map.hasOwnProperty(level)) {
                map[level] = [node.data];
                result.push([level, node.data]);
            } else {
                map[level].push(node.data);
            }

            if (node && node.left) {
                temp.push([node.left, level - 1]);
            }

            if (node && node.right) {
                temp.push([node.right, level + 1]);
            }
        }

        if (temp.length) {
            queue.push([...temp]);
        }
    }

    result.sort((a, b) => a[0] - b[0]);

    let output = [];

    for (let i = 0; i < result.length; i++) {
        output.push(result[i][1]);
    }

    return output;
}
