const quotes = [
  {
    quote: "\"오늘은 평범한 날이지만 미래로 통하는 가장 소중한 시간이야.\"",
    author: "-업",
  },
  {
    quote: "\"사랑이란, 다른 사람이 원하는 걸 네가 원하는 것보다 우선순위에 놓는 거야.\"",
    author: "-겨울왕국",
  },
  {
    quote: "\"누구나 무엇이든 될 수 있으니까 그 누구도 내 꿈에 대해서 이러쿵저러쿵 못해\"",
    author: "-주토피아",
  },
  {
    quote: "\"삶은 실수투성이야 우리는 늘 실수를 하곤 하지\"",
    author: "-주토피아",
  },
  {
    quote: "\"누군가를 사랑하고자 한다면 너 자신을 먼저 사랑해\"",
    author: "-미녀와 야수",
  },
  {
    quote: "\"역경을 이겨내고 핀 꽃이 제일 아름다운 꽃이니라\"",
    author: "-뮬란",
  },
  {
    quote: "\"상실감에 가장 좋은 치료법은 위로와 포옹이야.\"",
    author: "-빅히어로",
  },
  {
    quote: "\"난 내가 원하는 삶을 살거야\"",
    author: "-메리다와 마법의 숲",
  },
  {
    quote: "\"네 잘못이 아니야 상처는 아물고 길이 열릴 거야\"",
    author: "-모아나",
  },
  {
    quote: "\"가장 중요한 건 눈에 보이지 않아. 마음으로 보는 거야.\"",
    author: "-어린왕자",
  },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
