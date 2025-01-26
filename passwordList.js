// passwordList.js

export function PasswordList(container) {
  function addPassword(password) {
    const li = document.createElement("li");
    li.textContent = password;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.addEventListener("click", () => li.remove());

    li.appendChild(deleteBtn);
    container.appendChild(li);
  }

  return { addPassword };
}
