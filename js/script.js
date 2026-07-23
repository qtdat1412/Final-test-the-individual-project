// ==========================================
// 1. DANH SÁCH 18 SẢN PHẨM HOÀN CHỈNH (MỖI NHÓM 6 MÓN)
// ==========================================
const PRODUCTS_DATA = {
  // --- NHÓM 1: CÀ PHÊ (6 món) ---
  "1": {
    id: "1",
    category: "coffee",
    title: "Cà Phê Phin Cổ Điển",
    badge: "TRADITIONAL",
    price: "28.000đ",
    img: "../assets/cafe-den.jpg",
    desc: "Hạt Robusta mộc đậm đà pha phin chuẩn vị Trà Vinh hoài cổ. Ly cà phê đen phin giọt đắng lắng đọng mang lại trải nghiệm thư thái."
  },
  "2": {
    id: "2",
    category: "coffee",
    title: "Cà Phê Muối 1985",
    badge: "SIGNATURE",
    price: "35.000đ",
    img: "../assets/cafe-muoi-1985.jpg",
    desc: "Món quà đặc trưng nhất của quán. Cà phê phin đậm đà kết hợp với lớp kem mặn béo ngậy được đánh bông mịn."
  },
  "3": {
    id: "3",
    category: "coffee",
    title: "Bạc Xỉu Sài Gòn",
    badge: "CLASSIC",
    price: "30.000đ",
    img: "../assets/Bac-xiu-sai-gon.jpg",
    desc: "Dành cho những ai yêu vị ngọt ngào. Lớp sữa đặc thơm béo quyện cùng một chút hương vị nồng nàn của cà phê phin nguyên chất."
  },
  "4": {
    id: "4",
    category: "coffee",
    title: "Cà Phê Sữa Đá Phin",
    badge: "POPULAR",
    price: "29.000đ",
    img: "../assets/cafe-sua-da.jpg",
    desc: "Cà phê phin đậm vị hòa quyện với sữa đặc thơm ngon, chút đá mát lạnh chuẩn phong cách Việt Nam."
  },
  "5": {
    id: "5",
    category: "coffee",
    title: "Cà Phê Trứng Hà Nội",
    badge: "SPECIAL",
    price: "39.000đ",
    img: "../assets/cafe-trung.jpg",
    desc: "Sự kết hợp hoàn hảo giữa cà phê phin đắng nhẹ và lớp kem trứng đánh bông mịn, béo ngậy không chút vị tanh."
  },
  "6": {
    id: "6",
    category: "coffee",
    title: "Cà Phê Cốt Dừa Cold Brew",
    badge: "NEW",
    price: "42.000đ",
    img: "../assets/cafe-cot-dua.jpg",
    desc: "Cà phê ủ lạnh kết hợp cùng nước cốt dừa xay đá tuyết thơm béo, giải nhiệt cực đã cho ngày nắng."
  },

  // --- NHÓM 2: TRÀ & TRÁI CÂY (6 món) ---
  "7": {
    id: "7",
    category: "tea",
    title: "Trà Mảng Cầu Đắk Lắk",
    badge: "BEST SELLER",
    price: "38.000đ",
    img: "../assets/tra-mang-cau-dak-lak.jpg",
    desc: "Trà xanh thơm mát đơm đầy tép mảng cầu tươi chua ngọt tự nhiên nhập trực tiếp từ Đắk Lắk."
  },
  "8": {
    id: "8",
    category: "tea",
    title: "Trà Đào Cam Sả",
    badge: "REFRESHING",
    price: "35.000đ",
    img: "../assets/Tra-dao-cam-xa.jpg",
    desc: "Vị trà thanh dịu kết hợp cùng hương sả nồng nàn, chút vị chua nhẹ của cam tươi và những miếng đào ngâm giòn sần sật."
  },
  "9": {
    id: "9",
    category: "tea",
    title: "Trà Dâu Tây Tằm",
    badge: "SPECIAL",
    price: "38.000đ",
    img: "../assets/tra-dau-tay-tam.jpg",
    desc: "Trà đen kết hợp mứt dâu tây mứt dâu tằm tự làm, chua chua ngọt ngọt cực kỳ giải nhiệt."
  },
  "10": {
    id: "10",
    category: "tea",
    title: "Trà Vải Lài Kem Cheese",
    badge: "POPULAR",
    price: "40.000đ",
    img: "../assets/tra-vai-kem-cheese.jpg",
    desc: "Hương trà lài thơm ngát hòa quyện vị vải ngọt thanh, phủ thêm lớp kem cheese béo mặn sánh mịn."
  },
  "11": {
    id: "11",
    category: "tea",
    title: "Trà Ổi Hồng Xí Muội",
    badge: "NEW",
    price: "36.000đ",
    img: "../assets/tra-oi-hong.jpg",
    desc: "Trà thanh mát đậm đà hương ổi hồng tự nhiên, mặn mặn chua ngọt tròn vị xí muội."
  },
  "12": {
    id: "12",
    category: "tea",
    title: "Trà Tắc Xí Muội Đường Phèn",
    badge: "HEALTHY",
    price: "32.000đ",
    img: "../assets/tra-tac-xi-muoi.jpg",
    desc: "Thức uống giải khát truyền thống với vị chua nhẹ của tắc, vị mặn dịu xí muội ngọt thanh đường phèn."
  },

  // --- NHÓM 3: BÁNH NGỌT & ĂN VẶT (6 món) ---
  "13": {
    id: "13",
    category: "bakery",
    title: "Croissant Bơ Tươi",
    badge: "BAKERY",
    price: "32.000đ",
    img: "../assets/Croissant-Bo-Tuoi.jpg",
    desc: "Bánh sừng bò nướng nóng hổi tại chỗ, lớp vỏ ngoài giòn xốp nhiều lớp, bên trong mềm mịn ngập tràn hương bơ."
  },
  "14": {
    id: "14",
    category: "bakery",
    title: "Bánh Tiramisu Truyền Thống",
    badge: "SWEET",
    price: "39.000đ",
    img: "../assets/tiramisu.jpg",
    desc: "Cốt bánh mềm đẫm hương vị cà phê và rượu nhẹ, lớp kem Mascarpone béo ngậy phủ bột cacao đậm đà."
  },
  "15": {
    id: "15",
    category: "bakery",
    title: "Bánh Mì Phô Mai Bơ Tỏi",
    badge: "HOT ITEM",
    price: "35.000đ",
    img: "../assets/banh-mi-bo-toi.jpg",
    desc: "Vỏ bánh giòn rụm thơm nức mùi bơ tỏi, nhân phô mai creamcheese chua béo kéo sợi ngon khó cưỡng."
  },
  "16": {
    id: "16",
    category: "bakery",
    title: "Bánh Bông Lan Trứng Muối",
    badge: "FAVORITE",
    price: "35.000đ",
    img: "../assets/bong-lan-trung-muoi.jpg",
    desc: "Cốt bánh bông lan mềm xốp, sốt bơ trứng béo ngậy ăn kèm chà bông mặn và sốt trứng muối bùi bùi."
  },
  "17": {
    id: "17",
    category: "bakery",
    title: "Bánh Mousse Chanh Dây",
    badge: "FRESH",
    price: "36.000đ",
    img: "../assets/mousse-chanh-day.jpg",
    desc: "Bánh lạnh với lớp kem mịn màng chua nhẹ vị chanh dây tươi, thanh mát không lo bị ngấy."
  },
  "18": {
    id: "18",
    category: "bakery",
    title: "Hướng Dương Phủ Mật Ong",
    badge: "SNACK",
    price: "20.000đ",
    img: "../assets/huong-duong.jpg",
    desc: "Món ăn vặt không thể thiếu khi nhâm nhi cà phê trò chuyện cùng bạn bè."
  }
};

// ==========================================
// 2. KHỞI TẠO TỰ ĐỘNG KHI TRANG TẢI XONG
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
  
  // A. Cập nhật năm ở Footer
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.innerText = new Date().getFullYear();
  }

  // B. Xử lý cho trang CHI TIẾT SẢN PHẨM (chi-tiet.html)
  if (window.location.pathname.includes("chi-tiet.html")) {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id') || "1";

    const product = PRODUCTS_DATA[productId];

    if (product) {
      if (document.getElementById('p-title')) document.getElementById('p-title').innerText = product.title;
      if (document.getElementById('breadcrumb-name')) document.getElementById('breadcrumb-name').innerText = product.title;
      if (document.getElementById('p-badge')) document.getElementById('p-badge').innerText = product.badge;
      if (document.getElementById('p-price')) document.getElementById('p-price').innerText = product.price;
      if (document.getElementById('p-desc')) document.getElementById('p-desc').innerText = product.desc;
      
      const imgEl = document.getElementById('p-img');
      if (imgEl) {
        imgEl.src = product.img;
        imgEl.alt = product.title;
      }

      document.title = product.title + " - 1985 Café Trà Vinh";

      // Render danh sách gợi ý 5 CÙNG LOẠI + 1 NGẪU NHIÊN KHÁC LOẠI
      renderRelatedProducts(productId);
    }
  }

  // C. Xử lý LỌC DANH MỤC (san-pham.html)
  setupCategoryFilter();
});

// ==========================================
// 3. HÀM LỌC SẢN PHẨM THEO DANH MỤC (NÚT BẤM)
// ==========================================
function setupCategoryFilter() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".menu-card");

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener("click", function () {
      filterBtns.forEach(b => {
        b.classList.remove("active", "btn-primary");
        b.classList.add("btn-outline");
        b.style.color = "var(--primary-color)";
      });

      this.classList.add("active", "btn-primary");
      this.classList.remove("btn-outline");
      this.style.color = "#fff";

      const filterValue = this.getAttribute("data-filter");

      cards.forEach(card => {
        const category = card.getAttribute("data-category");
        if (filterValue === "all" || filterValue === category) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

// ==========================================
// 4. HÀM GỢI Ý 5 MÓN CÙNG LOẠI + 1 MÓN NGẪU NHIÊN KHÁC LOẠI
// ==========================================
function renderRelatedProducts(currentId) {
  const menuGrid = document.querySelector(".menu-grid");
  if (!menuGrid) return;

  menuGrid.innerHTML = "";

  const currentProduct = PRODUCTS_DATA[currentId];
  if (!currentProduct) return;

  const currentCategory = currentProduct.category;

  // Step 1: Lấy các sản phẩm CÙNG danh mục (loại trừ món hiện tại)
  const sameCategoryProducts = Object.values(PRODUCTS_DATA).filter(
    item => item.category === currentCategory && item.id !== currentId
  );

  // Step 2: Lấy các sản phẩm KHÁC danh mục
  const otherCategoryProducts = Object.values(PRODUCTS_DATA).filter(
    item => item.category !== currentCategory
  );

  // Step 3: Lấy đủ 5 món CÙNG loại (xáo trộn ngẫu nhiên vị trí nếu muốn)
  const shuffledSameCategory = sameCategoryProducts.sort(() => 0.5 - Math.random());
  const sameCategorySuggestions = shuffledSameCategory.slice(0, 5);

  // Step 4: Lấy ngẫu nhiên 1 món KHÁC loại (bất kể là trà hay bánh hay cà phê)
  const shuffledOtherCategory = otherCategoryProducts.sort(() => 0.5 - Math.random());
  const randomOtherSuggestion = shuffledOtherCategory.slice(0, 1);

  // Step 5: Gộp lại thành danh sách 6 món gợi ý
  const finalSuggestions = [...sameCategorySuggestions, ...randomOtherSuggestion];

  // Step 6: Hiển thị ra HTML
  finalSuggestions.forEach(item => {
    const cardHTML = `
      <div class="menu-card" data-category="${item.category}">
        <div class="card-img">
          <img src="${item.img}" alt="${item.title}" onerror="this.src='../assets/cafe-den.jpg'">
        </div>
        <div class="card-body">
          <span style="font-size: 0.75rem; color: var(--secondary-color); font-weight: 600; letter-spacing: 1px;">${item.badge}</span>
          <h3 class="item-title">${item.title}</h3>
          <p class="item-desc">${item.desc}</p>
          <div class="card-footer">
            <span class="item-price">${item.price}</span>
            <a href="chi-tiet.html?id=${item.id}" class="link-detail">Chi tiết &rarr;</a>
          </div>
        </div>
      </div>
    `;
    menuGrid.innerHTML += cardHTML;
  });
}