"use strict";

// const btn1 = document.getElementById("button1");
// const btn2 = document.getElementById("button2");
// const btn3 = document.getElementById("button3");
// const btn4 = document.getElementById("button4");

let postId = 1;

const randerPost = function (data) {
  let html = "";
  data.map((value) => {
    console.log(value);

    // const { primary, address, phone, website, company } = value;
    // console.log(primary, address, phone, website, company);
    if (value.postId === postId)
      html += `<div
    class="max-w-md p-8 sm:flex sm:space-x-6 dark:bg-gray-900 dark:text-gray-100"
  >
    <div class="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
      <img
        src="https://source.unsplash.com/100x100/?portrait?1"
        alt=""
        class="object-cover object-center w-full h-full rounded dark:bg-gray-500"
      />
    </div>
    <div class="flex flex-col space-y-4">
      <div>
        <h2 class="text-2xl font-semibold">${value.name}</h2>
        <span class="text-sm dark:text-gray-400">${value.body}</span>
      </div>
      <div class="space-y-1">
        <span class="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            aria-label="Email address"
            class="w-4 h-4"
          >
            <path
              fill="currentColor"
              d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
            ></path>
          </svg>
          <span class="dark:text-gray-400">${value.email}</span>
        </span>
        <span class="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            aria-label="Phonenumber"
            class="w-4 h-4"
          >
            <path
              fill="currentColor"
              d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"
            ></path>
          </svg>
          <span class="dark:text-gray-400 text-2xl font-semibold">ID: ${value.id} --- PostID : ${value.postId}</span>
        </span>
      </div>
    </div>
  </div>`;

    document.getElementById("profile").innerHTML = html;
  });
};

const rendarError = function (msg) {
  document.getElementById("profile").insertAdjacentHTML("beforeend", msg);
};

const getPostId = function (id) {
  fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .then((response) => response.json())
    .then((data) => {
      // const [DATA] = data;
      // console.log(DATA);
      randerPost(data);
    })
    .catch((err) => {
      console.error(`${err}`);
      rendarError(`Something went Wrong ${err.message}. Try again!`);
    });
};

const buttons = document.querySelectorAll(".addToListBtn");
console.log(buttons);

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    postId = index + 1;
    getPostId(postId);
  });
});

getPostId(postId);
