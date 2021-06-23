// Very Important

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
        if(i==board.length){
            return true;
        };
        for(char possibleNumber : allPossibilities(board,i,j)){
            board[i][j] = possibleNumber;
            if(helper(board,i,j)){
                return true;
            }else{
                board[i][j] = '.';
            }
        };
        return false;
    }
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