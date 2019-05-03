  /* Java Program Example - Binary Search */

  import java.util.Scanner;

  public class JavaProgram
  {
     public static void main(String args[])
     {
         int n, i, search, first, last, middle;
         int arr[] = new int[50];
         Scanner scan = new Scanner(System.in);

         System.out.print("Enter Total Number of Elements : ");
         n = scan.nextInt();

         System.out.print("Enter " +n+ " Elements : ");
         for(i=0; i<n; i++)
         {
             arr[i] = scan.nextInt();
         }

         System.out.print("Enter a Number to Search..");
         search = scan.nextInt();

         first = 0;
         last = n-1;
         middle = (first+last)/2;

         while(first <= last)
         {
             if(arr[middle] < search)
             {
                 first = middle+1;
             }
             else if(arr[middle] == search)
             {
                 System.out.print(search+ " Found at Location " +middle);
                 break;
             }
             else
             {
                 last = middle - 1;
             }
             middle = (first+last)/2;
         }
         if(first > last)
         {
             System.out.print("Not Found..!! " +search+ " is not Present in the List.");
         }
     }
  }
