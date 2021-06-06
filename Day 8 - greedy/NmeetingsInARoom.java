// https://practice.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1#
// VERY Important IMPLEMENTATION
// OOPJ pro max

// creating a class meeting with start and end values in the constructor
// we wish to sort the start and finish arrays according to the finishing time of the meetings
// for that we will create a datastructure that will store objects of meeting class having end and start properties
// then we will sort that data structure by making a Comparator which will compare according to the end time 
// of the meetings
// In the end we calculate the number of meetings by checking if the start time of the meeting is greater 
// than the end time of the previous meeting

// place meeting class outside of the SOlution class or OOPJ will throw errors lol
// I wish i could understand why
class meeting {
    int start,end;
    meeting(int start, int end){
        this.start = start;
        this.end = end;
    }
}

// remeber how we make Comparators ->
class meetingsComparator implements Comparator<meeting> {
    @Override
    public int compare(meeting m1, meeting m2){
        if(m1.end > m2.end) return 1;
        return -1;
    }
}

class Solution 
{
    //Function to find the maximum number of meetings that can
    //be performed in a meeting room.
    public static int maxMeetings(int start[], int end[], int n)
    {
        // new DS to store objects with meeting start and end time
        ArrayList<meeting> meetings = new ArrayList<meeting>();
        // adding the objects to our DS
        for(int i = 0; i<start.length; i++){
            meetings.add(new meeting(start[i], end[i]));
        }
        // Sorting using our comparator
        Collections.sort(meetings, new meetingsComparator());
        // for(int i=0;i<meetings.size();i++){
        //     System.out.println(meetings.get(i).end);
        // }
        int meetingCount = 0;
        int endTime = -1;
        // end time is -1 initially so we can consider the first meeting
        for(int i=0;i<meetings.size();i++){
            if(meetings.get(i).start > endTime){
                meetingCount++;
                endTime = meetings.get(i).end;
            }
        }
        return meetingCount;
    }
}
