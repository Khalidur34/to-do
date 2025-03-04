const rootURL = 'https://xtzdwksy73.execute-api.us-east-1.amazonaws.com';
//const rootToken = null;

const signInForm = document.querySelector('#signInForm');
const signUpForm = document.querySelector('#signUpForm');

signInForm.addEventListener('submit', async(e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const email = formData.get('email');
    const password = formData.get('password');
    const object = {email, password};

    try {
        const response = await post(rootURL + '/auth/signin', object);
        if(response.status === 200) {
            console.log('sign in success');
        }
        else if(response.status === 401) {
            console.log('sign in failed')
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
        console.log(await response);
        // if(response.status === 200) {
        //     console.log('SignUp Success');
        // }
        // else if(response.status === 401) {
        //     console.log('SignUp Failed');
        // }
    } catch(error) {
        console.error(error);
    }

});

async function post (url , submission) {
    try {
        const response = await fetch(url, {
            mode : 'no-cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(submission),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.json();

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