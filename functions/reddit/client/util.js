const extractSubreddit = (url) => {
  if (!url) return url;

  const segment = url.split("/r/")[1];

  if (!segment || segment.indexOf("/") < 1) return "";

  return segment.split("/")[0];
};

module.exports = extractSubreddit;
