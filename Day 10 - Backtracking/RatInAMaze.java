// https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1
Imp

// m is the given matrix and n is the order of matrix
class Solution {
    public static ArrayList<String> findPath(int[][] m, int n) {
        // Your code here
        ArrayList<String> result = new ArrayList<String>();
        Boolean[][] visited = new Boolean[n][n];
        for(Boolean[] row : visited) Arrays.fill(row,false);
        // important to mark first as visited
        visited[0][0] = true;
        if(m[0][0]!=0) solveMaze(m,0,0,n,"",visited,result);
        return result;
    }
    public static void solveMaze(int[][] m,int positionRow, int positionCol, int n, String path, Boolean[][] visited, List<String> result){
        // base case, reaching end
        if(positionRow==n-1 && positionCol==n-1){
            result.add(path);
            return;
        }
        
        // down
        if(positionRow+1<n && m[positionRow+1][positionCol]!=0 && !visited[positionRow+1][positionCol]){ 
            visited[positionRow+1][positionCol] = true;
            solveMaze(m,positionRow+1,positionCol,n,path+"D",visited,result);
            visited[positionRow+1][positionCol] = false;
        }
        
        // left
        if(positionCol-1>=0 && m[positionRow][positionCol-1]!=0 && !visited[positionRow][positionCol-1]){ 
            visited[positionRow][positionCol-1] = true;
            solveMaze(m,positionRow,positionCol-1,n,path+"L",visited,result);
            visited[positionRow][positionCol-1] = false;
        }
        
        // Right
        if(positionCol+1<n && m[positionRow][positionCol+1]!=0 && !visited[positionRow][positionCol+1]){ 
            visited[positionRow][positionCol+1] = true;
            solveMaze(m,positionRow,positionCol+1,n,path+"R",visited,result);
            visited[positionRow][positionCol+1] = false;
        }
        
        // Up
        if(positionRow-1>=0 && m[positionRow-1][positionCol]!=0 && !visited[positionRow-1][positionCol]){ 
            visited[positionRow-1][positionCol] = true;
            solveMaze(m,positionRow-1,positionCol,n,path+"U",visited,result);
            visited[positionRow-1][positionCol] = false;
        }
        return;
    }
}