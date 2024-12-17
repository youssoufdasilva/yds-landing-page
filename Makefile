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

stop_prod:
	@docker compose -f docker-compose.prod.yml --env-file ./.env.prod stop

logs_prod: 
	@docker compose -f docker-compose.prod.yml --env-file ./.env.prod logs -f

build_prod_no_cache:
	@docker compose -f docker-compose.prod.yml --env-file ./.env.prod build --no-cache