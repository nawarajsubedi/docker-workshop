const express = require('express');
const request = require('request');
require('dotenv').config();

const app = express();
const port = 6002;
const restApiUrl = process.env.API_URL;

app.get('/', function (req, res) {
    console.log('url', restApiUrl);
    request(
        restApiUrl + '/api', {
        method: "GET",
    },
        function (err, resp, body) {
            if (!err && resp.statusCode === 200) {
                console.log('api call success', body)
                var objData = JSON.parse(body);
                var responseString = `<table border="1"><tr><td>Name</td><td>Email</td><td>Created At</td><td>Updated At</td></tr>`;

                for (var i = 0; i < objData.length; i++)
                    responseString = responseString +
                        `<tr><td>${objData[i].name}</td><td>${objData[i].email}</td><td>${new Date(objData[i].createdAt).toDateString()}</td><td>${new Date(objData[i].updatedAt).toDateString()}</td></tr>`;

                responseString = responseString + `</table>`;
                res.send(responseString);

            } else {
                console.log('error', err);
            }
        });
});
const HOST = '0.0.0.0';
app.listen(port);

console.log(`Running front-end on http://${HOST}:${port}`);
