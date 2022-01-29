# Powershell

- Get Powershell Version: `Get-Host | Select-Object Version`

## Background Jobs
- Start Job in background: `Start-Job { executable_name }`
- Get background jobs: `Get-Job`
- Remove background jobs: `Remove-Job JOB_ID`


## References:
- https://stackoverflow.com/questions/185575/powershell-equivalent-of-bash-ampersand-for-forking-running-background-proce
- https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_jobs?view=powershell-7.2&viewFallbackFrom=powershell-6