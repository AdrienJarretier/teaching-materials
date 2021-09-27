from math import pi
from areaSampling import areaSampling
from trianglesApprox import circumApprox, triangleApprox


LOOPS = 400000

print('areaSampling :')
areaSampling(LOOPS)

print('triangleApprox :')
triangleApprox(LOOPS)
print('circumApprox :')
circumApprox(LOOPS)

print(pi)
