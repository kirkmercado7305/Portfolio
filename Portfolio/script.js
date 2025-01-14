
document.getElementById('addProject').addEventListener('click', function() {
    const projectList = document.getElementById('projectList');
    const newProject = document.createElement('li');
    newProject.innerHTML = 'New Dynamic Project';
    projectList.appendChild(newProject);
});

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    alert(`Thank you, ${name}, for reaching out!`);
    contactForm.reset();
});

document.querySelector('nav').addEventListener('mouseover', function() {
    this.style.backgroundColor = '#555';
});
document.querySelector('nav').addEventListener('mouseout', function() {
    this.style.backgroundColor = '#444';
});
