> This repository combines all of your desired configs which will make the development more easier. It's a monorepo managed by [TurboRepo by Vercel](https://turbo.build/repo).

## ♻️ Shareable configs

| **Package** | **Documentation** |
| - | - |
| 📦 [`@config/eslint`](https://npmjs.com/package/@config/eslint) | [Documentation](/packages/eslint/README.md) |
| 📦 [`@config/prettier`](https://npmjs.com/package/@config/prettier) | [Documentation](/packages/prettier/README.md) |
| 📦 [`@config/tailwind-browser`](https://npmjs.com/package/@config/tailwind-browser) | [Documentation](/packages/tailwind-browser/README.md) |
| 📝 [`@config/renovate`](https://npmjs.com/package/@config/renovate) | [Documentation](/packages/renovate/README.md) |

> **Legend**:
> 📦: Package **|** 📝: Configuration file

---

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
| `quotes`                      | single                                                                     | 🚫 `Error`    | [Documentation](https://eslint.org/docs/rules/quotes)                      |
| `semi`                        | never                                                                   | ⚠️ `Warning`  | [Documentation](https://eslint.org/docs/rules/semi)                        |
| `newline-before-return`                        | error                                                                   | 🚫 `Error`  | [Documentation](https://eslint.org/docs/latest/rules/newline-before-return)                        |
| `import/newline-after-import`                        | error (count 1)                                                                   | 🚫 `Error`  | [Documentation](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md)                        |
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

---

## 📦 [`@config/prettier`](https://www.npmjs.com/package/@config/prettier)

### 📥 Installation

```bash
#If you use npm
npm install --save-dev @config/prettier

#If you use yarn
yarn add --dev @config/prettier

#If you use pnpm (preferred)
pnpm install --save-dev @config/prettier
```

### 🔩 Usage

```js
// .prettierrc.js
module.exports = {
  ...require('@config/prettier'),
};
```

```js
// prettier.config.js
import prettierConfig from "@config/prettier";

export default {
  ...prettierConfig,
};
```

```json
{
  "extends": "@config/prettier"
}
```

### ⚙️ Rules overview

<!--START_SECTION:prettier-->
| Rule                         | Style       | Documentation                                                                          |
| ---------------------------- | ----------- | -------------------------------------------------------------------------------------- |
| `arrowParens`                | `always`    | [Documentation](https://prettier.io/docs/en/options.html#arrow-parens)                 |
| `bracketSpacing`             | `true`      | [Documentation](https://prettier.io/docs/en/options.html#bracket-spacing)              |
| `embeddedLanguageFormatting` | `auto`      | [Documentation](https://prettier.io/docs/en/options.html#embedded-language-formatting) |
| `htmlWhitespaceSensitivity`  | `css`       | [Documentation](https://prettier.io/docs/en/options.html#html-whitespace-sensitivity)  |
| `jsxSingleQuote`             | `true`     | [Documentation](https://prettier.io/docs/en/options.html#jsx-single-quote)             |
| `printWidth`                 | `200000`    | [Documentation](https://prettier.io/docs/en/options.html#print-width)                  |
| `proseWrap`                  | `preserve`  | [Documentation](https://prettier.io/docs/en/options.html#prose-wrap)                   |
| `quoteProps`                 | `as-needed` | [Documentation](https://prettier.io/docs/en/options.html#quote-props)                  |
| `requirePragma`              | `false`     | [Documentation](https://prettier.io/docs/en/options.html#require-pragma)               |
| `semi`                       | `false`      | [Documentation](https://prettier.io/docs/en/options.html#semi)                         |
| `singleQuote`                | `true`     | [Documentation](https://prettier.io/docs/en/options.html#single-quote)                 |
| `tabWidth`                   | `2`         | [Documentation](https://prettier.io/docs/en/options.html#tab-width)                    |
| `trailingComma`              | `es5`       | [Documentation](https://prettier.io/docs/en/options.html#trailing-comma)               |
| `useTabs`                    | `false`     | [Documentation](https://prettier.io/docs/en/options.html#use-tabs)                     |
<!--END_SECTION:prettier-->

# 📝 [`@config/renovate`](/packages/renovate/)

> **Note**: **This is not a package - it is a configuration preset!**

### 🔩 Usage
- In your `renovate.json` file, add the following:
```json
{
 "extends": ["https://github.com/codewithhridoy/config/packages/renovate/index.json"]
}
```
