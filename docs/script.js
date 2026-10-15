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
  miscellaneous: `<h2>Beyond the keyboard ✳</h2><h3>Online Smiskis</h3><p>I love collecting trinkets, and Smiskis are some of my favorites. I got all my friends collecting them too, so I made this website for us to unbox a Smiski without the financial hit (haha).</p>${smiskiLink}<h3>A different kind of canvas</h3><p>I paint and sculpt. Here are a few things I’ve made.</p><div class="art-gallery" aria-label="Selected paintings and sculptures"><figure class="artwork"><img src="images/artwork/smiski-sculpture.jpg" alt="A handmade clay mini-me with a Sonny Angel body" loading="lazy" decoding="async"><figcaption>Created a mini-me using clay and a Sonny Angel body. This went semi-viral on Pinterest!</figcaption></figure><figure class="artwork"><img src="images/artwork/frog-pond-painting.jpg" alt="A Monet-inspired pond with lily pads and two frogs" loading="lazy" decoding="async"><figcaption>My first attempt at a little Monet-style lily-pad painting, made for a friend.</figcaption></figure><figure class="artwork"><img src="images/artwork/still-life-painting.jpg" alt="A cozy, blue-toned still life of fruit and glass bottles" loading="lazy" decoding="async"><figcaption>A still life where I tried to evoke cozy, warm vibes.</figcaption></figure><figure class="artwork"><img src="images/artwork/pair-of-figures.jpg" alt="Two custom banana-monkey Sonny Angel sculptures" loading="lazy" decoding="async"><figcaption>Two custom banana-monkey Sonny Angels I sculpted from clay because the real ones go for over a thousand dollars! X(</figcaption></figure><figure class="artwork"><img src="images/artwork/polymer-clay-miniatures.jpg" alt="Polymer-clay food miniatures laid out on a poodle" loading="lazy" decoding="async"><figcaption>A set of polymer-clay food minis expertly laid out on my poodle.</figcaption></figure><figure class="artwork"><img src="images/artwork/floral-painting.jpg" alt="An unfinished study of abstract, luminous flowers" loading="lazy" decoding="async"><figcaption>An incomplete study of abstract, luminescent flowers.</figcaption></figure><figure class="artwork"><img src="images/artwork/cityscape-painting.jpg" alt="A painted city inspired by the animated series Hilda" loading="lazy" decoding="async"><figcaption>A still from my favorite series, <em>Hilda</em> (I totally recommend it!).</figcaption></figure><figure class="artwork"><img src="images/artwork/portrait-painting.jpg" alt="A painted portrait of my little sister" loading="lazy" decoding="async"><figcaption>A quick study of my little sister.</figcaption></figure><figure class="artwork"><img src="images/artwork/sonny-angel-painting.jpg" alt="A painting of a Sonny Angel against a bright blue background" loading="lazy" decoding="async"><figcaption>A painting born from the passion and pain of not being able to spend a thousand dollars on a Sonny Angel (aka a small plastic toy).</figcaption></figure><figure class="artwork"><img src="images/artwork/cat-still-life.jpg" alt="A warm painted corner where my dog naps in the sun" loading="lazy" decoding="async"><figcaption>A warm, cozy corner where my dog loves to sleep and catch sun rays, immortalized in paint.</figcaption></figure><figure class="artwork"><img src="images/artwork/artist-with-painting.jpg" alt="Me posing beside a painting made as a wedding gift" loading="lazy" decoding="async"><figcaption>Me posing next to a wedding gift I made of the couple’s proposal spot.</figcaption></figure><figure class="artwork"><img src="images/artwork/street-scene-painting.jpg" alt="A painted view of my old college apartment" loading="lazy" decoding="async"><figcaption>My old college apartment, painted as a gift for a roommate.</figcaption></figure><figure class="artwork"><img src="images/artwork/landscape-painting.jpg" alt="A painted soccer field beneath a bright sky" loading="lazy" decoding="async"><figcaption>A soccer field, painted as a gift.</figcaption></figure><figure class="artwork"><img src="images/artwork/martini-still-life.jpg" alt="A painted martini glass beside a warm lamp" loading="lazy" decoding="async"><figcaption>Inspired by old New York vibes from a book I was reading.</figcaption></figure><figure class="artwork"><img src="images/artwork/beach-painting.jpg" alt="A painted ocean coast with flowers in the foreground" loading="lazy" decoding="async"><figcaption>A pretty ocean coast I painted.</figcaption></figure></div><h3>Always up for some physical activity</h3><p>I love staying active and play in basketball rec teams any chance I get. I also love to run. I started running in early 2025, completed two half marathons, and then recently ran the San Francisco Marathon.</p><figure class="running-feature"><img src="images/sf-marathon.jpg" alt="Tanvi celebrating after the San Francisco Marathon" loading="lazy" decoding="async"><figcaption>San Francisco Marathon finish day</figcaption></figure><h3>In my high school years</h3><p>I created a Swift playground that earned me a scholarship to Apple’s 2019 WWDC. I did interviews with <a href="https://www.bustle.com/p/3-women-under-18-in-stem-you-need-to-know-about-right-now-17913315" target="_blank" rel="noopener noreferrer">Bustle</a>, <a href="https://www.linkedin.com/in/tanvi-khot/overlay/1586663790033/single-media-viewer?type=LINK&amp;profileId=ACoAACCC_n0BzSWKfzWNw7Q_KHGMO2bHiebcoBM&amp;lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B%2FxS1dy%2B9T2yyYzyAeywf0w%3D%3D" target="_blank" rel="noopener noreferrer">Refinery29</a>, and <a href="https://www.youtube.com/watch?v=qsWFDFkpAnw" target="_blank" rel="noopener noreferrer">iJustine</a> — including doing an interview with Tim Cook.</p><figure class="running-feature"><img src="images/tim-cook-conversation.jpg" alt="Tanvi speaking with Tim Cook at Apple’s Worldwide Developers Conference" loading="lazy" decoding="async"><figcaption>A conversation with Tim Cook</figcaption></figure>`,
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
