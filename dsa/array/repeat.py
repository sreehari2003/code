def repeat(num):
    d={}
    for element in num:
        if element in d:
            return False
        else:
            d[element]=element
    return True

print(repeat([1,2,3,4,1,2,]))