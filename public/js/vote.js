document.addEventListener('DOMContentLoaded', () => {
    const candidates = [
        { id: 'candidate1', name: 'Candidate 1' },
        { id: 'candidate2', name: 'Candidate 2' },
        { id: 'candidate3', name: 'Candidate 3' }
    ];
    
    const results = {
        'Candidate 1': 0,
        'Candidate 2': 0,
        'Candidate 3': 0
    };
    
    const candidatesTemplate = Handlebars.compile(document.getElementById('candidates-template').innerHTML);
    document.getElementById('candidates-container').innerHTML = candidatesTemplate({ candidates });
    
    const resultsTemplate = Handlebars.compile(document.getElementById('results-template').innerHTML);
    document.getElementById('results-container').innerHTML = resultsTemplate({ results });
    
    document.getElementById('vote-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const selectedCandidate = document.querySelector('input[name="vote"]:checked').value;
        if (selectedCandidate) {
            results[selectedCandidate]++;
            document.getElementById('results-container').innerHTML = resultsTemplate({ results });
        }
    });
});