## How to run

1. In order to run the app you need postgres up and running. If you have a working connection, you can add a env config file and save the url as `DATABASE_URL`.

2. As an alternative, you can run postgres in docker. If you have [docker](https://docs.docker.com/get-docker/) installed, run `docker run -p 5432:5432 --name postgres -e POSTGRES_PASSWORD=secret -d postgres`

3. Run `yarn start`

4. The seed data should now be loaded in the db and the app listening on port 4000. You're ready to go!
