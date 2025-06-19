// journal_detail.js

//  Blog Data
const blogPosts = [
  {
    slug: "ai-in-business",
    title: "AI in Business",
    date: "April 9, 2025",
    category: "Technology",
    image: "img/blog-2.jpg",
    author: "Peter Gathinji",
    content: `
      <p><strong>Artificial Intelligence (AI)</strong> is transforming industries and <em>reshaping the way businesses operate</em>. From automation to predictive analytics, AI provides a competitive edge.</p>
      <p>Businesses can integrate AI for customer service, like <a href="https://openai.com/chatgpt" target="_blank">ChatGPT</a>, or use machine learning models for fraud detection in finance.</p>
      <p><u>Future-ready companies are investing in AI</u> for sustainable growth and innovation.</p>
    `,
    resources: [
      { title: "AI for Business on Coursera", link: "https://www.coursera.org/learn/ai-for-business" },
      { title: "McKinsey AI Report 2023", link: "https://www.mckinsey.com/ai" }
    ],
    seo: {
      description: "Discover how AI is transforming modern businesses with real-world applications in automation, analytics, and customer engagement.",
      keywords: "AI in Business, Artificial Intelligence, Business Automation, Machine Learning, Data Analytics"
    }
  },
    {
    slug: "ai-in-businesss",
    title: "AI in Businesss",
    date: "April 99, 2025",
    category: "Technology",
    image: "img/blog-3.jpg",
    author: "Peter Gathinji",
    content: `
      <p><strong>Artificial Intelligence (AI)</strong> is transforming industries and <em>reshaping the way businesses operate</em>. From automation to predictive analytics, AI provides a competitive edge.</p>
      <p>Businesses can integrate AI for customer service, like <a href="https://openai.com/chatgpt" target="_blank">ChatGPT</a>, or use machine learning models for fraud detection in finance.</p>
      <p><u>Future-ready companies are investing in AI</u> for sustainable growth and innovation.</p>
    `,
    resources: [
      { title: "AI for Business on Coursera", link: "https://www.coursera.org/learn/ai-for-business" },
      { title: "McKinsey AI Report 2023", link: "https://www.mckinsey.com/ai" }
    ],
    seo: {
      description: "Discover how AI is transforming modern businesses with real-world applications in automation, analytics, and customer engagement.",
      keywords: "AI in Business, Artificial Intelligence, Business Automation, Machine Learning, Data Analytics"
    }
  },
  // Add more blog posts here...
];

//  Helper to Get Slug from URL
function getSlugFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('slug');
}


//Load Blog by Slug
function loadBlogPost() {
  const slug = getSlugFromURL();
  const post = blogPosts.find(b => b.slug === slug);


  //error page
  if (!post) {
  document.body.innerHTML = `
    <section class="text-center pt-5 mt-5" style="text-align:center;margin-top:100px;">
      <h2 class="text-primary mb-3">Oops! The page you’re looking for couldn’t be found.</h2>
      <p class="">We couldn't locate the article you are looking for. It might have been removed or never existed.</p>
      <a href="journal.html" class="btn mt-3" style="background: #000D21;color: white;transition: transition: background-color 0.3s ease, transform 0.3s ease;">Back to Journal</a>
    </section>
  `;
  document.title = "Error | Article Not Found ";
  return;
}


  // Dynamic Page Title
  document.title = `Eryx Digital | Journal | ${post.title}`;

  // Dynamic Meta for SEO
  setSEOMetadata(post.seo, post.title);

  // Breadcrumb
  const breadcrumbEl = document.querySelector('.breadcrumb-current');
  if (breadcrumbEl) breadcrumbEl.textContent = post.title;

  // Hero Image
  const heroImg = document.querySelector('.journal-hero-img');
  if (heroImg) heroImg.src = post.image;

  // Date
  const dateEl = document.querySelector('.journal-date');
  if (dateEl) dateEl.textContent = post.date;

  // Category
  const categoryEl = document.querySelector('.journal-category');
  if (categoryEl) categoryEl.textContent = post.category;

  // Title
  const titleEl = document.querySelector('.journal-title');
  if (titleEl) titleEl.textContent = post.title;

  // Content
  const contentEl = document.querySelector('.journal-content');
  if (contentEl) contentEl.innerHTML = post.content;

  // Resources
  const resourcesList = document.querySelector('.journal-resources-list');
  if (resourcesList && post.resources.length > 0) {
    resourcesList.innerHTML = '';
    post.resources.forEach(resource => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${resource.link}" target="_blank">${resource.title}</a>`;
      resourcesList.appendChild(li);
    });
  }

  // Author
  const authorEl = document.querySelector('.journal-author');
  if (authorEl) authorEl.textContent = post.author;

  // Social Share Buttons
  // const encodedURL = encodeURIComponent(window.location.href);
  // document.querySelector('.share-linkedin').href = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedURL}`;
  // document.querySelector('.share-x').href = `https://twitter.com/intent/tweet?url=${encodedURL}`;
  // document.querySelector('.share-facebook').href = `https://www.facebook.com/sharer/sharer.php?u=${encodedURL}`;
}

// Inject SEO Tags Dynamically
function setSEOMetadata(seo, title) {
  // Description
  let desc = document.querySelector('meta[name="description"]');
  if (!desc) {
    desc = document.createElement('meta');
    desc.name = "description";
    document.head.appendChild(desc);
  }
  desc.content = seo.description;

  // Keywords
  let keywords = document.querySelector('meta[name="keywords"]');
  if (!keywords) {
    keywords = document.createElement('meta');
    keywords.name = "keywords";
    document.head.appendChild(keywords);
  }
  keywords.content = seo.keywords;

  // Open Graph Meta
  const ogTitle = document.createElement('meta');
  ogTitle.setAttribute('property', 'og:title');
  ogTitle.content = `Eryx Digital | Journal | ${title}`;
  document.head.appendChild(ogTitle);

  const ogDescription = document.createElement('meta');
  ogDescription.setAttribute('property', 'og:description');
  ogDescription.content = seo.description;
  document.head.appendChild(ogDescription);

  const ogURL = document.createElement('meta');
  ogURL.setAttribute('property', 'og:url');
  ogURL.content = window.location.href;
  document.head.appendChild(ogURL);
}

// Initialize
document.addEventListener('DOMContentLoaded', loadBlogPost);
