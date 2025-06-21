**Searching algorithms are used to locate specific items within a collection of data.**

Two most common algorithms used:

**Linear Search** : It is used for an unsorted array. It mainly does one by one comparison of the item to be search with array elements. It takes linear or O(n) Time.

**Binary Search** : It is used for a sorted array. It mainly compares the array's middle element first and if the middle element is same as input, then it returns. Otherwise it searches in either left half or right half based on comparison result (Whether the mid element is smaller or greater). This algorithm is faster than linear search and takes O(Log n) time.


**Linear Search Algorithm**

**Applications:** Unsorted Lists, Small Data Sets, Searching Linked Lists.

**Advantages:** Can be used irrespective of whether the array is sorted or not, Does not require any additional memory.

**When to use?** Dealing with a small dataset. Searching for a dataset stored in contiguous memory.

**Time Complexity:** O(N)

**Space Complexity:** O(1) as except for the variable to iterate through the list, no other variable is used. 


**Binary Search Algorithm**

**Conditions**
To apply Binary Search algorithm:
  The data structure must be sorted.
  Access to any element of the data structure should take constant time.

**Implementation**
Can be implemented in the following two ways:

  _**Iterative Binary Search Algorithm:**_ Here we use a loop to continue the process of comparing the key and splitting the search space in two halves.
  
  _**Recursive Binary Search Algorithm**_ Create a recursive function and compare the mid of the search space with the key. And based on the result either return the index where the key is found or call the recursive function for the next search space.

**Time Complexity:** O(log N)

**Space Complexity:** O(1)
