const foram = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
const data = await res.json();
const foramData = data.posts;
// console.log(foramData);
displayForam(foramData);
};
 
const displayForam = foramData =>{
    // console.log(foramData);
const cardContainer = document.getElementById('card-container');

    foramData.forEach(card =>{
        // console.log(card);

      const card1 = document.createElement('div');

  card1.innerHTML =`
 

  
  <div class="rounded-lg p-4 mx-6 flex">
   <div class="">
<h1 class="mx-3"> 
  <div  class="avatar online ${card1.isActive? 'green': 'red' }">
    <div class="w-24 rounded-full">
    <img src="${card.image}" />
    </div>
  </div>

</h1>

   </div>
   <div class="">
    <div class=" items-center justify-between  mb-2">
    <span class="text-blue-600">${card.category}</span>
      <span class="text-gray-600 mx-3">Author : ${card.author.name}</span>
  </div>
  <h2 class="text-xl font-bold mb-2">${card.title}</h2>

  <p class="text-gray-700">${card.description}</p>
  <div class="flex items-center justify-between mt-4">
      <div class="flex items-center space-x-2">

        <i class="fa-regular fa-message"></i>
          <span class="text-gray-500">${card.comment_count}</span>
      </div>
      <div class="flex items-center space-x-2">
        <i class="fa-regular fa-eye"></i>
          <span class="text-gray-500">${card.view_count}</span>
      </div>
      <div class="flex items-center space-x-2">
        <i class="fa-regular fa-clock"></i>
          <span class="text-gray-500">${card.posted_time}</span>
      </div>
      <!-- <div class="h-5 w-5 text-green-500"><i class="fa-regular fa-envelope-open"></i></div> -->
      <button onclick ='title(${card.title})' class="btn rounded-full h-5 w-5 text-white  bg-green-400"><i class="fa-regular fa-envelope-open"></i></button>
      <!-- <div class="h-5 w-5 text-green-500"><i class="fa-regular fa-envelope-open"></i></div> -->
  </div>
   </div>
</div>


`
cardContainer.appendChild(card1);
    });
}

const title = (text) =>{
  console.log(text);
}


const foram2 = async () =>{
    const res = await fetch(' https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    // console.log(data);
    displayData(data);
}

const displayData = data =>{

    const cardContainer = document.getElementById('footer-card-container') 

    data.forEach(card1=>{
        // console.log(card1);
        const card2 = document.createElement('div');
        card2.innerHTML = `
        
        <div class="card w-96 bg-base-100 shadow-xl ">
        <figure class="px-10 pt-10">
          <img src="${card1.cover_image}" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body ">
          <h2 class=""> <i class="fa-regular fa-calendar-days"></i> ${card1.author.posted_date}</h2>
          <p class="font-bold text-xl">${card1.title}</p>
          <p class="mt-2">${card1.description}</p>
          <div class="card-actions flex">
             <div class="">
  
             <div class="avatar">
             <div class="w-24 rounded-full">
               <img src="${card1.profile_image}" />
             </div>
           </div>
  
             </div>
             <div class="">
              <p>${card1.author.name}</p>
               <p>${card1.author.designation ? card1.author.designation:"no publish date"}</p>
             </div>
          </div>
        </div>
      </div>
        
        `
        cardContainer.appendChild(card2);
         
    });
}

foram2()

foram()