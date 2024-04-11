import { Component } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {

}

// ------------------- Review form TS file
//
// document.getElementById('reviewForm')?.addEventListener('submit', function (event) {
//   event.preventDefault();
//
//   // Get form values
//   const nameInput = document.getElementById('name') as HTMLInputElement;
//   const reviewInput = document.getElementById('review') as HTMLTextAreaElement;
//
//   const name = nameInput.value;
//   const review = reviewInput.value;
//
//   // Create a new review element
//   const reviewElement = document.createElement('div');
//   reviewElement.className = 'alert alert-info rounded p-2 mt-2';
//   reviewElement.innerHTML = `<strong>${name}:</strong> ${review}`;
//
//   // Append the review to the reviews section
//   const reviewsSection = document.getElementById('reviews');
//   if (reviewsSection) {
//     reviewsSection.appendChild(reviewElement);
//   }
//
//   // Clear form fields
//   nameInput.value = '';
//   reviewInput.value = '';
// });
