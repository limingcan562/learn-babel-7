## 说明
- 当前`@babel/preset-env`版本为`7.20.2`
- `@babel/preset-env`只会包含`stage-4`阶段的插件
-  当前`do expressions`语法处于`stage-1`阶段，因此当前的`@babel/preset-env`不包含`@babel/plugin-proposal-do-expressions`
- 如果后期`@babel/plugin-proposal-do-expressions`纳入`stage-4`阶段，到时装最新的`@babel/preset-env`应该会包含这个插件

## 使用
- `npm i`
- `npm run compile`