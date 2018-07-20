export default function defaultIfEmpty(defaultValue) {
  return source => (start, sink) => {
    if (start !== 0) return

    let gotValue = false
    let completed = false

    source(0, (type, data) => {
      if (type === 0) {
        const talkback = data
        sink(0, (type, data) => {
          if (completed) return
          talkback(type, data)
        })
        return
      }

      if (type === 1) {
        gotValue = true
      }

      if (type === 2 && !gotValue && !data) {
        completed = true
        sink(1, defaultValue)
      }

      sink(type, data)
    })
  }
}
