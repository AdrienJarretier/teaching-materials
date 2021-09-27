import random


def areaSampling(loops):

    insideDisk = 0
    outsideDisk = 0

    for _ in range(loops):
        x = random.uniform(0, 1)
        y = random.uniform(0, 1)

        if x**2+y**2 <= 1:
            insideDisk += 1
        else:
            outsideDisk += 1

    pi_4th = insideDisk/(insideDisk+outsideDisk)
    # print('quarter area = pi/4 = quarterDisk area / square area = insideDisk/total = ',
    #       pi_4th)
    print('pi = ', pi_4th*4)
