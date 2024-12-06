// LOGIN
document.addEventListener('DOMContentLoaded', () => {
  const signInButton = document.getElementById('signInButton');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  signInButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the form from submitting

    // Get email and password values
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Basic validation
    if (!email || !password) {
      alert('Please fill in all fields!');
      return;
    }

    if (!validateEmail(email)) {
      alert('Please enter a valid email address!');
      return;
    }

    // Simulate login process
    simulateLogin(email, password);
  });

  // Email validation function
  function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  // Simulate login function
  function simulateLogin(email, password) {
    // Simulate a simple check (for demo purposes, replace with actual API call)
    const mockEmail = "mahasiswa@gmail.com";
    const mockPassword = "mahasiswa";

    if (email === mockEmail && password === mockPassword) {
      alert('Login successful! Redirecting...');
      window.location.href = 'dashboard_mahasiswa.html'; // Redirect to dashboard
    } else {
      alert('Invalid email or password. Please try again.');
    }
  }
});

//REGISTER
document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('registerForm');
  const submitBtn = document.getElementById('submitBtn');

  registerForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value.trim();
    const nik = document.getElementById('nik').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validate fields
    if (!name || !nik || !email || !phone || !password) {
      alert('Please fill in all fields!');
      return;
    }

    if (!validateNIK(nik)) {
      alert('NIK must be a 16-digit number!');
      return;
    }

    if (!validateEmail(email)) {
      alert('Please enter a valid email address!');
      return;
    }

    if (!validatePhone(phone)) {
      alert('Please enter a valid phone number!');
      return;
    }

    if (password.length < 6) {
      alert('Password must be at least 6 characters long!');
      return;
    }

    // Simulate registration process
    simulateRegistration({ name, nik, email, phone, password });
  });

  // Function to validate NIK
  function validateNIK(nik) {
    return /^[0-9]{9}$/.test(nik); // NIK must be a 16-digit number
  }

  // Function to validate email
  function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  // Function to validate phone number
  function validatePhone(phone) {
    return /^[0-9]{10,15}$/.test(phone); // Phone number must be 10-15 digits
  }

  // Simulate registration process
  function simulateRegistration(data) {
    // Simulated registration success message
    alert('Registration successful! Redirecting to login page...');
    console.log('User registered:', data);
    window.location.href = 'login.html'; // Redirect to login page
  }
});


//FORGET PASSWORD
document.addEventListener('DOMContentLoaded', () => {
  const forgetPasswordForm = document.getElementById('forgetPasswordForm');
  const emailInput = document.getElementById('email');
  const messageElement = document.getElementById('message');

  forgetPasswordForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Mencegah pengiriman formulir default

    // Ambil nilai email dari input
    const email = emailInput.value.trim();

    // Validasi email
    if (!validateEmail(email)) {
      displayMessage('Please enter a valid email address.', 'error');
      return;
    }

    // Simulasi proses pengiriman email reset password
    simulateForgetPassword(email);
  });

  // Fungsi untuk validasi email
  function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  // Fungsi untuk menampilkan pesan sukses/error
  function displayMessage(message, type) {
    messageElement.textContent = message;
    messageElement.className = `message ${type}`;
  }

  // Simulasi proses lupa password
  function simulateForgetPassword(email) {
    // Simulasi daftar email terdaftar
    const registeredEmails = ['mahasiswa@gmail.com'];

    // Cek apakah email terdaftar
    if (registeredEmails.includes(email)) {
      displayMessage(
        'A reset password link has been sent to your email.',
        'success'
      );
    } else {
      displayMessage(
        'The email address is not registered. Please try again.',
        'error'
      );
    }
  }
});

//DASBOARD_MAHASISWA
document.addEventListener('DOMContentLoaded', function () {
  // 1. Tombol Logout
  const logoutButton = document.querySelector('li a[href="login.html"]');
  logoutButton.addEventListener('click', function (event) {
    event.preventDefault(); // Mencegah default behavior
    // Redirect ke halaman login
    window.location.href = 'login.html';
  });

  // 2. Mengubah status laporan
  const statusCells = document.querySelectorAll('.status');
  statusCells.forEach(cell => {
    cell.addEventListener('click', function () {
      // Mengubah status saat diklik
      if (this.classList.contains('completed')) {
        alert('Laporan sudah selesai diproses');
      } else if (this.classList.contains('processing')) {
        this.textContent = 'Completed'; // Update text status
        this.classList.remove('processing');
        this.classList.add('completed');
      } else if (this.classList.contains('unprocessed')) {
        this.textContent = 'Processing'; // Update text status
        this.classList.remove('unprocessed');
        this.classList.add('processing');
      }
    });
  });

  // 3. Ambil Nomor Antrean
  const takeNumberButton = document.querySelector('.card:nth-child(4) p');
  takeNumberButton.addEventListener('click', function () {
    // Menambahkan logika pengambilan nomor antrean
    const currentNumber = parseInt(this.textContent);
    const nextNumber = currentNumber + 1; // Nomor berikutnya
    this.textContent = nextNumber; // Update nomor antrean
    alert(`Nomor antrean yang Anda ambil adalah: ${nextNumber}`);
  });
});


//SIDE BAR DASHBOARD
document.addEventListener('DOMContentLoaded', function () {
  const sidebarLinks = document.querySelectorAll('.sidebar nav ul li a');

  // Ambil nama file dari URL saat ini
  const currentPath = window.location.pathname.split('/').pop();

  // Loop melalui setiap link sidebar
  sidebarLinks.forEach(link => {
    const linkPath = link.getAttribute('href').split('/').pop();

    // Tambahkan kelas active ke link yang sesuai dengan halaman saat ini
    if (linkPath === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active'); // Pastikan link lain tidak aktif
    }
  });
});

//HISTORY LAPORAN



//SETTINGS
document.querySelector('.upload-btn').addEventListener('click', () => {
  alert('Upload Image clicked!');
});

document.querySelector('.btn-save').addEventListener('click', (e) => {
  e.preventDefault();
  alert('Settings saved successfully!');
});


//SPP HTML
document.addEventListener('DOMContentLoaded', () => {
  const jenisLaporan = document.getElementById('jenis-laporan');
  const statusText = document.querySelector('.status-text');
  
  jenisLaporan.addEventListener('change', () => {
    statusText.textContent = 'Processing';
  });
});

//TAMBAH LAPORAN
document.getElementById('submit-button').addEventListener('click', function () {
  const jenisLaporan = document.getElementById('jenis-laporan').value;
  const keluhan = document.getElementById('keluhan').value;

  if (!keluhan) {
    alert('Mohon masukkan keluhan Anda.');
    return;
  }

  alert(`Laporan jenis "${jenisLaporan}" berhasil dikirim.`);
});
