import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CookiesProvider } from "react-cookie";
import "./i18n/configs"
import witch_red from "./assets/witch_red.webp"
import mermaid_blue from "./assets/mermaid_blue.webp"
import priestess_green from "./assets/priestess_green.webp"
import swordman_red from "./assets/swordman_red.webp"
import thief_blue from "./assets/thief_blue.webp"
import hunter_green from "./assets/hunter_green.webp"
import dragon_red from "./assets/dragon_red.webp"
import kraken_blue from "./assets/kraken_blue.webp"
import ape_green from "./assets/ape_green.webp"
import robo_white from "./assets/robo_white.webp"
import reverse from "./assets/reverse.webp"
import wall from "./assets/wall.webp"
import slyme_rainbow from "./assets/slyme_rainbow.webp"

const images = [
  witch_red,
  mermaid_blue,
  priestess_green,
  swordman_red,
  thief_blue,
  hunter_green,
  dragon_red,
  kraken_blue,
  ape_green,
  robo_white,
  slyme_rainbow,
  reverse,
  wall,
]
images.map((image) => {
  const img = new Image()
  img.src = image
})
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </React.StrictMode>,
)
