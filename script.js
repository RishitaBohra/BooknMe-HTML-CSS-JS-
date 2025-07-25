// Load Navbar and Footer
window.addEventListener('DOMContentLoaded', () => {
  // Load Navbar
  fetch('navbar.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('navbar').innerHTML = data;

      // Theme toggle logic
      const themeToggle = document.getElementById('theme-toggle');
      const currentTheme = localStorage.getItem('theme') || 'light';
      if (currentTheme === 'dark') {
        document.body.classList.add('dark');
        themeToggle.textContent = '☀️';
      }
      themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        const theme = document.body.classList.contains('dark') ? 'dark' : 'light';
        themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
        localStorage.setItem('theme', theme);
      });

      // Sidebar logic
      const accountBtn = document.getElementById('account-btn');
      const accountSidebar = document.getElementById('account-sidebar');
      const closeAccountSidebar = document.getElementById('close-account-sidebar');

      accountBtn.addEventListener('click', () => {
        accountSidebar.classList.toggle('active');

        // Populate user info
        const username = localStorage.getItem('loggedInUser') || 'Guest';
        const email = localStorage.getItem('loggedInEmail') || 'email@example.com';
        const memberSince = localStorage.getItem('memberSince') || 'July 2025';
        const savedAvatar = localStorage.getItem('userAvatar') || 'images/default-avatar.png';

        document.getElementById('sidebar-username').textContent = username;
        document.getElementById('sidebar-email').textContent = email;
        document.getElementById('sidebar-member').textContent = 'Member since: ' + memberSince;
        document.getElementById('profile-avatar').src = savedAvatar;
      });

      closeAccountSidebar.addEventListener('click', () => {
        accountSidebar.classList.remove('active');
      });

      // Sidebar theme toggle
      const sidebarThemeToggle = document.getElementById('sidebar-theme-toggle');
      sidebarThemeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        const theme = document.body.classList.contains('dark') ? 'dark' : 'light';
        sidebarThemeToggle.textContent = theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
        localStorage.setItem('theme', theme);
      });

      // Logout logic
      const logoutBtn = document.getElementById('logout-btn');
      logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('loggedInUser');
        localStorage.removeItem('loggedInEmail');
        alert('Logged out successfully!');
        window.location.href = 'login.html';
      });

      // Avatar click to show selection
      const profileAvatar = document.getElementById('profile-avatar');
      const avatarSelection = document.getElementById('avatar-selection');

      profileAvatar.addEventListener('click', () => {
        avatarSelection.style.display = avatarSelection.style.display === 'none' ? 'block' : 'none';
      });

      // Load saved avatar on sidebar open already done above

      // Avatar selection logic
      const avatarOptions = document.querySelectorAll('.avatar-option');
      avatarOptions.forEach(option => {
        option.addEventListener('click', () => {
          const selectedAvatar = option.getAttribute('data-avatar');
          profileAvatar.src = selectedAvatar;
          localStorage.setItem('userAvatar', selectedAvatar);
          avatarSelection.style.display = 'none'; // hide after selection
        });
      });
    });

  // Load Footer
  fetch('footer.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    });
});
