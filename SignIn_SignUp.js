
// 

function openLogin() {
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("signupForm").style.display = "none";
}

function openSignup() {
  document.getElementById("signupForm").style.display = "block";
  document.getElementById("loginForm").style.display = "none";
}

function checkLogin() {
  const isLoggedIn = localStorage.getItem('authToken');
  const profileLink = document.getElementById('profileLink');

  if (isLoggedIn) {
    profileLink.style.display = 'block';
  } else {
    profileLink.style.display = 'none';
  }
}

function toggleProfileMenu() {
  const profileMenu = document.getElementById('profileMenu');
  profileMenu.style.display = (profileMenu.style.display === 'block') ? 'none' : 'block';
}

