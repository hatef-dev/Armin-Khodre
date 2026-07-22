<template>
  <div class="my-container bg-white p-6 shadow-lg -translate-y-16 rounded-2xl">
    <div class="">
      <div class="blurred-box ">
        <!--  you dont need the user-login-box html  -->
        <div class="text-black relative z-10 flex flex-col gap-y-4 py-6 px-4">
          <h3 class="text-lg sm:text-xl text-black">
            <span class="text-[#575757]">انتخاب </span>ماشین شما
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-end">
            <div class="flex flex-col gap-y-2 w-full">
              <label for="car-model" class="text-black/80 text-sm"> مدل</label>
              <select
                id="car-model"
                name="car-model"
                class="w-full h-12 bg-white/10 border border-black/20 text-black rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-black  transition-all duration-300 backdrop-blur-sm cursor-pointer appearance-none"
              >
                <option value="">مدل</option>
              </select>
            </div>

            <div class="flex flex-col gap-y-2 w-full">
              <label for="car-brand" class="text-black/80 text-sm"> برند</label>
              <select
                id="car-brand"
                name="car-brand"
                class="w-full h-12 bg-white/10 border border-black/20 text-black rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-black  transition-all duration-300 backdrop-blur-sm cursor-pointer appearance-none"
              >
                <option value="">برند</option>
              </select>
            </div>

            <div class="flex flex-col gap-y-2 w-full">
              <label for="car-year" class="text-black/80 text-sm">سال </label>
              <select
                id="car-year"
                name="car-year"
                class="w-full h-12 bg-white/10 border border-black/20 text-black rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-black  transition-all duration-300 backdrop-blur-sm cursor-pointer appearance-none"
              >
                <option value="">سال</option>
              </select>
            </div>

            <button
              class="w-full h-12 bg-black text-white flex justify-center items-center rounded-xl cursor-pointer shrink-0 mx-auto sm:mx-0"
            >
              <span>جستجو</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
