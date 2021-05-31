// https://practice.geeksforgeeks.org/problems/minimum-platforms-1587115620/1#
// GAND FAAD
// VVVImportant

class Solution
{
    
    // We calculate the number of platforms need in a particular time interval
    // by traversing the array and looking for time clashes(i.e subintervals that are intersecting)
    // basically 2 for loops, we check for every interval the intersecting timing that will be the platforms
    // needed for that time interval. We check this for every interval and the interval requiring maximum platforms
    // to function will be give is the minimum platforms required for the railway station, all the other platforms
    // require lesser platforms so they'll function none the less.
    
    static int findPlatformBrute(int arr[], int dep[], int n){
        int max = 0;
        ArrayList<timing> timings = new ArrayList<timing>();
        for(int i=0;i<arr.length;i++){
            timings.add(new timing(arr[i],dep[i]));
        }
        Collections.sort(timings, new timingComparator());
        for(int i=0;i<arr.length;i++){
            // every time interval will need atleast 1 platform, for the train in that interval
            int platformsNeeded = 1;
            // we don't have to worry about the previous clashes because we are taking a separate plaform for th
            for(int j=i+1;j<arr.length;j++){
                if((timings.get(j).arr >= timings.get(i).arr && timings.get(j).arr <= timings.get(i).dep) || (timings.get(i).arr>=timings.get(j).arr && timings.get(i).arr<=timings.get(j).dep)) platformsNeeded++;
            }
            max = Math.max(max,platformsNeeded);
        }
        return max;
    }
    
    // This took 2 business days to undestand ngl
    // bhai video dekh le striver ki cannot explain
    // jk I'll try
    // So we will sort the arrival array and the departure array
    // and now we will start with one pointer in the arrival array(i) and 
    // other in departure(j), if the arrival pointer is less than the departure
    // this means that the first train to depart still has not departed (departure is sorted)
    // so this means we will need an extra platform till the train departs,
    // if we reach a arrival time that is greater than the departure this means the train will depart
    // and the platfrom will get empty (plaform--), then we will move the departure pointer
    // repeat;
    static int findPlatform(int arr[], int dep[], int n){
        // sort both of the arrays
        Arrays.sort(arr);
        Arrays.sort(dep);
        // platforms needed at that time ->
        int platforms = 0;
        //maximum platforms needed at any time of the day ->
        int maxPlatforms = 0;
        // loop will run till all the trains are checked
        int i=0,j=0;
        while(i<arr.length){
            // check if a train is yet to depart
            if(arr[i] <= dep[j]){ // the equal is important as same arrival and departure cannot happen on 1 platform
                // we will need new platfrom the current train 
                // cause a train hasn't departed
                platforms++;
                i++;
            }else{
                j++;
                platforms--;
            }
            maxPlatforms = Math.max(maxPlatforms, platforms);
        }
        return maxPlatforms;
    }
}