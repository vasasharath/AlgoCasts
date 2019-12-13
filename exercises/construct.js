/*
We want to use quad trees to store an N x N boolean grid. Each cell in the grid can only be true or false. 
The root node represents the whole grid. For each node, it will be subdivided into four children nodes until the values in the region it represents are all the same.

Each node has another two boolean attributes : isLeaf and val. isLeaf is true if and only if the node is a leaf node. 
The val attribute for a leaf node contains the value of the region it represents.

Your task is to use a quad tree to represent a given grid. The following example may help you understand the problem better:

Given the 8 x 8 grid below, we want to construct the corresponding quad tree:



It can be divided according to the definition above:



 

The corresponding quad tree should be as following, where each node is represented as a (isLeaf, val) pair.

For the non-leaf nodes, val can be arbitrary, so it is represented as *.



Note:

N is less than 1000 and guaranteened to be a power of 2.
If you want to know more about the quad tree, you can refer to its wiki.
*/
var construct = function(grid) {
    
    function constructRec(startRow, startCol, length) {
        if (length === 1) {
            return new Node(grid[startRow][startCol], true);
        };
        
        let newLength = length / 2;
        const topLeft = constructRec(startRow, startCol, newLength);
        const topRight = constructRec(startRow, startCol + newLength, newLength);
        const bottomLeft = constructRec(startRow + newLength, startCol, newLength);
        const bottomRight = constructRec(startRow + newLength, startCol + newLength, newLength);
        if (topLeft.isLeaf && topRight.isLeaf && bottomLeft.isLeaf && bottomRight.isLeaf) {
            if (topLeft.val === topRight.val &&
                topLeft.val === bottomLeft.val &&
                topLeft.val === bottomRight.val
             ) {
                let val = topLeft.val;
                return new Node(val, true);
            }
        }
        return new Node('*', false, topLeft, topRight, bottomLeft, bottomRight);
    }
    
    return constructRec(0, 0, grid.length);
};