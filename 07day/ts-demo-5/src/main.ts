namespace m1 {
  let x = 100
  export var obj = {
    x
  }
}

namespace k1 {
  let b = 10
  export var obj2 = {
    b
  }
}

namespace k2 {
  let x = 200
  console.log(m1.obj)
}