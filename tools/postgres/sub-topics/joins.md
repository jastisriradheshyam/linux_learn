# Joins

- By default inner join is applied when no specific type is defined]
- three way join
  - where on condition includes three tables involved

## Types

- inner
  - if the on condition is not matched on either side of the tables then that record is not included in final result
- left
  - left part is always included but if right side don't have referenced row then null is presented for columns part of right side.
  - same as `LEFT OUTER`
- right
  - right part is always included but if left side don't have referenced row then null is presented for columns part of left side.
  - same as `RIGHT OUTER`
- outer
  - all the possible rows both sides are included and if no match is present for any row in either side then null is presented in opposing table columns
  - same as `FULL OUTER`