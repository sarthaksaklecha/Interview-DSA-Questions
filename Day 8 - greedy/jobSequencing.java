// https://practice.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1#
// Important

class Solution
{   
    // best approach
    // we arrange the jobs array in descending order w.r.t profit
    // then we start adding the jobs one by one
    // we will do the jobs on the deadline day so that 
    // we can do other jobs on the remaining days
    // if we are performing a job already on the deaadine day
    // then we shift to the nearest deadline day that is free;
    // we keep an array to track the deadline days utilised
    int[] JobScheduling(Job arr[], int n)
    {
        // Your code here
        
        int maxDeadline = 0;
        // calculating maxDeadline to initialise deadline arr
        // deadline arr will have the size of the maxDeadline+1
        // so that we can keep track of all the deadlines
        for(Job job :arr){
            maxDeadline = Math.max(maxDeadline,job.deadline);
        }
        // size is deadline+! because deadlines start from 1 and not 0;
        // so we can store the deadline on the deadline's index
        // i.e leaving 0th index blank
        int[] deadlineArr = new int[maxDeadline+1];
        for(int i=0;i<deadlineArr.length;i++){
            deadlineArr[i] = -1;
        }
        int[] result = {0,0};
        // sorting in descending order w.r.t to profit
        Arrays.sort(arr,(a,b)->-a.profit+b.profit);
        int profit = 0;
        int jobCount=0;
        for(Job job : arr){
            // if deadline is available
            if(deadlineArr[job.deadline]==-1){
                profit +=job.profit;
                deadlineArr[job.deadline] = job.id;
                jobCount++;
            }else{
                int i = job.deadline;
                // calculating the next deadline which is free
                while(i>=1 && deadlineArr[i]!=-1) i--;
                if(i>=1){
                    profit +=job.profit;
                    deadlineArr[i] = job.id;
                    jobCount++;
                }
            }
        }
        result[0]= jobCount;
        result[1] = profit;
        return result;
    }
}