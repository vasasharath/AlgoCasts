/*
Design an in-memory file system to simulate the following functions:

ls: Given a path in string format. If it is a file path, return a list that only contains this file's name. If it is a directory path, return the list of file and directory names in this directory. Your output (file and directory names together) should in lexicographic order.

mkdir: Given a directory path that does not exist, you should make a new directory according to the path. If the middle directories in the path don't exist either, you should create them as well. This function has void return type.

addContentToFile: Given a file path and file content in string format. If the file doesn't exist, you need to create that file containing given content. If the file already exists, you need to append given content to original content. This function has void return type.

readContentFromFile: Given a file path, return its content in string format.

 

Example:

Input: 
["FileSystem","ls","mkdir","addContentToFile","ls","readContentFromFile"]
[[],["/"],["/a/b/c"],["/a/b/c/d","hello"],["/"],["/a/b/c/d"]]

Output:
[null,[],null,null,["a"],"hello"]

Explanation:
filesystem
 

Note:

You can assume all file or directory paths are absolute paths which begin with / and do not end with / except that the path is just "/".
You can assume that all operations will be passed valid parameters and users will not attempt to retrieve file content or list a directory or file that does not exist.
You can assume that all directory names and file names only contain lower-case letters, and same names won't exist in the same directory.
*/
var FileSystem = function() {
    this.files = {};
};

/** 
 * @param {string} path
 * @return {string[]}
 */
FileSystem.prototype.ls = function(path) {
    let arr = path.split("/");
    let obj = this.files;
    let curr = "";
    for(let i = 1; i < arr.length; i++){
        if(arr[i] !== "") 
        {
            obj = obj[arr[i]];
            curr = arr[i];
        }
    }

    let list = Object.keys(obj||{}).filter(x => x !== "content");
    if(obj.content !== undefined){
        list.push(curr);
    }
    return list.sort();
};

/** 
 * @param {string} path
 * @return {void}
 */
FileSystem.prototype.mkdir = function(path) {
    let arr = path.split("/");
    let obj = this.files;
    for(let i = 1; i < arr.length; i++){
        if(obj[arr[i]]===undefined){
            obj[arr[i]] = {};
        }
        obj = obj[arr[i]];
    }
};

/** 
 * @param {string} filePath 
 * @param {string} content
 * @return {void}
 */
FileSystem.prototype.addContentToFile = function(filePath, content) {
    let arr = filePath.split("/");
    let obj = this.files;
    for(let i = 1; i < arr.length; i++){
        if(obj[arr[i]]===undefined){
            obj[arr[i]] = {};
        }
        obj = obj[arr[i]];
    }
    if(obj.content === undefined){
        obj.content = [content];
    } else {
        obj.content.push(content);
    }
};

/** 
 * @param {string} filePath
 * @return {string}
 */
FileSystem.prototype.readContentFromFile = function(filePath) {
    let arr = filePath.split("/");
    let obj = this.files;
    for(let i = 1; i < arr.length; i++){
        obj = obj[arr[i]];
    }
    return obj.content.join("");
};