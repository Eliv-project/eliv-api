## Backup and restore db data from docker

### Backup

`docker exec db pg_dump -d postgresql://eliv81222:dnntung@localhost:5432/eliv -f /eliv/backup/db.sql`

