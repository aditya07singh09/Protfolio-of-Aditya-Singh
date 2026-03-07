// Header & Profile slide-in
window.addEventListener('load', () => {
    document.querySelector('header').classList.add('visible');
    document.querySelector('.profile-pic').classList.add('visible');
});

// Fade-in sections
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
    });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));

// Skill bars animation
const skillBars = document.querySelectorAll('.progress');
window.addEventListener('scroll', () => {
    const skillsSection = document.getElementById('skills');
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.2;
    if(sectionPos < screenPos) {
        skillBars.forEach(bar => bar.style.width = bar.dataset.width);
    }
});

// Smooth scroll for sticky header
document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        const headerOffset = 150; // sticky header height
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    });
});

// Contact form alert
document.getElementById('contact-form').addEventListener('submit', function(e){
    e.preventDefault();
    alert('Thanks for your message! I will contact you soon.');
    this.reset();
});