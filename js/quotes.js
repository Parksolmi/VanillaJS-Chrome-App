const quotes = [
  {
    quote: "지옥길을 걷고 있다면 계속 나아가라. 왜 지옥에서 멈추려 하는가.",
    author: "윈스턴 처칠",
  },
  {
    quote: "나 자신에 대한 자신감을 잃으면, 온 세상이 나의 적이 됩니다.",
    author: "랄프 왈도 에머슨",
  },
  {
    quote: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아간다.",
    author: "앙드레 말로",
  },
  {
    quote: "망설이기 보단 차라리 실패를 선택하라",
    author: "버트런드 러셀",
  },
  {
    quote: "그때 나는 알았어. 우리는 그곳에서 괴로울거야. 하지만 그보다 많이 행복할거야.",
    author: "우리가 빛의 속도로 갈 수 없다면",
  },
  {
    quote: "직접 길을 찾지 않으면 언젠가는 길을 잃게 된다.",
    author: "나는 나로 살기로 했다.",
  },
  {
    quote: "행복은 깊이 느낄 줄 알고, 단순하고 자유롭게 생각할 줄 알고, 삶에 도전할 줄 알며, 남에게 필요한 삶이 될 줄 아는 능력으로부터 나온다.",
    author: "스톰 제임슨",
  },
  {
    quote: "탁월한 성취 뒤에는 언제나 끈덕지게 버티는 힘이 숨어있는 법. 버텨라. 끝내 버티면 이긴다.",
    author: "앤드류 매튜스",
  },
  {
    quote: "나는 날마다 모든 면에서 좋아지고 있다.",
    author: "에밀쿠에",
  },
  {
    quote: "가장 중요한 건 눈에 보이지 않아. 마음으로 보는 거야.",
    author: "어린왕자",
  },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
