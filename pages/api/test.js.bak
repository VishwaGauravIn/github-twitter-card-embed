import { Card } from "../../components/Card";

export default async function getStaticProps(req, res) {
  const date = new Date();
  res.setHeader("Cache-Control", `no-cache`);
  res.setHeader("Content-Type", "image/svg+xml");
  res.send(
    Card(
      "VishwaGauravIn",
      "Vishwa Gaurav",
      "The Best Realtime Tweet embed with 60+ awesome themes. Get a Verified badge, Showcase your Tweet on Website, GitHub ReadMe or anywhere else, Download your tweets as image.",
      date.toLocaleTimeString([], {
        hour: "numeric",
        minute: "numeric",
      }),
      date.toLocaleDateString([], {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      500000,
      125100,
      375896,
      req.query.theme,
      req.query.response,
      req.query.border,
      req.query.time,
      req.query.icon
    )
  );
}

// Sample Url : http://localhost:3000/api?username=VishwaGauravIn&theme=dracula&response=true&border=true&time=true&icon=badge
/*
QUERIES
query name - data type - values - default value
theme - string - theme name - jolly
response - boolean - true/false
border - boolean - true/false
time - boolean - true/false
icon - string - icon name
*/
