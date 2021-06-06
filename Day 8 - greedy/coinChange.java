// https://leetcode.com/problems/coin-change/
// DP and recursion

class Solution {
    HashMap<Integer,Integer> hm = new HashMap<Integer, Integer>();
	public int coinChange(int[] coins,int V){
        int M =coins.length;
	    if(V==0) return 0;
        if(hm.containsKey(V)) return hm.get(V);
	    int minCoins = Integer.MAX_VALUE;
	    int coinCount = 0;
	    for(int i=0;i<M;i++){
	        if(coins[i]<=V){
                coinCount=coinChange(coins,V-coins[i]);
                if(coinCount!=-1) minCoins = Math.min(coinCount+1,minCoins);
	        }
        }
        minCoins = minCoins==Integer.MAX_VALUE ? -1 : minCoins;
        hm.put(V,minCoins);
	    return minCoins;
	}
}