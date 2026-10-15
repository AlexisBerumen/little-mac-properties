(() => {
  const originals = new Map();
  const remember = (selector) => document.querySelectorAll(selector).forEach((node) => originals.set(node, node.innerHTML));
  const selectors = [
    '.draft-banner', '.site-header nav a', '.header-cta', '.hero-copy .eyebrow', '.hero-copy h1', '.hero-text', '.hero-actions a', '.hero-note',
    '.intro .eyebrow', '.intro h2', '.intro-grid div p', '.intro-grid .text-link', '.snapshot strong', '.snapshot p',
    '.pathways-heading .eyebrow', '.pathways-heading h2', '.pathways-heading>p:last-child', '.pathway span', '.pathway h3', '.pathway p', '.pathway b',
    '.services .service-card .eyebrow', '.services .service-card h2', '.services .service-copy', '.services .button',
    '.gallery-heading .eyebrow', '.gallery-heading h2', '.gallery-heading>p:last-child', '.gallery-card-copy small', '.gallery-card-copy strong',
    '.featured-yard .eyebrow', '.featured-yard h2', '.featured-yard-heading>p', '.yard-gallery-main small', '.yard-gallery-main strong', '.yard-status', '.yard-features li', '.yard-contact-label', '.yard-actions a',
    '.sample-gallery-heading .eyebrow', '.sample-gallery-heading h2', '.sample-gallery-heading>p:last-child', '.sample-listing span', '.sample-listing h3', '.sample-listing p', '.sample-open',
    '.process-header .eyebrow', '.process-header h2', '.steps h3', '.steps p', '.details-intro .eyebrow', '.details-intro h2', '.details-intro>p:last-child', '.detail-list span', '.detail-list p',
    '.faq .eyebrow', '.faq h2', '.faq summary', '.faq details p', '.contact .eyebrow', '.contact h2', '.contact>p:not(.eyebrow):not(.demo-note)', '.contact .button-rust', '.contact .demo-note', 'footer p', '.back-top'
  ];
  selectors.forEach(remember);

  const english = {
    '.draft-banner': '<span>●</span> Presentation draft <small>Content, availability, and contact details are subject to confirmation.</small>',
    '.site-header nav a': ['Your path', 'Homes', 'Rentals', 'Yards', 'How it works'],
    '.header-cta': 'Let’s talk <span>↗</span>',
    '.hero-copy .eyebrow': 'Welcome to Hobbs, New Mexico',
    '.hero-copy h1': 'A place for today.<br /><em>A plan for tomorrow.</em>',
    '.hero-text': 'Buy, rent a home, or find a yard for your operation. It all starts with a local conversation.',
    '.hero-actions a': ['Explore options <span>→</span>', 'I want to rent <span>↓</span>'],
    '.hero-note': '<span class="pulse"></span> Local support, without the runaround',
    '.intro .eyebrow': 'Your next place starts here',
    '.intro h2': 'Your next step deserves <em>a nearby ally.</em>',
    '.intro-grid div p': 'Little Mac is a local real estate company for buying, renting, or finding the operational space you need in Hobbs.',
    '.intro-grid .text-link': 'Meet our team <span>→</span>',
    '.snapshot strong': ['Three ways to move forward', 'Support in Hobbs, NM', 'Details to be confirmed'],
    '.snapshot p': ['Buy, rent, or find operational space.', 'A local conversation to guide your next step.', 'Inventory, prices, and terms are shared directly.'],
    '.pathways-heading .eyebrow': 'Choose your path',
    '.pathways-heading h2': 'What are you looking for <em>today?</em>',
    '.pathways-heading>p:last-child': 'This draft is organized around the conversations we want to have with you.',
    '.pathway span': ['01 · Home', '02 · Home', '03 · Operational space'],
    '.pathway h3': ['I want to buy', 'I want to rent', 'I need a yard'],
    '.pathway p': ['I’m looking for a home to settle into or take my next step.', 'I need a home that fits my current moment.', 'I want to buy or rent space for equipment, operations, or storage.'],
    '.pathway b': ['View home buying →', 'View home rentals →', 'View yard options →'],
    '.services .service-card .eyebrow': ['Home buying', 'Home rentals', 'Yard sales & rentals'],
    '.services .service-card h2': ['Find the one that<br /><em>feels right.</em>', 'Your next home,<br /><em>without waiting.</em>', 'A lot that<br /><em>fits your needs.</em>'],
    '.services .service-copy': ['From your first visit to the moment you receive the keys, we help you look for a home that fits your plans.', 'Find a rental home that fits your pace, your household, and the moment you’re in.', 'Explore yards for purchase or rental: practical space for storage, equipment, work, or operations.'],
    '.services .button': ['I want to buy <span>→</span>', 'I want to rent <span>→</span>', 'I want to buy or rent <span>→</span>'],
    '.gallery-heading .eyebrow': 'Presentation gallery',
    '.gallery-heading h2': 'Picture the kind of space <em>you’re after.</em>',
    '.gallery-heading>p:last-child': 'These images are visual references for this presentation. They do not represent available properties or sale and rental terms.',
    '.gallery-card-copy small': ['01 · Home buying', '02 · Home rentals', '03 · Yard sales & rentals'],
    '.gallery-card-copy strong': ['View reference <b>↗</b>', 'View reference <b>↗</b>', 'View reference <b>↗</b>'],
    '.featured-yard .eyebrow': 'Available now · Hobbs, NM',
    '.featured-yard h2': 'Commercial yard<br /><em>ready for operations.</em>',
    '.featured-yard-heading>p': 'A real rental option for contractors, equipment storage, and truck or trailer parking.',
    '.yard-gallery-main small': 'Property gallery',
    '.yard-gallery-main strong': 'View all 3 photos <b>↗</b>',
    '.yard-status': '3 acres · level lot · fenced',
    '.yard-features li': ['Gravel surface', 'Truck & trailer access', 'Ideal for equipment, materials, or fleet parking', 'Water, drainage, and electricity', 'High visibility'],
    '.yard-contact-label': 'Check availability or schedule a visit:',
    '.yard-actions a': ['Call (575) 602-8120 <span>→</span>', '(575) 665-8547', 'Send email'],
    '.sample-gallery-heading .eyebrow': 'Sample property cards',
    '.sample-gallery-heading h2': 'A closer look, <em>without assuming availability.</em>',
    '.sample-gallery-heading>p:last-child': 'Each card opens a short presentation gallery. These are visual examples: not listings, not priced, and not real properties.',
    '.sample-listing span': ['Sample home 01', 'Sample home 02', 'Sample yard 01'],
    '.sample-listing h3': ['Home buying', 'Home rentals', 'Yard sales or rentals'],
    '.sample-listing p': ['Exterior and interior examples to visualize the kind of conversation we can start.', 'Living room and bedroom examples to present possible rental-home styles.', 'Space and access examples to explain operational needs to consider.'],
    '.sample-open': ['Open gallery <b>→</b>', 'Open gallery <b>→</b>', 'Open gallery <b>→</b>'],
    '.process-header .eyebrow': 'A simple path',
    '.process-header h2': 'From conversation to <em>the key.</em>',
    '.steps h3': ['Tell us your plan', 'Review options', 'Move forward with clarity'],
    '.steps p': ['We discuss what you need, where, and by when.', 'We help focus the search and review options that make sense.', 'We stay with you through the next steps so you can decide confidently.'],
    '.details-intro .eyebrow': 'Details we confirm with you',
    '.details-intro h2': 'The right information, <em>at the right time.</em>',
    '.details-intro>p:last-child': 'Instead of showing information that may change, this draft opens the conversation and makes clear what we will review together.',
    '.detail-list span': ['Home buying', 'Home rentals', 'Yard sales or rentals'],
    '.detail-list p': ['Preferred area, home type, budget, and estimated timing.', 'Space needs, location, length of stay, and move-in date.', 'Intended use, required dimensions, access, and operational timeline.'],
    '.faq .eyebrow': 'Frequently asked questions',
    '.faq h2': 'Clear from<br /><em>the start.</em>',
    '.faq summary': ['What does Little Mac offer?', 'Where can I see properties or prices?', 'Can I ask for help if I don’t know exactly what I need?'],
    '.faq details p': ['This draft presents home buying and rentals, along with yard sales and rentals in Hobbs, NM.', 'Inventory and terms are confirmed directly with Little Mac; this presentation does not show example listings or prices.', 'Yes. The first conversation helps us understand your plan and guide the search or type of space that may work for you.'],
    '.contact .eyebrow': 'Little Mac · Hobbs, NM',
    '.contact h2': 'Shall we start<br /><em>with a conversation?</em>',
    '.contact>p:not(.eyebrow):not(.demo-note)': 'Tell us whether you want to buy, rent a home, or rent a yard. We’ll help you identify the right next step.',
    '.contact .button-rust': 'Call Little Mac <span>→</span>',
    '.contact .demo-note': 'Direct contact for available homes and yards.',
    'footer p': 'Homes and yards, with a local perspective.',
    '.back-top': 'Back to top ↑'
  };

  const englishGallery = [
    ['Reference · Home buying', 'Visual example of a residential home. Availability and details are confirmed directly with Little Mac.'],
    ['Reference · Home rentals', 'Visual example of a residential interior. This material does not represent an available unit.'],
    ['Reference · Yard purchase or rental', 'Visual example of a fenced yard. Dimensions, use, and availability are confirmed directly with Little Mac.'],
    ['Commercial yard for rent · Hobbs, NM', 'Available 3-acre property. Confirm availability, terms, and a visit directly with Little Mac.'],
    ['Sample home 01', 'Sample gallery for home buying. The images are visual references and do not represent an available property.'],
    ['Sample home 02', 'Sample gallery for home rentals. The images are visual references and do not represent an available unit.'],
    ['Sample yard 01', 'Sample gallery for a yard. Dimensions, use, and availability are confirmed directly with Little Mac.']
  ];
  document.querySelectorAll('[data-gallery-title]').forEach((card, index) => {
    const [title, caption] = englishGallery[index] || [];
    card.dataset.enGalleryTitle = title || '';
    card.dataset.enGalleryCaption = caption || '';
  });

  const imageAlts = [...document.querySelectorAll('.gallery-card img, .featured-yard img, .sample-listing > img')].map((image) => image.alt);
  const englishImageAlts = [
    'Modern residential home with a landscaped front yard',
    'Bright living room in a rental-style home',
    'Fenced operational yard with wide access',
    'Gated access to the fenced commercial yard in Hobbs',
    'Sample home exterior for a buying conversation',
    'Sample home interior for a rental conversation',
    'Sample operational yard with equipment access'
  ];
  const navigation = document.querySelector('.site-header nav');
  const skipLink = document.querySelector('.skip-link');
  const contactButton = document.querySelector('.contact .button-rust');
  const spanishContactHref = contactButton?.getAttribute('href');

  const apply = (language) => {
    const isEnglish = language === 'en';
    document.documentElement.lang = language;
    document.title = isEnglish ? 'Little Mac Properties LLC | Presentation Draft' : 'Little Mac Properties LLC | Borrador de presentación';
    document.querySelector('meta[name="description"]')?.setAttribute('content', isEnglish ? 'Little Mac Properties LLC presentation draft: homes and yards for sale or rent in Hobbs, New Mexico.' : 'Borrador de Little Mac Properties LLC: viviendas y yardas para venta o renta en Hobbs, Nuevo México.');
    Object.entries(english).forEach(([selector, value]) => {
      const nodes = [...document.querySelectorAll(selector)];
      nodes.forEach((node, index) => { node.innerHTML = isEnglish ? (Array.isArray(value) ? value[index] : value) : originals.get(node); });
    });
    document.querySelectorAll('.gallery-card img, .featured-yard img, .sample-listing > img').forEach((image, index) => {
      image.alt = isEnglish ? englishImageAlts[index] : imageAlts[index];
    });
    if (navigation) navigation.setAttribute('aria-label', isEnglish ? 'Main navigation' : 'Navegación principal');
    if (skipLink) skipLink.textContent = isEnglish ? 'Skip to content' : 'Ir al contenido';
    if (contactButton) contactButton.setAttribute('href', isEnglish ? 'tel:+15756028120' : spanishContactHref);
    document.querySelectorAll('[data-language]').forEach((button) => button.classList.toggle('is-active', button.dataset.language === language));
    localStorage.setItem('little-mac-language', language);
  };

  document.querySelectorAll('[data-language]').forEach((button) => button.addEventListener('click', () => apply(button.dataset.language)));
  apply(localStorage.getItem('little-mac-language') || 'en');
})();
