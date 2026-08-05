  echo "=== 找 es2abc ==="
  which es2abc 2>/dev/null
  find / -name "es2abc" -type f 2>/dev/null | head -5

  echo "=== 找 ark_js_vm ==="
  which ark_js_vm 2>/dev/null
  find / -name "ark_js_vm" -type f 2>/dev/null | head -5

  echo "=== 找 HarmonyOS/Ark 相关目录 ==="
  ls /opt/ 2>/dev/null | grep -i -E "harmony|deveco|ark|hmos"
  find / -type d -name "ark*" 2>/dev/null | head -5
