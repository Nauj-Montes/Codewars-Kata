function domainName(url) {
  var domain;
  const url_completed = [];
  var domain;

  const x = url.split(/[./]/);

  if (x[0] == "https:" || x[0] == "http:") {
    url_completed.push(url);
  } else {
    url_completed.push(`http://${url}`);
  }
  const y = url_completed[0].split(/[/.]/);

  if (y[2] == "www") {
    return y[3];
  }
  return y[2];
}
