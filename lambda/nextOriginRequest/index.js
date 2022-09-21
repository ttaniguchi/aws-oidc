"use strict";

exports.handler = (event, context, callback) => {
  const request = event.Records[0].cf.request;
  request.uri = request.uri
    .replace(/^([a-z0-9\-\/]{1,})$/, "$1/index.html")
    .replaceAll("//", "/");
  request.uri = request.uri.replace(
    /\/[0-9]{1,}\/index.html$/,
    "/[number]/index.html"
  );

  callback(null, request);
};
