const questions = {
    Science: [
        {
            question: 'What is the capital of France?',
            options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
            answer: 'Paris'
        },
        {
            question: 'What is the chemical symbol for water?',
            options: ['H2O', 'CO2', 'O2', 'N2'],
            answer: 'H2O'
        },
        {
            question: 'What is the largest planet in our solar system?',
            options: ['Mars', 'Jupiter', 'Venus', 'Saturn'],
            answer: 'Jupiter'
        },
        {
            question: 'What is the largest organ in the human body?',
            options: ['Heart', 'Liver', 'Skin', 'Lungs'],
            answer: 'Skin'
        },
        {
            question: 'Who developed the theory of relativity?',
            options: ['Isaac Newton', 'Albert Einstein', 'Niels Bohr', 'Galileo Galilei'],
            answer: 'Albert Einstein'
        },
        {
            question: 'What is the chemical formula for the ozone layer?',
            options: ['O3', 'CO2', 'H2O', 'NO2'],
            answer: 'O3'
        },
        {
            question: "Which gas is responsible for the Earth's greenhouse effect?",
            options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Methane'],
            answer: 'Carbon Dioxide'
        },
        {
            question: 'What is the smallest unit of matter?',
            options: ['Atom', 'Molecule', 'Proton', 'Neutron'],
            answer: 'Atom'
        },
        {
            question: 'Who is known as the father of modern physics?',
            options: ['Isaac Newton', 'Niels Bohr', 'Galileo Galilei', 'Albert Einstein'],
            answer: 'Albert Einstein'
        },
        {
            question: 'What is the process by which plants make their own food using sunlight?',
            options: ['Respiration', 'Photosynthesis', 'Fermentation', 'Transpiration'],
            answer: 'Photosynthesis'
        }
    ],
    History: [
        {
            question: 'Who was the first President of the United States?',
            options: ['John Adams', 'Thomas Jefferson', 'George Washington', 'James Madison'],
            answer: 'George Washington'
        },
        {
            question: 'In which year did World War II end?',
            options: ['1943', '1944', '1945', '1946'],
            answer: '1945'
        },
        {
            question: 'Who wrote the "Declaration of Independence"?',
            options: ['John Adams', 'Thomas Jefferson', 'James Madison', 'Benjamin Franklin'],
            answer: 'Thomas Jefferson'
        },
        {
            question: 'Which ancient civilization built the pyramids in Giza, Egypt?',
            options: ['Mesopotamians', 'Greeks', 'Romans', 'Ancient Egyptians'],
            answer: 'Ancient Egyptians'
        },
        {
            question: 'Who was the famous queen of ancient Egypt known for her relationship with Mark Antony and Julius Caesar?',
            options: ['Nefertiti', 'Hatshepsut', 'Cleopatra', 'Isis'],
            answer: 'Cleopatra'
        },
        {
            question: 'In which century did the Renaissance take place?',
            options: ['14th', '15th', '16th', '17th'],
            answer: '15th'
        },
        {
            question: 'Who was the first emperor of China, known for the Terracotta Army?',
            options: ['Emperor Wu', 'Emperor Qin Shi Huang', 'Emperor Han Wudi', 'Emperor Tang Taizong'],
            answer: 'Emperor Qin Shi Huang'
        },
        {
            question: 'Which event marked the start of World War I?',
            options: ['Assassination of Archduke Franz Ferdinand', 'The sinking of the Lusitania', 'Treaty of Versailles', 'Battle of Jutland'],
            answer: 'Assassination of Archduke Franz Ferdinand'
        },
        {
            question: 'Who was the first woman to win a Nobel Prize, and in what field?',
            options: ['Marie Curie - Physics', 'Rosalind Franklin - Chemistry', 'Dorothy Crowfoot Hodgkin - Medicine', 'Emmy Noether - Mathematics'],
            answer: 'Marie Curie - Physics'
        },
        {
            question: 'Which U.S. president signed the Emancipation Proclamation?',
            options: ['Abraham Lincoln', 'Andrew Johnson', 'Ulysses S. Grant', 'James Buchanan'],
            answer: 'Abraham Lincoln'
        }
    ],
    Sports: [
        {
            question: 'Which country won the FIFA World Cup in 2018?',
            options: ['Germany', 'Argentina', 'France', 'Brazil'],
            answer: 'France'
        },
        {
            question: 'In which sport would you perform a slam dunk?',
            options: ['Soccer', 'Basketball', 'Tennis', 'Golf'],
            answer: 'Basketball'
        },
        {
            question: 'Who is often called the "G.O.A.T" in tennis?',
            options: ['Serena Williams', 'Rafael Nadal', 'Roger Federer', 'Novak Djokovic'],
            answer: 'Roger Federer'
        },
        {
            question: 'Which city hosted the 2016 Summer Olympics?',
            options: ['Rio de Janeiro', 'London', 'Beijing', 'Tokyo'],
            answer: 'Rio de Janeiro'
        },
        {
            question: 'In which sport is the term "hat-trick" commonly used?',
            options: ['Football (Soccer)', 'Cricket', 'Hockey', 'Basketball'],
            answer: 'Cricket'
        },
        {
            question: 'Who holds the record for the most Grand Slam singles titles in tennis?',
            options: ['Rafael Nadal', 'Serena Williams', 'Roger Federer', 'Novak Djokovic'],
            answer: 'Margaret Court'
        },
        {
            question: 'Which country has won the most Olympic gold medals in the history of the Summer Games?',
            options: ['United States', 'China', 'Russia', 'Germany'],
            answer: 'United States'
        },
        {
            question: 'In which year did the first modern Olympic Games take place?',
            options: ['1896', '1900', '1920', '1936'],
            answer: '1896'
        },
        {
            question: 'Who is the all-time leading scorer in the NBA?',
            options: ['LeBron James', 'Kobe Bryant', 'Kareem Abdul-Jabbar', 'Michael Jordan'],
            answer: 'Kareem Abdul-Jabbar'
        },
        {
            question: 'Which country won the most recent FIFA World Cup (as of 2024)?',
            options: ['Brazil', 'Germany', 'France', 'Argentina'],
            answer: 'Argentina'
        }
    ],

    Movies: [
        {
            question: 'Who directed the science fiction film "Blade Runner" (1982)?',
            options: ['Steven Spielberg', 'Ridley Scott', 'Christopher Nolan', 'James Cameron'],
            answer: 'Ridley Scott'
        },
        {
            question: 'In which year was the classic film "Casablanca" released?',
            options: ['1942', '1946', '1954', '1948'],
            answer: '1942'
        },
        {
            question: 'Which movie won the Academy Award for Best Picture in 2019?',
            options: ['La La Land', 'The Shape of Water', '1917', 'Green Book'],
            answer: '1917'
        },
        {
            question: 'Who directed the fantasy film "The Lord of the Rings: The Fellowship of the Ring"?',
            options: ['Peter Jackson', 'Christopher Nolan', 'Steven Spielberg', 'George Lucas'],
            answer: 'Peter Jackson'
        },
        {
            question: 'Which actor played the character of Tony Stark/Iron Man in the Marvel Cinematic Universe?',
            options: ['Chris Hemsworth', 'Chris Evans', 'Robert Downey Jr.', 'Mark Ruffalo'],
            answer: 'Robert Downey Jr.'
        },
        {
            question: 'In which year was the movie "Forrest Gump" released?',
            options: ['1992', '1994', '1996', '1998'],
            answer: '1994'
        },
        {
            question: 'Who won the Academy Award for Best Actress for her role in "La La Land"?',
            options: ['Meryl Streep', 'Emma Stone', 'Cate Blanchett', 'Jennifer Lawrence'],
            answer: 'Emma Stone'
        },
        {
            question: 'Which film is often considered the first feature-length animated movie?',
            options: ['Snow White and the Seven Dwarfs', 'Cinderella', 'Beauty and the Beast', 'The Little Mermaid'],
            answer: 'Snow White and the Seven Dwarfs'
        },
        {
            question: 'Who directed the film "Inception"?',
            options: ['Christopher Nolan', 'Quentin Tarantino', 'Martin Scorsese', 'David Fincher'],
            answer: 'Christopher Nolan'
        },
        {
            question: 'Which actor played the lead role in the movie "The Shawshank Redemption"?',
            options: ['Tom Hanks', 'Morgan Freeman', 'Brad Pitt', 'Tim Robbins'],
            answer: 'Tim Robbins'
        }
    ],
    Random: [
        {
            question: 'What is the capital of Brazil?',
            options: ['Buenos Aires', 'Lima', 'Brasília', 'Santiago'],
            answer: 'Brasília'
        },
        {
            question: 'Who wrote the play "Romeo and Juliet"?',
            options: ['William Shakespeare', 'Jane Austen', 'Charles Dickens', 'Leo Tolstoy'],
            answer: 'William Shakespeare'
        },
        {
            question: 'Which river is the longest in the world?',
            options: ['Amazon River', 'Nile River', 'Yangtze River', 'Mississippi River'],
            answer: 'Nile River'
        },
        {
            question: 'What is the currency of South Africa?',
            options: ['Rand', 'Peso', 'Dinar', 'Yuan'],
            answer: 'Rand'
        },
        {
            question: 'Which country is known as the "Land of the Rising Sun"?',
            options: ['China', 'Japan', 'South Korea', 'Vietnam'],
            answer: 'Japan'
        },
        {
            question: 'Who painted the Mona Lisa?',
            options: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Claude Monet'],
            answer: 'Leonardo da Vinci'
        },
        {
            question: 'What is the largest ocean on Earth?',
            options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
            answer: 'Pacific Ocean'
        }
    ],
    Music: [
        {
            question: 'Who is known as the "King of Pop"?',
            options: ['Elvis Presley', 'Michael Jackson', 'Prince', 'David Bowie'],
            answer: 'Michael Jackson'
        },
        {
            question: 'Which rock band released the album "The Dark Side of the Moon"?',
            options: ['The Rolling Stones', 'Led Zeppelin', 'Pink Floyd', 'The Who'],
            answer: 'Pink Floyd'
        },
        {
            question: 'Who was the lead guitarist of the band Queen?',
            options: ['Brian May', 'Jimmy Page', 'Eric Clapton', 'Eddie Van Halen'],
            answer: 'Brian May'
        },
        {
            question: 'Which pop artist is known for her album "1989"?',
            options: ['Adele', 'Taylor Swift', 'Katy Perry', 'Lady Gaga'],
            answer: 'Taylor Swift'
        },
        {
            question: 'In which year did the Beatles release their debut album "Please Please Me"?',
            options: ['1962', '1964', '1967', '1970'],
            answer: '1963'
        },
        {
            question: 'Who is the lead singer of the band U2?',
            options: ['Bono', 'Chris Martin', 'Eddie Vedder', 'Thom Yorke'],
            answer: 'Bono'
        },
        {
            question: 'Which jazz legend is known for his contributions to the trumpet and improvisation?',
            options: ['Miles Davis', 'Louis Armstrong', 'Dizzy Gillespie', 'Charlie Parker'],
            answer: 'Miles Davis'
        }
    ],
    Technology: [
        {
            question: 'What does the acronym "HTML" stand for?',
            options: ['Hyperlink and Text Markup Language', 'Hyper Transfer Markup Language', 'HyperText Markup Language', 'High-Level Text Markup Language'],
            answer: 'HyperText Markup Language'
        },
        {
            question: 'Who is the CEO of Tesla, Inc.?',
            options: ['Jeff Bezos', 'Elon Musk', 'Tim Cook', 'Mark Zuckerberg'],
            answer: 'Elon Musk'
        },
        {
            question: 'What programming language is often used for building web applications?',
            options: ['Java', 'Python', 'Ruby', 'JavaScript'],
            answer: 'JavaScript'
        },
        {
            question: 'In computer science, what does "API" stand for?',
            options: ['Advanced Programming Interface', 'Application Programming Interface', 'Automated Processing Interface', 'Advanced Protocol Interface'],
            answer: 'Application Programming Interface'
        },
        {
            question: 'Who is known as the co-founder of Apple Inc.?',
            options: ['Steve Jobs', 'Bill Gates', 'Mark Zuckerberg', 'Larry Page'],
            answer: 'Steve Jobs'
        },
        {
            question: 'What is the purpose of a VPN (Virtual Private Network)?',
            options: ['Securely accessing private networks over the internet', 'Creating virtual reality environments', 'Voice over Internet Protocol', 'Virtualized Personal Network'],
            answer: 'Securely accessing private networks over the internet'
        },
        {
            question: 'Which company developed the programming language Python?',
            options: ['Microsoft', 'Google', 'Facebook', 'Mozilla'],
            answer: 'Facebook'
        }
    ], Geography: [
        {
            question: 'Which country is the largest by land area?',
            options: ['Russia', 'Canada', 'China', 'United States'],
            answer: 'Russia'
        },
        {
            question: 'What is the capital of South Africa?',
            options: ['Johannesburg', 'Durban', 'Cape Town', 'Pretoria'],
            answer: 'Pretoria'
        },
        {
            question: 'Which mountain range separates Europe from Asia?',
            options: ['Rocky Mountains', 'Himalayas', 'Andes', 'Ural Mountains'],
            answer: 'Ural Mountains'
        },
        {
            question: 'What is the largest lake in Africa?',
            options: ['Lake Victoria', 'Lake Tanganyika', 'Lake Malawi', 'Lake Chad'],
            answer: 'Lake Victoria'
        },
        {
            question: 'Which desert is the largest hot desert in the world?',
            options: ['Sahara Desert', 'Arabian Desert', 'Gobi Desert', 'Karakum Desert'],
            answer: 'Sahara Desert'
        },
        {
            question: 'In which ocean is the Mariana Trench located?',
            options: ['Atlantic Ocean', 'Indian Ocean', 'Southern Ocean', 'Pacific Ocean'],
            answer: 'Pacific Ocean'
        },
        {
            question: 'Which river is the longest in Asia?',
            options: ['Ganges', 'Mekong', 'Yangtze', 'Indus'],
            answer: 'Yangtze'
        }
    ]
};

let currentCategory = '';
let currentQuestionIndex = 0;
let score = 0;

function loadCategory(category) {
    currentCategory = category;
    currentQuestionIndex = 0;
    score = 0;

    document.getElementById('category-buttons').style.display = 'none';
    document.getElementById('quiz-content').style.display = 'block';

    loadQuestion();
}

function loadQuestion() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = '';

    const currentQuestion = questions[currentCategory][currentQuestionIndex];
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');
    questionElement.innerHTML = `<p>${currentQuestion.question}</p>`;

    // Adding radio buttons for each option
    currentQuestion.options.forEach((option, index) => {
        questionElement.innerHTML += `
            <input type="radio" name="option" value="${option}" id="option${index}">
            <label for="option${index}">${option}</label><br>
        `;
    });

    questionContainer.appendChild(questionElement);
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');

    if (selectedOption) {
        const userAnswer = selectedOption.value.toLowerCase();
        const correctAnswer = questions[currentCategory][currentQuestionIndex].answer.toLowerCase();

        if (userAnswer === correctAnswer) {
            score++;
        }

        currentQuestionIndex++;

        if (currentQuestionIndex < questions[currentCategory].length) {
            loadQuestion();
        } else {
            showScore();
            document.getElementById('next-btn').style.display = 'none';
            document.getElementById('try-again-btn').style.display = 'block';

            // Clear the last question container
            const questionContainer = document.getElementById('question-container');
            questionContainer.innerHTML = '';
        }
    } else {
        alert('Please select an option before moving to the next question.');
    }
}

function tryAgain() {
    document.getElementById('next-btn').style.display = 'block';
    document.getElementById('try-again-btn').style.display = 'none';

    currentCategory = ''; // Reset the current category
    currentQuestionIndex = 0;

    // Reset the score calculation
    score = 0;

    // Clear the score display
    document.getElementById('score-container').innerHTML = '';

    document.getElementById('category-buttons').style.display = 'block';
    document.getElementById('quiz-content').style.display = 'none';

}



function showScore() {
    const scoreContainer = document.getElementById('score-container');
    scoreContainer.innerHTML = `<h2>Your Score: ${score}/${questions[currentCategory].length}</h2>`;
    scoreContainer.classList.add('score-animation');

}