/*
Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize an N-ary tree. An N-ary tree is a rooted tree in which each node has no more than N children. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that an N-ary tree can be serialized to a string and this string can be deserialized to the original tree structure.

For example, you may serialize the following 3-ary tree



as [1 [3[5 6] 2 4]]. Note that this is just an example, you do not necessarily need to follow this format.

Or you can follow LeetCode's level order traversal serialization format, where each group of children is separated by the null value.



For example, the above tree may be serialized as [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14].

You do not necessarily need to follow the above suggested formats, there are many more different formats that work so please be creative and come up with different approaches yourself.

 

Constraints:

The height of the n-ary tree is less than or equal to 1000
The total number of nodes is between [0, 10^4]
Do not use class member/global/static variables to store states. Your encode and decode algorithms should be stateless.
*/
class Codec {
  	constructor() {}
    
    /** 
     * @param {Node} root
     * @return {string}
     */
    // Encodes a tree to a single string.
    serialize = function(root) {
        const arr = [];
        function preOrder(root, array) {
            if (!root) return array;
            array.push(root.val);
            if (root.children.length) {
                const level = [];
                for (let i = 0; i < root.children.length; i++) {
                    preOrder(root.children[i], level);
                }
                array.push(level);
            }
        }
        preOrder(root, arr);
        return JSON.stringify(arr);
    };
	
    /** 
     * @param {string} data 
     * @return {Node}
     */
    // Decodes your encoded data to tree.
    deserialize = function(data) {
        const array = JSON.parse(data);
        function deserialize([val, children = []]) {
            const node = new Node(val, [])
            for (let i = 0; i < children.length; i++) {
                const item = children[i];
                const nextItem = children[i + 1];
                if (Array.isArray(nextItem)) {
                    node.children.push(deserialize([item, nextItem]))
                    i++;
                } else {
                    node.children.push(new Node(item, []))
                }
            }
            return node;
        }
        return deserialize(array);
    };
}