  $b="C:\Program Files\Huawei\DevEco Studio\sdk"; Get-ChildItem $b -Directory | ForEach-Object {
  $p="$($_.FullName)\sdk-pkg.json"; if(Test-Path $p){ $j=Get-Content $p -Raw;
  $m=[regex]::Match($j,'"apiVersion"\s*:\s*(\d+)'); Write-Output ("$($_.Name)  api=$($m.Groups[1].Value)") } else {
  Write-Output "$($_.Name)  (无sdk-pkg.json)" } }
