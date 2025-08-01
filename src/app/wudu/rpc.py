import random
inp = input("rps: ")
choice = ["rock","paper","scissors"]
cmpchoice = random.choice(choice)
print(choice)
if inp == "r" and cmpchoice == ""