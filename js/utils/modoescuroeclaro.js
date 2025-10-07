function toggleDark() {
  const body = document.body;
  const icon = document.getElementById("theme-toggle");
  const isDark = body.classList.toggle('dark');
  localStorage.setItem('darkMode', isDark ? 'on' : 'off');
  icon.textContent = isDark ? '☀️' : '🌙';
}

document.addEventListener("DOMContentLoaded", () => {
  const savedMode = localStorage.getItem("darkMode");
  const icon = document.getElementById("theme-toggle");

  if (savedMode === "on") {
    document.body.classList.add("dark");
    icon.textContent = "☀️";
  }
});
