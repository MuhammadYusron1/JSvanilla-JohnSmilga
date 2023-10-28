// select image, name, job, info, button left, right, random
// set currentitem
// load content
// show person based on item
// show next person button
// show prev person button
// show random person button

const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];

// select review items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

// select button
const prevBtn = document.querySelector(".prev-button");
const nextBtn = document.querySelector(".next-button");
const randomBtn = document.querySelector(".random-button");

// current item selector
let currentitem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", () => {
    showPerson();
});

// show person based on item
function showPerson() {
    const item = reviews[currentitem];
    img.src = item.img;
    author.textContent = item.author;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person button
nextBtn.addEventListener("click", () => {
    currentitem++;
    if (currentitem > reviews.length - 1){
        currentitem = 0;
    }
    showPerson();
});

// show prev person button
prevBtn.addEventListener("click", () => {
    currentitem--;
    if (currentitem < 0){
        currentitem = reviews.length - 1;
    }
    showPerson();
});

// show random person button
randomBtn.addEventListener("click", () => {
    currentitem = Math.floor(Math.random() * reviews.length);
    showPerson();
});