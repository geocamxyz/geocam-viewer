export const log = function() {
  const [label,file] = arguments;
  if (/\/1\/601-tinified/.test(file)) {
  console.log(...arguments)
  }
}