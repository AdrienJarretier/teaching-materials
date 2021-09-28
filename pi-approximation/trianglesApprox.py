from circleUtils import circlePoint


def triangleArea(trianglePoints):

    (Ax, Ay), (Bx, By), (Cx, Cy) = trianglePoints

    return abs((Ax*(By-Cy)+Bx*(Cy-Ay)+Cx*(Ay-By))/2)


def trianglesApprox(loops):

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
