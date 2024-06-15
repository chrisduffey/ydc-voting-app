const buttonEls = document.querySelectorAll(".voteButton");
console.log(buttonEls);

for (let i = 0; i < buttonEls.length; i++) {
    buttonEls[i].addEventListener("click", function(event){

        const candidateID = event.target.id;
        const candidateName = event.target.name;

        // console.log(`You voted for candidate ${candidateID,candidateName}`);
        // Put in an alert here!


        console.log(event.target.id)
        // the fetch request on the front end to count the votes
        // console.log(`Voted for candidate ${candidateName}`);

        fetch(`/api/vote/${candidateID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(data => {
            document.location.reload()
            // console.log('Vote counted:', data);
            // document.querySelector(`#count-${candidateID}`).textContent = `Votes: ${data.count}`
        })
        .catch(err => {
            console.error('Vote did not get counted:', err);
        });
        })
    
    }