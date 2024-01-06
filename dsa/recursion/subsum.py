array = [2,3,6,7]

def sum_of_substrings(arr, target_sum):
    result = []
    def sub(index, res, s=0):
        if s == target_sum:
            print(res)
            result.append(res.copy())
            return
        if index == len(arr):
            return
        res.append(arr[index])
        s+= arr[index]
        sub(index + 1, res, s)
        t = res.pop()
        s-=t
        sub(index + 1, res, s)

    sub(0,[])
    print(result)

sum_of_substrings(array,7)
