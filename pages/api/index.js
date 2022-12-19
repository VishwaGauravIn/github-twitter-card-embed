import { Card } from "../../components/Card";
import {
  configureUserContextTwitterApi,
  TweetsApi,
  SearchApi,
  UsersApi,
} from "twimo-v2";

export default async function getStaticProps(req, res) {
  const consumer = {
    key: process.env.NEXT_PUBLIC_ck,
    secret: process.env.NEXT_PUBLIC_cs,
  };
  const token = {
    key: process.env.NEXT_PUBLIC_tk,
    secret: process.env.NEXT_PUBLIC_ts,
  };
  const usersApi = configureUserContextTwitterApi(UsersApi, consumer, token);
  const tweetsApi = configureUserContextTwitterApi(TweetsApi, consumer, token);
  // Getting UserID from Username
  usersApi
    .findUsersByUsername({
      usernames: [req.query.username],
    })
    .then((r) => {
      // ID = r.data.data[0].id
      // Profile Name = r.data.data[0].name
      tweetsApi
        .usersIdTweets({
          id: r.data.data[0].id,
          maxResults: 5,
          exclude: ["replies", "retweets"],
          tweetFields: [
            "created_at",
            "public_metrics",
            "attachments",
            "text",
            "entities",
          ],
        })
        .then((response) => {
          res.setHeader("Cache-Control", `no-cache`);
          res.setHeader("Content-Type", "image/svg+xml");
          res.send(
            Card(
              r.data.data[0].username,
              r.data.data[0].name,
              response.data.data[0].text,
              response.data.data[0].public_metrics.like_count,
              response.data.data[0].public_metrics.reply_count,
              response.data.data[0].public_metrics.retweet_count,
              req.query.theme
            )
          );
        });
    });
}

// Sample Url : http://localhost:3000/api?username=VishwaGauravIn
