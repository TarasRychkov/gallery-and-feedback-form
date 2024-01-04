const STORAGE_KEY = "feedback-msg";

const form = document.querySelector(".feedback-form");
const textarea = form.querySelector("textarea");
const input = form.querySelector("input")

form.addEventListener("submit", onFormSubmit);
form.addEventListener("input", onFormInput);

let exportedObject = {
  email: input.value,
  message: textarea.value
};

function onFormInput(event) {
  exportedObject[event.target.name] = event.target.value.trim()
  localStorage.setItem(STORAGE_KEY, JSON.stringify(exportedObject));
}

function populateTextarea() {
  if (exportedObject) {
    input.value = exportedObject.email;
    textarea.value = exportedObject.message;
  }
}

function onFormSubmit(event) {
  event.preventDefault();

   if (!textarea.value || !input.value) {
     alert("Please fill in both fields")
     return
  }

  const savedObject = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(savedObject);
  
  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
}