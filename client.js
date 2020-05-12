const request = require("request-promise");
let timer;
let count = 0;

async function post() {
  const options = {
    uri: "http://127.0.0.1:8160/post_electron",
  };

  count++;
  const startTime = new Date();
  await request.post(options, function (error, response, body) {});
  const endTime = new Date();

  const time = endTime - startTime;

  console.log(`count: ${count} elapsed: ${time}ms`);

  if (time > 100) {
    console.log("Delayed!");
    clearInterval(timer);
  }
}

async function run() {
  try {
    // post loop
    timer = setInterval(() => {
      post();
    }, 100);
  } catch (err) {
    console.log(err);
  }
}

run();
