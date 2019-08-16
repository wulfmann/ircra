# IRCRA

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

