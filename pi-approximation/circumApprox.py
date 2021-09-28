from circleUtils import circlePoint


def distance(p1, p2):
    return ((p1[0]-p2[0])**2+(p1[1]-p2[1])**2)**0.5


def circumApprox(loops):

    lastPoint = circlePoint(-1)
    diskCircum = 0

    PRECISION = loops
    for xInt in range(1-PRECISION, 1):
        x = xInt/PRECISION
        currentPoint = circlePoint(x)
        diskCircum += distance(currentPoint, lastPoint)
        lastPoint = currentPoint

    diskCircum *= 4

    print("diskCircum/2 = pi = ", diskCircum/2)
