document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let dob = document.getElementById("dob").value;
    let gender = document.querySelector('input[name="gender"]:checked');

    if (!fullname || !email || !dob || !gender) {
        alert("Please fill in all fields.");
        return;
    }

    alert("Registration successful!");
});

function subscribeNewsletter() {
    let email = document.getElementById("newsletterEmail").value;
    if (!email) {
        alert("Please enter your email to subscribe.");
        return;
    }
    alert("You have successfully registered!");
}
function validateEmail() {
    let emailInput = document.getElementById("emailInput");
    let errorMessage = document.getElementById("errorMessage");
    let email = emailInput.value.trim();

    // Xóa thông báo lỗi cũ
    errorMessage.innerText = "";

    // Kiểm tra nếu email rỗng
    if (email === "") {
        errorMessage.innerText = "Please enter your email!";
        return;
    }

    // Kiểm tra định dạng email hợp lệ
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage.innerText = "Invalid email! Please enter correct format.";
        return;
    }

    // Nếu đúng, hiển thị thông báo thành công
    alert("You have successfully registered!");
    emailInput.value = "";
}

// Sự kiện khi nhấn nút "Theo dõi"
document.getElementById("subscribeBtn").addEventListener("click", function (event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của button
    validateEmail();
});

// Xóa thông báo lỗi ngay khi người dùng nhập lại email
document.getElementById("emailInput").addEventListener("input", function () {
    document.getElementById("errorMessage").innerText = "";
});

// Sự kiện khi người dùng nhấn Enter
document.getElementById("emailInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Ngăn form submit mặc định
        validateEmail();
    }
});
document.addEventListener("DOMContentLoaded", function () {
    // Lấy phần tử form đăng ký
    const registerForm = document.getElementById("registerForm");

    // Ngăn form bị submit khi bấm vào nút MXH
    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();
    });

    // Lấy các nút đăng nhập MXH
    const facebookLoginBtn = document.querySelector(".social-login.facebook");
    const googleLoginBtn = document.querySelector(".social-login.google");

    // Xử lý sự kiện khi nhấn vào nút Facebook
    facebookLoginBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Ngăn form bị submit
        window.location.href = "https://www.facebook.com/login.php";
    });

    // Xử lý sự kiện khi nhấn vào nút Google
    googleLoginBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Ngăn form bị submit
        window.location.href = "https://accounts.google.com/signin";
    });
});
var swiper = new Swiper('.swiper-container', {
    loop: true, // Chạy vô hạn
    autoplay: {
        delay: 6000, // Chuyển ảnh sau 3 giây
        disableOnInteraction: false, // Dừng khi người dùng tương tác
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
document.addEventListener("DOMContentLoaded", function () {
    let scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.addEventListener("scroll", function () {
        if (window.scrollY > document.body.scrollHeight / 2) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
