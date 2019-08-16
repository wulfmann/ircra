# IRCRA

## Supported Grade Systems

Gender, Vermin, Font, IRCRA, YDS, French/Sport, British, Tech, Ewbank, BRZ, UIAA, Metric UIAA, Watts

## Description
Tiny Library for converting values between different climbing route grade systems.

See examples directory for usage.

## Installation

`npm install ircra`

## Usage

```js
import IRCRA from 'ircra'

const ircra = IRCRA()
const test = ircra.load('yds', '5.3').to('vermin')

console.log(test) // {"vermin":null}
```

### Methods

`load`

```js
console.log(
    IRCRA().load('yds', '5.3')
)
```

The load method generates an index for the chosen grade system, and returns a new object for that type.

## Efficiency

Since this package loads the climbing grade version directly at runtime, attempts are made to make the queries / conversions more efficient.

When you call `.load` with a type. An index (`Map`) is generated in memory, and used for the conversions to other types.

The first `.load` call is benchmarked at around `.2ms`, but subsequent load/conversion calls come in at around `0.002ms`.
