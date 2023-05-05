NAME=node

build:
	docker build --no-cache -t ${NAME}-service .

deploy: build
	docker-compose up -d

up: down
	docker-compose up -d

run: build
	docker-compose up -d

debug: build
	docker-compose up

down:
	docker-compose down