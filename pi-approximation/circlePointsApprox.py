def triangleArea(trianglePoints):

    (Ax, Ay), (Bx, By), (Cx, Cy) = trianglePoints

    return abs((Ax*(By-Cy)+Bx*(Cy-Ay)+Cx*(Ay-By))/2)


def circlePoint(x):
    y = (1-x**2)**0.5

    return (x, y)


def triangleApprox(loops):

    lastPoint = circlePoint(-1)
    diskArea = 0

    PRECISION = loops
    for xInt in range(1-PRECISION, 1):
        x = xInt/PRECISION
        currentPoint = circlePoint(x)
        diskArea += triangleArea([(0, 0), lastPoint, currentPoint])
        lastPoint = currentPoint

    diskArea *= 4

    print("diskArea = pi = ", diskArea)


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
