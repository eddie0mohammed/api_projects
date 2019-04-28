const data = [
    {
        name: "John Doe",
        age: 32,
        gender: 'male',
        lookingfor: 'female',
        location: 'Boston Ma',
        image: "https://randomuser.me/api/portraits/men/82.jpg"
    },
    {
        name: "Sarah Williams",
        age: 26,
        gender: 'female',
        lookingfor: 'male',
        location: 'Arlington Va',
        image: "https://randomuser.me/api/portraits/women/82.jpg"
    },
    {
        name: "Micheal White",
        age: 30,
        gender: 'male',
        lookingfor: 'female',
        location: 'Miami Fl',
        image: "https://randomuser.me/api/portraits/men/83.jpg"
    },
    {
        name: "Nina Wang",
        age: 29,
        gender: 'female',
        lookingfor: 'male',
        location: 'Fremont Ca',
        image: "https://randomuser.me/api/portraits/women/81.jpg"
    }
];

const profiles = profileIterator(data);

//call first profile
nextProfile();

//next event
document.getElementById('next').addEventListener('click', nextProfile);
// next profile display
function nextProfile(){
    const currentProfile = profiles.next().value;

    if (currentProfile != undefined){
        document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
            <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
        `;

        //image
        document.getElementById('imageDisplay').innerHTML = `
        <img src="${currentProfile.image}">
        `;
    }else{ //no more profiles
        window.location.reload();

    }
}


//profile iterator
function profileIterator(profiles){
    let nextIndex = 0;

    return {
        next: function(){
            return nextIndex < profiles.length ? 
            { value: profiles[nextIndex++], done: false } :
            { done: true }
        }
    };
}