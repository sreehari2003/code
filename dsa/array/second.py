import heapq

def second_largest_element(arr):
    # Convert the array to a max heap
    max_heap = [-num for num in arr]
    
    heapq.heapify(max_heap)


    # Pop the largest element (negative of the actual value)
    -heapq.heappop(max_heap)

    # Pop and return the second-largest element
    second_largest = -heapq.heappop(max_heap)
    
    return second_largest

# Example usage:
arr = [3, 1, 4, 2, 5, 6]
result = second_largest_element(arr)
print("Second-largest element:", result)
