// Traditional (long and error-prone)
if (user && user.profile && user.profile.email) {
  console.log(user.profile.email);
}

// Modern way with Optional Chaining
console.log(user?.profile?.email); // Prints email or undefined, avoids crash
