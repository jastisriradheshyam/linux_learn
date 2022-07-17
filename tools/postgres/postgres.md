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
- Show the function body: `\sf FUNCTION_NAME`
- Show the function in editable format (basically a template for creating new function based on the current one): `\ef FUNCTION_NAME`


## References:
- https://stackoverflow.com/questions/6898453/how-to-display-the-function-procedure-triggers-source-code-in-postgresql