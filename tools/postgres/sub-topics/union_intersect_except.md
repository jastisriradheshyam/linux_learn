# Union, Intersect, except

## Union
- `(QUERY) union (QUERY)`
- show single row for duplicates
  - to stop this behavior then use `UNION ALL` instead of `UNION`
## Intersection
- `INTERSECT`
- include duplicate records then use `INTERSECT ALL`, if the common row is present multiple times in both tables then it will have shows those records with intersection applied.

## Except
- `EXCEPT` : result in rows present in first query but not in second query
- include duplicate records then use `EXCEPT ALL`