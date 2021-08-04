const diff = (...args) => {
  let counter = args[0]

  for(let i = 1; i < args.length; i += 1) {
    counter -= args[i];
  }

  return counter;
}

module.exports = {
  diff
}