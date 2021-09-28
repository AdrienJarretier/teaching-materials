from math import pi
from areaSampling import areaSampling
from circumApprox import circumApprox
from trianglesApprox import trianglesApprox


LOOPS = 400000

print('areaSampling :')
areaSampling(LOOPS)

print('triangleApprox :')
trianglesApprox(LOOPS)
print('circumApprox :')
circumApprox(LOOPS)

print(pi)
