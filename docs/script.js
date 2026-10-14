// Portfolio content adapted from https://www.tanvikhot.com/.
// Edit these command responses to keep the portfolio up to date.
const descriptions = {
  help: 'Your guide to this little corner of the internet',
  bio: 'A little about me',
  projects: 'Things I’ve built and explored',
  experience: 'Where I’ve worked and learned',
  skills: 'Tools in my toolkit',
  miscellaneous: 'Life beyond the keyboard',
  resume: 'Read my résumé',
  contact: 'Email, LinkedIn, and GitHub',
  clear: 'Start with a clean terminal',
  history: 'Commands from this session',
  welcome: 'Bring back the welcome screen',
};
const smiskiLink = '<p><a href="https://tanvikhot.com/smiski" target="_blank" rel="noopener noreferrer">Explore Online Smiskis ↗</a></p>';
const responses = {
  resume: `<h2>Résumé</h2><p><a href="${portfolioContent.resume}" target="_blank" rel="noopener noreferrer">Read my résumé on Google Docs ↗</a></p>`,
  contact: `<h2>Let’s connect</h2><p><a href="mailto:${portfolioContent.email}">${portfolioContent.email}</a> · <a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=${encodeURIComponent(portfolioContent.email)}" target="_blank" rel="noopener noreferrer">Compose in Gmail ↗</a></p><p><a href="${portfolioContent.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></p><p><a href="${portfolioContent.github}" target="_blank" rel="noopener noreferrer">GitHub ↗</a></p><p><a href="${portfolioContent.resume}" target="_blank" rel="noopener noreferrer">Résumé ↗</a></p>`,
  bio: portfolioContent.bio,
  projects: `<h2>Selected projects</h2><p>A few intersections of data, engineering, and curiosity.</p><h3>01 / Knowledge editing in LLMs</h3><p>Research with the Berkeley Speech Group exploring whether newly added facts and related knowledge persist in language models, building on ROME, MEND, and MEMIT.</p><div class="meta">BERKELEY SPEECH GROUP · LLMs / NLP</div><h3>02 / Startup discovery · Valuenex</h3><p>Gathered startup information with Selenium and used the ChatGPT API to inform evaluations. Developed a statistical model to estimate company uniqueness for a startup finder.</p><div class="meta">BIG DATA @ BERKELEY · DATA SCIENCE</div><h3>03 / Smarter distribution · American Eagle</h3><p>Used SKU description embeddings and linear programming to optimize product assortments and reduce distribution shipping costs.</p><div class="meta">BIG DATA @ BERKELEY · OPTIMIZATION</div><h3>04 / Medical image quality · Intuitive Surgical</h3><p>Filtered blurry medical images with computer vision and explored patterns in the cleaned data using clustering and PCA.</p><div class="meta">BIG DATA @ BERKELEY · COMPUTER VISION</div><h3>05 / Campus discovery · Flyerstack</h3><p>Led development of a cross-platform React Native app for discovering Berkeley events, with Firebase powering user and event data.</p><div class="meta">REACT NATIVE · FIREBASE</div>`,
  experience: portfolioContent.experience,
  skills: `<h2>My toolkit</h2><h3>Languages</h3><div class="tags">${['Python', 'JavaScript', 'Java', 'C', 'Go', 'Groovy', 'SQL', 'HTML5', 'CSS3'].map(tag => `<span class="tag">${tag}</span>`).join('')}</div><h3>Data & machine learning</h3><div class="tags">${['PyTorch', 'NumPy', 'Pandas', 'NLP', 'Computer vision'].map(tag => `<span class="tag">${tag}</span>`).join('')}</div><h3>Applications & infrastructure</h3><div class="tags">${['React Native', 'Node.js', 'MongoDB', 'SQLite', 'NoSQL', 'Firebase', 'AWS', 'Docker', 'Jenkins', 'Grafana'].map(tag => `<span class="tag">${tag}</span>`).join('')}</div>`,
  miscellaneous: `<h2>Beyond the keyboard ✳</h2><h3>Online Smiskis</h3><p>I love collecting trinkets, and Smiskis are some of my favorites. I got all my friends collecting them too, so I made this website for us to unbox a Smiski without the financial hit (haha).</p>${smiskiLink}<h3>A different kind of canvas</h3><p>I paint. Sometimes it’s nice to make something without a compiler involved.</p><h3>Off-screen time</h3><p>You can find me playing basketball and collecting cool trinkets. Small objects, lots of personality.</p><h3>A memorable detour</h3><p>In 2019, a Swift playground took me to Apple’s WWDC as a scholar — including interviews with Tim Cook.</p>`,
};
const output = document.querySelector('#output');
const input = document.querySelector('#command');
const terminal = document.querySelector('#terminal');
const welcome = document.querySelector('#welcome');
const history = [];
let historyIndex = 0;
let draft = '';
const aliases = { about: 'bio', whoami: 'bio', misc: 'miscellaneous', ls: 'help', '?': 'help', work: 'experience', cv: 'resume', links: 'contact', email: 'contact', socials: 'contact' };
function escapeHTML(value) {
  return value.replace(/[&<>"']/g, character => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[character]));
}
function focusPrompt() {
  input.focus({preventScroll:true});
  terminal.scrollTop = terminal.scrollHeight;
}
function runCommand(raw) {
  const typed = raw.trim();
  if (!typed) return;
  history.push(typed);
  historyIndex = history.length;
  draft = '';
  input.value = '';
  const command = aliases[typed.toLowerCase()] || typed.toLowerCase();
  if (command === 'clear') {
    output.replaceChildren();
    welcome.hidden = true;
    focusPrompt();
    return;
  }
  if (command === 'welcome') {
    output.replaceChildren();
    welcome.hidden = false;
    focusPrompt();
    return;
  }
  const entry = document.createElement('section');
  entry.className = 'output-entry';
  const echo = document.createElement('div');
  echo.className = 'echo';
  const prefix = document.createElement('span');
  prefix.textContent = 'visitor@tanvi ~ ❯';
  echo.append(prefix, document.createTextNode(typed));
  const result = document.createElement('div');
  result.className = 'result';
  if (command === 'help') {
    result.innerHTML = '<h2>A few things you can ask me</h2>' + Object.entries(descriptions).map(([name, description]) => `<div class="help-row"><code>${name}</code><span>${description}</span></div>`).join('') + '<p class="meta">Type a command below and press Enter. Aliases: about, whoami, misc, ls, work, cv, links, email, socials.</p>';
  } else if (command === 'history') {
    result.innerHTML = history.map((item, i) => `<div><span class="meta">${String(i + 1).padStart(2, '0')}</span> &nbsp; ${escapeHTML(item)}</div>`).join('');
  } else if (Object.hasOwn(responses, command)) {
    result.innerHTML = responses[command];
  } else {
    const matches = Object.keys(descriptions).filter(name => name.startsWith(command.slice(0, 2)));
    result.innerHTML = `<p class="error">Command not found: ${escapeHTML(typed)}</p><p>${matches.length ? `Did you mean <code>${matches[0]}</code>?` : 'Type <code>help</code> to see available commands.'}</p>`;
  }
  entry.append(echo, result);
  output.append(entry);
  input.focus({preventScroll:true});
  // Keep the start of long answers visible, rather than jumping past their content.
  terminal.scrollTop = Math.max(0, entry.offsetTop - terminal.offsetTop - 20);
}
document.querySelector('#command-form').addEventListener('submit', event => {
  event.preventDefault();
  runCommand(input.value);
});
input.addEventListener('keydown', event => {
  if (event.key === 'Tab' && !event.shiftKey && input.value.trim()) {
    const matches = Object.keys(descriptions).filter(command => command.startsWith(input.value.trim().toLowerCase()));
    if (matches.length === 1) { event.preventDefault(); input.value = matches[0]; }
  } else if (event.key === 'ArrowUp') {
    event.preventDefault();
    if (historyIndex === history.length) draft = input.value;
    historyIndex = Math.max(0, historyIndex - 1);
    input.value = history[historyIndex] ?? draft;
  } else if (event.key === 'ArrowDown') {
    event.preventDefault();
    historyIndex = Math.min(history.length, historyIndex + 1);
    input.value = historyIndex === history.length ? draft : history[historyIndex];
  } else if (event.ctrlKey && event.key.toLowerCase() === 'l') {
    event.preventDefault();
    runCommand('clear');
  } else if (event.ctrlKey && event.key.toLowerCase() === 'c') {
    if (!window.getSelection().toString()) { event.preventDefault(); input.value = ''; }
  }
});
document.querySelector('#year').textContent = new Date().getFullYear();
function updateClock() { document.querySelector('#clock').textContent = new Intl.DateTimeFormat('en', {hour:'2-digit', minute:'2-digit', hour12:false}).format(new Date()); }
updateClock();
setInterval(updateClock, 60000);
// Avoid opening a mobile keyboard on page load.
if (window.matchMedia('(pointer: fine)').matches) input.focus({preventScroll:true});
