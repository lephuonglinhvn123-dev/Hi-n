
/*Navigation bar pop-up bên phải khi kích thước màn hình nhỏ*/
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  });
}

if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  });
}

/*Cart*/
    // Hàm để thêm sản phẩm vào giỏ hàng
    function addToCart(productName, price) {
        // Lấy dữ liệu giỏ hàng từ localStorage hoặc khởi tạo mảng trống nếu chưa có
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Tìm kiếm sản phẩm trong giỏ hàng
        let product = cart.find(item => item.name === productName);

        if (product) {
            // Nếu sản phẩm đã có trong giỏ, tăng số lượng
            product.quantity += 1;
        } else {
            // Nếu sản phẩm chưa có trong giỏ, thêm mới sản phẩm vào giỏ hàng
            cart.push({
                name: productName,
                price: price, // Giá của sản phẩm. Có thể điều chỉnh giá này nếu cần.
                quantity: 1,
            });
        }

        // Lưu giỏ hàng lại vào localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Cập nhật giao diện giỏ hàng
        updateCartDisplay();
    }

    // Hàm hiển thị giỏ hàng trong trang giỏ hàng
    function updateCartDisplay() {
        // Lấy dữ liệu giỏ hàng từ localStorage
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Chọn phần tử chứa giỏ hàng
        const cartItemsContainer = document.querySelector('.cart-items');
        cartItemsContainer.innerHTML = '';

        // Tính tổng tiền tạm tính
        let subtotal = 0;

        cart.forEach((item, index) => {
            // Tính tạm tính của từng sản phẩm
            let itemTotal = item.price * item.quantity;
            subtotal += itemTotal;

            // Thêm sản phẩm vào giỏ hàng trên giao diện
            cartItemsContainer.innerHTML += `
                <div class="cart-item">
                    <button class="remove-btn" onclick="removeItem(${index})">
                        X
                    </button>
                    <span class="product-name">${item.name}</span>
                    <span class="price">${item.price} VND</span>
                    <div class="quantity-control">
                        <button onclick="decreaseQuantity(${index})">-</button>
                        <input type="number" id="quantity-${index}" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
                        <button onclick="increaseQuantity(${index})">+</button>
                    </div>
                    <span class="subtotal">${itemTotal} VND</span>
                </div>
            `;
        });

        // Cập nhật tổng tiền
        document.getElementById('subtotal').textContent = `${subtotal} VND`;
        document.getElementById('total').textContent = `${subtotal} VND`;
    }

    // Hàm để cập nhật số lượng sản phẩm
    function updateQuantity(index, newQuantity) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart[index].quantity = parseInt(newQuantity);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
    }

    // Hàm tăng số lượng sản phẩm
    function increaseQuantity(index) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart[index].quantity += 1;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
    }

    // Hàm giảm số lượng sản phẩm
    function decreaseQuantity(index) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        if (cart[index].quantity > 1) {
            cart[index].quantity -= 1;
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartDisplay();
        }
    }

    // Hàm để xóa sản phẩm khỏi giỏ hàng
    function removeItem(index) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
    }

    // Gọi hàm cập nhật giỏ hàng khi tải trang giỏ hàng
    document.addEventListener('DOMContentLoaded', updateCartDisplay);


/*FAQs*/
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('active');   
    faq.classList.toggle('closed');
  });
});

const faq1Elements = document.querySelectorAll('.faq1');

faq1Elements.forEach(faq1 => {
  faq1.addEventListener('click', () => {
    faq1.classList.toggle('active');
    faq1.classList.toggle('closed');
  });
});

// Toggle "Tiếp tục đọc" trong blog.html
document.addEventListener('DOMContentLoaded', function () {
    const readMoreButtons = document.querySelectorAll('.read-more-btn');

    readMoreButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const paragraph = btn.previousElementSibling;
            const hiddenText = paragraph.querySelector('.hidden-text');

            if (hiddenText) {
                const isHidden = hiddenText.style.display === 'none';
                hiddenText.style.display = isHidden ? 'inline' : 'none';
                btn.textContent = isHidden ? 'Thu gọn' : 'Tiếp tục đọc';
            }
        });
    });
});


/*Career*/
function handleCareerStore() {
    window.open('https://docs.google.com/forms/d/1voNuXBuBICtGYgeLdaGYnjfEnwxvoJBZQ7TZAsUAFqc/edit#settings', '_blank');
}
function handleCareerOffice() {
    window.open('https://docs.google.com/forms/d/1voNuXBuBICtGYgeLdaGYnjfEnwxvoJBZQ7TZAsUAFqc/edit#settings', '_blank');
}
