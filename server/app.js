
const dialogflow = require('@google-cloud/dialogflow');
const uuid = require('uuid');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 5000;

const sessionId = uuid.v4();

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.post('/website', (req, res) => {
    runSample(req.body.MSG).then(data => {
        res.send({ Reply: data })
    })
})

/**
 * Send a query to the dialogflow agent, and return the query result.
 * @param {string} projectId The project to be used
 */
async function runSample(msg, projectId = 'gsmareana-q-a-vfyy') {
    // Create a new session
    const sessionClient = new dialogflow.SessionsClient({
        keyFilename: "D:\\Project\\Chatbot & QA\\GSMareana QA\\server\\gsmareana-key.json"
    });
    const sessionPath = sessionClient.projectAgentSessionPath(
        projectId,
        sessionId
    );

    // The text query request.
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                // The query to send to the dialogflow agent
                text: msg,
                // The language used by the client (en-US)
                languageCode: 'en-US',
            },
        },
    };

    // Send request and log result
    const responses = await sessionClient.detectIntent(request);
    console.log('Detected intent');
    const result = responses[0].queryResult;
    const query = result.intent.displayName;
    console.log(`  Query: ${result.queryText}`);
    if (result.intent) {
        console.log(`  Intent: ${query}`);
    } else {
        console.log('  No intent matched.');
    }
    // if (query.includes("Image") || query.includes("image") || query.includes("Look") || query.includes("look") || query.includes("Link") || query.includes("link")) {
    //     console.log(`  Response: ${result.fulfillmentText}`)
    // } else {
    //     console.log("  Response: Response Fullfilled");
    // }
    return result.fulfillmentText;
}

app.listen(port, () => {
    console.log("Running on port " + port)
})

