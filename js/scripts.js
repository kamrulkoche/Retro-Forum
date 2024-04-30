const loadDiscuss = async () => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/retro-forum/posts`
  );
  const data = await res.json();
  const discussData = data.posts;
  // console.log(discussData);
  displayDiscuss(discussData);
};

const displayDiscuss = (discussData) => {
  const discussContainer = document.getElementById("discuss-container");
  // console.log(discussData);

  discussData.forEach((discuss) => {
    // console.log(discuss);
    const discussCard = document.createElement("div");

    // discussCard.classList=`grid gap-8 border bg-[#F2F2FF] p-6 rounded-3xl`;
    discussCard.innerHTML = `
        <div class="grid gap-8 border bg-[#F2F2FF] p-6 rounded-3xl">
        <div>
          <div class="avatar online">
            <div class="w-16 rounded-full">
              <img
                src="${discuss.image}"
              />
            </div>
          </div>
        </div>

        <div class="grid gap-2">
          <div>
            <p class="font-inter text-[#12132D] text-base font-medium">
              <span class="me-4"># ${discuss.category}</span> Author : ${discuss.author.name}
            </p>
            <p class="text-lg font-bold text-black">
              ${discuss.title}
            </p>
            <p class="font-inter text-[#12132D] text-base font-normal">
             ${discuss.description}
            </p>
            <hr class="border-dashed border border-gray-400 mt-2" />
          </div>

          <div class="flex justify-between items-center">
            <div
              class="flex gap-6 text-red text-lg font-normal text-[#12132D]"
            >
              <p class="flex gap-2 items-center">
                <i class="fa-regular fa-message"></i><span>${discuss.comment_count}</span>
              </p>
              <p class="flex gap-2 items-center">
                <i class="fa-regular fa-eye"></i><span>${discuss.view_count}</span>
              </p>
              <p class="flex gap-2 items-center">
                <i class="fa-regular fa-clock"></i><span>${discuss.posted_time}</span>min
              </p>
            </div>
            <button class="bg-green-600 border rounded-3xl" onClick="handleShowDetails('${discuss.title}', '${discuss.view_count}')">
              <i
                class="fa-solid fa-inbox fa-sm p-1"
                style="color: #f2f4f8"
              ></i>
            </button>
          </div>
        </div>
      </div>
        `;
    discussContainer.appendChild(discussCard);
  });
};

let count = 0;
function handleShowDetails(title = "", view_count = "") {
  count++;
  console.log(count);
  const markCount = document.getElementById("mark-count");
  markCount.innerText = count;
  const discussTitle = document.getElementById("discuss-title");
  const titleField = document.createElement("div");
  console.log("Hello", title, view_count);
  titleField.innerHTML = `
      <div
      class="flex gap-10 items-center justify-between bg-white p-4 rounded-3xl"
    >
      <p class="text-base font-semibold"> ${title}</p>
     
      <p
        class="flex gap-2 items-center justify-between text-base font-normal"
      >
        <i class="fa-regular fa-eye"></i><span>${view_count}</span>
      </p>
    </div>
      `;

  discussTitle.appendChild(titleField);
}

const loadLatest = async () => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/retro-forum/latest-posts`
  );
  const data = await res.json();
  const latestData = data;
  //console.log(latestData);
  displayLatest(latestData);
};

const displayLatest = (latestData) => {
  const latestContainer = document.getElementById("latest-container");
  console.log(latestData);

  latestData.forEach((latest) => {
    console.log(latest.author.posted_date ?? "N/A");
    const latestCard = document.createElement("div");
    latestCard.innerHTML = `
    <div>
    <div class="border-2 rounded-2xl p-5">
      <div>
      <img
        src="${latest.cover_image}"
        />
      </div>

      <div class="grid gap-1 mt-5">
        <div class="flex items-center gap-4">
          <i class="fa-solid fa-calendar"></i>
          <p class="text-[#12132D] font-normal text-base">
            ${latest.author.posted_date ?? "N/A"}
          </p>
        </div>
        <h3 class="text-xl font-extrabold text-black">
         ${latest.title}
        </h3>
        <p class="text-[#12132D] font-normal text-base">
        ${latest.description}
        </p>
        <div class="flex gap-4 items-center">
          <div class="avatar">
            <div class="w-10 h-10 rounded-full">
              <img
                src="${latest.profile_image}"
              />
            </div>
          </div>
          <div>
            <h3 class="text-lg font-bold text-black">
            ${latest.author.name ?? "N/A"}
            </h3>
            <p class="text-[#12132D] font-normal text-base"> ${latest.author.designation ?? "N/A"}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
    latestContainer.appendChild(latestCard);
  });
};

loadDiscuss();
loadLatest();
