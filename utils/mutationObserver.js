//Usage is very simple, to use it with await just make sure you're within an async function:
//Checks to see if dom node exist in async function.

export function _waitForElement(selector, delay = 50, tries = 250) {
  const element = document.querySelector(selector)

  if (!window[`__${selector}`]) {
    window[`__${selector}`] = 0
  }

  function _search() {
    return new Promise((resolve) => {
      window[`__${selector}`]++
      console.log(window[`__${selector}`])
      setTimeout(resolve, delay)
    })
  }

  if (element === null) {
    if (window[`__${selector}`] >= tries) {
      window[`__${selector}`] = 0
      return Promise.reject(null)
    }

    return _search().then(() => _waitForElement(selector))
  } else {
    return Promise.resolve(element)
  }
}
