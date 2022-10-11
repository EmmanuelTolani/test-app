const qBank2 = [
  {
    quizName: "NBA",
    length: 10,
    difficulty: "Hard",
  },
  {
    question:
      "This shooting guard for the Miami Heat also played for Marquette in 2000 until 2003.He was a member of the Heat during all three of their NBA championships. He was named the Finals MVP in 2006. You've got to know who number 3 is on the Miami Heat - who is he?",
    answers: ["Chris Bosh", "Josh Richardson", "Udonis Haslem", "Dwayne Wade"],
    correct: "Dwayne Wade",
    questionId: "099092",
  },
  {
    question:
      "He was the first draft pick in 1969 for the Milwaukee Bucks. In 1971, they won the NBA Championship. He was traded to the LA Lakers in 1975 and while there they won five NBA Championships. His trademark shot was the sky-hook. He retired in 1989. His name is ______ .",
    answers: [
      "Kareem Abdul-Jabbar",
      "Julius Erving",
      "Magic Johnson",
      "Bob Pettit",
    ],
    correct: "Kareem Abdul-Jabbar",
    questionId: "0939094",
  },
  {
    question:
      "This basketball star left the University of North Carolina at Chapel Hill after his junior year as he was drafted by the Chicago Bulls. The Bulls won six championships while he was on their roster. His nick name would give his name away. Who is this all star?",
    answers: [
      " Allen Iverson",
      "Charles Barkley",
      "Michael Jordan",
      "Alonzo Mourning",
    ],
    correct: "Michael Jordan",
    questionId: "0090391",
  },
  {
    question:
      'This member of the Olympic gold medal, 1992 "Dream Team" was inducted as a unit to the Naismith Memorial Hall of Fame in 2010. The Chicago Bulls retired his jersey after he left both teams. The Bleacher Report named him the greatest defensive small forward ever in NBA history. Can you name this player?',
    answers: [
      "Dwayne Wade",
      "Michael Jordan",
      "Scottie Pippen",
      "Magic Johnson",
    ],
    correct: "Scottie Pippen",
    questionId: "0900891",
  },
  {
    question:
      "This great player started his career in the ABA. They won the championship in 1983. Who is the man that had a combined championship of three wins? ",
    answers: [
      "Julius Irving",
      "Charles Barkley",
      "Magic Johnson",
      "Lebron James",
    ],
    correct: "Julius Irving",
    questionId: "010101012",
  },
  {
    question:
      "This Michigan State University student was drafted number one by the Los Angeles Lakers in 1979. They went to the championship and won five times. He was the season MVP three times. Who is this magical player?",
    answers: [
      "Earvin Johnson",
      "Kareem Abdul-Jabbar",
      "Charles Barkley",
      "Julius Erving",
    ],
    correct: "Earvin Johnson",
    questionId: "0922993",
  },
  {
    question:
      "This center from the University of San Francisco, played on the Celtics from 1956 until 1969. He won 11 championships with his team and played on the All Star team 12 times. Can you name this all star?",
    answers: ["Bill Russell", "Bob Pettit", "Larry Foust", "Neil Johnston"],
    correct: "Bill Russell",
    questionId: "09909965",
  },
  {
    question:
      "This player was known as one of the best three point shooter in the NBA. He played for the Milwaukee Bucks, Seattle SuperSonics, Boston Celtics and the Miami Heat. His name is ____ .",
    answers: ["Chris Andersen", "Dwayne Wade", "Ray Allen", "Chris Bosh"],
    correct: "Ray Allen",
    questionId: "22209974",
  },
  {
    question:
      "This 7'1 NBA star was the first ever to score 31,419 points during his career. He began playing ball in 1958 with the Harlem Globetrotters. Who is this player that was nicknamed 'The Big Dipper?'",
    answers: [
      "Bill Russell",
      "Kareem Abdul-Jabbar",
      "Larry Bird",
      "Wilt Chamberlain",
    ],
    correct: "Wilt Chamberlain",
    questionId: "222209921",
  },
  {
    question:
      "#33 was known as 'The Hick from French Lick' Playing for the same team from 1979 until 1992, winning three NBA championships and three NBA MVP awards were all part of his outstanding achievements. Can you name this player?",
    answers: ["Shaquille O'Neal", "Jerry West", "Larry Bird", "Steve Kerr"],
    correct: "Larry Bird",
    questionId: "0992209993",
  },
];

// n = 5 to export 5 question
export default (n = 10) => Promise.resolve(qBank2);
