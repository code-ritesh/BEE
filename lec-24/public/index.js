// Wait until the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // ---- Signup ----
  const signupform = document.querySelector("#Signup");
  const signupusername = document.querySelector("#signup-username");
  const signupemail = document.querySelector("#signup-email");
  const signuppassword = document.querySelector("#signup-password");

  signupform.addEventListener("submit", async (e) => {
    e.preventDefault();

    let username = signupusername.value.trim();
    let email = signupemail.value.trim();
    let password = signuppassword.value.trim();

    let response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    let data = await response.json();
    console.log(data);

    if (data.success) {
      alert("Signup successful! Please log in.");
    } else {
      alert("Signup failed: " + data.message);
    }
  });

  // ---- Login ----
  const loginform = document.querySelector("#Login");
  const loginusername = document.querySelector("#login-username");
  const loginpassword = document.querySelector("#login-password");

  loginform.addEventListener("submit", async (e) => {
    e.preventDefault();

    let username = loginusername.value.trim();
    let password = loginpassword.value.trim();

    let response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    let data = await response.json();
    console.log(data);

    if (data.success) {
      alert("Login successful!");
    } else {
      alert("Login failed: " + data.message);
    }
  });
});
