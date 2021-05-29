class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        // binary search in the whole matrix
        int start = 0;
        int end = (matrix.length)*(matrix[0].length) - 1;
        while(end>=start){
            int middle = (start+end)/2;
            int rowInd = middle/matrix[0].length;
            int colInd = middle%matrix[0].length;
            if(matrix[rowInd][colInd] > target){
                end = middle-1;
            }else if(matrix[rowInd][colInd] < target){
                start = middle+1;
            }else{
                return true;
            }
        }
        return false;
    }
}