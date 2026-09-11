// ==================== PRELOADER ====================
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  setTimeout(() => {
    preloader.style.opacity = "0";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 700);
  }, 1500);

  // Initialize properties
  renderProperties(properties);
});

// ==================== NAVBAR SCROLL BEHAVIOR ====================
const navbar = document.getElementById("navbar");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  // Add/remove scrolled class
  if (currentScroll > 80) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }

  // Active nav link
  updateActiveNavLink();

  lastScroll = currentScroll;
});

// ==================== ACTIVE NAV LINK ====================
function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (window.pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

// ==================== MOBILE MENU ====================
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");

mobileMenuBtn.addEventListener("click", () => {
  const isOpen = !mobileMenu.classList.contains("translate-x-full");

  if (isOpen) {
    closeMobileMenu();
  } else {
    mobileMenu.classList.remove("translate-x-full");
    mobileMenu.classList.add("translate-x-0");
    mobileMenuBtn.classList.add("mobile-menu-open");
    document.body.style.overflow = "hidden";
  }
});

function closeMobileMenu() {
  mobileMenu.classList.add("translate-x-full");
  mobileMenu.classList.remove("translate-x-0");
  mobileMenuBtn.classList.remove("mobile-menu-open");
  document.body.style.overflow = "";
}

// Close mobile menu on escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeMobileMenu();
    closePropertyModal();
    if (chatbotOpen) toggleChatbot();
  }
});

// ==================== SCROLL ANIMATIONS ====================
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observerInstance = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document.querySelectorAll(".scroll-animate").forEach((el) => {
  observerInstance.observe(el);
});

// ==================== FAQ ACCORDION ====================
function toggleFaq(btn) {
  const item = btn.closest(".faq-item");
  const content = item.querySelector(".faq-content");
  const isActive = item.classList.contains("active");

  // Close all FAQ items
  document.querySelectorAll(".faq-item").forEach((faq) => {
    faq.classList.remove("active");
    faq.querySelector(".faq-content").classList.add("hidden");
    faq.querySelector(".faq-content").style.maxHeight = "0";
  });

  // Toggle current
  if (!isActive) {
    item.classList.add("active");
    content.classList.remove("hidden");
    content.style.maxHeight = content.scrollHeight + "px";
  }
}

// ==================== CONTACT FORM - WHATSAPP ====================
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("contactName").value;
  const phone = document.getElementById("contactPhone").value;
  const email = document.getElementById("contactEmail").value;
  const interest = document.getElementById("contactInterest").value;
  const budget = document.getElementById("contactBudget").value;
  const message = document.getElementById("contactMessage").value;

  if (!name || !phone) {
    alert("Please fill in your name and phone number.");
    return;
  }

  const whatsappMsg = `Hello Vittara! 🏠

*New Enquiry from Website*

👤 *Name:* ${name}
📱 *Phone:* ${phone}
📧 *Email:* ${email || "Not provided"}
🎯 *Interest:* ${interest}
💰 *Budget:* ${budget}

💬 *Message:*
${message || "I would like to know more about your properties."}

Please get in touch with me at the earliest. Thank you!`;

  window.open(
    `https://wa.me/919876543210?text=${encodeURIComponent(whatsappMsg)}`,
    "_blank",
  );

  // Reset form
  this.reset();

  // Show success feedback
  const btn = this.querySelector('button[type="submit"]');
  const originalHTML = btn.innerHTML;
  btn.innerHTML =
    '<i class="fas fa-check-circle text-xl"></i><span>Message Sent!</span>';
  btn.classList.add("bg-green-500");
  btn.classList.remove("bg-navy");

  setTimeout(() => {
    btn.innerHTML = originalHTML;
    btn.classList.remove("bg-green-500");
    btn.classList.add("bg-navy");
  }, 3000);
});

// ==================== SMOOTH SCROLL FOR ALL ANCHOR LINKS ====================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href === "#") return;

    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const position =
        target.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top: position,
        behavior: "smooth",
      });
    }
  });
});

// ==================== PREVENT HORIZONTAL OVERFLOW ====================
document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.style.overflowX = "hidden";
  document.body.style.overflowX = "hidden";
});

// ==================== RESIZE HANDLER ====================
let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    if (window.innerWidth >= 1024) {
      closeMobileMenu();
    }
  }, 250);
});

// ==================== LOCATION FILTER ====================
const locationButtons = document.querySelectorAll(".location-btn");
const locationCards = document.querySelectorAll(".location-card");

locationButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    locationButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    locationCards.forEach((card) => {
      if (filter === "all" || card.dataset.location === filter) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});
