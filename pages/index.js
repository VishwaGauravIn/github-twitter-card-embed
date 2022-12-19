import axios from "axios";
import Head from "next/head";
import { useEffect } from "react";

export default function Home() {
  useEffect(()=>{
    axios
      .get(
        `/api/getUserIdByUsername?username=VishwaGauravIn`
      )
      .then((respond) => {
        axios
          .get(
            `/api/getLastTweet?id=${respond.data.data[0].id}`
          )
          .then((response) => {
            console.log(response.data);
          });
      });
  },[])
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className="flex justify-center items-center w-screen h-screen bg-zinc-800">
        123
      </body>
    </>
  );
}
