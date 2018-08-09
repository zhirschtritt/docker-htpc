const serve = require('serve')
const ngrok = require('ngrok')
const {promisify} = require('util')
const path = require('path')

async function createServer() {
 
  const server = await serve(path.join(__dirname, 'data'), {
    port: 5001,
    ignore: ['node_modules'],
    silent: true,
    clipless: true
  })

  console.log(server)
  
  const url = await ngrok.connect({
  	proto: 'http',
  	addr: 5001
  });
  
  console.log(url);
  

}


createServer()