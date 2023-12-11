function CartesianProduct(a, b) {
  let data = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      data.push([a[i], b[j]]);
    }
  }
  return data;
}

console.log(CartesianProduct([1, 2], [3, 4, 6]));

//* Big-O = O(mn)


