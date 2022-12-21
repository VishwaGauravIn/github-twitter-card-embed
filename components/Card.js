import React from "react";
import themes from "../themes/themes";
const { format } = require("number-prettier");

export function Card(
  username,
  name,
  text,
  localDate,
  localTime,
  likes,
  comments,
  retweets,
  theme = "dracula",
  response = "true",
  border = "true",
  time = "true"
) {
  // setting random counts
  // likes = Math.floor(Math.random() * (100000 - 100 + 1)) + 100;
  // retweets = Math.floor(Math.random() * (likes - 30 + 1)) + 30;
  // comments = Math.floor(Math.random() * (retweets - 50 + 1)) + 100;

  // setting initial height to 108 px
  let height = 88;
  if (text !== undefined) {
    let tl = text.length;
    // if only one line exist then we add 36px to height
    if (tl < 60) {
      height = 109 + 26;
    }
    // if multiple line then we divide the charcount/length to get the number of lines used to calculate the height
    if (tl > 59) {
      height = 109 + (tl / 60).toFixed(1) * 26;
    }
    // if date and Time is visible
    if (time === "true") {
      height += 38;
    }
    // if response is visible
    if (response === "true") {
      height += 20;
    }
    // if response is visible
    if (border === "true") {
      height += 2;
    }
  }
  return `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width="550px"
    height="${height}px"
  >
  <foreignObject width="550px" height="${height}px">
  <div xmlns="http://www.w3.org/1999/xhtml">
  <style>
.card {
  width: 500px;
  background-color: #${themes[theme].bg_color};
  border-radius: 10px;
  padding: 16px;
  font-family: "Open Sans", sans-serif;
  color: #${themes[theme].text_color};
  border-color: #E4E2E2;
  border-width: ${border === "true" ? "0.5px" : "0px"};
  border-style: solid;
}
.card-header {
  display: flex;
  position: relative;
}
.user-info {
  margin-left: 8px;
}
.user-image {
  width: 40x;
  height: 40px;
  border-radius: 9999px;
  border-style: solid;
  border-width: 2px;
  color: #${themes[theme].title_color}
}
.user {
  font-size: 22px;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0;
  color: #${themes[theme].title_color};
}
.username {
  font-size: 16px;
  margin-left: 2px;
  color: #${themes[theme].icon_color};
  margin-top: 0;
  margin-bottom: 0;
}
.twitter-icon {
  position: absolute;
  right: 4px;
  top: 10px;
  width: 36px;
  fill: #${themes[theme].icon_color};
}
.card-body {
    max-width: 100%;
    font-size: 18px;
    margin-top: 12px;
    margin-bottom: 12px;
    padding-left: 24px;
    line-height: 24px;
    color: #${themes[theme].text_color};
}
.response{
    fill: #${themes[theme].icon_color};
    color: #${themes[theme].icon_color};
    margin-left: 24px;
    column-gap: 25px;
    display: ${response === "true" ? "flex" : "none"};
    opacity: 0.8;
    margin-top: 0;
    margin-bottom: 0;
    text-transform: uppercase
}
.response-type{
    display: flex;
    margin-top: 0;
    margin-bottom: 0;
}
.response-icon{
    width: 24px;
    margin-right: 4px;
    margin-top: -4px;
    margin-bottom: 0;
    fill: #${themes[theme].icon_color};
}
.time{
  display: flex;
  padding-left: 24px;
  opacity: 0.7;
  display: ${time === "true" ? "flex" : "none"};
}
  </style>
  <div class="card">
      <div class="card-header">
      <svg xmlns="http://www.w3.org/2000/svg" class="user-image" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
        <div class="user-info">
          <p class="user">${name}</p>
          <p class="username">@${username}</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="twitter-icon"
          viewBox="0 0 16 16"
        >
          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
        </svg>
      </div>
      <p class="card-body">
      ${text}
      </p>
      ${`
        <p class="time">
        ${localDate}
        · 
        ${localTime}
           · gtce.itsvg.in
        </p>
      `}
      <div class="response">
        <p class="response-type">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" class="response-icon">
            <g>
              <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
            </g>
          </svg>
          ${format(comments, 2)}
        </p>
        <p class="response-type">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" class="response-icon">
            <g>
              <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path>
            </g>
          </svg>
          ${format(retweets, 2)}
        </p>
        <p class="response-type">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" class="response-icon">
            <g>
              <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
            </g>
          </svg>
          ${format(likes, 2)}
        </p>
      </div>
    </div>
  </div>
  </foreignObject>
  </svg>`;
}
export default Card();
