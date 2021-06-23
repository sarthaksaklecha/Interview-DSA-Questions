// https://leetcode.com/problems/sudoku-solver/
 Very Important
// check all posibilities, fill each space with all possible numbers that are not breaking the rules of sudoku
// IMPORTANT BACKTRACKING PART
class Solution {
    public void solveSudoku(char[][] board) {
        // check every possiblity for every empty space
        int startRow = 0; // index to start search for next empty index
        int startCol = 0;
        helper(board,startRow,startCol);
    }
    public Boolean helper(char[][] board, int startRow, int startCol){
        int i = startRow,j=startCol;
        // finding the next empty space to fill
        while(i<board.length && board[i][j]!='.'){
            if(j!=(board.length-1)) j++;
            else{
                i++;j=0;
            }
        }
        // if we have filled all the spaces // base case
        if(i==board.length){
            return true;
        };
        for(char possibleNumber : allPossibilities(board,i,j)){
            board[i][j] = possibleNumber;
            if(helper(board,i,j)){
                // we return true only when the board has been solved (base case)
                // now we have to preserve this board 
                return true;
            }else{
                // we do this only when the board couldn't complete because of wrong choices
                // we clear the board when we backtrack after a false return until we reach the top stack of the recursion
                board[i][j] = '.';
            }
        };
        return false;
    }
    // function to return a list of possible numbers at a given space in sudoku
    public List<Character> allPossibilities(char[][] board, int row, int col){
        List<Character> result = new ArrayList<Character>(Arrays.asList('1','2','3','4','5','6','7','8','9'));
        // Boolean[] isPossible = new Boolean[board.length+1]; // 0-9 -> 0 will be blank
        // isPossible[0] = false;
        // check row
        for(int j=0;j<board.length;j++){
            result.remove(new Character(board[row][j]));
        }
        // check col
        for(int i=0;i<board.length;i++){
            result.remove(new Character(board[i][col]));
        }
        // check smaller grid
        int gridRowNum = row/3;
        int gridColNum = col/3;
        for(int i=gridRowNum*3;i<gridRowNum*3+3;i++){
            for(int j=gridColNum*3;j<gridColNum*3+3;j++){
                result.remove(new Character(board[i][j]));
            }
        }
        return result;
    }
}