class Solution {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> triangle = new ArrayList<List<Integer>>();
        // adding the first row in the traingle;
        List<Integer> firstRow = new ArrayList<Integer>();
        firstRow.add(1);
        triangle.add(firstRow);
        if(numRows==1) return triangle;
        int i = 2;
        while(i<=numRows){
            // adding the row we will be constructing;
            List<Integer> currRow = new ArrayList<Integer>();
            // triangle.add(currRow);
            int up = i-1, down = 1,prev=1;
            for(int j = 0; j<i; j++){
                if(j==0 || j==i-1){
                    currRow.add(1);
                }else{
                    int val = (int)((1.0*prev*(up--))/(down++));
                    currRow.add(val);
                    prev = val;
                }
            }
            triangle.add(currRow);
            i++;
        }
        return triangle;
    }
}