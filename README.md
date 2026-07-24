 $apis=@("OH_JSVM_TakeRawHeapSnapshot","OH_JSVM_SetHeapThresholdCallback","OH_JSVM_ClearHeapThresholdCallback","OH_JSV
  M_CreateArrayBufferFromExternalMemory"); $h="C:\Program Files\Huawei\DevEco
  Studio\sdk\default\openharmony\native\sysroot\usr\include\ark_runtime\jsvm.h"; foreach($a in $apis){ $m=Select-String
  -Path $h -Pattern $a -List -ErrorAction SilentlyContinue; Write-Output ("$a : $(if($m){'有'}else{'无'})") }
