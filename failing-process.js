console.log("==> Hello, I'm a process that will start for a few seconds and then fail.");
console.log("==> This line of output and the prior 'Hello' one should not be lost when you reload the deploy log or service logs.")
setTimeout(() => {
  console.log("==> Exiting with an exit code of 1, which is an error.");
  process.exitCode = 1;
})