# Read Me 

> These are the simple steps to run this test.

---

### Table of Contents

- [Description](#description)
- [Technologies](#technologies)
- [How To Use](#how-to-use)
- [Author Info](#author-info)

---

## Description

Your challenge is to refactor the cleanse function so its return value is a clone of its received object, absent all `null` and `undefined` values.
   - You can use Ramda.js or vanilla JavaScript to solve
   - You may not mutate foo

Example:

```html
const foo = { a : 1, b : 2, c : 0, d : false, e : undefined, f : null,  g : 'hello' };

cleanse(foo); // { a : 1, b : 2, c : 0, d : false, g : 'hello' };

foo remains unmutated // { a : 1, b : 2, c : 0, d : false, e : undefined, f : null, g : 'hello' };
```
 
  

#### Technologies

- Javascript
- Jest

[Back To The Top](#read-me)

---

## How To Use

#### Installation

```html
    npm install
    npm test
```


## Author Info

- Name - Ariel Cornejo
- Email - ariel_co_11@hotmail.com
- Linkedin - https://www.linkedin.com/in/ariellmll/

[Back To The Top](#read-me)
