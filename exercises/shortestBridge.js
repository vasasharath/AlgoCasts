var shortestBridge = function(A) {
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let len_r = A.length;
    let len_c = A[0].length;

    let q = []
    function dfs(r, c) {
        if (A[r][c] === 0) {
            q.push([r, c, 0]);
            return;
        }
        A[r][c] = 2;
        for (let direction of directions) {
            let _r = r + direction[0];
            let _c = c + direction[1];
            if (isOutOfBounds(_r, _c) || A[_r][_c] === 2) {
                continue;
            }
            dfs(_r, _c); 
        }  
    };
    
    function isOutOfBounds(_r, _c) {
        return 0 > _r || _r >= len_r || 0 > _c || _c >= len_c;
    };

    let discovered = false;
    for (let i = 0; i < A.length && !discovered; i++) {
      for (let j = 0; j < A[i].length; j++) {
          if (A[i][j] === 1) {
              dfs(i, j);
              discovered = true;
              break;
          }
      }
    }
    
    while (q.length !== 0) {
        let r, c, depth;
        [r, c, depth] = q.shift();
        for (let direction of directions) {
            let _r = r + direction[0];
            let _c = c + direction[1];
            if (isOutOfBounds(_r, _c) || A[_r][_c] == 2) {
                continue;
            }
            if (A[_r][_c] == 1) {
                return depth + 1;
            }
            q.push([_r, _c, depth + 1]);
            A[_r][_c] = 2;
        }
    }
    return -1;
};