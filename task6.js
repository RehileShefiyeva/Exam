let a = [5,8,9],
  newArray= []

for (let i = 1; i <= 100; i++) {
  if (a.indexOf(i) === -1) {
    newArray.push(i)
  }
}
console.log(newArray);