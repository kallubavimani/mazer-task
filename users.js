document.addEventListener("DOMContentLoaded", () => {
  fetch('/data.json')
    .then(res => res.json())
    .then(data => {
      const tbody = document.getElementById('userTableBody');
      tbody.innerHTML = data.map(user => `
        <tr>
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.role}</td>
          <td>${user.status}</td>
        </tr>
      `).join('');
    })
    .catch(err => console.error("Error loading data:", err));
});
