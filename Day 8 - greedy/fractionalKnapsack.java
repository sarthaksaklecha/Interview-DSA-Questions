// https://practice.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1#
// Easy

class Solution
{
    // we will sort the arr in descending order w.r.t value/weight
    // as we need the maximum value for a limited weight
    // then we traverse the arr and if we can take the complete weight
    // of the item(we want to as the value/weight is best of the element)
    // then we will but if we cant we will take the as much weight as we can
    // we will add the respective value of that weight too
    double fractionalKnapsack(int W, Item arr[], int n) 
    {
        // Your code here
        Arrays.sort(arr,(a,b)-> (((1.0*a.value)/a.weight)-((1.0*b.value)/b.weight))>0.0 ? -1:1);
        double totalValue = 0;
        int weight = 0;
        for(Item item : arr){
            if(item.weight<=(W-weight)){
                weight+=item.weight;
                totalValue+=item.value;
            }else{
                double valuePweight = (1.0*item.value)/item.weight;
                totalValue+= valuePweight*(W-weight);
                break;
            }
        }
        return totalValue;
    }
}