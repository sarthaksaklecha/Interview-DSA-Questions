// https://leetcode.com/problems/n-queens/

// Best
// try all possible combinations using recursion
class Solution {
    public List<List<String>> solveNQueens(int n) {
        List<List<String>> result = new ArrayList<List<String>>();
        // chess board
        char[][] board = new char[n][n];
        for(int i=0;i<n;i++){
            for(int j=0;j<n;j++){
                board[i][j] = '.'; 
            } 
        }
        helper(0,board,result);
        return result;
    }
    public void helper(int col, char[][] board, List<List<String>> result){
        if(col==board.length){
            result.add(convertBoard(board));
            return;
        }
        for(int i=0;i<board.length;i++){
            if(isValid(board,i,col)){
                board[i][col] = 'Q';
                helper(col+1,board,result);
                board[i][col] = '.';
            }
        }
        return;
    }
    public Boolean isValid(char[][] board, int row, int col){
        // check the row for any queens
        for(int i=col;i>=0;i--){
            if(board[row][i]=='Q') return false;
        }
        // check diagonals  || (go back col go forward row)
        int i=row,j=col;
        // upper diagonal (go back col go back row)
        while(i>=0 && j>=0){
            if(board[i][j] == 'Q') return false;
            i--;j--;
        }
        i = row;j=col;
        while(i<board.length && j>=0){
            if(board[i][j] == 'Q') return false;
            i++;j--;
        }
        return true;
    }
    public List<String> convertBoard(char[][] board){
        List<String> stringBoard = new ArrayList<String>();
        for(int i=0;i<board.length;i++){
            String row = new String(board[i]);
            stringBoard.add(row);
        }
        return stringBoard;
    }
}