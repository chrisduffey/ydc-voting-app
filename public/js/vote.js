document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    console.log(isLoggedIn);

    if (isLoggedIn === 'true') {

        const loginSignupElement = document.getElementById('loginSignup');
        if (loginSignupElement) {
            loginSignupElement.style.display = 'none'; // Hide login/signup link if logged in

        }
    }
});
    const buttonEls = document.querySelectorAll(".voteButton");
  
    if(document.querySelector("#voted").value === "true"){
        document.querySelector("#message").textContent = "Your vote has been casted. Thank you."; 
        for (let i = 0; i < buttonEls.length; i++){
            buttonEls[i].disabled = true;
        }
    } else {
        // If user is not logged in, show login/signup element
        document.querySelector("#message").textContent = ""; 
  
        for (let i = 0; i < buttonEls.length; i++) {
            buttonEls[i].addEventListener("click", function (event) {
                const candidateID = event.target.id;
                const candidateName = event.target.dataset.candidatename;
  
                alert(`You voted for candidate ${candidateName}`);
  
                fetch(`/api/vote/${candidateID}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(data => {
                    document.location.reload();
                })
                .catch(err => {
                    console.error('Vote did not get counted:', err);
                });
            });
        };
    }
  