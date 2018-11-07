const renderHTML = (message) => {
  return `<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=PT+Sans+Narrow" />
        <style>
            .container {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .ipsum {
                max-width: 80%;
                font-size: 26px;
                font-family: 'PT Sans Narrow', sans-serif;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="ipsum">
                ${message}
            </div>
        </div>
    </body>
  </html>`;
};

module.exports = {
  renderHTML
};
