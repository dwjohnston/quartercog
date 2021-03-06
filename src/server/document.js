export default ({
    appString,
    js,
    styles,
    helmet,
    preloadedState,
    jss,
}) => `
    <!doctype html>
    <html>
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
        <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
        <style> 
            html {
                height: 100%;
            }
            
            body,
            #root {
                height: 100%;
                min-height: 100%;
            }
            body {
                overflow-y: scroll;
            }          
        </style> 
        ${styles}
        ${helmet.title.toString()}
    </head>
    <body>
   
      <div id="react-root">${appString}</div>
      <script>
      window.__PRELOADED_STATE__ = ${preloadedState}
    </script>
      ${js}
      <style id="jss-server-side">${jss}</style>

    </body>
    </html>
`;
