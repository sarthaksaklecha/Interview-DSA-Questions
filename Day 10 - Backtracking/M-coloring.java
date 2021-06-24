// https://practice.geeksforgeeks.org/problems/m-coloring-problem-1587115620

class solve 
{
    //Function to determine if graph can be coloured with at most M colours such
    //that no two adjacent vertices of graph are coloured with same colour.
    public static boolean graphColoring(List<Integer>[] G, int[] color, int i, int C) 
    {
        // Your code here
        // G is edges adjacency list, indexed from 0, each index represents a vertex
        // and the list of integers at that index reperesents the vertices connected to that vertex
        // color is an array(size=no.of vertices) of zeroes, for storing the color of the vertices
        // C is M ( number of colors )
        // i is the index we are coloring
        if(i==color.length) return true;
        // trying all colors (1,2,3)
        for(int j=1;j<=C;j++){
            // we will check if the nearby vertices have this color
            if(checkColor(G[i],j,color)){
                // setting color
                color[i] = j;
                if(!graphColoring(G,color,i+1,C)){
                    color[i] = 0;
                }else{
                    return true;
                };
            };
        }
        return false;
    }
    public static boolean checkColor(List<Integer> vertices, int color, int[] colorArray){
        for(int vertex : vertices){
            if(colorArray[vertex] == color) return false;
        }
        return true;
    }
}