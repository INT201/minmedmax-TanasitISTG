const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  let min, mid, max
  if (n1 > n2) {
    max = n1
    if (n2 > n3) {
      mid = n2
      min = n3
    }
    else {
      mid = n3
      min = n2
    }
  }
  else if (n2 > n3) {
    max = n2
    if (n1 > n3) {
      mid = n1
      min = n3
    }
    else {
      mid = n3
      min = n1
    }
  }
  else {
    max = n3
    if (n1 > n2) {
      mid = n1
      min = n2
    }
    else {
      mid = n2
      min = n1
    }
  }
  return { min, mid, max }
}

module.exports = minMedMax
