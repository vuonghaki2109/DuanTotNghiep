<template>
    <input type="file" @change="onFileChange" />
    <div class="mt-[1vw]">
      <input type="number" v-model="price" placeholder="Nhập giá" class="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
    </div>
    <div class="mt-[1vw]">
      <Button label="Upload" icon="pi pi-upload" @click="uploadFile" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const token = JSON.parse(window.localStorage.getItem('token')).token; // Replace with your token retrieval logic
  const selectedFile = ref(null);
  const price = ref(0);
  
  const onFileChange = (event) => {
    selectedFile.value = event.target.files[0];
  };
  
  const uploadFile = async () => {
    if (!selectedFile.value) {
      alert("Please select a file first.");
      return;
    }
  
    const formData = new FormData();
    formData.append("file", selectedFile.value);
    formData.append("gia", price.value);
  
    const url = `http://192.168.1.49:5286/api/user/upload/${price.value}`; // Dynamically create URL
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`, // Access token directly
        },
        body: formData,
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        alert(`Error: ${errorData.data}`);
        return;
      }
  
      const result = await response.json();
      alert(`Uploaded File Thàng Công: ${result.filePath}`);
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("An error occurred while uploading the file.");
    }
  };
  </script>  