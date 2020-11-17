function _dfs (pattern, matchPredicate, path, m) {
  for (const c of Object.keys(m)) {
    const fullPath = [...path, c]
    if (matchPredicate(c, pattern)) {
      return fullPath
    }
    const res = _dfs(pattern, matchPredicate, fullPath, m[c])
    if (res) {
      return res
    }
  }
  return null
}

function _walk (f, m) {
  return Object.entries(m).map(([name, m2]) => {
    const children = _walk(f, m2)
    return f(name, children)
  })
}

export class HierarchyMap {
  constructor () {
    this.m = {}
  }

  add (xs) {
    let v = this.m
    xs.forEach((x) => {
      if (v[x] == null) {
        v[x] = {}
      }
      v = v[x]
    })
    return v
  }

  dfs (pattern, matchPredicate) {
    return _dfs(pattern, matchPredicate, [], this.m)
  }

  walk (f) {
    return _walk(f, this.m)
  }
}
