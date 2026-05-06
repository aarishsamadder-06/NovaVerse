let currentPage = 'landing';
let currentRole = 'student';
let signupRole = 'student';

function goTo(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  document.getElementById('page-' + page).classList.remove('hidden');
  currentPage = page;
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  window.scrollTo(0, 0);
}

function setAuthRole(role) {
  currentRole = role;
  document.getElementById('tab-student').classList.toggle('active', role === 'student');
  document.getElementById('tab-teacher').classList.toggle('active', role === 'teacher');
}

function selectRole(role) {
  signupRole = role;
  document.getElementById('role-student').classList.toggle('selected', role === 'student');
  document.getElementById('role-teacher').classList.toggle('selected', role === 'teacher');
  const tf = document.getElementById('teacher-fields');
  if(role === 'teacher') tf.classList.remove('hidden');
  else tf.classList.add('hidden');
}

function handleSignIn() {
  const btn = document.getElementById('signin-btn');
  btn.textContent = 'ENTERING...';
  setTimeout(() => {
    if(currentRole === 'teacher') goTo('teacher');
    else goTo('student');
    btn.textContent = 'ACCESS CAMPUS →';
  }, 600);
}

function handleSignUp() {
  setTimeout(() => {
    if(signupRole === 'teacher') goTo('teacher');
    else goTo('student');
  }, 400);
}

function setCSTab(tab) {
  document.querySelectorAll('.cs-tab').forEach(t => t.classList.remove('active'));
  document.getElementById(tab+'-tab').classList.add('active');
}

function buildParticles() {
  const container = document.getElementById('particles');
  const colors = ['rgba(0,245,255,', 'rgba(168,85,247,', 'rgba(255,0,128,'];
  for(let i = 0; i < 35; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.random() * 4 + 1;
    p.style.cssText = `
      left:${Math.random()*100}%;
      width:${size}px;height:${size}px;
      background:${color + (Math.random()*0.6+0.2)});
      animation-duration:${Math.random()*15+8}s;
      animation-delay:${Math.random()*10}s;
    `;
    container.appendChild(p);
  }
}

function buildHeatmap() {
  const hm = document.getElementById('heatmap');
  if (!hm) return;
  const vals = [0.1,0.5,0.8,0.3,0.9,0.6,0.2,0.7,0.4,0.95,0.3,0.6,0.8,0.5,0.2,0.7,0.9,0.4,0.6,0.3,0.8,0.5,0.7,0.2,0.9,0.4,0.6,0.8];
  const days = ['M','T','W','T','F','S','S'];
  days.forEach(d => {
    const label = document.createElement('div');
    label.style.cssText = 'font-size:0.62rem;color:var(--nc-muted);text-align:center;padding:2px 0;font-family:Space Mono,monospace';
    label.textContent = d;
    hm.appendChild(label);
  });
  vals.forEach(v => {
    const cell = document.createElement('div');
    cell.className = 'hm-cell';
    cell.style.background = `rgba(0,245,255,${v})`;
    cell.title = `${Math.round(v*100)}% engagement`;
    hm.appendChild(cell);
  });
}

buildParticles();
buildHeatmap();

document.querySelectorAll('.chip').forEach(chip => {
  chip.addEventListener('click', function() {
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    this.classList.add('active');
  });
});

document.querySelectorAll('.wb-tool').forEach(tool => {
  tool.addEventListener('click', function() {
    document.querySelectorAll('.wb-tool').forEach(t => t.classList.remove('active'));
    this.classList.add('active');
  });
});