Overview

This project displays a list of products with cards showing product images, names, prices, and variant options. Users can select variants and add products to the cart. If a product is out of stock, the add button is disabled and shows “Out of Stock”.

Features
	•	Shows product image, title, and price
	•	Dropdown menu for selecting variants
	•	Add to Cart button that disables when out of stock
	•	Responsive design that works on mobile, tablet, and desktop
	•	Loading skeleton while fetching data

Layout

The product cards use Reactstrap’s Card component arranged in a responsive Bootstrap grid. Each card keeps consistent sizing and spacing for a neat look.

Responsiveness

Bootstrap’s grid system makes sure cards rearrange smoothly on different screen sizes. Images maintain their aspect ratio so they don’t get distorted.

Running the Project
	1.	Install dependencies: npm install
	2.	Start the app: npm start
