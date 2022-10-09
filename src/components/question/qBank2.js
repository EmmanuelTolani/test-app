const qBank2 = [
    /// Category: General Knowledge
    {
        quizName: 'General Knowledge',
        length: 10,
        difficulty: 'Medium'
    },
    {
        question:
        "What is the fastest land animal?",
        answers: ["cheetah", "giraffe", "tiger", "wolf"],
        correct: "cheetah",
        questionId: "09909229"
    },
    {
        question:
        "Which of these is the shortest time span?",
        answers: ["century", "decade", "a dozen years", "millennium"],
        correct: "decade",
        questionId: "093909"
    },
    {
        question:
        "Which of these is the shortest measurement of length?",
        answers: ["centimetre", "metre", "inch", "gramme"],
        correct: "centimetre",
        questionId: "009039"
    },
    {
        question:
        "What is the shortest sentence in the English language?",
        answers: ["I am", "Go!", "A.", "None of these"],
        correct: "Go!",
        questionId: "090089"
    },
    {
        question:
        "Of the following, who was the shortest U.S. president?",
        answers: ["William Henry Harrison", "James Madison", "Abraham Lincoln", "George Washington"],
        correct: "James Madison",
        questionId: "01010101"
    },
    {
        question:
        "Which of these things most likely takes up the least time?",
        answers: ["Reading a novel with at least 300 pages", "Watching a movie", "Driving from Los Angeles to New York", "Taking a shower"],
        correct: "Taking a shower",
        questionId: "092299"
    },
    {
        question:
        "What is the square root of 144?",
        answers: ["14", "12", "100", "1"],
        correct: "12",
        questionId: "099099"
    },
    {
        question:
        "What is the largest ocean on earth?",
        answers: ["Atlantic", "Arctic", "Indian", "Pacific"],
        correct: "Pacific",
        questionId: "222099"
    },
    {
        question:
        "Who is most often credited with the discovery that lightning was a form of electricity, using a key?",
        answers: ["Isaac Newton", "Albert Einstein",
        "Benjamin Franklin",
        "Sir Thomas Moore",],
        correct: "Benjamin Franklin",
        questionId: "2222099"
    },
    {
        question:
        "The Great Lakes lie along the Canada/US border. How many are they?",
        answers: ["4", "5", "7", "3"],
        correct: "5",
        questionId: "09922099"
    } 
    ];
    
    // n = 5 to export 5 question
    export default (n = 10) =>
    Promise.resolve(qBank2);
    