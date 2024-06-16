const buttonEls = document.querySelectorAll(".voteButton");
console.log(document.querySelector("#voted").value)
if(document.querySelector("#voted").value==="true"){
    document.querySelector("#message").textContent="Your vote has be casted Thank you" 
    for (let i = 0; i < buttonEls.length; i++){
        buttonEls[i].disabled=true
    }
}else {

// put in alert for vote!!

for (let i = 0; i < buttonEls.length; i++) {
    buttonEls[i].addEventListener("click", function (event) {

        const candidateID = event.target.id;
        console.log(event.target);
        const candidateName = event.target.dataset.candidatename;
        // const userId = event.target.voterId;

        // console.log(`You voted for candidate ${candidateID,candidateName}`);
        // Put in an alert here!
        alert(`You voted for candidate ${candidateName}`);

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
    });


   



}
}