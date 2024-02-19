import React from "react";

export function generateRandomText() {
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  let randomText = "";
  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomText += characters[randomIndex];
  }
  return randomText;
}
