document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  toggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('open');
  });
  
  const container = document.querySelector("#cardsContainer");
  const cardsData = [
    { img: "./images/img1.jpg", title: "Scenery One" },
    { img: "./images/img2.jpg", title: "Scenery Two" },
    { img: "./images/img3.jpg", title: "Scenery Three" },
    { img: "./images/img4.jpg", title: "Scenery Four" },
    { img: "./images/img5.jpg", title: "Scenery Five" },
    { img: "./images/img6.jpg", title: "Scenery Six" },
    { img: "./images/img7.jpg", title: "Scenery Seven" },
    { img: "./images/img8.jpg", title: "Scenery Eight" },
    { img: "./images/img9.jpg", title: "Scenery Nine" }
  ];

  cardsData.forEach(card => {
    // Create card div
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
  
    // Create image element
    const img = document.createElement("img");
    img.src = card.img;
    img.alt = card.title;
    img.classList.add("image");
  
    // Create content div
    const contentDiv = document.createElement("div");
    contentDiv.classList.add("mt-4");
  
    // Create heading
    const heading = document.createElement("h2");
    heading.classList.add("heading2");
    heading.textContent = card.title;
  
    // Create paragraph
    const paragraph = document.createElement("p");
    paragraph.classList.add("paragraph");
    paragraph.textContent = "Nature is a beautiful and calming force, filled with vibrant landscapes, diverse wildlife, and the changing rhythms of seasons. It reminds us of the interconnectedness of all living things.";
  
    // Create button
    const button = document.createElement("button");
    button.classList.add("button");
    button.textContent = "Learn More";
  
    // Append elements
    contentDiv.appendChild(heading);
    contentDiv.appendChild(paragraph);
    contentDiv.appendChild(button);
  
    cardDiv.appendChild(img);
    cardDiv.appendChild(contentDiv);
  
    container.appendChild(cardDiv);
  });
});