# Keys

## Primary key

- `COL_NAME SERIAL PRIMARY KEY`
  - Here serial is integer type with auto increment

## Foreign  key

- `COL_NAME INTEGER REFERENCES REFERENCE_TABLE_NAME(COL_NAME_IN_THE_REFERENCE_TABLE)`

### Constraints

#### ON DELETE

- `ON DELETE RESTRICT`
  - This is the default setting
- `ON DELETE NO ACTION`
- `ON DELETE CASCADE`
- `ON DELETE SET NULL`
- `ON DELETE SET DEFAULT`