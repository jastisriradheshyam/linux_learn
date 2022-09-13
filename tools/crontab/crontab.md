# Crontab

- Crontab's maintained for user by user basis
- Edit crontab: `crontab -e`
- List the crontab: `crontab -l`
- Remove all the crontab commands: `crontab -r`

## Time
- Lowest resolution that crontab can achive is the minute
- Format: `minute hour day_of_a_month month_of_a_year day_of_a_week THE_COMMAND_TO_EXECUTE`
  - `minute`         : 0-59
  - `hour`           : 0-23
  - `day_of_a_month` : 1-31
  - `month_of_a_year`: 1-12
  - `day_of_a_week`  : 0-7
    - `0` or `7` is `Sunday` and 6 is `Saturday`
