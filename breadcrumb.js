console.log("Breadcrumb script loaded");
document.addEventListener("DOMContentLoaded", function () {
    const breadcrumbContainer = document.querySelector(".breadcrumb");
    if (!breadcrumbContainer) return;

    // Lấy đường dẫn hiện tại
    const currentPage = window.location.pathname.split("/").pop() || "HomePage.html";

    // Xác định trang gốc
    const homePage = "HomePage.html";  // Nếu trang chính tên khác, hãy đổi lại

    // Nếu người dùng vào trang Home, reset breadcrumb
    if (currentPage.toLowerCase() === homePage) {
        sessionStorage.setItem("breadcrumbTrail", JSON.stringify([homePage]));
    } else {
        // Lấy breadcrumb trước đó
        let breadcrumbTrail = JSON.parse(sessionStorage.getItem("breadcrumbTrail")) || [homePage];

        // Kiểm tra nếu trang hiện tại đã có trong breadcrumb chưa
        if (!breadcrumbTrail.includes(currentPage)) {
            breadcrumbTrail.push(currentPage);
        }

        // Giới hạn độ dài breadcrumb (tránh quá dài như ảnh của bạn)
        if (breadcrumbTrail.length > 3) {
            breadcrumbTrail = [homePage, breadcrumbTrail[breadcrumbTrail.length - 2], currentPage];
        }

        // Lưu breadcrumb mới
        sessionStorage.setItem("breadcrumbTrail", JSON.stringify(breadcrumbTrail));
    }

    // Lấy breadcrumb sau khi cập nhật
    const breadcrumbTrail = JSON.parse(sessionStorage.getItem("breadcrumbTrail")) || [homePage];

    // Tạo HTML cho breadcrumb
    let breadcrumbHTML = breadcrumbTrail.map((page, index) => {
        let pageName = page.replace(".html", "").replace("-", " ").toUpperCase();
        return index === breadcrumbTrail.length - 1
            ? `<span>${pageName}</span>`  // Trang hiện tại không có link
            : `<a href="${page}">${pageName}</a> &gt; `;
    }).join("");

    // Gán vào HTML
    breadcrumbContainer.innerHTML = breadcrumbHTML;
});
