/* ================================================================
   ABHISHEK KAMBLE – PORTFOLIO  |  script.js
   Centralized data structure + core initialization
================================================================ */

'use strict';

/* ---------------------------------------------------------------
   1. PORTFOLIO DATA STRUCTURE
--------------------------------------------------------------- */
const portfolioData = {

  /* --- Personal Info --- */
  personal: {
    name:         'Abhishek Kamble',
    title:        'Software Developer & Cloud Enthusiast',
    shortBio:     'Full Stack | Java | Cloud | Backend | Automation',
    about: `I am a passionate Software Developer based in Solapur, Maharashtra, India,
            with a strong focus on Full Stack Development, Cloud Computing, Java,
            Backend Engineering, and Automation. I love building scalable, efficient
            systems and continuously exploring emerging technologies to solve real-world problems.`,
    email:        'abhishek2005kamble@gmail.com',
    github:       'https://github.com/AbhishekKambleGit',
    linkedin:     'https://www.linkedin.com/in/abhishekkamble-dev/',
    resumePath:   'assets/resume/abhishek_kamble_resume.pdf',
    profileImage: 'assets/images/profile.jpg',
    location:     'Solapur, Maharashtra, India',
    available:    true,
  },

  /* --- Skills --- */
  skills: {
    frontend: [
      { name: 'HTML5',      icon: 'fa-brands fa-html5',      level: 90, category: 'Frontend' },
      { name: 'CSS3',       icon: 'fa-brands fa-css3-alt',   level: 85, category: 'Frontend' },
      { name: 'JavaScript', icon: 'fa-brands fa-js',         level: 80, category: 'Frontend' },
    ],
    backend: [
      { name: 'Java',       icon: 'fa-brands fa-java',       level: 85, category: 'Backend' },
      { name: 'Python',     icon: 'fa-brands fa-python',     level: 75, category: 'Backend' },
      { name: 'SQL',        icon: 'fa-solid fa-database',    level: 80, category: 'Backend' },
      { name: 'REST APIs',  icon: 'fa-solid fa-plug',        level: 78, category: 'Backend' },
      { name: 'OOP',        icon: 'fa-solid fa-cube',        level: 88, category: 'Backend' },
      { name: 'DBMS',       icon: 'fa-solid fa-server',      level: 80, category: 'Backend' },
    ],
    cloud: [
      { name: 'AWS',        icon: 'fa-brands fa-aws',        level: 70, category: 'Cloud' },
      { name: 'Cloud Deploy', icon: 'fa-solid fa-cloud',     level: 68, category: 'Cloud' },
    ],
    tools: [
      { name: 'Git',        icon: 'fa-brands fa-git-alt',    level: 85, category: 'Tools' },
      { name: 'GitHub',     icon: 'fa-brands fa-github',     level: 85, category: 'Tools' },
      { name: 'VS Code',    icon: 'fa-solid fa-code',        level: 90, category: 'Tools' },
      { name: 'Postman',    icon: 'fa-solid fa-paper-plane', level: 78, category: 'Tools' },
    ],
    languages: [
      { name: 'Java',         icon: 'fa-brands fa-java',     level: 85, category: 'Languages' },
      { name: 'Python',       icon: 'fa-brands fa-python',   level: 75, category: 'Languages' },
      { name: 'JavaScript',   icon: 'fa-brands fa-js',       level: 80, category: 'Languages' },
      { name: 'SQL',          icon: 'fa-solid fa-database',  level: 80, category: 'Languages' },
    ],
  },

  /* --- Services --- */
  services: [
    {
      title:       'Web Development',
      description: 'Building responsive, performant full-stack web applications with modern frameworks and clean architecture.',
      icon:        'fa-solid fa-globe',
    },
    {
      title:       'Backend Development',
      description: 'Designing robust REST APIs, microservices, and scalable server-side solutions using Java and Python.',
      icon:        'fa-solid fa-server',
    },
    {
      title:       'Cloud Deployment',
      description: 'Deploying and managing applications on AWS with focus on reliability, scalability, and cost efficiency.',
      icon:        'fa-brands fa-aws',
    },
    {
      title:       'Automation',
      description: 'Creating intelligent automation scripts and workflows that reduce manual effort and improve productivity.',
      icon:        'fa-solid fa-robot',
    },
  ],

  /* --- Projects --- */
  projects: [
    {
      id:          'proj-000',
      title:       'SAMVED – Smart Governance Hackathon',
      description: 'A full-stack hackathon management platform developed in collaboration with MIT Vishwaprayag University and Solapur Municipal Corporation. Features governance-based team registration and role-based workflows.',
      features:    ['Role-based workflows (Students, Mentors, SPOCs, Judges, Admins)', 'Secure authentication system', 'Governance-based team registration', 'Real-time hackathon management'],
      techStack:   ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      github:      '',
      liveDemo:    'https://www.smc-mitvpuhackathon.in/',
      image:       'assets/images/projects/samved.jpg',
      category:    'Full Stack',
      featured:    true,
      status:      'live',
    },
    {
      id:          'proj-001',
      title:       'Handwritten Digit Recognition',
      description: 'Custom CNN built from scratch with TensorFlow/Keras, trained on MNIST to classify handwritten digits (0–9) with high accuracy. Includes image preprocessing, visualization, and prediction pipeline.',
      features:    ['Custom CNN architecture', 'MNIST dataset training', 'Image preprocessing & visualization', 'High-accuracy prediction'],
      techStack:   ['Python', 'TensorFlow', 'Keras', 'Jupyter Notebook', 'NumPy'],
      github:      'https://github.com/AbhishekKambleGit/Handwritten_Digit_Recognition',
      liveDemo:    '',
      image:       'assets/images/projects/digit-recognition.jpg',
      category:    'AI / ML',
      featured:    true,
      status:      'live',
    },
    {
      id:          'proj-002',
      title:       'Integrated Pet Wellness',
      description: 'A full-stack TypeScript application providing a comprehensive platform for pet health tracking, appointment scheduling, and wellness management for pet owners.',
      features:    ['Pet health tracking', 'Appointment scheduling', 'Wellness management dashboard', 'Full-stack TypeScript'],
      techStack:   ['TypeScript', 'React', 'Node.js', 'REST API'],
      github:      'https://github.com/AbhishekKambleGit/Integrated-Pet-Wellness',
      liveDemo:    '',
      image:       'assets/images/projects/pet-wellness.jpg',
      category:    'Full Stack',
      featured:    true,
      status:      'live',
    },
    {
      id:          'proj-003',
      title:       'AI Translator App',
      description: 'An AI-powered multilingual translator application that leverages machine learning models to deliver fast, accurate real-time language translation across multiple languages.',
      features:    ['Multilingual translation', 'AI-powered accuracy', 'Real-time processing', 'Multi-language support'],
      techStack:   ['Python', 'AI/ML', 'NLP', 'REST API'],
      github:      'https://github.com/AbhishekKambleGit/ai-translator-app',
      liveDemo:    '',
      image:       'assets/images/projects/ai-translator.jpg',
      category:    'AI / ML',
      featured:    true,
      status:      'live',
    },
    {
      id:          'proj-004',
      title:       'Tattoo Billing System',
      description: 'A streamlined billing and invoice management system built for tattoo studios, handling client bookings, service pricing, and automated receipt generation.',
      features:    ['Client billing & invoicing', 'Service pricing management', 'Automated receipts', 'Studio management'],
      techStack:   ['JavaScript', 'HTML5', 'CSS3', 'LocalStorage'],
      github:      'https://github.com/AbhishekKambleGit/tattoo-billing-system',
      liveDemo:    '',
      image:       'assets/images/projects/tattoo-billing.jpg',
      category:    'Web Dev',
      featured:    false,
      status:      'live',
    },
    {
      id:          'proj-005',
      title:       'Personal Portfolio Website',
      description: 'My developer portfolio website showcasing projects, skills, certifications, and achievements. Built with vanilla HTML, CSS, and JavaScript featuring animations and a modern glassmorphism design.',
      features:    ['Responsive design', 'Animated hero section', 'Dynamic project filtering', 'Glassmorphism UI'],
      techStack:   ['HTML5', 'CSS3', 'JavaScript', 'AOS'],
      github:      'https://github.com/AbhishekKambleGit/abhishekkamble',
      liveDemo:    'https://abhishekkamblegit.github.io/abhishekkamble/',
      image:       'assets/images/projects/portfolio.jpg',
      category:    'Web Dev',
      featured:    false,
      status:      'live',
    },
  ],

  /* --- Certifications --- */
  certifications: [
    {
      title:    'AWS Cloud Practitioner',
      provider: 'Amazon Web Services',
      date:     '2024',
      link:     '',
      image:    'assets/images/certs/aws-cert.jpg',
    },
    {
      title:    'Full Stack Java Development',
      provider: 'Infosys Springboard',
      date:     '2024',
      link:     '',
      image:    'assets/images/certs/infosys-cert.jpg',
    },
    {
      title:    'Cloud Computing Fundamentals',
      provider: 'Infosys Springboard',
      date:     '2023',
      link:     '',
      image:    'assets/images/certs/cloud-cert.jpg',
    },
  ],

  /* --- Achievements --- */
  achievements: [
    {
      title:       '🥈 Second Prize – Dexter InnoFest',
      description: 'Secured Second Prize at the National Level Programming Competition – Dexter InnoFest 2024–25 (Genius Ideas), organized by the Dept. of CS & CA, Punyashlok Ahilyadevi Holkar Solapur University.',
      year:        'Mar 2025',
      icon:        'fa-solid fa-medal',
    },
    {
      title:       '🥇 Winner – Tech-Master 2K25',
      description: 'Won First Place at Tech-Master 2K25, a C Programming Competition held at Hirachand Nemchand College of Commerce, Solapur.',
      year:        'Mar 2025',
      icon:        'fa-solid fa-trophy',
    },
    {
      title:       '🥇 Winner – CODEBATE 2k24',
      description: 'Secured First Place at CODEBATE-2k24, organized by the Computer Science Department, Prin. K. P. Mangalvedhekar Institute of Management & Career Development and Research, Solapur.',
      year:        'Oct 2024',
      icon:        'fa-solid fa-code',
    },
    {
      title:       'Problem Solver',
      description: 'Solved 200+ coding problems on LeetCode and HackerRank.',
      year:        '2024',
      icon:        'fa-solid fa-laptop-code',
    },
    {
      title:       'Open Source Contributor',
      description: 'Contributed to multiple open-source Java and Python projects.',
      year:        '2024',
      icon:        'fa-brands fa-github',
    },
    {
      title:       'Cloud Certified',
      description: 'Achieved AWS Cloud Practitioner certification.',
      year:        '2024',
      icon:        'fa-brands fa-aws',
    },
    {
      title:       '🥉 1st Consolation – San Pratibha Shodh 2k24',
      description: 'Awarded First Consolation Prize in the Web Page Designing Competition at San Pratibha Shodh 2k24, Sangameshwar College, Solapur (Autonomous).',
      year:        'Jan 2024',
      icon:        'fa-solid fa-globe',
    },
    {
      title:       'Academic Excellence',
      description: 'Consistently maintained top academic performance throughout engineering.',
      year:        '2023',
      icon:        'fa-solid fa-graduation-cap',
    },
  ],


  /* --- Resume --- */
  resume: {
    pdfPath:      'assets/resume/abhishek_kamble_resume.pdf',
    previewImage: 'assets/images/resume-preview.jpg',
  },

  /* --- Contact --- */
  contact: {
    email:    'abhishek2005kamble@gmail.com',
    linkedin: 'https://www.linkedin.com/in/abhishekkamble-dev/',
    github:   'https://github.com/AbhishekKambleGit',
    formFields: [
      { id: 'contact-name',    label: 'Your Name',    type: 'text',     placeholder: 'John Doe',             required: true },
      { id: 'contact-email',   label: 'Email Address',type: 'email',    placeholder: 'john@example.com',     required: true },
      { id: 'contact-subject', label: 'Subject',      type: 'text',     placeholder: 'Project Collaboration', required: true },
      { id: 'contact-message', label: 'Message',      type: 'textarea', placeholder: 'Tell me about your project...', required: true },
    ],
  },
};

/* ---------------------------------------------------------------
   2. CORE INITIALIZATION
--------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollTop();
  
  // Render dynamic sections
  initHero();
  initAboutCounters();
  renderSkills();
  renderServices();
  renderProjects();
  renderCertifications();
  renderAchievements();
  renderResume();
  renderContact();
  renderFooter();
  
  // Initialize AOS last
  setTimeout(() => {
    initAOS();
  }, 100);
  
  console.info('%c⚡ Abhishek Kamble Portfolio Loaded', 'color:#8B5CF6;font-weight:bold;font-size:14px;');
});

/* ---------------------------------------------------------------
   3. AOS INIT
--------------------------------------------------------------- */
function initAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({ 
      duration: 800, 
      once: true, 
      offset: 20,
      disable: 'mobile' 
    });
  }
}

/* ---------------------------------------------------------------
   4. NAVBAR
--------------------------------------------------------------- */
function initNavbar() {
  const nav    = document.getElementById('main-nav');
  const btn    = document.getElementById('mobile-menu-btn');
  const mobile = document.getElementById('mobile-nav');
  const links  = document.querySelectorAll('.nav-link');

  /* Scroll shadow */
  window.addEventListener('scroll', () => {
    nav.style.boxShadow = window.scrollY > 40 ? '0 4px 30px rgba(0,0,0,0.4)' : 'none';
    highlightActiveLink();
  }, { passive: true });

  /* Mobile toggle */
  btn?.addEventListener('click', () => {
    const open = !mobile.classList.contains('hidden');
    mobile.classList.toggle('hidden', open);
    btn.setAttribute('aria-expanded', String(!open));
  });

  /* Close mobile on link click */
  links.forEach(link => {
    link.addEventListener('click', () => {
      mobile.classList.add('hidden');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
}

function highlightActiveLink() {
  const sections = document.querySelectorAll('section[id]');
  const scrollY  = window.scrollY + 120;
  sections.forEach(sec => {
    const link = document.querySelector(`.nav-link[href="#${sec.id}"]`);
    if (!link) return;
    const inView = scrollY >= sec.offsetTop && scrollY < sec.offsetTop + sec.offsetHeight;
    link.classList.toggle('active', inView);
  });
}

/* ---------------------------------------------------------------
   5. SCROLL-TO-TOP
--------------------------------------------------------------- */
function initScrollTop() {
  const btn = document.getElementById('scroll-top-btn');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ---------------------------------------------------------------
   6. HERO – INIT (typing animation + particles)
--------------------------------------------------------------- */

/** Hero typing roles */
const HERO_TYPING_ROLES = [
  'Software Developer',
  'Cloud Enthusiast',
  'Full Stack Developer',
  'Backend Developer',
  'Java Engineer',
];

function initHero() {
  initHeroTyping();
  initHeroParticles();
}

/* ── Typing animation engine ── */
function initHeroTyping() {
  const el = document.getElementById('hero-typing-text');
  if (!el) return;

  const roles = HERO_TYPING_ROLES || ['Developer', 'Engineer'];
  let rIdx = 0;
  let cIdx = 0;
  let isDel = false;

  function type() {
    const full = roles[rIdx];
    el.textContent = isDel ? full.substring(0, cIdx--) : full.substring(0, cIdx++);

    let speed = isDel ? 50 : 100;
    if (!isDel && cIdx > full.length) {
      isDel = true;
      speed = 1500; // Pause at end
    } else if (isDel && cIdx < 0) {
      isDel = false;
      rIdx = (rIdx + 1) % roles.length;
      cIdx = 0;
      speed = 500; // Pause at start
    }
    setTimeout(type, speed);
  }
  type();
}

/* ── Particle canvas ── */
function initHeroParticles() {
  const canvas = document.getElementById('hero-particles');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let W, H, particles;

  const PARTICLE_COUNT  = 60;
  const MAX_DIST        = 130;
  const PRIMARY_COLOR   = '139,92,246';
  const ACCENT_COLOR    = '6,182,212';

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function randomColor() {
    return Math.random() > 0.5 ? PRIMARY_COLOR : ACCENT_COLOR;
  }

  function createParticle() {
    return {
      x:    Math.random() * W,
      y:    Math.random() * H,
      vx:   (Math.random() - 0.5) * 0.4,
      vy:   (Math.random() - 0.5) * 0.4,
      r:    Math.random() * 1.5 + 0.5,
      col:  randomColor(),
      alpha: Math.random() * 0.4 + 0.1,
    };
  }

  function init() {
    resize();
    particles = Array.from({ length: PARTICLE_COUNT }, createParticle);
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Update & draw dots
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.col},${p.alpha})`;
      ctx.fill();
    });

    // Draw connection lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_DIST) {
          const lineAlpha = (1 - dist / MAX_DIST) * 0.12;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(${a.col},${lineAlpha})`;
          ctx.lineWidth   = 0.6;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  init();
  draw();

  const ro = new ResizeObserver(() => { resize(); });
  ro.observe(canvas.parentElement);
  window.addEventListener('resize', resize, { passive: true });
}

/* ---------------------------------------------------------------
   7. RENDER FOOTER
--------------------------------------------------------------- */
function renderFooter() {
  const el = document.getElementById('footer-content');
  if (!el) return;
  const year = new Date().getFullYear();
  el.innerHTML = `
    <p>© ${year} <span class="text-primary font-semibold">${portfolioData.personal.name}</span>. All rights reserved.</p>
  `;
}

/* ---------------------------------------------------------------
   8. ABOUT – STAT COUNTER ANIMATION
--------------------------------------------------------------- */
function initAboutCounters() {
  const statNums = document.querySelectorAll('.about-stat-num[data-target]');
  if (!statNums.length) return;

  let hasRun = false;

  function animateCount(el) {
    const target   = parseInt(el.dataset.target, 10);
    const duration = 1400; // ms
    const steps    = 50;
    const interval = duration / steps;
    let current    = 0;
    const inc      = Math.ceil(target / steps);

    const timer = setInterval(() => {
      current += inc;
      if (current >= target) {
        el.textContent = target;
        clearInterval(timer);
      } else {
        el.textContent = current;
      }
    }, interval);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasRun) {
        hasRun = true;
        statNums.forEach(el => animateCount(el));
        observer.disconnect();
      }
    });
  }, { threshold: 0.4 });

  const statsRow = document.getElementById('about-stats-row');
  if (statsRow) observer.observe(statsRow);
}

/* ---------------------------------------------------------------
   9. RENDER SKILLS
--------------------------------------------------------------- */
function renderSkills() {
  const tabsContainer = document.getElementById('skills-tabs');
  const gridContainer = document.getElementById('skills-grid');
  if (!tabsContainer || !gridContainer) return;

  const categories = Object.keys(portfolioData.skills);
  
  // Create Tabs
  tabsContainer.innerHTML = categories.map((cat, idx) => `
    <button class="skill-tab-btn ${idx === 0 ? 'active' : ''}" 
            onclick="filterSkills('${cat}', this)"
            role="tab"
            aria-selected="${idx === 0}">
      ${cat.charAt(0).toUpperCase() + cat.slice(1)}
    </button>
  `).join('');

  // Initial render (first category)
  filterSkills(categories[0]);
}

window.filterSkills = function(category, btn) {
  const gridContainer = document.getElementById('skills-grid');
  const tabs = document.querySelectorAll('.skill-tab-btn');
  
  if (btn) {
    tabs.forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
  }

  const skills = portfolioData.skills[category];
  gridContainer.innerHTML = skills.map(skill => `
    <div class="skill-card glass-card-hover" data-aos="fade-up">
      <div class="skill-icon-box">
        <i class="${skill.icon}"></i>
      </div>
      <div class="skill-info">
        <span class="skill-name">${skill.name}</span>
        <span class="skill-perc">${skill.level}%</span>
      </div>
      <div class="skill-bar-track">
        <div class="skill-bar-fill" style="width: ${skill.level}%"></div>
      </div>
    </div>
  `).join('');
};

/* ---------------------------------------------------------------
   10. RENDER SERVICES
--------------------------------------------------------------- */
function renderServices() {
  const container = document.getElementById('services-grid');
  if (!container) return;

  container.innerHTML = portfolioData.services.map(service => `
    <div class="service-card glass-card-hover" data-aos="fade-up">
      <div class="service-icon-wrapper">
        <i class="${service.icon}"></i>
      </div>
      <h3 class="service-title">${service.title}</h3>
      <p class="service-desc">${service.description}</p>
    </div>
  `).join('');
}


/* ---------------------------------------------------------------
   11. RENDER PROJECTS
--------------------------------------------------------------- */
function renderProjects() {
  const filterContainer = document.getElementById('project-filters');
  const gridContainer = document.getElementById('projects-grid');
  if (!filterContainer || !gridContainer) return;

  // Extract unique categories
  const categories = ['All', ...new Set(portfolioData.projects.map(p => p.category))];

  // Create Filter Buttons
  filterContainer.innerHTML = categories.map((cat, idx) => `
    <button class="project-filter-btn ${idx === 0 ? 'active' : ''}" 
            onclick="filterProjects('${cat}', this)"
            aria-selected="${idx === 0}">
      ${cat}
    </button>
  `).join('');

  // Initial render (All)
  filterProjects('All');
}

window.filterProjects = function(category, btn) {
  const gridContainer = document.getElementById('projects-grid');
  const filters = document.querySelectorAll('.project-filter-btn');

  if (btn) {
    filters.forEach(f => f.classList.remove('active'));
    btn.classList.add('active');
  }

  const projects = category === 'All' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.category === category);

  gridContainer.innerHTML = projects.map(proj => `
    <div class="project-card-premium" data-aos="fade-up">
      <div class="project-img-box">
        <img src="${proj.image}" alt="${proj.title}" onerror="this.src='https://via.placeholder.com/400x200?text=${proj.title}'">
        <div class="project-badge">
          <span class="badge ${proj.status === 'live' ? 'project-status-live' : 'project-status-wip'}">
            ${proj.status === 'live' ? 'Live' : 'WIP'}
          </span>
        </div>
      </div>
      <div class="project-content">
        <h3 class="project-title-premium">${proj.title}</h3>
        <p class="project-desc-premium">${proj.description}</p>
        <div class="project-tech-stack">
          ${proj.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        <div class="project-links">
          ${proj.github ? `
            <a href="${proj.github}" target="_blank" class="project-link">
              <i class="fa-brands fa-github"></i> Source
            </a>
          ` : ''}
          ${proj.liveDemo ? `
            <a href="${proj.liveDemo}" target="_blank" class="project-link">
              <i class="fa-solid fa-arrow-up-right-from-square"></i> Demo
            </a>
          ` : ''}
        </div>
      </div>
    </div>
  `).join('');
};


/* ---------------------------------------------------------------
   12. RENDER CERTIFICATIONS
--------------------------------------------------------------- */
function renderCertifications() {
  const container = document.getElementById('certifications-grid');
  if (!container) return;

  container.innerHTML = portfolioData.certifications.map(cert => `
    <div class="cert-card-premium glass-card-hover" data-aos="fade-up">
      <div class="cert-header">
        <span class="cert-provider">${cert.issuer}</span>
        <h3 class="cert-title-premium">${cert.title}</h3>
      </div>
      <div class="cert-footer">
        <span class="cert-date">${cert.date}</span>
        ${cert.link ? `
          <a href="${cert.link}" target="_blank" class="project-link">
            Verify <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        ` : ''}
      </div>
    </div>
  `).join('');
}

/* ---------------------------------------------------------------
   13. RENDER ACHIEVEMENTS
--------------------------------------------------------------- */
function renderAchievements() {
  const container = document.getElementById('achievements-grid');
  if (!container) return;

  container.innerHTML = portfolioData.achievements.map(ach => `
    <div class="achievement-card-premium glass-card-hover" data-aos="fade-up">
      <div class="achievement-icon-box">
        <i class="${ach.icon}"></i>
      </div>
      <span class="achievement-year">${ach.year}</span>
      <h3 class="achievement-title-premium">${ach.title}</h3>
      <p class="achievement-desc-premium">${ach.description}</p>
    </div>
  `).join('');
}


/* ---------------------------------------------------------------
   14. RENDER RESUME
--------------------------------------------------------------- */
function renderResume() {
  const container = document.getElementById('resume-content');
  if (!container) return;

  const { resumePath } = portfolioData.personal;
  container.innerHTML = `
    <div class="resume-card-premium glass-card-hover" data-aos="fade-up">
      <div class="resume-icon-box">
        <i class="fa-solid fa-file-pdf"></i>
      </div>
      <h3 class="text-2xl font-bold mb-4">Curriculum Vitae</h3>
      <p class="text-white/60 mb-8 max-w-md mx-auto">
        Download my updated resume to learn more about my education, experience, and certifications in one place.
      </p>
      <a href="${resumePath}" download class="btn-hero-primary" id="resume-download-btn">
        <i class="fa-solid fa-download"></i> Download Resume
        <span class="btn-hero-shine"></span>
      </a>
    </div>
  `;
}

/* ---------------------------------------------------------------
   15. RENDER CONTACT
--------------------------------------------------------------- */
function renderContact() {
  const container = document.getElementById('contact-content');
  if (!container) return;

  const { email, location, linkedin, github } = portfolioData.personal;
  container.innerHTML = `
    <div class="contact-layout">
      <!-- Info Column -->
      <div class="contact-info-premium" data-aos="fade-right">
        <div class="contact-item-premium">
          <div class="contact-item-icon"><i class="fa-solid fa-envelope"></i></div>
          <div class="contact-item-text">
            <h4>Email Me</h4>
            <p>${email}</p>
          </div>
        </div>
        <div class="contact-item-premium">
          <div class="contact-item-icon"><i class="fa-solid fa-location-dot"></i></div>
          <div class="contact-item-text">
            <h4>Location</h4>
            <p>${location}</p>
          </div>
        </div>
        <div class="contact-item-premium">
          <div class="contact-item-icon"><i class="fa-brands fa-linkedin"></i></div>
          <div class="contact-item-text">
            <h4>LinkedIn</h4>
            <p>Connect with me professionally</p>
            <a href="${linkedin}" target="_blank" class="text-accent hover:underline text-sm">View Profile</a>
          </div>
        </div>
        <div class="contact-item-premium">
          <div class="contact-item-icon"><i class="fa-brands fa-github"></i></div>
          <div class="contact-item-text">
            <h4>GitHub</h4>
            <p>Check out my open-source work</p>
            <a href="${github}" target="_blank" class="text-accent hover:underline text-sm">View GitHub</a>
          </div>
        </div>
      </div>

      <!-- Form Column -->
      <div class="contact-form-premium glass-card" data-aos="fade-left">
        <form id="portfolio-contact-form">
          <div class="form-group-premium">
            <label class="form-label-premium">Full Name</label>
            <input type="text" class="form-input-premium" placeholder="John Doe" required>
          </div>
          <div class="form-group-premium">
            <label class="form-label-premium">Email Address</label>
            <input type="email" class="form-input-premium" placeholder="john@example.com" required>
          </div>
          <div class="form-group-premium">
            <label class="form-label-premium">Message</label>
            <textarea class="form-input-premium" placeholder="Hi Abhishek, I'd like to talk about..." required></textarea>
          </div>
          <button type="submit" class="btn-hero-primary w-full">
            <i class="fa-solid fa-paper-plane"></i> Send Message
            <span class="btn-hero-shine"></span>
          </button>
        </form>
      </div>
    </div>
  `;
}

/* ---------------------------------------------------------------
   16. RENDER FOOTER
--------------------------------------------------------------- */
function renderFooter() {
  const el = document.getElementById('footer-content');
  if (!el) return;
  const year = new Date().getFullYear();
  el.innerHTML = `
    <p>© ${year} <span class="text-primary font-semibold">${portfolioData.personal.name}</span>. All rights reserved.</p>
  `;
}

/* ---------------------------------------------------------------
   17. EXPOSE DATA GLOBALLY (for section scripts)
--------------------------------------------------------------- */
window.portfolioData = portfolioData;




