# IRCRA

## Supported Grade Systems

Gender, Vermin, Font, IRCRA, YDS, French/Sport, British, Tech, Ewbank, BRZ, UIAA, Metric UIAA, Watts

## Description
Tiny Library for converting values between different climbing route grade systems.

## Installation

`npm install ircra`

## Usage

Example

```js
import IRCRA from 'ircra'

const ircra = new IRCRA()
const test = ircra.convert('yds', '5.3').to('vermin')

console.log(test) // {"vermin":null}
```

### Methods

`get`

```js
console.log(
    new IRCRA().get('yds')
) // [...]
```

The get method generates an index for the chosen grade system, and returns a new object for that type. It takes an optional parameter of gradeSystem. If no argument is provided, all grades in all grade systems are returned.

```js
console.log(
    new IRCRA().get()
) // [{...}]
```

`convert`

```js
console.log(
    new IRCRA().convert('yds', '5.1').to('vermin')
) // {...}
```

The convert method takes two parameters. The gradeSystem and gradeValue. It returns an object with a `to` method that takes one parameter, the target gradeSystem.

It will then return an object with the new gradeSystem value.

## Efficiency

Since this package loads the climbing grade version directly at runtime, attempts are made to make the queries / conversions more efficient.

When you call `.load` with a type. An index (`Map`) is generated in memory, and used for the conversions to other types.

The first `.load` call is benchmarked at around `.2ms`, but subsequent load/conversion calls come in at around `0.002ms`.
