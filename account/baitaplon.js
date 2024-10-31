function showRegister() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
    document.getElementById('message').textContent = ''; // Xóa thông báo
     }

function showLogin() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('message').textContent = ''; // Xóa thông báo
}

function handleLogin(event) {
        event.preventDefault(); // Ngăn không cho form gửi đi
    
        var username = document.getElementById('loginUsername').value;
        var password = document.getElementById('loginPassword').value;
         // Kiểm tra xem tên đăng nhập có chứa chỉ chữ cái hay không
    if (!/^[a-zA-Z]+$/.test(username)) {
        document.getElementById('message').textContent = 'Tên đăng nhập phải chỉ chứa chữ cái!';
        return;
    }
    
        // Lấy tài khoản đã đăng ký từ localStorage
        var registeredUsername = localStorage.getItem('registeredUsername');
        var registeredPassword = localStorage.getItem('registeredPassword');
    
        // Kiểm tra tài khoản đăng nhập với tài khoản đã đăng ký
        if (username === registeredUsername && password === registeredPassword) {
            document.getElementById('message').textContent = 'Đăng nhập thành công!';
    
            // Lưu tên đăng nhập vào localStorage để sử dụng ở trang chủ
            localStorage.setItem('loggedInUser', username);
    
            // Chuyển hướng đến trang chủ sau khi đăng nhập thành công
            setTimeout(function() {
                window.location.href = '/homepage/homepage.html';
                // Đường dẫn tới trang chủ
            }, 1000);
        } else {
            document.getElementById('message').textContent = 'Sai tên đăng nhập hoặc mật khẩu!';
        }
    }
    


function handleRegister(event) {
        event.preventDefault(); // Ngăn không cho form gửi đi
    
        var username = document.getElementById('registerUsername').value;
        var password = document.getElementById('registerPassword').value;
        var confirmPassword = document.getElementById('confirmPassword').value;
        // Kiểm tra xem tên đăng nhập có chứa chỉ chữ cái hay không
    if (!/^[a-zA-Z]+$/.test(username)) {
        document.getElementById('message').textContent = 'Tên đăng nhập phải chỉ chứa chữ cái!';
        return;
    }
    
        // Kiểm tra xem mật khẩu và nhập lại mật khẩu có trùng khớp hay không
        if (password !== confirmPassword) {
            document.getElementById('message').textContent = 'Mật khẩu không khớp!';
            return;
        }
    
        // Lưu thông tin tài khoản vào localStorage
        localStorage.setItem('registeredUsername', username);
        localStorage.setItem('registeredPassword', password);
    
        document.getElementById('message').textContent = 'Đăng ký thành công!';
    
        // Chuyển về form đăng nhập sau khi đăng ký thành công
        setTimeout(function() {
            showLogin(); // Hàm để chuyển về form đăng nhập
        }, 1000);
    }
    
