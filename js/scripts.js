const loadDiscuss=async()=>{
    const res=await fetch(
        `https://openapi.programming-hero.com/api/retro-forum/posts`
      );
    const data=await res.json();
    const discussData=data.posts;
    console.log(discussData);
    displayDiscuss(discussData);
   
}

const displayDiscuss=(discussData)=>{
    const discussContainer=document.getElementById("discuss-container");
    console.log(discussData);

    discussData.forEach((discuss)=>{
        console.log(discuss);
        const discussCard = document.createElement("div");
        // discussCard.classList=`grid gap-8 border bg-[#F2F2FF] p-6 rounded-3xl`;
        discussCard.innerHTML=`
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
            <div class="bg-green-600 border rounded-3xl">
              <i
                class="fa-solid fa-inbox fa-sm p-1"
                style="color: #f2f4f8"
              ></i>
            </div>
          </div>
        </div>
      </div>
        `;

        discussContainer.appendChild(discussCard);

    });
}



loadDiscuss();
