# Constraints

- `CHECK`
  - With check constraint we can specify the value range or condition that the value should satisfy.
  - ```sql
      ...
      min_temp numeric CHECK(min_temp >= 0)
      ...
    ```
  - ```sql
      ALTER TABLE tbl_temp 
      ADD CONSTRAINT min_temp 
      CHECK (min_temp >= 0);
    ```