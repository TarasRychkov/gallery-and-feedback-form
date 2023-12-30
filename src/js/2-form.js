const STORAGE_KEY = "feedback-msg";

const form = document.querySelector(".feedback-form");
const textarea = form.querySelector("textarea");
const input = form.querySelector("input")

form.addEventListener("submit", onFormSubmit);
form.addEventListener("input", onFormInput);
const exportedObject = {};

populateTextarea();

function onFormSubmit(event) {
  event.preventDefault();

  const exportedObject = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (!exportedObject.email) {
    delete exportedObject.email
  }

  if (!exportedObject.message) {
    delete exportedObject.message
  }
  
  console.log(exportedObject);
  
  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
}

function onFormInput() {
  exportedObject.email = input.value || "";
  exportedObject.message = textarea.value || '';
  localStorage.setItem(STORAGE_KEY, JSON.stringify(exportedObject));
}

function populateTextarea() {
  const savedObject = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedObject) {
    input.value = savedObject.email;
    textarea.value = savedObject.message;

  }
}