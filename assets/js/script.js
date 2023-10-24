document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Faq
document.querySelectorAll('.question').forEach(function(question) {
    question.addEventListener('click', function() {
        var answer = this.nextElementSibling;
        if (answer.style.maxHeight === '0px') {
            answer.style.maxHeight = answer.scrollHeight + 'px';
            this.querySelector('.btn').textContent = '-';
        } else {
            answer.style.maxHeight = '0px';
            this.querySelector('.btn').textContent = '+';
        }
    });
});



window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        document.getElementById('scroll-to-top').style.display = 'block';
    } else {
        document.getElementById('scroll-to-top').style.display = 'none';
    }
});

document.getElementById('scroll-to-top').addEventListener('click', function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
});
var docWidth = document.documentElement.offsetWidth;
[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);