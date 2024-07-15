document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.header');
  const headerHeight = header.offsetHeight;

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > headerHeight) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // スムーススクロール
  const navLinks = document.querySelectorAll('.header nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      const targetPosition = targetElement.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });

  // フェードインアニメーション
  const sections = document.querySelectorAll('.section');
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in', 'show');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });

  // heroセクションのアニメーション
  const titleWords = document.querySelectorAll('.title-word');
  titleWords.forEach((word, index) => {
    setTimeout(() => {
      word.style.animation = 'fadeInUp 1s ease forwards';
      word.style.animationDelay = `${0.5 + index * 0.5}s`;
    }, 500); 
  });

  // 各セクションのタイトルアニメーション
  const sectionTitles = document.querySelectorAll('.section-title');
  sectionTitles.forEach((title, index) => {
    setTimeout(() => {
      title.style.animation = 'fadeInUp 0.8s ease forwards';
      title.style.animationDelay = `${0.2 + index * 0.2}s`;
    }, 500); 
  });

  // スキルアイテムのアニメーション
  const skillItems = document.querySelectorAll('.skill-item');
  skillItems.forEach((item, index) => {
    setTimeout(() => {
      item.style.animation = 'fadeInUp 0.8s ease forwards';
      item.style.animationDelay = `${0.2 + index * 0.2}s`;
    }, 500);
  });

  // キャリアアイテムのアニメーション
  const careerItems = document.querySelectorAll('.career-item');
  careerItems.forEach((item, index) => {
    setTimeout(() => {
      item.style.animation = 'fadeInUp 0.8s ease forwards';
      item.style.animationDelay = `${0.2 + index * 0.2}s`;
    }, 500);
  });

  // PRアイテムのアニメーション
  const prItems = document.querySelectorAll('.pr-item');
  prItems.forEach((item, index) => {
    setTimeout(() => {
      item.style.animation = 'fadeInUp 0.8s ease forwards';
      item.style.animationDelay = `${0.2 + index * 0.2}s`;
    }, 500);
  });
});
