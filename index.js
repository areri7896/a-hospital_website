// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATYDhTzQUCuz46Pu3ledwICGe9J-I8u4w",
  authDomain: "a-hospital-website.firebaseapp.com",
  databaseURL: "https://a-hospital-website-default-rtdb.firebaseio.com",
  projectId: "a-hospital-website",
  storageBucket: "a-hospital-website.appspot.com",
  messagingSenderId: "17198961804",
  appId: "1:17198961804:web:eb568fd979fce262d497a9",
  measurementId: "G-FH90XBSB7S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the appointments collection in the database
var appointmentsRef = firebase.database().ref('appointments');

// Get the form element
var appointmentForm = document.getElementById('appointment-form');

// Add an event listener for when the form is submitted
appointmentForm.addEventListener('submit', submitForm);

// Function to submit the form data to the database
function submitForm(event) {
  // Prevent the form from submitting normally
  event.preventDefault();

  // Get the values from the form fields
  var name = appointmentForm.querySelector('input[name="Name"]').value;
  var number = appointmentForm.querySelector('input[name="number"]').value;
  var email = appointmentForm.querySelector('input[name="email"]').value;
  var date = appointmentForm.querySelector('input[name="date"]').value;

  // Create a new appointment object with the form data
  var newAppointment = {
    name: name,
    number: number,
    email: email,
    date: date
  };

  // Add the appointment data to the database
  appointmentsRef.push(newAppointment);

  // Reset the form fields
  appointmentForm.reset();
}

const navSlide = () => {
  const burger = document.querySelector(".Hamb");
  const nav = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".navbar a");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s `;
      }
    });
    burger.classList.toggle("toggle");
  });
  //
};

navSlide();