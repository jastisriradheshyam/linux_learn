# Postgres

- List databases: `\l` or `\list`
- Change database: `\c DATABASE_NAME`
- Show tables: `\dt`
    - More information: `\dt+`
    - All tables: `\dt *.*`
    - Better:
    ```sql
    SELECT *
    FROM pg_catalog.pg_tables
    WHERE schemaname != 'pg_catalog' AND 
    schemaname != 'information_schema';
    ```
- Watch query (Run the query every n seconds): `\watch 5`