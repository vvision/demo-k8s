import express from 'express';

const app = express();
const port = process.env.PORT || 3000;
const color = process.env.COLOR || 'white';
const podName = process.env.POD_NAME || 'unknown';

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="utf-8">
            <title>demo-k8s-app-${color}</title>
            <style>
                body {
                    background-color: ${color};
                }
            </style>
          </head>
          <body>
            <div>
                Pod name is: ${podName}
            </div>
          </body>
        </html>
    `);
})

app.listen(port, () => {
    console.log(`demo-k8s app listening on port ${port}`);
})
