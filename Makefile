SHELL=/bin/bash

.PHONY: build run clean prune

docker=
arch=
build:
	sh build.sh $(docker) $(arch)

push:
	docker push rhzx3519/dev-portfolio

run: clean
	docker-compose up -d --force-recreate

clean:
	docker-compose down
	docker-compose rm -f

prune:
	docker system prune --all --force --volumes