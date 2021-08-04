const sum = (...args) => {
  let counter = 0;
  for(let i = 0; i < args.length; i += 1) {
    counter += args[i];
  }

  return counter;
};


module.exports = {
  sum
}