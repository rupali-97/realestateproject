// ==================== PROPERTY DATA ====================
const properties = [
  {
    id: 1,
    title: "Luxe Horizon Residences",
    location: "kharadi",
    area: "Kharadi, Pune",
    type: "apartment",
    bhk: "3",
    price: "1.45 Cr",
    priceRange: "120-200",
    sqft: "1,850",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
    ],
    badge: "Premium",
    badgeColor: "bg-gold text-navy",
    beds: 3,
    baths: 3,
    parking: 2,
    status: "Ready to Move",
    amenities: [
      "Swimming Pool",
      "Gym",
      "Club House",
      "Garden",
      "24/7 Security",
      "Power Backup",
      "Children's Play Area",
      "Jogging Track",
    ],
    description:
      "Experience luxury living at its finest in this meticulously designed 3 BHK apartment in the heart of Kharadi. With premium finishes, spacious rooms, and world-class amenities, Luxe Horizon sets a new benchmark in upscale living.",
    highlights: [
      "Italian marble flooring",
      "Modular kitchen with chimney",
      "VRV air conditioning",
      "Smart home automation",
      "Private terrace garden",
    ],
    rera: "P52100012345",
    developer: "Godrej Properties",
  },
  {
    id: 2,
    title: "Royal Palm Villa",
    location: "baner",
    area: "Baner, Pune",
    type: "villa",
    bhk: "4",
    price: "3.20 Cr",
    priceRange: "200+",
    sqft: "3,500",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80",
    ],
    badge: "Exclusive",
    badgeColor: "bg-navy text-gold",
    beds: 4,
    baths: 5,
    parking: 3,
    status: "Under Construction",
    amenities: [
      "Private Pool",
      "Home Theater",
      "Landscaped Garden",
      "Gym",
      "Concierge",
      "EV Charging",
      "Spa",
      "Wine Cellar",
    ],
    description:
      "An architectural masterpiece nestled in the serene locale of Baner. This 4 BHK villa offers unparalleled luxury with private pool, home theater, and sprawling 3,500 sq.ft. of thoughtfully designed living space.",
    highlights: [
      "Double-height living room",
      "Private swimming pool",
      "Home theater room",
      "Imported fixtures",
      "Landscaped 2000 sqft garden",
    ],
    rera: "P52100067890",
    developer: "Kolte Patil Developers",
  },
  {
    id: 3,
    title: "Sky Lounge Penthouse",
    location: "viman-nagar",
    area: "Viman Nagar, Pune",
    type: "penthouse",
    bhk: "5",
    price: "4.50 Cr",
    priceRange: "200+",
    sqft: "4,200",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    ],
    badge: "Ultra Luxury",
    badgeColor: "bg-dark-gold text-white",
    beds: 5,
    baths: 6,
    parking: 3,
    status: "Ready to Move",
    amenities: [
      "Rooftop Terrace",
      "Infinity Pool",
      "Private Elevator",
      "Smart Home",
      "Helipad Access",
      "Concierge",
      "Private Gym",
      "Sky Lounge",
    ],
    description:
      "The crown jewel of Viman Nagar skyline. This ultra-luxury penthouse spans 4,200 sq.ft. across two levels with a private rooftop terrace, infinity pool, and breathtaking panoramic views of the Pune cityscape.",
    highlights: [
      "360° panoramic views",
      "Private infinity pool",
      "Dedicated elevator",
      "Imported Italian kitchen",
      "Temperature-controlled wine room",
    ],
    rera: "P52100034567",
    developer: "Panchshil Realty",
  },
  {
    id: 4,
    title: "Green Valley Apartment",
    location: "hinjewadi",
    area: "Hinjewadi, Pune",
    type: "apartment",
    bhk: "2",
    price: "72 Lakhs",
    priceRange: "50-80",
    sqft: "1,100",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80",
    ],
    badge: "Best Value",
    badgeColor: "bg-green-500 text-white",
    beds: 2,
    baths: 2,
    parking: 1,
    status: "Under Construction",
    amenities: [
      "Garden",
      "Gym",
      "Play Area",
      "Security",
      "Parking",
      "Rainwater Harvesting",
      "Solar Panels",
      "Community Hall",
    ],
    description:
      "A perfect blend of affordability and quality in Pune's IT corridor. This 2 BHK apartment in Hinjewadi offers modern amenities, eco-friendly features, and excellent connectivity to IT parks.",
    highlights: [
      "Near Rajiv Gandhi IT Park",
      "Eco-friendly construction",
      "Vastu compliant",
      "Excellent ventilation",
      "Close to schools & hospitals",
    ],
    rera: "P52100098765",
    developer: "VTP Realty",
  },
  {
    id: 5,
    title: "Imperial Heights",
    location: "wakad",
    area: "Wakad, Pune",
    type: "apartment",
    bhk: "3",
    price: "1.10 Cr",
    priceRange: "80-120",
    sqft: "1,650",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    ],
    badge: "New Launch",
    badgeColor: "bg-blue-600 text-white",
    beds: 3,
    baths: 2,
    parking: 2,
    status: "New Launch",
    amenities: [
      "Infinity Pool",
      "Mini Theater",
      "Co-working Space",
      "Pet Park",
      "Yoga Deck",
      "Multipurpose Court",
      "Café Lounge",
      "Library",
    ],
    description:
      "A lifestyle redefined at Imperial Heights, Wakad. Offering spacious 3 BHK homes with contemporary design, world-class amenities including an infinity pool, co-working space, and pet-friendly zones.",
    highlights: [
      "Pre-certified green building",
      "Co-working space for WFH",
      "Pet-friendly community",
      "Rooftop café lounge",
      "Adjacent to Mumbai-Pune Expressway",
    ],
    rera: "P52100045678",
    developer: "Kumar Builders",
  },
  {
    id: 6,
    title: "Emerald Greens Plot",
    location: "hadapsar",
    area: "Hadapsar, Pune",
    type: "plot",
    bhk: "0",
    price: "55 Lakhs",
    priceRange: "50-80",
    sqft: "2,000",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    ],
    badge: "Investment Pick",
    badgeColor: "bg-purple-600 text-white",
    beds: 0,
    baths: 0,
    parking: 0,
    status: "Available",
    amenities: [
      "Gated Community",
      "24/7 Security",
      "Road Access",
      "Water Supply",
      "Electricity",
      "Garden Area",
      "Temple",
      "Community Center",
    ],
    description:
      "Prime NA plot in a gated community at Hadapsar. Perfect for building your dream home or as a high-return investment. Located near Magarpatta City with excellent appreciation potential.",
    highlights: [
      "Clear title, NA plot",
      "Gated township",
      "Near Magarpatta City",
      "20% YoY appreciation",
      "All utilities available",
    ],
    rera: "P52100056789",
    developer: "Emerald Group",
  },
  {
    id: 7,
    title: "Serenity Heights",
    location: "kharadi",
    area: "Kharadi, Pune",
    type: "apartment",
    bhk: "2",
    price: "95 Lakhs",
    priceRange: "80-120",
    sqft: "1,250",
    image:
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    ],
    badge: "Hot Deal",
    badgeColor: "bg-red-500 text-white",
    beds: 2,
    baths: 2,
    parking: 1,
    status: "Ready to Move",
    amenities: [
      "Swimming Pool",
      "Gym",
      "Terrace Garden",
      "Jogging Track",
      "Indoor Games",
      "Library",
      "Banquet Hall",
      "Visitor Parking",
    ],
    description:
      "Elegant 2 BHK apartments in the prime IT hub of Kharadi. Serenity Heights offers a perfect balance of luxury and convenience with proximity to EON IT Park, World Trade Center, and Phoenix Mall.",
    highlights: [
      "Walking distance to EON IT Park",
      "Near Phoenix Marketcity",
      "Premium clubhouse",
      "Excellent road connectivity",
      "Upcoming metro station nearby",
    ],
    rera: "P52100078901",
    developer: "Goel Ganga Developments",
  },
  {
    id: 8,
    title: "Grandeur Villas",
    location: "viman-nagar",
    area: "Viman Nagar, Pune",
    type: "villa",
    bhk: "4",
    price: "2.75 Cr",
    priceRange: "200+",
    sqft: "3,200",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    ],
    badge: "Limited Edition",
    badgeColor: "bg-navy text-gold",
    beds: 4,
    baths: 4,
    parking: 2,
    status: "Ready to Move",
    amenities: [
      "Private Garden",
      "Terrace",
      "Modular Kitchen",
      "Study Room",
      "Servant Quarter",
      "CCTV",
      "Intercom",
      "Power Backup",
    ],
    description:
      "An exclusive collection of only 12 villas in the heart of Viman Nagar. These 4 BHK row houses offer the privacy of independent living with the convenience of a gated community.",
    highlights: [
      "Only 12 exclusive villas",
      "Near airport",
      "Premium Viman Nagar location",
      "Private terrace & garden",
      "Fully loaded smart home",
    ],
    rera: "P52100089012",
    developer: "Marvel Realtors",
  },
];

// ==================== RENDER PROPERTY CARDS ====================
function renderProperties(filteredProperties) {
  const grid = document.getElementById("propertyGrid");
  const noResults = document.getElementById("noResults");

  if (filteredProperties.length === 0) {
    grid.innerHTML = "";
    noResults.classList.remove("hidden");
    return;
  }

  noResults.classList.add("hidden");

  grid.innerHTML = filteredProperties
    .map(
      (prop, index) => `
        <div class="property-card bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 scroll-animate" style="animation-delay: ${index * 0.1}s;">
            <div class="relative overflow-hidden h-56">
                <img src="${prop.image}" alt="${prop.title}" class="property-image w-full h-full object-cover" loading="lazy">
                <div class="absolute top-4 left-4">
                    <span class="property-badge ${prop.badgeColor} px-3 py-1 rounded-full text-xs font-bold shadow-lg">${prop.badge}</span>
                </div>
                <div class="absolute top-4 right-4">
                    <button onclick="event.stopPropagation(); toggleWishlist(${prop.id})" class="w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300 shadow-md wishlist-btn" data-id="${prop.id}">
                        <i class="far fa-heart text-sm"></i>
                    </button>
                </div>
                <div class="absolute bottom-4 left-4">
                    <span class="bg-navy/80 backdrop-blur-sm text-gold px-3 py-1 rounded-lg text-xs font-semibold">${prop.status}</span>
                </div>
                <div class="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent"></div>
            </div>
            <div class="p-5">
                <div class="flex items-center justify-between mb-2">
                    <h3 class="font-playfair text-lg font-bold text-navy truncate pr-2">${prop.title}</h3>
                </div>
                <div class="flex items-center text-navy/50 text-sm mb-3">
                    <i class="fas fa-map-marker-alt text-gold text-xs mr-1.5"></i>
                    <span>${prop.area}</span>
                </div>
                <div class="flex items-center justify-between mb-4">
                    <span class="text-2xl font-playfair font-bold text-navy">₹${prop.price}</span>
                    <span class="text-navy/40 text-xs">${prop.sqft} sq.ft.</span>
                </div>
                <div class="flex items-center justify-between border-t border-gray-100 pt-4">
                    <div class="flex space-x-4 text-sm text-navy/60">
                        ${prop.beds > 0 ? `<span class="flex items-center space-x-1"><i class="fas fa-bed text-gold text-xs"></i><span>${prop.beds} Bed</span></span>` : ""}
                        ${prop.baths > 0 ? `<span class="flex items-center space-x-1"><i class="fas fa-bath text-gold text-xs"></i><span>${prop.baths} Bath</span></span>` : ""}
                        ${prop.parking > 0 ? `<span class="flex items-center space-x-1"><i class="fas fa-car text-gold text-xs"></i><span>${prop.parking}</span></span>` : ""}
                        ${prop.type === "plot" ? `<span class="flex items-center space-x-1"><i class="fas fa-ruler-combined text-gold text-xs"></i><span>${prop.sqft} sq.ft.</span></span>` : ""}
                    </div>
                </div>
                <button onclick="openPropertyModal(${prop.id})" class="mt-4 w-full py-2.5 bg-off-white text-navy font-semibold rounded-xl hover:bg-navy hover:text-gold transition-all duration-300 text-sm flex items-center justify-center space-x-2 border border-gray-200 hover:border-navy">
                    <span>View Details</span>
                    <i class="fas fa-arrow-right text-xs"></i>
                </button>
            </div>
        </div>
    `,
    )
    .join("");

  // Re-trigger scroll animations for new cards
  setTimeout(() => {
    document.querySelectorAll(".scroll-animate").forEach((el) => {
      observerInstance.observe(el);
    });
  }, 100);
}

// ==================== FILTER PROPERTIES ====================
function filterProperties() {
  const location = document.getElementById("filterLocation").value;
  const type = document.getElementById("filterType").value;
  const budget = document.getElementById("filterBudget").value;
  const bhk = document.getElementById("filterBHK").value;

  let filtered = properties.filter((prop) => {
    let match = true;
    if (location && prop.location !== location) match = false;
    if (type && prop.type !== type) match = false;
    if (budget && prop.priceRange !== budget) match = false;
    if (bhk && prop.bhk !== bhk) match = false;
    return match;
  });

  renderProperties(filtered);

  // Scroll to properties section
  document
    .getElementById("properties")
    .scrollIntoView({ behavior: "smooth", block: "start" });
}

function resetFilters() {
  document.getElementById("filterLocation").value = "";
  document.getElementById("filterType").value = "";
  document.getElementById("filterBudget").value = "";
  document.getElementById("filterBHK").value = "";
  renderProperties(properties);
}

// ==================== PROPERTY MODAL ====================
function openPropertyModal(id) {
  const prop = properties.find((p) => p.id === id);
  if (!prop) return;

  const modal = document.getElementById("propertyModal");
  const content = document.getElementById("modalContent");

  content.innerHTML = `
        <div class="relative">
            <!-- Close Button -->
            <button onclick="closePropertyModal()" class="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-all shadow-lg">
                <i class="fas fa-times"></i>
            </button>
            
            <!-- Image Gallery -->
            <div class="relative h-64 md:h-80 overflow-hidden">
                <div id="modalSlider" class="flex transition-transform duration-500" style="width: ${prop.images.length * 100}%;">
                    ${prop.images
                      .map(
                        (img) => `
                        <div class="flex-shrink-0" style="width: ${100 / prop.images.length}%;">
                            <img src="${img}" alt="${prop.title}" class="w-full h-64 md:h-80 object-cover">
                        </div>
                    `,
                      )
                      .join("")}
                </div>
                <button onclick="slideModal(-1)" class="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-all shadow-md">
                    <i class="fas fa-chevron-left text-navy"></i>
                </button>
                <button onclick="slideModal(1)" class="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-all shadow-md">
                    <i class="fas fa-chevron-right text-navy"></i>
                </button>
                <div class="absolute bottom-4 left-4">
                    <span class="${prop.badgeColor} px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">${prop.badge}</span>
                </div>
            </div>
            
            <!-- Content -->
            <div class="p-6 md:p-8">
                <div class="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div>
                        <h2 class="font-playfair text-2xl md:text-3xl font-bold text-navy mb-1">${prop.title}</h2>
                        <div class="flex items-center text-navy/60 mb-2">
                            <i class="fas fa-map-marker-alt text-gold mr-2"></i>
                            <span>${prop.area}</span>
                        </div>
                        <span class="text-sm text-navy/40">RERA: ${prop.rera} | By ${prop.developer}</span>
                    </div>
                    <div class="mt-3 md:mt-0 text-right">
                        <span class="text-3xl font-playfair font-bold text-navy">₹${prop.price}</span>
                        <p class="text-sm text-navy/40">${prop.sqft} sq.ft. | ${prop.status}</p>
                    </div>
                </div>
                
                <!-- Quick Stats -->
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                    ${
                      prop.beds > 0
                        ? `
                    <div class="bg-off-white rounded-xl p-3 text-center">
                        <i class="fas fa-bed text-gold text-lg mb-1"></i>
                        <p class="text-sm font-semibold text-navy">${prop.beds} Bedrooms</p>
                    </div>`
                        : ""
                    }
                    ${
                      prop.baths > 0
                        ? `
                    <div class="bg-off-white rounded-xl p-3 text-center">
                        <i class="fas fa-bath text-gold text-lg mb-1"></i>
                        <p class="text-sm font-semibold text-navy">${prop.baths} Bathrooms</p>
                    </div>`
                        : ""
                    }
                    <div class="bg-off-white rounded-xl p-3 text-center">
                        <i class="fas fa-ruler-combined text-gold text-lg mb-1"></i>
                        <p class="text-sm font-semibold text-navy">${prop.sqft} sq.ft.</p>
                    </div>
                    ${
                      prop.parking > 0
                        ? `
                    <div class="bg-off-white rounded-xl p-3 text-center">
                        <i class="fas fa-car text-gold text-lg mb-1"></i>
                        <p class="text-sm font-semibold text-navy">${prop.parking} Parking</p>
                    </div>`
                        : ""
                    }
                </div>
                
                <!-- Description -->
                <div class="mb-6">
                    <h3 class="font-playfair text-lg font-bold text-navy mb-2">Description</h3>
                    <p class="text-navy/70 leading-relaxed text-sm">${prop.description}</p>
                </div>
                
                <!-- Highlights -->
                <div class="mb-6">
                    <h3 class="font-playfair text-lg font-bold text-navy mb-3">Key Highlights</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        ${prop.highlights
                          .map(
                            (h) => `
                            <div class="flex items-center space-x-2">
                                <i class="fas fa-check-circle text-gold text-sm"></i>
                                <span class="text-sm text-navy/70">${h}</span>
                            </div>
                        `,
                          )
                          .join("")}
                    </div>
                </div>
                
                <!-- Amenities -->
                <div class="mb-8">
                    <h3 class="font-playfair text-lg font-bold text-navy mb-3">Amenities</h3>
                    <div class="flex flex-wrap gap-2">
                        ${prop.amenities
                          .map(
                            (a) => `
                            <span class="px-3 py-1.5 bg-off-white text-navy/70 rounded-lg text-xs font-medium border border-gray-100">${a}</span>
                        `,
                          )
                          .join("")}
                    </div>
                </div>
                
                <!-- CTA Buttons -->
                <div class="flex flex-col sm:flex-row gap-3">
                    <a href="https://wa.me/919876543210?text=${encodeURIComponent(`Hi Vittara! I'm interested in ${prop.title} (₹${prop.price}) at ${prop.area}. Please share more details.`)}" target="_blank" class="flex-1 py-3 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-all flex items-center justify-center space-x-2 shadow-lg">
                        <i class="fab fa-whatsapp text-xl"></i>
                        <span>WhatsApp Enquiry</span>
                    </a>
                    <a href="tel:+919876543210" class="flex-1 py-3 bg-navy text-gold font-bold rounded-xl hover:bg-gold hover:text-navy transition-all flex items-center justify-center space-x-2 shadow-lg">
                        <i class="fas fa-phone-alt"></i>
                        <span>Call Now</span>
                    </a>
                    <button onclick="scheduleVisit('${prop.title}')" class="flex-1 py-3 border-2 border-navy text-navy font-bold rounded-xl hover:bg-navy hover:text-gold transition-all flex items-center justify-center space-x-2">
                        <i class="fas fa-calendar-alt"></i>
                        <span>Site Visit</span>
                    </button>
                </div>
            </div>
        </div>
    `;

  modal.classList.remove("hidden");
  setTimeout(() => {
    modal.classList.add("modal-open");
  }, 10);
  document.body.style.overflow = "hidden";

  // Reset modal slider
  window.currentModalSlide = 0;
}

function closePropertyModal() {
  const modal = document.getElementById("propertyModal");
  modal.classList.remove("modal-open");
  setTimeout(() => {
    modal.classList.add("hidden");
  }, 300);
  document.body.style.overflow = "";
}

// Modal image slider
window.currentModalSlide = 0;
function slideModal(dir) {
  const slider = document.getElementById("modalSlider");
  if (!slider) return;
  const totalSlides = slider.children.length;
  window.currentModalSlide =
    (window.currentModalSlide + dir + totalSlides) % totalSlides;
  slider.style.transform = `translateX(-${window.currentModalSlide * (100 / totalSlides)}%)`;
}

function scheduleVisit(propertyName) {
  const msg = `Hi Vittara! I'd like to schedule a site visit for "${propertyName}". Please suggest available time slots.`;
  window.open(
    `https://wa.me/919876543210?text=${encodeURIComponent(msg)}`,
    "_blank",
  );
}

// Wishlist toggle
function toggleWishlist(id) {
  const btn = document.querySelector(`.wishlist-btn[data-id="${id}"]`);
  if (btn) {
    const icon = btn.querySelector("i");
    if (icon.classList.contains("far")) {
      icon.classList.remove("far");
      icon.classList.add("fas");
      btn.classList.add("bg-red-500", "text-white");
      btn.classList.remove("bg-white/90");
    } else {
      icon.classList.remove("fas");
      icon.classList.add("far");
      btn.classList.remove("bg-red-500", "text-white");
      btn.classList.add("bg-white/90");
    }
  }
}
