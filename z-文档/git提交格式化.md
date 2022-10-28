https://learnku.com/docs/antd-pro/5/commit-msg/11203#472210

### commit message 格式说明 Commit message 一般包括三部分：Header、Body 和 Footer。

Header type(scope):subject

type：用于说明 commit 的类别，规定为如下几种 feat：新增功能； fix：修复 bug； docs：修改文档； refactor：代码重构，未新增任何功能和修复任何 bug； build：改变构建流程，新增依赖库、工具等（例如 webpack 修改）； style：仅仅修改了空格、缩进等，不改变代码逻辑； perf：改善性能和体现的修改； chore：非 src 和 test 的修改； test：测试用例的修改； ci：自动化流程配置修改； revert：回滚到上一个版本； scope：【可选】用于说明 commit 的影响范围 subject：commit 的简要说明，尽量简短

```js
/^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip)(\(.+\))?: .{1,50}/;
```

commit message 格式说明 Commit message 一般包括三部分：Header、Body 和 Footer。

Header type(scope):subject

type：用于说明 commit 的类别，规定为如下几种 feat：新增功能； fix：修复 bug； docs：修改文档； refactor：代码重构，未新增任何功能和修复任何 bug； build：改变构建流程，新增依赖库、工具等（例如 webpack 修改）； style：仅仅修改了空格、缩进等，不改变代码逻辑； perf：改善性能和体现的修改； chore：非 src 和 test 的修改； test：测试用例的修改； ci：自动化流程配置修改； revert：回滚到上一个版本； scope：【可选】用于说明 commit 的影响范围 subject：commit 的简要说明，尽量简短

### https://github.com/vuejs/core/blob/main/.github/commit-convention.md
