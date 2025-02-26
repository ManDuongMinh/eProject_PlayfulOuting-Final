console.log("Script loaded");
document.addEventListener("DOMContentLoaded", function () {
    let scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Ẩn nút khi mới vào trang
    scrollToTopBtn.style.display = "none";

    // Xử lý sự kiện khi cuộn trang
    window.addEventListener("scroll", function () {
        if (window.scrollY > window.innerHeight / 2) {
            scrollToTopBtn.style.display = "block"; // Hiển thị nút khi kéo xuống quá 50% màn hình
        } else {
            scrollToTopBtn.style.display = "none"; // Ẩn nút khi ở đầu trang
        }
    });

    // Xử lý sự kiện click vào nút để cuộn lên đầu trang
    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Cuộn mượt
        });
    });
});

function showForgotPassword() {
    document.getElementById("forgotPasswordForm").style.display = "block";
}

function resetPassword() {
    let email = document.getElementById("forgotEmail").value.trim();
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(email)) {
        alert("nvalid email. Please re-enter!");
    } else {
        alert("A password reset request has been sent to your email.");
        document.getElementById("forgotPasswordForm").style.display = "none"; // Ẩn form sau khi gửi yêu cầu
    }
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
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn chặn việc submit mặc định

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let errorMessage = "";

    // Kiểm tra định dạng email
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        errorMessage += "Invalid email.\n";
    }

    // Kiểm tra mật khẩu có bị bỏ trống không
    if (password === "") {
        errorMessage += "Please enter password.\n";
    }

    if (errorMessage) {
        alert(errorMessage); // Hiển thị lỗi dưới dạng thông báo
    } else {
        alert("Login successful!"); // Hiển thị thông báo đăng nhập thành công
        // Bạn có thể chuyển hướng người dùng sau khi đăng nhập thành công
        window.location.href = "HomePage.html";
    }
});
document.addEventListener("DOMContentLoaded", function () {
    // Lấy form đăng nhập
    const loginForm = document.getElementById("loginForm");

    // Ngăn form bị submit nếu bấm nút MXH
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
    });

    // Lấy các nút đăng nhập MXH
    const facebookLoginBtn = document.querySelector(".social-login.facebook");
    const googleLoginBtn = document.querySelector(".social-login.google");

    // Xử lý đăng nhập Facebook
    facebookLoginBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Ngăn form submit
        window.location.href = "https://www.facebook.com/login.php";
    });

    // Xử lý đăng nhập Google
    googleLoginBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Ngăn form submit
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

