/*
Suppose we abstract our file system by a string in the following manner:

The string "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext" represents:

dir
    subdir1
    subdir2
        file.ext
The directory dir contains an empty sub-directory subdir1 and a sub-directory subdir2 containing a file file.ext.

The string "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext" represents:

dir
    subdir1
        file1.ext
        subsubdir1
    subdir2
        subsubdir2
            file2.ext
The directory dir contains two sub-directories subdir1 and subdir2. subdir1 contains a file file1.ext and an empty second-level sub-directory subsubdir1. subdir2 contains a second-level sub-directory subsubdir2 containing a file file2.ext.

We are interested in finding the longest (number of characters) absolute path to a file within our file system. For example, in the second example above, the longest absolute path is "dir/subdir2/subsubdir2/file2.ext", and its length is 32 (not including the double quotes).

Given a string representing the file system in the above format, return the length of the longest absolute path to file in the abstracted file system. If there is no file in the system, return 0.

Note:
The name of a file contains at least a . and an extension.
The name of a directory or sub-directory will not contain a ..
Time complexity required: O(n) where n is the size of the input string.

Notice that a/aa/aaa/file1.txt is not the longest file path, if there is another path aaaaaaaaaaaaaaaaaaaaa/sth.png.
*/
var lengthLongestPath = function(input) {
    
    // Break each line into its own index in the array. This makes the string more manageable
    let lines = input.split('\n');
    
    // We'll store our files (with full directories included) here
    let paths = [];
    
    // The current directory we're in is stored here. This is our stack
    let currentDirectory = [];
    
    // Iterate over every line
    for (let i = 0; i < lines.length; i++) {
        let p = lines[i];
        
        // We're going to find out the depth of our file/directory
        let tabs = p.match(/\t/g);
        
        // p.match returns null for no matches. Default to 0
        tabs = tabs ? tabs.length : 0;
        
        // Remove all the tabs
        p = p.replace(/\t/g, '');
        
        // If we decrease depth (i.e. go into a parent directory) then we'll need to know how many levels up we're going
        let depthdiff = currentDirectory.length-tabs;
        
        // For every level up we're going, go ahead and remove the child directories we're no longer in
        // Something that I didn't realize at first is that a file may be in no directory.
        // For instance: dir\n    test.txt
        // Don't overthink it. "    test.txt" is a root file with no directory and 4 leading spaces, so its return length will be 12.
        // Leading spaces are counted as filename characters!
        if (depthdiff >= 0) currentDirectory.splice(tabs, currentDirectory.length);
        
        // matched a file
        if (p.match(/\.\w+$/) != null) {
            
            // We take our currentDirectory stack, which has every directory depth we're inside of
            // Then were appending our file onto the end of that directory
            // Finally, we'll join the array into a string, separating each index with a slash
            paths.push(currentDirectory.concat(p).join('/'));
        } else {
            // Matched a directory, add it to the current directory stack
            currentDirectory.push(p);
        }
    }
    
    // Here we'll iterate over all our files and update the longest length
    let longestlength = 0;
    for (let i = 0; i < paths.length; i++) {
        longestlength = Math.max(paths[i].length, longestlength);
    }
    
    // Done!
    return longestlength;
    
};