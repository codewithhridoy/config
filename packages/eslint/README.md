
## 📦 [`@config/eslint`](https://www.npmjs.com/package/@config/eslint)

### 📥 Installation

```bash
#If you use npm
npm install --save-dev @config/eslint

#If you use yarn
yarn add --dev @config/eslint

#If you use pnpm (preferred)
pnpm install --save-dev @config/eslint
```

### 🔩 Usage

```js
// .eslintrc.js
module.exports = {
  extends: ['@config/eslint'],
};
```

### ⚙️ Rules overview

<!--START_SECTION:eslint-->
| Rule                          | Style                                                                      | Type          | Documentation                                                              |
| ----------------------------- | -------------------------------------------------------------------------- | ------------- | -------------------------------------------------------------------------- |
| `linebreak-style`             | unix                                                                       | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/linebreak-style)             |
| `prettier/prettier`           | warn                                                                       | ⚠️ `Warning`  | External rule                                                              |
| `quotes`                      | double                                                                     | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/quotes)                      |
| `semi`                        | always                                                                     | ⚠️ `Warning`  | [Documentation](https://eslint.org/docs/rules/semi)                        |
| `comma-dangle`                | always-multiline, never               | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/comma-dangle)                |
| `no-eval`                     | error                                                                      | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/no-eval)                     |
| `func-names`                  | as-needed                                                                  | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/func-names)                  |
| `camelcase`                   | warn, never   | ⚠️ `Warning`  | [Documentation](https://eslint.org/docs/rules/camelcase)                   |
| `no-unused-vars`              | warn | ⚠️ `Warning`  | [Documentation](https://eslint.org/docs/rules/no-unused-vars)              |
| `import/order`                | warn                                                                          | ⚠️ `Warning`  | External rule                                                              |
| `prefer-arrow-callback`       | error                                                                      | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/prefer-arrow-callback)       |
| `block-spacing`               | error                                                                      | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/block-spacing)               |
| `comma-spacing`               | error                                                                      | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/comma-spacing)               |
| `keyword-spacing`             | error                                                                      | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/keyword-spacing)             |
| `space-infix-ops`             | error                                                                      | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/space-infix-ops)             |
| `space-unary-ops`             | error                                                                      | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/space-unary-ops)             |
| `brace-style`                 | error                                                                      | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/brace-style)                 |
| `object-curly-spacing`        | always                                                                     | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/object-curly-spacing)        |
| `space-before-function-paren` | error | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/space-before-function-paren) |
| `space-in-parens`             | never                                                                      | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/space-in-parens)             |
| `array-bracket-spacing`       | never                                                                      | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/array-bracket-spacing)       |
| `template-curly-spacing`      | never                                                                      | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/template-curly-spacing)      |
| `computed-property-spacing`   | never                                                                      | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/computed-property-spacing)   |
| `no-use-before-define`        | error       | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/no-use-before-define)        |
| `no-label-var`                | error                                                                      | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/no-label-var)                |
| `no-undef`                    | error                                                                      | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/no-undef)                    |
| `no-undefined`                | off                                                                        | 💡 `Disabled` | [Documentation](https://eslint.org/docs/rules/no-undefined)                |
| `complexity`                  | 20                                                                         | ⚠️ `Warning`  | [Documentation](https://eslint.org/docs/rules/complexity)                  |
| `no-alert`                    | error                                                                      | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/no-alert)                    |
| `require-await`               | off                                                                        | 💡 `Disabled` | [Documentation](https://eslint.org/docs/rules/require-await)               |
| `yoda`                        | error                                                                      | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/yoda)                        |
| `no-empty`                    | error                                                                      | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/no-empty)                    |
| `no-extra-semi`               | error                                                                      | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/no-extra-semi)               |
| `valid-typeof`                | error | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/valid-typeof)                |
| `jsx-quotes`                  | prefer-double                                                              | 💡 `Disabled` | [Documentation](https://eslint.org/docs/rules/jsx-quotes)                  |
| `unicode-bom`                 | never                                                                      | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/unicode-bom)                 |
| `no-process-env`              | off                                                                        | 💡 `Disabled` | [Documentation](https://eslint.org/docs/rules/no-process-env)              |
| `no-process-exit`             | off                                                                        | 💡 `Disabled` | [Documentation](https://eslint.org/docs/rules/no-process-exit)             |
| `global-require`              | error                                                                      | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/global-require)              |
<!--END_SECTION:eslint-->