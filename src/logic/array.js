export function equal(array1, array2) {
  return (
    array1.length === array2.length &&
    array1.every((value, index) => value === array2[index])
  )
}

export function dedupeFromRight(arr) {
  const invArr = []
  arr.reverse().forEach(x => {
    if (!invArr.includes(x)) {
      invArr.push(x)
    }
  })
  return invArr.reverse()
}