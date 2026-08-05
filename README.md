
 Get-ChildItem "C:\Program Files\Huawei\DevEco Studio" -Recurse -Filter "ark_js_vm*" -ErrorAction SilentlyContinue | Select-Object FullName
