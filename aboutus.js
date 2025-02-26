document.querySelector(".register-btn").addEventListener("click", function (event) {
    event.preventDefault();
    alert("Redirecting to the registration page...");
    window.location.href = "register.html"; // Điều hướng sang trang đăng ký (cần tạo thêm file register.html)
});

document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        item.addEventListener("click", function () {
            this.classList.toggle("active");

            const answer = this.querySelector(".faq-answer");
            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    });
});

document.querySelectorAll(".faq-item").forEach(item => {
    item.addEventListener("click", function () {
        document.querySelectorAll(".faq-item").forEach(i => {
            if (i !== item) i.classList.remove("active");
        });

        this.classList.toggle("active");

        let faqContainer = document.querySelector(".faq");
        let isAnyOpen = document.querySelectorAll(".faq-item.active .faq-answer").length > 0;

        if (isAnyOpen) {
            faqContainer.classList.add("scroll-active");
        } else {
            faqContainer.classList.remove("scroll-active");
        }
    });
});

function validateEmail() {
    let emailInput = document.getElementById("emailInput");
    let errorMessage = document.getElementById("errorMessage");
    let email = emailInput.value.trim();

    errorMessage.innerText = "";

    if (email === "") {
        errorMessage.innerText = "Please enter your email!";
        return;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage.innerText = "Invalid email! Please enter correct format.";
        return;
    }

    alert("You have successfully registered!");
    emailInput.value = "";
}

document.getElementById("subscribeBtn").addEventListener("click", function (event) {
    event.preventDefault();
    validateEmail();
});

document.getElementById("emailInput").addEventListener("input", function () {
    document.getElementById("errorMessage").innerText = "";
});

document.getElementById("emailInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        validateEmail();
    }
});

// **THÊM PHẦN KIỂM TRA LỖI CHO CONTACT US**
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("contactName").value.trim();
    let email = document.getElementById("contactEmail").value.trim();
    let phone = document.getElementById("contactPhone").value.trim();
    let message = document.getElementById("contactMessage").value.trim();

    let errorMessage = "";

    if (name === "") {
        errorMessage += "Name cannot be left blank.\n";
    }

    if (email === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errorMessage += "Invalid email.\n";
    }

    if (phone === "" || !/^\d{10}$/.test(phone)) {
        errorMessage += "Invalid phone number (only contains 10-character numbers).\n";
    }

    if (message === "") {
        errorMessage += "Message content cannot be left blank.\n";
    }

    if (errorMessage !== "") {
        alert(errorMessage);
    } else {
        alert("Sent successfully!");
        document.getElementById("contactForm").submit();
    }
});

// Xóa lỗi ngay khi nhập lại
document.getElementById("contactName").addEventListener("input", clearError);
document.getElementById("contactEmail").addEventListener("input", clearError);
document.getElementById("contactPhone").addEventListener("input", clearError);
document.getElementById("contactMessage").addEventListener("input", clearError);

function clearError() {
    document.getElementById("errorMessage").innerText = "";
}
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
