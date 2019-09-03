# IRCRA

## WARNING

Some grade types do not match 1:1 with other grade types during conversion. Currently the first found match is returned.

## Supported Grade Systems

Gender, Vermin, Font, IRCRA, YDS, French/Sport, British, Tech, Ewbank, BRZ, UIAA, Metric UIAA, Watts

### Grade System Types

|name|type|
|----|----|
|male (level)|number|
|female (level)|number|
|vermin|string|
|font|string|
|ircra|number|
|yds|string|
|sport|string|
|british|string|
|tech|string|
|ewbank|number|
|brz|string|
|uiaa|string|
uiaa_metric|number|
watts|number

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

console.log(test) // {vermin:null}
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

When you call `.get` with a type. An index (`Map`) is generated in memory, and used for the conversions to other types.

The first `.get` call is benchmarked at around `.2ms`, but subsequent get/convert calls come in at around `0.002ms`.

`scale`

```js
console.log(
    new IRCRA().scale()
) // [{...}, {...}...]
```

The scale method returns a list of possible scale values with human-readable values associated with their respective internal ids.
