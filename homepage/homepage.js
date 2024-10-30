// Lấy các phần tử DOM cần thiết
const imgFeature = document.querySelector('.img-feature');  // Ảnh lớn đang hiển thị
const listImg = document.querySelectorAll('.list-img img'); // Danh sách các ảnh thumbnail

// Log để kiểm tra xem script có chạy không và các phần tử có được select đúng không
console.log("Script đang chạy");
console.log({imgFeature, listImg});

// Hàm cập nhật class active cho thumbnail được chọn
function updateActiveClass(clickedImg) {
    // Xóa class active ở tất cả các thumbnail
    listImg.forEach(img => {
        img.parentElement.classList.remove('active');
    });
    // Thêm class active vào thumbnail được chọn
    clickedImg.parentElement.classList.add('active');
}

// Hàm thay đổi slide
function changeSlide() {
    // Lấy src của ảnh hiện tại
    const currentImgSrc = imgFeature.getAttribute('src');
    // Tìm vị trí của ảnh hiện tại trong danh sách
    const currentIndex = [...listImg].findIndex(img => 
        img.getAttribute('src') === currentImgSrc
    );
    
    // Chuyển đến ảnh tiếp theo, nếu là ảnh cuối thì quay lại ảnh đầu
    const newIndex = currentIndex < listImg.length - 1 ? currentIndex + 1 : 0;
    
    // Cập nhật src cho ảnh lớn
    imgFeature.src = listImg[newIndex].getAttribute('src');
    // Cập nhật trạng thái active cho thumbnail
    updateActiveClass(listImg[newIndex]);
}

// Xử lý sự kiện click vào thumbnail
listImg.forEach(imgElement => {
    imgElement.addEventListener('click', e => {
        // Cập nhật ảnh lớn khi click vào thumbnail
        imgFeature.src = e.target.getAttribute('src');
        // Cập nhật trạng thái active
        updateActiveClass(e.target);
        // Reset interval để tránh chuyển ảnh quá nhanh
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(changeSlide, 3000);
    });
});

// Thiết lập tự động chuyển ảnh sau mỗi 3 giây
let autoSlideInterval = setInterval(changeSlide, 3000);