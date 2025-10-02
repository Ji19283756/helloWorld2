// Change paragraph text on button click
document.getElementById('changeText').onclick = function() {
    document.getElementById('paragraph').textContent = 'Wow, just like that the text changed!!!';
};

// greets the user after they enter their name and click the button
document.getElementById('greetForm').onsubmit = function(event) {
    const name = document.getElementById('name').value;
    document.getElementById('greetMessage').textContent = `Hello, ${name}!`;
};

// iterates through a list and creates a list item for each
const favoriteFoods = ['Pasta', 'Hamburgers', 'Halal'];
const foodList = document.getElementById('foodList');
favoriteFoods.forEach(function(food) {
    const li = document.createElement('li');
    li.textContent = food;
    foodList.appendChild(li);
});


document.getElementById('submitCourses').onclick = function() {
    const checked = Array.from(document.querySelectorAll('input[name="course"]:checked'));
    const courses = checked.map(item => item.value);
    if (courses.length > 0) {
        alert('You have taken: ' + courses.join(', '));
    } else {
        alert('You have not selected any courses.');
    }
};


