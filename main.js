// var typed = new typed('.text', {
//     strings: ["a Frontend Developer.", "an AIML Enthusiast.", "a Data Analyst.", "a NLP Practitioner."],
//     typeSpeed: 50,
//     backSpeed: 50,
//     loop: true
// });

// //skills functionality

// var skillsLink = document.getElementById("skills-link");
// var skillsSection = document.getElementById('skills-section');

// var skills = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Tailwind CSS',
//     'Java',
//     'C++',
//     'MySQL',
//     'Python',
//     'Machine Learning',
//     'Deep Learning'
// ];


// skillsLink.addEventListener('click', function(event) {
//     event.preventDefault();

// skillsSection.innerHTML = '';
// skills.forEach(function(skill) {
//     var skillItem = document.createElement('div');
//     skillItem.classList.add('skill-item');
//     skillItem.textContent = skill;
//     skillsSection.appendChild(skillItem);
// });

// skillsSection.style.display = 'block';
// gsap.fromTo('.skill-item', {
//     opacity: 0,
//     y: -20
// }, {
//     opacity: 1,
//     y: 0,
//     duration: 0.5,
//     stagger: 0.1,
//     ease: "power4.out"
// });
// });


document.getElementById("skills-link").addEventListener("click", function (event) {
    event.preventDefault();
    gsap.to(window, { duration: 1, scrollTo: "#skills" });
    gsap.fromTo("#skills", { display: "none", opacity: 0 }, { display: "flex", opacity: 1, duration: 1 });
});