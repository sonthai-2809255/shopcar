const cars = {
    toyota: {
        name: "Toyota Camry",
        price: "1.200.000.000 VND",
        year: "2014",
        power: "Xăng",
        km: "44000km",
        seat: "6",
        hs: "tự động",
        description: "🚗 KIA SEDONA 2.2L DATH 2019 FULL DẦU CAO CẤP 🚗<br>" +
            "<br>⭐️ Xe gia đình, 7 chỗ cao cấp, rộng rãi, sang trọng, tiện nghi<br>" +
            "⭐️ Động cơ Diesel - Hộp số tự động 8 cấp<br>" +
            "🔹 Xe màu Trắng - Nội thất Kem<br>" +
            "🔹 Sản xuất 2019<br>" +
            "🔹 ODO: 44.000km<br>" +
            "<br><br>✨️ Trang bị options: Hệ thống đèn full LED, Ghế chỉnh điện bọc da cao cấp, Nhớ ghế 2 vị trí, Phanh tay điện tử, Sưởi ghế và vô lăng, Sạc không dây chuẩn Qi, Điều hòa tự động độc lập 3 vùng có lọc khí i-on, 2 cửa sổ trời, Cốp điện tự động, 6 túi khí, Camera và cảm biến lùi...<br>" +
            "<br>✨️ Trang bị thêm: Film cách nhiệt, Thảm lót sàn,...<br>" +
            "<br>🔥 Cam kết xe không đâm đụng, không ngập nước, không tua đồng hồ.🔥<br>" +
            "<br><br>—𝐀𝐔𝐓𝐎 𝟑𝐗—𝐗𝐄 𝐋𝐔̛𝐎̛́𝐓 𝐕𝐈𝐄̣̂𝐓 𝐍𝐀𝐌",
        manufacturer: "KIA",
        model: "Sedona Platinum",
        version: "DATH D",
        origin: "Quốc tế",
        images: [
            "car1.jpg",
            "images2/car2.jpg",
            "images2/car3.jpg",
            "images2/car4.jpg",
            "images2/car5.jpg",
            "images2/car6.jpg",
            "images2/car7.jpg"
        ]
    },
    ford: {
        name: "Ford Ranger",
        price: "900.000.000 VND",
        year: "178 mã lực",
        km: "",
        seat: "",
        hs: "",
        images: ["car2.jpg", "images2/car4.jpg", "images2/car5.jpg"]
    },
    honda: {
        name: "Honda Civic",
        price: "850.000.000 VND",
        year: "178 mã lực",
        km: "",
        seat: "",
        hs: "",
        images: ["car3.jpg", "images2/car6.jpg", "images2/car7.jpg"]
    }
};

let currentImageIndex = 0;
let carImages = [];

// Lấy tham số car từ URL
const params = new URLSearchParams(window.location.search);
const carKey = params.get('car');

if (carKey && cars[carKey]) {
    const car = cars[carKey];
    carImages = car.images;

    document.getElementById('car-title').innerText = car.name;
    document.getElementById('car-price').innerText = car.price;
    document.getElementById('car-year').innerText = car.year;
    document.getElementById('car-power').innerText = car.power;
    document.getElementById('car-km').innerText = car.km;
    document.getElementById('car-seat').innerText = car.seat;
    document.getElementById('car-hs').innerText = car.hs;
    document.getElementById('car-description').innerHTML = car.description; // Sử dụng innerHTML
    document.getElementById('car-manufacturer').innerText = car.manufacturer;
    document.getElementById('car-model').innerText = car.model;
    document.getElementById('car-version').innerText = car.version;
    document.getElementById('car-year-overview').innerText = car.year; // Năm sản xuất
    document.getElementById('car-type').innerText = "MPV"; // Kiểu dáng
    document.getElementById('car-origin').innerText = car.origin;

    // Hiển thị hình ảnh lớn đầu tiên
    document.getElementById('large-image').src = carImages[currentImageIndex];

    // Hiển thị các ảnh nhỏ trong thumbnail
    const thumbnailContainer = document.querySelector('.thumbnail-images');
    carImages.forEach((image, index) => {
        const imgElement = document.createElement('img');
        imgElement.className = 'thumbnail';
        imgElement.src = image;
        imgElement.alt = `Ảnh nhỏ ${index + 1}`;
        imgElement.onclick = () => changeImage(image);
        thumbnailContainer.appendChild(imgElement);
    });
}

// Hàm thay đổi hình ảnh
function changeImage(imageSrc) {
    document.getElementById('large-image').src = imageSrc;
    currentImageIndex = carImages.indexOf(imageSrc);
}

// Hàm chuyển đến ảnh tiếp theo
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % carImages.length;
    document.getElementById('large-image').src = carImages[currentImageIndex];
}

// Hàm quay lại ảnh trước đó
function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + carImages.length) % carImages.length;
    document.getElementById('large-image').src = carImages[currentImageIndex];
}

// Hàm thu gọn và mở rộng mô tả
function toggleDescription() {
    const descriptionElement = document.getElementById('car-description');
    const toggleButton = document.getElementById('toggle-description');
    
    // Thay đổi class để kiểm soát việc hiển thị
    descriptionElement.classList.toggle('expanded'); 

    // Cập nhật văn bản của nút
    if (descriptionElement.classList.contains('expanded')) {
        toggleButton.innerText = "Thu gọn"; 
    } else {
        toggleButton.innerText = "Xem thêm"; 
    }
}

// Gọi hàm để gán sự kiện cho nút "Xem thêm"
document.getElementById('toggle-description').addEventListener('click', toggleDescription);

// Gọi hàm để hiển thị mô tả lần đầu
displayCarDescription();