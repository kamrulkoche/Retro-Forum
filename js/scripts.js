const loadDiscuss=async()=>{
    const res=await fetch(
        `https://openapi.programming-hero.com/api/retro-forum/latest-posts`
      );
    const data=await res.json();
    const discussData=data;
    // console.log(discussData);
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
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
        </div>

        <div class="grid gap-2">
          <div>
            <p class="font-inter text-[#12132D] text-base font-medium">
              <span class="me-4"># Music</span> Author : Awlad Hossain
            </p>
            <p class="text-lg font-bold text-black">
              10 Kids Unaware of Their Halloween Costume
            </p>
            <p class="font-inter text-[#12132D] text-base font-normal">
              It’s one thing to subject yourself to ha Halloween costume
              mishap because, hey that’s your prerogative
            </p>
            <hr class="border-dashed border border-gray-400 mt-2" />
          </div>

          <div class="flex justify-between items-center">
            <div
              class="flex gap-6 text-red text-lg font-normal text-[#12132D]"
            >
              <p class="flex gap-2 items-center">
                <i class="fa-regular fa-message"></i><span>560</span>
              </p>
              <p class="flex gap-2 items-center">
                <i class="fa-regular fa-eye"></i><span>560</span>
              </p>
              <p class="flex gap-2 items-center">
                <i class="fa-regular fa-clock"></i><span>560</span>min
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
