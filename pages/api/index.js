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
          const date = new Date(response.data.data[0].created_at);
          res.setHeader("Cache-Control", `no-cache`);
          res.setHeader("Content-Type", "image/svg+xml");
          res.send(
            Card(
              r.data.data[0].username,
              r.data.data[0].name,
              response.data.data[0].text,
              date.toLocaleTimeString([], {
                hour: "numeric",
                minute: "numeric",
              }),
              date.toLocaleDateString([], {
                year: "numeric",
                month: "long",
                day: "numeric",
              }),
              response.data.data[0].public_metrics.like_count,
              response.data.data[0].public_metrics.reply_count,
              response.data.data[0].public_metrics.retweet_count,
              req.query.theme,
              req.query.response,
              req.query.border,
              req.query.time,
              icons[req.query.icon]
            )
          );
        });
    });
}

// Sample Url : http://localhost:3000/api?username=VishwaGauravIn

const icons = {
  DEFAULT:
    "M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z",
  thunder:
    "M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z",
  sun: "M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z",
  beaker:
    "M10.5 3.798v5.02a3 3 0 01-.879 2.121l-2.377 2.377a9.845 9.845 0 015.091 1.013 8.315 8.315 0 005.713.636l.285-.071-3.954-3.955a3 3 0 01-.879-2.121v-5.02a23.614 23.614 0 00-3 0zm4.5.138a.75.75 0 00.093-1.495A24.837 24.837 0 0012 2.25a25.048 25.048 0 00-3.093.191A.75.75 0 009 3.936v4.882a1.5 1.5 0 01-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0115 8.818V3.936z",
};
