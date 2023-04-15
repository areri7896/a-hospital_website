// require('dotenv').config();
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import {
    getFirestore
} from "firebase/firestore";

// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyATYDhTzQUCuz46Pu3ledwICGe9J-I8u4w",
  authDomain: "a-hospital-website.firebaseapp.com",
  projectId: "a-hospital-website",
  storageBucket: "a-hospital-website.appspot.com",
  messagingSenderId: "17198961804",
  appId: "1:17198961804:web:eb568fd979fce262d497a9",
  measurementId: "G-FH90XBSB7S"
};

firebase.initializeApp(firebaseConfig);

const appointmentsRef = firebase.database().ref('appointments');

// Get the form element
const appointmentForm = document.getElementById('appointment-form');

appointmentForm.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();

  // Get the values from the form fields
  const name = appointmentForm.querySelector('input[name="Name"]').value;
  const number = appointmentForm.querySelector('input[name="number"]').value;
  const email = appointmentForm.querySelector('input[name="email"]').value;
  const date = appointmentForm.querySelector('input[name="date"]').value;
  const time = appointmentForm.querySelector('input[name="time"]').value;

  // Create a new appointment object with the form data
  const newAppointment = {
    name: name,
    number: number,
    email: email,
    date: date,
    time: time
  };

  appointmentsRef.push(newAppointment);

  appointmentForm.reset();

  // Show a success message
  window.alert("Appointment booked successfully!");
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