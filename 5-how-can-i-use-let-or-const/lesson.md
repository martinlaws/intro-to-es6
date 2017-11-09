# `let`, `const`, and `var`
How do I know when to use which?

There are two major schools of thought on this:
1. `ES6` badass:
    * use `const` by default
        * `const` does _not_ indicate that a value is 'constant' or immutable, a `const` value can definitely change
        * for example:
            ```javascript
            const foo = {};
            foo.bar = 42;
            ```
          is totally valid `ES6` code.
        * the only thing that is immutable is the _binding_, `{}` is assigned to `foo`, and guarantees no rebinding will happen
        * if you want to ensure a fully immutable object, use `Object.freeze()` as outlined in [this example](https://github.com/martinlaws/es6-exercises/blob/master/2-let-and-const/examples.js#L41)
    * use `let` only when rebinding is needed
    * (`var` should not be used in `ES6`)
2. The pragmatist:
    * use `var` for top-level variables that are shared across many (especially larger) scopes
    * use `let` for localized variables in smaller scopes
    * refactor `let` to `const` only after code has been written and you're sure there won't be rebinding
