start:
	@docker compose -p ${USER}_yds_landing -f docker-compose.dev.yml --env-file ./.env up -d --remove-orphans

stop:
	@docker compose -p ${USER}_yds_landing -f docker-compose.dev.yml --env-file ./.env stop

down:
	@docker compose -p ${USER}_yds_landing -f docker-compose.dev.yml --env-file ./.env down

destroy:
	@docker compose -p ${USER}_yds_landing -f docker-compose.dev.yml --env-file ./.env down -v --remove-orphans

build:
	@docker compose -p ${USER}_yds_landing -f docker-compose.dev.yml --env-file ./.env build
	
build_no_cache:
	@docker compose -p ${USER}_yds_landing -f docker-compose.dev.yml --env-file ./.env build --no-cache

logs: 
	@docker compose -p ${USER}_yds_landing -f docker-compose.dev.yml --env-file ./.env logs -f




start_prod:
	@docker compose -f docker-compose.prod.yml --env-file ./.env.prod up -d --remove-orphans

pull_prod:
	@docker compose -f docker-compose.prod.yml --env-file ./.env.prod pull

stop_prod:
	@docker compose -f docker-compose.prod.yml --env-file ./.env.prod stop

build_prod: # soon to be deprecated
	@docker compose -f docker-compose.prod.yml --env-file ./.env.prod build

logs_prod: 
	@docker compose -f docker-compose.prod.yml --env-file ./.env.prod logs -f
