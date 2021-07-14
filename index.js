const express = require('express')
const {WebhookClient} = require('dialogflow-fulfillment');

const app = express()
app.use(express.json())
const port = process.env.PORT || 3000

app.post('/dialogflow-fulfillment', (request, response) => {
    dialogflowFulfillment(request, response)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

const dialogflowFulfillment = (request, response) => {
    const agent = new WebhookClient({request, response})

    function sayHello(agent){
        agent.add("You deployed a fulfillment successfully."); 
    }

    let intentMap = new Map();
    intentMap.set("Place_Order", sayHello)
    agent.handleRequest(intentMap)

}
