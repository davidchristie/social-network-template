echo "Apply prisma namespace"

kubectl apply -f namespace.yml

echo "Request MySQL database"

kubectl apply -f database/pvc.yml

echo "Apply MySQL deployment definition"

kubectl apply -f database/deployment.yml

echo "Apply MySQL service definition"

kubectl apply -f database/service.yml

echo "Deploy Prisma ConfigMap"

kubectl apply -f prisma/configmap.yml

echo "Apply Prisma deployment definition"

kubectl apply -f prisma/deployment.yml

echo "Apply Prisma service definition"

kubectl apply -f prisma/service.yml

echo "Apply public-api deployment definition"

kubectl apply -f public-api/deployment.yml

echo "Apply public-api service definition"

kubectl apply -f public-api/service.yml
