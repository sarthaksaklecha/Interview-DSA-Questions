// Brute force
// using another matrix
var rotate = function(matrix) {
    let temp = new Array(matrix.length).fill(new Array(matrix[0].length));
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            temp[j][matrix[0].length-1-i] = matrix[i][j];
        }
    }
    return temp;
};

// Best
// transverse of the matrix then reverse the rows
// without using any extra space

const rotate = (matrix) => {
    // transverse
    for(let i=0;i<matrix.length-1;i++){
        for(let j=i+1;j<matrix[0].length;j++){
            [matrix[i][j],matrix[j][i]] = [matrix[j][i],matrix[i][j]]
        }
    };

    // reverese each row
    for(let i=0;i<matrix.length;i++){
        let p1 =0;
        let p2 = matrix[0].length-1;
        while(p1<p2){
            [matrix[i][p1],matrix[i][p2]] = [matrix[i][p2],matrix[i][p1]]
            p1++;
            p2--;
        }
    }
}
