const baseUrl = 'https://golang-db-production.up.railway.app'; // Replace with your API base URL

// Create User
document.getElementById('createUserForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const user = {
        Name: document.getElementById('name').value,
        Age: document.getElementById('age').value,
        Contact: document.getElementById('contact').value,
        Company: document.getElementById('company').value,
        Address: {
            City: document.getElementById('city').value,
            State: document.getElementById('state').value,
            Country: document.getElementById('country').value,
            Pincode: document.getElementById('pincode').value,
        }
    };
    const response = await fetch(`${baseUrl}/addUser`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(response => response.text())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
    
    alert('User Created!');
});

// Get User
document.getElementById('getUserButton').addEventListener('click', async () => {
    const name = document.getElementById('getUserName').value;
    const response = await fetch(`${baseUrl}/getUser/${name}`);
    const data = await response.json();
    document.getElementById('getUserResult').textContent = JSON.stringify(data, null, 2);
});

// Get All Users
document.getElementById('getAllUsersButton').addEventListener('click', async () => {
    const response = await fetch(`${baseUrl}/getAllUsers`);
    const data = await response.json();
    document.getElementById('getAllUsersResult').textContent = JSON.stringify(data, null, 2);
});

// Delete User
document.getElementById('deleteUserButton').addEventListener('click', async () => {
    const name = document.getElementById('deleteUserName').value;
    const response = await fetch(`${baseUrl}/deleteUser/${name}`, {
        method: 'DELETE'
    });
    alert('User Deleted!');
});

// Delete All Users
document.getElementById('deleteAllUsersButton').addEventListener('click', async () => {
    const response = await fetch(`${baseUrl}/deleteAllUsers`, {
        method: 'DELETE'
    });
    alert('All Users Deleted!');
});
