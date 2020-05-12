# Stark

**This library is currently under active development, and until a given method
is covered in the tests we can't be sure of it stability. This is because we're
using meta-programming techniques within Stark that allow for a large number of
unknowns that only usage of the library can reveal.**

## Library coverage

Below is a short excerpt from the official documentation outlining the current
testing and documentation efforts. In reality, Stark covers every instance
method exposed by JavaScript's standard built-in objects.

### Array

| Method              | Summary                                                                 | Tested             | Documented |
| ---                 | ---                                                                     | :---:              | :---:      |
| `concat`            | Merge two arrays                                                        | :white_check_mark: |            |
| `copyWithin`        | Shallow copy part of an array to another location in that array         | :white_check_mark: |            |
| `entries`           | Retrieve an iterator from an array                                      | :white_check_mark: |            |
| `every`             | Tests whether all of the elements match the given condition             | :white_check_mark: |            |
| `fill`              | Fill the provided Array with a given value                              | :white_check_mark: |            |
| `filter`            | Create a new array with all of the elements that pass a given condition | :white_check_mark: |            |
| `find`              |                                                                         |                    |            |
| `findIndex`         |                                                                         |                    |            |
| `flat`              |                                                                         |                    |            |
| `flatMap`           |                                                                         |                    |            |
| `forEach`           |                                                                         |                    |            |
| `includes`          |                                                                         |                    |            |
| `indexOf`           |                                                                         |                    |            |
| `join`              |                                                                         |                    |            |
| `keys`              |                                                                         |                    |            |
| `lastIndexOf`       |                                                                         |                    |            |
| `map`               | Apply a function over each element in an array                          | :white_check_mark: |            |
| `pop`               |                                                                         |                    |            |
| `push`              |                                                                         |                    |            |
| `reduce`            | Reduce an array to a single output value                                | :white_check_mark: |            |
| `reduceRight`       |                                                                         |                    |            |
| `reverse`           |                                                                         |                    |            |
| `shift`             |                                                                         |                    |            |
| `slice`             |                                                                         |                    |            |
| `some`              | Tests that none of the element match the given condition                | :white_check_mark: |            |
| `sort`              |                                                                         |                    |            |
| `splice`            |                                                                         |                    |            |
| `toLocaleString`    |                                                                         |                    |            |
| `toString`          |                                                                         |                    |            |
| `unshift`           |                                                                         |                    |            |
| `values`            |                                                                         |                    |            |

### Map

| Method    | Summary                                                                                                               | Tested             | Documented |
| ---       | ---                                                                                                                   | :---:              | :---:      |
| `clear`   | Removes all of the elements from a Map object                                                                         | :white_check_mark: |            |
| `delete`  | Removes a specified element from a Map object, returning true if the element existed and false if the element did not | :white_check_mark: |            |
| `entries` | Creates a new Iterator containing an array of `[key, value]` for each element in a Map object                         | :white_check_mark: |            |
| `forEach` | Calls the given callback function once for every key value pair in a Map object                                       | :white_check_mark: |            |
| `get`     | Return a specified element from a Map object                                                                          | :white_check_mark: |            |
| `has`     | Returns a boolean indicating whether or not the given key exists in a Map object                                      | :white_check_mark: |            |
| `keys`    | Creates a new Iterator containing each key in a Map object                                                            | :white_check_mark: |            |
| `set`     | Assign or update a specified element in a Map object                                                                  | :white_check_mark: |            |
| `values`  | Creates a new Iterator containing each value in a Map object                                                          | :white_check_mark: |            |

### Number

| Method              | Summary                                                                 | Tested             | Documented |
| ---                 | ---                                                                     | :---:              | :---:      |
| `toExponential`     |                                                                         |                    |            |
| `toFixed`           |                                                                         |                    |            |
| `toLocaleString`    |                                                                         |                    |            |
| `toPrecision`       |                                                                         |                    |            |
| `toString`          |                                                                         |                    |            |
| `valueOf`           |                                                                         |                    |            |

### Promise

| Method              | Summary                                                                 | Tested             | Documented |
| ---                 | ---                                                                     | :---:              | :---:      |
| `catch`             |                                                                         |                    |            |
| `finally`           |                                                                         |                    |            |
| `then`              |                                                                         |                    |            |

### Set

| Method              | Summary                                                                 | Tested             | Documented |
| ---                 | ---                                                                     | :---:              | :---:      |
| `add`               |                                                                         |                    |            |
| `clear`             |                                                                         |                    |            |
| `delete`            |                                                                         |                    |            |
| `entries`           |                                                                         |                    |            |
| `forEach`           |                                                                         |                    |            |
| `has`               |                                                                         |                    |            |
| `keys`              |                                                                         |                    |            |
| `values`            |                                                                         |                    |            |

### String

| Method              | Summary                                                                 | Tested             | Documented |
| ---                 | ---                                                                     | :---:              | :---:      |
| `charAt`            |                                                                         |                    |            |
| `charCodeAt`        |                                                                         |                    |            |
| `codePointAt`       |                                                                         |                    |            |
| `concat`            |                                                                         |                    |            |
| `endsWith`          |                                                                         |                    |            |
| `includes`          |                                                                         |                    |            |
| `indexOf`           |                                                                         |                    |            |
| `lastIndexOf`       |                                                                         |                    |            |
| `localeCompare`     |                                                                         |                    |            |
| `match`             |                                                                         |                    |            |
| `matchAll`          |                                                                         |                    |            |
| `normalize`         |                                                                         |                    |            |
| `padEnd`            |                                                                         |                    |            |
| `padStart`          |                                                                         |                    |            |
| `repeat`            |                                                                         |                    |            |
| `replace`           |                                                                         |                    |            |
| `search`            |                                                                         |                    |            |
| `slice`             |                                                                         |                    |            |
| `split`             |                                                                         |                    |            |
| `startsWith`        |                                                                         |                    |            |
| `substring`         |                                                                         |                    |            |
| `toLocaleLowerCase` |                                                                         |                    |            |
| `toLocaleUpperCase` |                                                                         |                    |            |
| `toLowerCase`       |                                                                         |                    |            |
| `toString`          |                                                                         |                    |            |
| `toUpperCase`       |                                                                         |                    |            |
| `trim`              |                                                                         |                    |            |
| `trimEnd`           |                                                                         |                    |            |
| `trimLeft`          |                                                                         |                    |            |
| `trimRight`         |                                                                         |                    |            |
| `trimStart`         |                                                                         |                    |            |
| `valueOf`           |                                                                         |                    |            |

### WeakMap

| Method              | Summary                                                                 | Tested             | Documented |
| ---                 | ---                                                                     | :---:              | :---:      |
| `delete`            |                                                                         |                    |            |
| `get`               |                                                                         |                    |            |
| `has`               |                                                                         |                    |            |
| `set`               |                                                                         |                    |            |

### WeakSet

| Method              | Summary                                                                 | Tested             | Documented |
| ---                 | ---                                                                     | :---:              | :---:      |
| `add`               |                                                                         |                    |            |
| `delete`            |                                                                         |                    |            |
| `has`               |                                                                         |                    |            |

## License

This project is released under the [MIT License](./LICENSE). Enjoy responsibly ✌️
