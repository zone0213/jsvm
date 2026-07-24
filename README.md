  $h="C:\Program Files\Huawei\DevEco Studio\sdk\default\openharmony\native\sysroot\usr\include\ark_runtime\jsvm.h";
  foreach($a in @("OH_JSVM_TakeRawHeapSnapshot","OH_JSVM_SetHeapThresholdCallback","OH_JSVM_ClearHeapThresholdCallback"
  ,"OH_JSVM_CreateArrayBufferFromExternalMemory")){ if(Select-String -Path $h -Pattern $a -Quiet){Write-Output "$a :
  有"}else{Write-Output "$a : 无"} }
