import * as React from 'react';

console.log("env=", process.env.NODE_ENV)
//
export default function Page() { 
    return (
    <html>
        <head>
            <title>welcome</title>
            {(process.env.NODE_ENV === "production") ? (
                <link href="/public/static/style.css" rel="stylesheet" /> 
            ): (
                <link href="/static/style.css" rel="stylesheet" /> 
            )}
            <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <div id="app"></div>
        {(process.env.NODE_ENV === "production") ? (
            <script type="module" src="/public/static/entry-client.js"></script>
        ): (
            <script type="module" src="/static/entry-client.js"></script>
        )}
    </html>
    );
}
/*
*/
