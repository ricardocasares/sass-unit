SASS unit testing with Sassaby
======================

# ![center](http://i.picresize.com/images/2016/08/10/1hpj.png)

###### Presented by [@ricardocasares](https://github.com/ricardocasares) 

---

# Previous art

- [True](https://github.com/oddbird/true)
- Node-sass-unit

###### Drawbacks
- New syntax and functions to learn
- Specific testing library
- Test based on exact output

---
# Writing tests in SCSS syntax?
```scss
// Test mixin font-size
@import "true";
@include test-module('Utilities') {
  @include test('Font Size [mixin]') {
    @include assert('Has font size & line height.') {
      @include output {
        @include font-size(large);
      }
      @include expect {
        font-size: 2rem;
        line-height: 3rem;
      }
    }
  }
}
```
### Hell no! :poop:

---

# Why Sassaby?

- Same old JavaScript syntax we all know
- Easy integration with our build system
- Fast, uses `node-sass` for compilation
- Use it with `jasmine`, `mocha`, `you-name-it`
- Use it with any `node.js` assertion library

---

# Hands on

### Let's create a `gulp` task for running our tests


- `git clone http://github.com/ricardocasares/sass-testing-tutorial.git`
- `cd sass-testing-tutorial`
- `npm install`
- Run `npm test` or `gulp test`

---
# Uh oh! :hushed:
## Seems some tests are not implemented!
```
...

alert component
  alert mixin
    ✓ should have default radius
    - should have custom radius

label component
  - should have a default padding
  - should have a custom padding

3 passing (17ms)
10 pending
```
###### Look for the `src/**/*.spec.js` files and complete the tests!

---
# Thank you
## You are now a `SASS` test pro.
### Not really, but enjoy writing your unit tests! :+1:


###### Created with :heart: by [@ricardocasares](https://github.com/ricardocasares)
