document.addEventListener("DOMContentLoaded", () => {
    const menuSection = document.querySelector(".menu");
  
    menuSection.style.opacity = "0";
  
    function fadeIn(element) {
      let opacity = 0;
      const interval = setInterval(() => {
        opacity += 0.1;
        element.style.opacity = opacity;
        if (opacity >= 1) {
          clearInterval(interval);
        }
      }, 50); 
    }
  
    fadeIn(menuSection);
  });
  const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `Buttermilk pancakes enriched with our homemade maple syrup sauce for
      rich sweet flavour. Can be accompanied with any fruits in our little farm basket ;) `,
    },
    {
      id: 2,
      title: "Royal Burger",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `Meet the Royal! A double beef pattie burger laced with 2 slices of local farms cheddar. Can be accompanied with any sauces and a selection of 2 sides.`,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `Our special Godzilla Milkshake offers a sugary goodness with many flavours, topped off with a doughnut or a  scoop of icecream.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Our prized breakfast can have many variations with a side of a drink. Psst(our favourite one is the English breakfast combo for its fresh eggs)`,
    },
    {
      id: 5,
      title: "Veggie Royal",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `Our vegetarian option offers a sweet bean and pea pattie, topped off with a fried egg and our vegetarian cheese sauce.Comes with 1 side and a hot drink.`,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Double Oreo Milkshake with a hint of homegrown strawberies.`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `Muffins are the best friends of bacon, egg n monterey cheese combo.`,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `Our renditions of the americans classic burger style combined with the golden slim fries that can be upgraded for a combo. `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `Quarantine might be over but our mega sized shared milkshake for 2+ people ain't. Prices differ with size and additions.`,
    },
    {
      id: 10,
      title: "9oz sirloin beef steak",
      category: "dinner",
      price: 22.99,
      img: "./images/item-10.jpeg",
      desc: `Our prized specialty, the 9oz sirloin steak locally supported by our cherished farms, carefully cooked by our chefs this steak ought to bring juicy to a whole new level. `,
    },
  ];
  const sectionCenter = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
  window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
  });
  
  
  function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
  
      return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">£ ${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");
  
    sectionCenter.innerHTML = displayMenu;
  }
  function displayMenuButtons() {
    const categories = menu.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["all"]
    );
    const categoryBtns = categories
      .map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
          </button>`;
      })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);
  
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "all") {
          diplayMenuItems(menu);
        } else {
          diplayMenuItems(menuCategory);
        }
      });
    });
  }
  