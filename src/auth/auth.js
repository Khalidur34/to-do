const rootURL = 'https://xtzdwksy73.execute-api.us-east-1.amazonaws.com';
let rootToken = null;

const signInForm = document.querySelector('#signInForm');
const signUpForm = document.querySelector('#signUpForm');

function toggleForm() {
    const signInForm = document.getElementById('signInForm');
    const signUpForm = document.getElementById('signUpForm');
    const formTitle = document.getElementById('formTitle');

    if (signInForm.style.display === 'none') {
        signInForm.style.display = 'block';
        signUpForm.style.display = 'none';
        formTitle.textContent = 'Sign In';
    } else {
        signInForm.style.display = 'none';
        signUpForm.style.display = 'block';
        formTitle.textContent = 'Sign Up';
    }
}

signInForm.addEventListener('submit', async(e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const email = formData.get('email');
    const password = formData.get('password');
    const object = {email, password};

    try {
        const response = await post1(rootURL + '/auth/signin', object);
        if(response.status === 200) {
            let responseObject = await response.json();
            rootToken = responseObject.token;
            sessionStorage.setItem("authToken", rootToken);
            console.log(responseObject.message);
        }
        else if(response.status === 401) {
            console.log('sign in failed');
        }
    } catch(error) {
        console.error(error);
    }
    
});


signUpForm.addEventListener('submit', async(e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');
    const object = {name, email, password};
    try {
        const response = await post(rootURL + '/auth/signup', object);
        console.log(response);
        if(response.status === 200) {
            let responseObject = await response.json();
            console.log(responseObject.message);
            location.reload();
        }
        else if(response.status === 401) {
            console.log('SignUp Failed');
        }
    } catch(error) {
        console.error(error);
    }

});

async function post1 (url , submission) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                //'Authorization': rootToken,
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(submission),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response;

    } catch (error) {
        console.log(error);
        return null;
    }
}

// async function get (token) {
//     try {
//         const response = await fetch(rootURL, {
//             method: 'GET', 
//             headers: {
//                 'Authorization': JSON.stringify(token),
//             }
//         });

//         return response;

//     } catch (error) {
//         console.log(error);
//     }
    
// }

//export { post };