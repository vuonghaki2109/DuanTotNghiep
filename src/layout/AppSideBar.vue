<script setup>
import { ref } from 'vue'

const xuong = ref(true)

</script>

<template>
  <div class="sidebar relative mt-[19vh] flex items-center w-[10vw] z-10 ml-[12vw] bg-white">
    <div>
      <tr>
        <td> 
          <div @click="xuong = !xuong" class="mb-6" >
            <span class="text-[1rem] font-semibold ">Trang Chủ</span>
            <i v-if="xuong"></i>
            <i v-else></i>
          </div>
          <ul v-if="!xuong" class="xuong1 space-y-6">
            <li><span class="text-[0.9rem] font-normal ">Cơ cấu tổ chức</span></li>
            <li><span class="text-[0.9rem] font-normal ">Nhà cung cấp</span></li>
            <li><span class="text-[0.9rem] font-normal ">Nhà cung cấp</span></li>
            <li><span class="text-[0.9rem] font-normal ">Ngành nghề lĩnh vực</span></li>
          </ul>
        </td>
      </tr>
      <div class="mb-6">
        <td><span class="text-[1rem] font-semibold">File của tôi</span></td>
      </div>
      <div class="mb-6">
        <td><span class="text-[1rem] font-semibold">Lịch sử đã mua</span> </td>
      </div>
    </div>
  </div>
</template>

<style></style>