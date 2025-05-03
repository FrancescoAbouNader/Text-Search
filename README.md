React Search App

This is a simple React-based app that lets users search through a dataset and automatically highlights matching text. An ad image appears beside the search bar for promotional use.

Features

	•	Live Search: Instantly filters content as you type.
	•	Text Highlighting: Matches are highlighted in yellow.
	•	Ad Integration: Linked ad image placed beside the search bar.

Tech Stack

	•	React
	•	JavaScript
	•	CSS

Getting Started

1. Clone the repository

git clone https://github.com/FrancescoAbouNader/Text-Search.git
cd Text-Search

2. Install dependencies

npm install

3. Start the development server

npm start

Your app will be running at http://localhost:3000.

Project Structure

/src

├── App.js        # Main React component

├── App.css       # Stylesheet

├── data.js       # Sample data for search

├── logot.jpg     # Ad image

Sample data.js Format

export const Data = [
  {
    title: "Duis consequat dui nec nisi volutpat eleifend.",
    date: "07/14/1996",
    script: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
  
  },
  {
    title: "Morbi non lectus.",
    date: "01/31/2017",
    script: "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio."
  }
];

	You can add as many entries as you like with title, date, and script.

Customization

	•	Ad image: Replace logot.jpg with any image in the public/ or src/ folder.
	•	Ad link: Update the URL in App.js inside the <a href="..."> tag.
