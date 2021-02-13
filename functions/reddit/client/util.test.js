const extractSubreddit = require("./util");

describe("reddit client", () => {
  it("correctly extracts subreddit from url", () => {
    const url =
      "https://old.reddit.com/r/apple/comments/lh8gag/gmail_ios_app_has_out_of_date_warning_after_2/";

    const subreddit = extractSubreddit(url);

    expect(subreddit).toEqual("apple");
  });

  it("returns an empty string when given an empty string", () => {
    const url = "";

    const subreddit = extractSubreddit(url);

    expect(subreddit).toEqual("");
  });

  it("returns an empty string when given an invalid url", () => {
    const url = "www.bbc.co.uk";

    const subreddit = extractSubreddit(url);

    expect(subreddit).toEqual("");
  });
});
