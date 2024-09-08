import axios from "axios";
import { Card } from "../../components/Card";
import { convertToUnicode, parseDateString } from "../../utils";
const cheerio = require("cheerio");

export default async function getStaticProps(req, res) {
  //   {
  //     fullname: 'Vishwa Gaurav',
  //     username: '@VishwaGauravIn',
  //     tweetDate: 'Sep 6, 2024 · 5:00 PM UTC',
  //     tweetBody: 'Just realised how tricky it is to log out from twitter app',
  //     tweetStats: { comment: 0, retweet: 0, quote: 0, heart: 0 }
  //   }

  await getFirstTimelineItem(req.query.username).then((response) => {
    const date = new Date(parseDateString(response.tweetDate));
    res.setHeader("Cache-Control", "max-age=14400"); // Cache for 4 hours
    res.setHeader("Content-Type", "image/svg+xml");
    res.send(
      Card(
        response.username,
        response.fullname,
        convertToUnicode(response.tweetBody),
        date.toLocaleTimeString([], {
          hour: "numeric",
          minute: "numeric",
        }),
        date.toLocaleDateString([], {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        response.tweetStats.heart,
        response.tweetStats.comment,
        response.tweetStats.retweet,
        req.query.theme,
        req.query.response,
        req.query.border,
        req.query.time,
        req.query.icon
      )
    );
  });
}

async function getFirstTimelineItem(username) {
  const usrname = username;
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_apiHost + "/" + usrname
    );
    const html = response.data;

    const $ = cheerio.load(html);

    // Select the first timeline item
    const timelineItem = $(".timeline-item").first();

    // Extract the necessary details
    const fullname = timelineItem.find(".fullname").text().trim();
    const username = timelineItem.find(".username").text().trim();
    const tweetDate = timelineItem.find(".tweet-date a").attr("title");
    const tweetBody = timelineItem.find(".tweet-content").text().trim();

    console.log(timelineItem.find(".tweet-stats a").eq(0).text());

    // Extract tweet stats
    const tweetStats = {
      comment: timelineItem.find(".tweet-stats a").eq(0).text().trim(),
      retweet: timelineItem.find(".tweet-stats a").eq(1).text().trim(),
      quote: timelineItem.find(".tweet-stats a").eq(2).text().trim(),
      heart: timelineItem.find(".tweet-stats a").eq(3).text().trim(),
    };

    // Return or log the extracted data
    return {
      fullname,
      username,
      tweetDate,
      tweetBody,
      tweetStats,
    };
  } catch (error) {
    console.error("Error fetching or parsing the data:", error);
  }
}

// Sample Url : http://localhost:3000/api?username=VishwaGauravIn&theme=dracula&response=true&border=true&time=true&icon=badge
/*
QUERIES
query name - data type - values - default value
theme - string - theme name - jolly
response - boolean - true/false
border - boolean - true/false
time - boolean - true/false
icons - string - icon name
*/
