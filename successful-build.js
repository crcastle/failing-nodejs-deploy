console.log('==> This is some output during a successful build step.');
console.log("==> I'm going to sleep for a few seconds and then exit successfully.")
setTimeout(() => {
  console.log("==> Ok, exiting successfully (with status 0)...");
  process.exitCode = 0;
}, 3000);