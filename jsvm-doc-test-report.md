# JSVM文档质量测试报告

## 一、错别字

| 文件 | 位置 | 问题 |
|------|------|------|
| `use-jsvm-about-proxy.md` | 26行 | "**接受**两个入参" → 应为"**接收**"（接受=accept willingly, 接收=receive parameters） |
| `use-jsvm-strict-equals.md` | 44行 | "**接受**两个入参" → 同上，应为"**接收**" |
| `use-jsvm-about-code-cache.md` | 138行 | "**被接收了**" → 应为"**被接受了**(accepted)" |
| `use-jsvm-about-version.md` | 59行 | "**VM虚拟机**" → VM即虚拟机，语义重复 |
| `use-jsvm-about-primitive.md` | 1行 | "primitive**类**" → primitive是类型不是类，应为"primitive**类型**" |
| `use-jsvm-trigger-gc.md` | 103/105行 | "OnAfter**2**" → 应为"OnAfter**GC2**"（函数名缩写遗漏） |
| `jsvm-data-types-interfaces.md` | 36行 | "期望传入**Bigint**类型" → 应为"**BigInt**"（i应大写） |
| `use-jsvm-about-proxy.md` | 15行 | "等价于在**js**中执行" → "js"应大写为"**JS**" |

## 二、漏字/缺失内容

| 文件 | 位置 | 问题 |
|------|------|------|
| `use-jsvm-about-class.md` | 220行 | "稍后可以使用OH_JSVM_Unwrap()解包原生实例" → 句末缺少句号 |
| `use-jsvm-strict-equals.md` | 21行 | "判断两个JSVM_Value对象是否相等" → 缺少"**严格**"二字，应为"严格相等" |
| `use-jsvm-about-proxy.md` | 7→8行 | 元数据注释与"##简介"之间缺少空行（所有其他文件都有空行分隔） |

## 三、重复字/冗余内容

| 文件 | 位置 | 问题 |
|------|------|------|
| `use-jsvm-about-well-known-symbols.md` | 11行与15行 | "可以通过不同API直接获取对应的11个Well-known symbols" 与 "能够给用户提供快速获取对应的11个Well-known symbols的能力" 几乎完全重复 |
| `use-jsvm-basic-data-types.md` | 109-127行 | `GetValueInt32`代码中有重复的`if (status != JSVM_OK)`判断（第117行return后第121行又判断一遍） |
| `use-jsvm-trigger-gc.md` | 71行 vs 76行 | `OnAfterGC2`和`OnAfterGC3`函数体完全相同（都设`after_flag2=true`），`OnAfterGC3`的存在没有意义 → 疑似复制粘贴遗留 |

## 四、语法样式规范性问题

| 文件 | 位置 | 问题 |
|------|------|------|
| `use-jsvm-about-wrapper-object.md` | 11行 | "装箱类型(**Wrapper object**)" → 英文括号应改为中文括号（） |
| `use-jsvm-about-bigint.md` | 40行 | "cpp部分代码：" → 无加粗格式，其他文件使用"**cpp部分代码：**" |
| `use-jsvm-about-external-string.md` | 30行 | "cpp部分代码" → 无冒号无加粗 |
| `use-jsvm-about-private.md` | 34行 | "cpp部分代码" → 同上无冒号无加粗 |
| `use-jsvm-about-proxy.md` | 22行 | "cpp 部分代码" → 无冒号无加粗 |
| `use-jsvm-about-JSON.md` | 93行 | "## 预期结果：" → 使用二级标题格式，其他文件不使用标题格式 |
| `use-jsvm-about-external-string.md` | 82行 | "## 预期输出结果" → 使用二级标题格式 |
| `use-jsvm-about-v8-trace.md` | 1/11/18行 | "jsvm"多处未大写 → 其他所有文档统一使用"JSVM" |
| `use-jsvm-trigger-exceptions.md` | 100/167/243行 | "在LOG中输出："后面有全角空格（　），不应存在 |
| `use-jsvm-trigger-exceptions.md` | 98行 vs 165/241行 | "执行结果"有时带冒号有时不带 → 不一致 |
| `use-jsvm-about-JSON.md` | 84行 | `JSVM_PropertyDescriptor descriptor[]` → 缺少`static`关键字，其他所有文件都使用`static` |
| `use-jsvm-memory-management.md` | 72行 vs 78行 | "**样例测试JS**"加粗 → 其他文件不加粗或用注释格式 |


## 五、混用问题

| 文件 | 位置 | 问题 |
|------|------|------|
| `use-jsvm-about-proxy.md` | 84-86行 | 方法别名使用PascalCase("CreateProxy") → 其他文件统一用camelCase |
| `use-jsvm-about-code-cache.md` | 113行 | 方法别名"UseCodeCache"使用PascalCase → 同上 |
| `use-jsvm-about-class.md` | 342行 | "目前支持以下的DefineClassOptions:" → 中文语境中冒号应为中文冒号 |
| `use-jsvm-about-wasm.md` | 20行 | "(WebAssembly 简称为**wasm**)" → wasm应大写为**WASM** |
| `use-jsvm-execute_tasks.md` | 30行 | "**Wasm**字节码" → 应写为"WebAssembly"或"WASM" |
| `jsvm-data-types-interfaces.md` | 598行 | "执行含**wasm**的脚本" → 应为"WebAssembly"或"WASM" |
| `use-jsvm-about-wrapper-object.md` | 11行 | "装箱类型(Wrapper object)" → 英文括号应为中文括号（） |

## 六、逻辑/描述清晰度问题

| 文件 | 位置 | 问题 |
|------|------|------|
| `use-jsvm-trigger-gc.md` | 1行 | 标题"感知JSVM引擎生命周期管理" → 实际内容是GC回调，应为"感知JSVM引擎**GC行为**" |
| `use-jsvm-execute_tasks.md` | 193/201行 | 代码日志写"JSVM_MICROTASK_AUTO"但实际策略已设为"JSVM_MICROTASK_EXPLICIT" → **日志与实际不符** |
| `use-jsvm-about-external-string.md` | 51-52行 | 日志"create external string **failed**"打印copied值 → 当copied=0时实际成功，日志误导 |
| `use-jsvm-about-arraybuffer.md` | 190行 | 日志"JSVM **IsArrayBuffer**"实际调用IsDetachedArraybuffer → **日志名与函数不一致** |
| `use-jsvm-memory-management.md` | 53行 | 日志"JSVM **Allocate** memory size"但变量名是adjustedValue → 应为"**Adjusted** memory size" |
| `use-jsvm-runtime-task.md` | 331行 | "绑定**TS**回调" → 实际注册的是C++回调而非TypeScript回调 |
| `use-jsvm-create-snapshot.md` | 104行 | `helloCb = {CreateHelloString, nullptr}` → 字段顺序为{callback,data}但结构体定义为{data,callback}，**顺序错误** |
| `use-jsvm-about-external-string.md` | 72行 | 注释"wrapperObject方法别名"但实际方法名是"testExternalString" → **复制粘贴错误** |
| `use-jsvm-about-private.md` | 89行 | 注释"wrapperObject方法别名"但实际方法名是"privateTest" → **复制粘贴错误** |
| `use-jsvm-about-JSON.md` | 84行 | `JSVM_PropertyDescriptor descriptor[]`缺少`static`关键字 → **编译风格不一致** |
| `use-jsvm-memory-management.md` | 69 vs 74行 | 同一文件内变量命名不一致：69行用`SRC_CALL_NATIVE`，74行用`srcCallNative` |



