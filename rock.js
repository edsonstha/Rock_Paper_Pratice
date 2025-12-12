  // --- 1. Score Object and Initialization ---

        // Load score from localStorage, or use a default object
        const Score = JSON.parse(localStorage.getItem('Score')) || {
            scoreWin : 0,
            scoreTie : 0,
            scoreLose: 0
        };

        // --- Initial Load ---
        // Display the score when the page loads
        checkScore(); 

        // --- 2. Computer Pick Logic ---

        let computer = '';
        function pickComputer () {
            const numberGenerate = Math.random();
            // Use < 1/3 and < 2/3 for cleaner distribution checks
            if (numberGenerate < 1/3) {
                computer = 'Rock';
            } else if (numberGenerate < 2/3) {
                computer = 'Paper';
            } else { // numberGenerate >= 2/3 and < 1
                computer = 'Scissors';
            }
        }

        // --- 3. User Pick and Game Logic ---

        let result = '';
        function pickUser(userValue) {
            
            // Determine result based on userValue and computer (which was set by pickComputer())
            if (userValue === 'Rock') {
                if (computer === 'Rock') {
                    result = `It's Tie`;
                } else if (computer === 'Paper') {
                    result = `You Lose`;
                } else if (computer === 'Scissors') {
                    result = `You Won`;
                } 
            } else if (userValue === 'Paper') {
                if (computer === 'Rock') {
                    result = `You Won`;
                } else if (computer === 'Paper') {
                    result = `It's Tie`;
                } else if (computer === 'Scissors') {
                    result = `You Lose`;
                } 
            } else if (userValue === 'Scissors') {
                if (computer === 'Rock') {
                    result = `You Lose`;
                } else if (computer === 'Paper') {
                    result = `You Won`;
                } else if (computer === 'Scissors') {
                    result = `It's Tie`;
                } 
            }

            // Update the Score object based on the result
            if (result === 'You Won') {
                Score.scoreWin++;
            } else if (result === 'You Lose') {
                Score.scoreLose++;
            } else if (result === `It's Tie`) {
                Score.scoreTie++;
            }

            // Display the current game result
            document.getElementById('display').innerText = `You chose: ${userValue} | Computer chose: ${computer} | ${result}`;
            
            // Update the score display and save to localStorage
            checkScore();
        }

        // --- 4. Score Display and Persistence ---

        function checkScore () {
            // Save the updated Score object to local storage
            localStorage.setItem('Score', JSON.stringify(Score));
            
            // Display the current scores
            document.getElementById('display1').innerText = `Won: ${Score.scoreWin} · Tie: ${Score.scoreTie} · Lose: ${Score.scoreLose}`;
        }

        // --- 5. Reset Logic ---

        function resetScore() {
            // Reset the score values in the JavaScript object
            Score.scoreWin = 0;
            Score.scoreTie = 0;
            Score.scoreLose = 0;
            
            // Clear the display outputs
            document.getElementById('display').innerText = '';
            
            // Update the score display and save the reset score to localStorage
            checkScore();
            
            alert(`The Score has been reset.`);
        }