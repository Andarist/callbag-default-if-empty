# callbag-default-if-empty

Callbag operator which emits a given value when source completes without emitting any value.

## Example

```js
import defaultIfEmpty from 'callbag-default-if-empty'
import forEach from 'callbag-for-each'
import fromEvent from 'callbag-from-event'
import interval from 'callbag-interval'
import pipe from 'callbag-pipe'
import takeUntil from 'callbag-take-until'

pipe(
  fromEvent(document, 'click'),
  takeUntil(interval(5000)),
  defaultIfEmpty('no clicks'),
  forEach(eventOrDefault => {
    console.log(eventOrDefault)
  }),
)
```
