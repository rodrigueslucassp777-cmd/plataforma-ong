document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (!form) return;

  form.addEventListener("submit", e => {
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    let valido = true;

    if (!nome || nome.value.trim() === "") {
      alert("Nome é obrigatório");
      valido = false;
    }

    if (!email || !email.value.includes("@")) {
      alert("Email inválido");
      valido = false;
    }

    if (!valido) e.preventDefault();
  });
});
