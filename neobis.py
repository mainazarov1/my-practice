# num = input()
# arr = input().split(' ')
# # num2 = input()
# # arr2 = input()


# print(arr)

# function sumDivisors(num){
#   var sum = 0;
#   for (var i = 1; i <= num; i++){
#     if (num % i === 0) {
#       sum += i;
#     }
#   }
#   console.log(sum);
# }
# sumDivisors(parseInt(line));
# line = int(input())
# def sumFun(num):
# 	sum = 0
# 	for i in range(1,num + 1):
# 		if (num % i == 0):
# 			sum += i
# 	print(sum)
# sumFun(line)

# inputNum = input()
# line = input().split(' ')
# numbers = input().split(' ')
# arr = []
# for i in line:
#   arr.append(int(line[i]))
# [k, j] = numbers
# arr.splice(int(j) - 1, 0, int(k))
# print(arr)

# inputNum = int(input())
# line = input().split(' ')
# k, j = input().split(' ')
# arr = []
# for i in line:
#   arr.append(int(i))
# k, j = int(k), int(j)
# arr.insert(j - 1, k)
# result = ' '.join(map(str, arr))
# print(result)

# n = int(input())
# line = input().split(' ')
# # array = []
# nums = map(int, line)
# array = list(set(nums))
# # for i in nums:
# #     if i not in array:
# #         array.append(i)
# array.sort()
# array.reverse()
# # print(array)
# print(array[1])



# count = input()
# totalQlt = 0
# cats = 0
# rats = 0
# frogs = 0
# for i in range(int(count)):
# 	line = input().split(' ')
# 	if (line[1] == 'C'):
# 		cats += int(line[0])
# 	if (line[1] == 'R'):
# 		rats += int(line[0])
# 	if (line[1] == 'F'):
# 		frogs += int(line[0])
# 	totalQlt += int(line[0])
# print('Total:',str(totalQlt),'animals')
# print('Cats:', str(cats))
# print('Rats:', str(rats))
# print('Frogs:', str(frogs))
# print('Percentage of cats:', ("%.2f" % ((cats * 100) / totalQlt)), '%')
# print('Percentage of cats:', ("%.2f" % ((rats * 100) / totalQlt)), '%')
# print('Percentage of cats:', ("%.2f" % ((frogs * 100) / totalQlt)), '%')


# num = input()
# arrOfnum = []
# allNum = []
# for i in range(int(num)):
# 	line = input().split(' ')
# 	arrOfnum.append(line)
# 	allNum.extend(line)
# result = sum(map(int, allNum)) / len(allNum)
# print(arrOfnum)
# # print(allNum)
# # print(result)
# def multMatrixNumber(A):
# 	m = len(A)
# 	n = len(A[0])
# 	B = list()
# 	for i in range(m):
# 		B[i] = list()
# 		for j in range(n):
# 			if (A[i][j] > result):
# 				B[i][j] = str(255)
# 			else:
# 				B[i][j] = str(0)
# 	return B
# newArr = multMatrixNumber(arrOfnum)
# for k in range(int(num)):
# 	print(newArr[k])



# input = input()
# arr = []
# def sorted(a, b):
# 	if(a[1] != b[1]):
# 		b[1] - a[1]
# 	else:
# 		if(b[0] < a[0]):
# 			1
# 		else:
# 			-1
# for i in range(int(input)):
# 	line = input().split(' ')
# 	arr.append(line[i - 1].split(' '))
# arr.sort(True, sorted(line[0], line[1]))
# for j in range(arr - 1):
# 	print(j)
# def change(i,str):
# 	if (str.index(i) % 2 == 0):
# 		return i.toUpperCase()
# 	else:
# 		return i.toLowerCase()
# def danceStr(str):
# 	result = []
# 	for i in len(str):
# 		newStr = str[i].split('').map(change(i, str),str)
# 		result.append(('').join(newStr))
# 	print((' ').join(result))
# while True:
# 	input = input().split(' ')
# 	danceStr(input)
# def danceStr(str):

# while True:
#   try:
#     text = input()
#     str = ''
#     index = 0
#     for i in range(len(text)):
#       if text[i].isalnum():
#         if (index % 2 == 0):
#           text += text[i].upper()
#         else:
#           text += text[i].lower()
#         index = index + 1
#       else:
#         text = text + text[i]
#     print(text)
#   except:
#     break
# while True:
#   try:
#     line = input()
#     str = ''
#     i = 0
#     for k in range(len(line)):
#       if line[k].isalpha():
#         if i % 2 != 0:
#           str += line[k].lower()
#         else:
#           str += line[k].upper()
#         i = i + 1
#       else:
#         str = str + line[k]
#     print(str)
#   except:
#     break



# num = int(input())
# matrix = []
# for i in range(num):
#   a =[]
#   for j in range(num):
#     a.append(int(input()))
#   matrix.append(a)
# for i in range(num):
#   for j in range(num):
#     print(matrix[i][j], end = " ")
# print(matrix)


# input = input()
# arr = list
# def sorted(a, b):
# 	if(a[1] == b[1]):
# 		b[1] - a[1]
# 	else:
# 		if(b[0] < a[0]):
# 			1
# 		else:
# 			-1
# for i in range(int(input)):
# 	line = input().split(' ')
# 	arr.append(line[i - 1].split(' '))
# arr.sort(True, sorted(line[0], line[1]))
# # for j in range(arr):
# # 	print(j)
# print(arr)



# num = int(input())
# arr = [0, 1]
# a = 0
# b = 1
# for i in range(num):3
#   sum = b + a
#   arr.append(sum)
#   a = b
#   b = sum

# for i in range(num):
#   line = int(input())
#   print('Fib({}) = {}'.format(line, arr[line]))
# fib1 = 1
# fib2 = 1
# n = input()
# n = int(n)
# # i = 0
# def fib(k):
# 	while k < n - 2:
# 		fib_sum = fib1 + fib2
# 		fib1 = fib2
# 		fib2 = fib_sum
# 		i = i + 1
# 		print("Значение этого элемента:", fib2)
# for k in range(n):
# 	k = int(input())
# 	fib(k)



# arr = [0, 1]
# a = 0
# b = 1
# for i in range(60):
#   sum = b + a
#   arr.append(sum)
#   a = b
#   b = sum
# num = int(input())
# for i in range(num):
#   line = int(input())
#   print('Fib({}) = {}'.format(line, arr[line]))


# a = 10
# b = 20
# a, b = b, a 
# TODO dasdasd 
# print(a, b)
a = 10
b = 20
a = a + b
b = a - b
a = a - b
print(a, b)