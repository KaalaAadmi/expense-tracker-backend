def sol(D,T):
    sum=0
    for val in D:
        sum+=val
    print(len(T[len(T)-1]))
    print(2*sum)
    print((2*sum)+len(T[len(T)-1]))

sol([2,5],["PGP","M"])


def sol1(D,T):
    last=0
    for i in range(len(T) - 1, -1, -1):
        # Check if the element is not empty
        if T[i] != "":
            print("Index of last non-empty entry:", i)
            last=i
            break
    sum=0
    for i in range(0,last+1):
        sum+=D[i]
    print(len(T[last]))
    print(2*sum)
    print((2*sum)+len(T[last]))
sol1([2,1,1,1,2],["","PP","PP","GM",""])
