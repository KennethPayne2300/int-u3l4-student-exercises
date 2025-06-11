// html button elements
let contentButton = document.querySelector('.content-button');
let image1Button = document.querySelector('.image-1-button');
let image2Button = document.querySelector('.image-2-button');

// html content elements
let myName = document.querySelector('.name');
let myHobby = document.querySelector('.hobby');
let myLocation = document.querySelector('.location');
let image = document.querySelector('.image');


// CODE ALONG
// 1. An event listener is provided for the `contentButton`
// 2. When clicked, it should change the content of:
//   - The `name` header.

// -- RETURN TO LESSON --

// CODE SOLO
//   - The `hobby` paragraph.
//   - The `location` paragraph.

contentButton.addEventListener('click', function() {
    myName.innerHTML = "My Name is Kenneth";
    myHobby.innerHTML = "I like to Play video games";
    myLocation.innerHTML = "I live in evansville";
});

// 3. Add an event listener to the `image1Button`
// 4. When clicked, it should change the source of `image` to another image URL.
image1Button.addEventListener('click', function() {
    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNJ3rXPwLyaYzM7fzE5ggUE32_xV3WPKIGPg&s";
});




// 5. Add an event listener to the `image2Button`
// 6. When clicked, it should change the source of `image` to another image URL.
image2Button.addEventListener('click', function() {
    image.src = "https://upload.wikimedia.org/wikipedia/en/1/19/Marvel_Universe_%28Civil_War%29.jpg";
});

// BONUS
// 7. Try using different event types for your buttons.
image1Button.addEventListener('dblclick', function(){
    image.src = "https://m.media-amazon.com/images/M/MV5BNmMyM2RkNDEtYzI0MS00ZGM3LWI1YzYtY2Y0YzEzMGY3NTlmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg";
});