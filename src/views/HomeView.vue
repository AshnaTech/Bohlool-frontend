<script setup lang="ts">

import TheLoading from '../components/TheLoading.vue'
import { reactive } from 'vue'
import NavigtionMobile from '../layouts/NavigationMobile.vue'
import TitleSection from '../layouts/TitleSection.vue'

const loadingStatus = reactive({ isLoading: true })
setTimeout(() => loadingStatus.isLoading = false, 200)

</script>

<template>
  <!-- <TheLoading class="z-50" v-show="loadingStatus.isLoading == true"></TheLoading> -->
  <div class="h-screen w-screen bg-[#090808] z-10">
    <TitleSection></TitleSection>
    <div class="container">
      <p class="text-[#F5F5F1] text-right p-2 dir-rtl text-justify">
        به برنامه مدیریت زمان و وظایف آنلاین خوش اومدید.
        <br>
        <br>
        با استفاده از دکمه های زیر می توانید وارد بخش دلخواه خودتون بشید
      </p>

      <div class="grid grid-cols-2 gap-2 px-2 dir-rtl mt-5">

        <button
          class="text-[#F5F5F1] text-md border border-[#F5F5F1] px-2 rounded-[5px] hover:bg-[#F5F5F1] hover:text-black flex dir-rtl justify-center align-center items-center">
          <svg class="p-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
            <path
              d="M11.5 0C5.1664891 0 0 5.1664939 0 11.5C0 17.833506 5.1664891 23 11.5 23C17.833511 23 23 17.833506 23 11.5C23 5.1664939 17.833511 0 11.5 0 z M 11.5 3C16.212192 3 20 6.7878114 20 11.5C20 16.212189 16.212192 20 11.5 20C6.7878084 20 3 16.212189 3 11.5C3 6.7878114 6.7878084 3 11.5 3 z M 11.476562 4.9785156 A 1.50015 1.50015 0 0 0 10 6.5L10 11.5 A 1.50015 1.50015 0 0 0 10.439453 12.560547L12.439453 14.560547 A 1.50015 1.50015 0 1 0 14.560547 12.439453L13 10.878906L13 6.5 A 1.50015 1.50015 0 0 0 11.476562 4.9785156 z M 23.820312 6C24.572312 7.681 25 9.539 25 11.5C25 12.355 24.911766 13.189 24.759766 14L42 14L42 12.5C42 8.916 39.084 6 35.5 6L23.820312 6 z M 23.820312 17C21.713313 21.712 16.995 25 11.5 25C9.539 25 7.681 24.572312 6 23.820312L6 35.5C6 39.084 8.916 42 12.5 42L35.5 42C39.084 42 42 39.084 42 35.5L42 17L23.820312 17 z M 24 22C25.381 22 26.5 23.119 26.5 24.5C26.5 25.881 25.381 27 24 27C22.619 27 21.5 25.881 21.5 24.5C21.5 23.119 22.619 22 24 22 z M 32.5 22C33.881 22 35 23.119 35 24.5C35 25.881 33.881 27 32.5 27C31.119 27 30 25.881 30 24.5C30 23.119 31.119 22 32.5 22 z M 15.5 31C16.881 31 18 32.119 18 33.5C18 34.881 16.881 36 15.5 36C14.119 36 13 34.881 13 33.5C13 32.119 14.119 31 15.5 31 z M 24 31C25.381 31 26.5 32.119 26.5 33.5C26.5 34.881 25.381 36 24 36C22.619 36 21.5 34.881 21.5 33.5C21.5 32.119 22.619 31 24 31 z"
              fill="#5B5B5B" />
          </svg>
          <h4>برنامه زمانی</h4>
        </button>

        <button
          class="text-[#F5F5F1] text-md border border-[#F5F5F1] px-2 rounded-[5px] hover:bg-[#F5F5F1] hover:text-black flex dir-rtl justify-center align-center items-center">
          <svg class="p-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
            <path
              d="M16.041016 4.9804688 A 2.0002 2.0002 0 0 0 14.642578 5.53125L9.4511719 10.324219L7.3007812 8.4824219 A 2.0002 2.0002 0 1 0 4.6992188 11.517578L8.1992188 14.517578 A 2.0002 2.0002 0 0 0 10.857422 14.46875L17.357422 8.46875 A 2.0002 2.0002 0 0 0 16.041016 4.9804688 z M 22 8 A 2.0002 2.0002 0 1 0 22 12L42 12 A 2.0002 2.0002 0 1 0 42 8L22 8 z M 16.041016 18.480469 A 2.0002 2.0002 0 0 0 14.642578 19.03125L9.4511719 23.824219L7.3007812 21.982422 A 2.0002 2.0002 0 1 0 4.6992188 25.017578L8.1992188 28.017578 A 2.0002 2.0002 0 0 0 10.857422 27.96875L17.357422 21.96875 A 2.0002 2.0002 0 0 0 16.041016 18.480469 z M 22 22 A 2.0002 2.0002 0 1 0 22 26L42 26 A 2.0002 2.0002 0 1 0 42 22L22 22 z M 16.041016 31.980469 A 2.0002 2.0002 0 0 0 14.642578 32.53125L9.4511719 37.324219L7.3007812 35.482422 A 2.0002 2.0002 0 1 0 4.6992188 38.517578L8.1992188 41.517578 A 2.0002 2.0002 0 0 0 10.857422 41.46875L17.357422 35.46875 A 2.0002 2.0002 0 0 0 16.041016 31.980469 z M 22 36 A 2.0002 2.0002 0 1 0 22 40L42 40 A 2.0002 2.0002 0 1 0 42 36L22 36 z"
              fill="#5B5B5B" />
          </svg>
          <h4>مدیریت کارها</h4>
        </button>

        <button
          class="text-[#F5F5F1] text-md border border-[#F5F5F1] px-2 rounded-[5px] hover:bg-[#F5F5F1] hover:text-black flex dir-rtl justify-center align-center items-center">
          <svg class="p-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
            <path
              d="M24,4C12.972,4,4,12.972,4,24s8.972,20,20,20s20-8.972,20-20S35.028,4,24,4z M24,36c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C26,35.105,25.105,36,24,36z M26.99,24.977c-0.992,0.773-1.49,1.161-1.49,2.523c0,0.829-0.671,1.5-1.5,1.5s-1.5-0.671-1.5-1.5c0-2.828,1.529-4.019,2.646-4.889C26.222,21.772,27,21.166,27,19c0-1.654-1.346-3-3-3s-3,1.346-3,3v0.5c0,0.829-0.671,1.5-1.5,1.5S18,20.329,18,19.5V19c0-3.309,2.691-6,6-6s6,2.691,6,6C30,22.631,28.26,23.987,26.99,24.977z"
              fill="#5B5B5B" />
          </svg>
          <h4>گزارش و راهنما</h4>
        </button>

        <button
          class="text-[#F5F5F1] text-md border border-[#F5F5F1] px-2 rounded-[5px] hover:bg-[#F5F5F1] hover:text-black flex dir-rtl justify-center align-center items-center">
          <svg class="p-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
            <path
              d="M24 4C18.494917 4 14 8.494921 14 14C14 19.505079 18.494917 24 24 24C29.505083 24 34 19.505079 34 14C34 8.494921 29.505083 4 24 4 z M 12.5 28C10.032499 28 8 30.032499 8 32.5L8 33.699219C8 36.640082 9.8647133 39.277974 12.708984 41.091797C15.553256 42.90562 19.444841 44 24 44C28.555159 44 32.446744 42.90562 35.291016 41.091797C38.135287 39.277974 40 36.640082 40 33.699219L40 32.5C40 30.032499 37.967501 28 35.5 28L12.5 28 z"
              fill="#5B5B5B" />
          </svg>
          <h4>حساب کاربری</h4>
        </button>

      </div>
    </div>
    <NavigtionMobile navItemActive="home" class="visible sm:hidden z-40"></NavigtionMobile>
  </div>
</template>

<style scoped>
p {
  font-family: vazirmatn;
}

h4 {
  font-family: vazirmatn;
}
</style>