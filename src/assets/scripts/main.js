/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';
import * as bootstrap from 'bootstrap';

/**
 * Write any other JavaScript below
 */

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registration-form");
  const errorAlert = document.getElementById("error-alert");
  const toastContainer = new bootstrap.Toast(document.getElementById("success-toast"));
  if (form){
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      if (!name || name.length < 5 || !email) {
        errorAlert.classList.remove("d-none");
        return;
      }
  
      errorAlert.classList.add("d-none");
      toastContainer.show();
      form.reset();
    });
  }

});

