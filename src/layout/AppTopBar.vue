<script setup>
import { ref } from 'vue';
import { useLayout } from '@/layout/composables/layout';
const Dash = () => {
  window.location.href='/home'
}
const Login = () => {
  window.location.href='/authetic'
}

const Admin = () => {
    window.location.href='/admin'
}
const BT2 = () => {
    window.location.href='/bt2'
}

</script>

<template>
    <div class="layout-topbbar h-50 flex items-center justify-between px-5 relative top-0 left-0 right-0 z-[10] bg-white">
        <div class="title-layout-topbar mt-[5vh] ml-[16vh] flex items-center">
            <span class="text-2xl font-semibold text-gray-500" @click="Dash()">UploadFileVN.</span>
            <div class="title2-layout-topbar flex space-x-8 ml-[45vh]">
                <span class="text-[1rem] font-normal text-gray-500">Trang Chủ</span>
                <span class="text-[1rem] font-normal text-gray-500">File</span>
                <span class="text-[1rem] font-normal text-gray-500">Mua File</span>
            </div>
            <div class="title3-layout-topbar flex space-x-9 ml-[50vh]">
                <i class="pi pi-search" style="font-size: 1rem"  @click="BT2()"></i>
                <i class="pi pi-user" style="font-size: 1rem" @click="Login()"></i>
                <i class="pi pi-shopping-bag" style="font-size: 1rem"></i> 
                <i class="pi pi-cog" style="font-size: 1rem" @click="Admin()"></i> 
            </div>
        </div>
    </div>
</template>


<style></style>
