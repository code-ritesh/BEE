const express = require("express")
const app = express();
const bullmq = require("bullmq")
const { Queue , Worker} = bullmq;
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


let prediction_queue = new Queue("predict" , {
    connection: {
    host: 'localhost',
    port: 6379,
  },
})


async function addJobs() {
  let job = await prediction_queue.add('myJobName', { foo: 'bar' });
  //await prediction_queue.add('myJobName', { qux: 'baz' });

  return job
}

// addJobs().then( (job) =>
//     console.log(job.id) );


const myWorker = new Worker('myqueue', async job => {
    console.log(job.id)
}, {
  connection: {
    host: 'localhost',
    port: 6379,
  },
});

app.listen(4000 , () =>{
    console.log("server started")
})