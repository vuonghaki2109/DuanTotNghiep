<script setup>
import { ref } from "vue";

const Up = () => {
  window.location.href='/upload'
}


const token = JSON.parse(window.localStorage.getItem('token')).token;



const dataRes = ref([]);

// Fetch data with authorization
fetch('http://192.168.1.49:5286/api/user/datafile', {
    method: 'GET',
    headers: {
        Authorization: `Bearer ${token}` // Include token for authorization
    }
})
    .then(res => res.json())
    .then((res) => {
        dataRes.value = res.data;
        console.log(token);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        // Handle potential errors (e.g., display error message)
    });

const buy = async (fileName) => {
    try {
        console.log(fileName);
        const response = await fetch(`http://192.168.1.49:5286/api/user/download/${fileName}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Download failed: ${errorData.dataRes}`);
        }

        const blob = await response.blob();
        const urlBlob = window.URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = urlBlob;
        link.download = fileName;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(urlBlob);


    } catch (error) {
        console.error('Download failed:', error.message);
        alert(`Download failed: ${error.message}`); // Inform user
    }
};

const layout = ref('grid');
const options = ref(['list', 'grid']);
</script>



<template>
    <div class="flex-wrap items-center justify-between gap-2 ">
        <span class="text-xl font-normal  ml-[0.9vh]" style="font-size: 22px ;">Files Public</span>


        <Button type="button" label="Upload File" icon="pi pi-upload" class="ml-[40vw]" :loading="loading" @click="Up()" />

    </div>


    <div class="card">
        <DataView :value="dataRes" :layout="layout">
            <template #header>
                <div class="flex justify-end">
                    <SelectButton v-model="layout" :options="options" :allowEmpty="false">
                        <template #option="{ option }">
                            <i :class="[option === 'list' ? 'pi pi-bars' : 'pi pi-table']" />
                        </template>
                    </SelectButton>
                </div>
            </template>

            <template #list="slotProps">
                <div class="flex flex-col">
                    <div v-for="(item, index) in slotProps.items" :key="index">
                        <div class=" flex flex-col sm:flex-row sm:items-center p-6 gap-4"
                        :class="{ 'border-t border-surface-200 dark:border-surface-700': index !== 0 }">
                        <div class="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-6">
                            <div class="flex flex-row md:flex-col justify-between items-start gap-2">
                                <div>
                                    <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{
                                        item.id }}</span>
                                    <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{
                                        item.userID }}</span>
                                    <div class="text-lg font-medium mt-2">{{ item.fileName }}</div>
                                    <div class="text-lg font-medium mt-2">{{ item.descriptions }}</div>
                                </div>
                            </div>
                            <div class="flex flex-col md:items-end gap-8">
                                <span class="text-xl font-semibold">${{ item.price }}</span>
                                <div class="flex flex-row-reverse md:flex-row gap-2">
                                    <Button icon="pi pi-shopping-cart" label="Buy Now"
                                        class="flex-auto md:flex-initial whitespace-nowrap"></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
</template>

<template #grid="slotProps">
    <div class="grid grid-cols-12 gap-4">
        <div v-for="(item, index) in slotProps.items" :key="index"
            class="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-6 p-2">
            <div
                class="w-[400px] p-3 border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 rounded flex flex-col">
                <div class="pt-6">
                    <div class="flex flex-row justify-between items-start gap-2">
                        <div>
                            <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">ID: {{
                                item.id }}</span>
                            <span class="font-medium text-surface-500 dark:text-surface-400 text-sm flex">User: {{
                                item.userID }}</span>
                            <div class="text-lg font-medium mt-2">File: {{ item.fileName }}</div>
                            <div class="text-lg font-medium mt-2">Link: {{ item.pathFile }}</div>
                            <div class="text-lg font-medium mt-2">Mô tả: {{ item.descriptions }}</div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-6 mt-3">
                        <span class="text-2xl font-semibold">Giá: ${{ item.price }}</span>
                        <div class="flex gap-2">
                            <Button icon="pi pi-shopping-cart" label="Buy Now" class="flex-auto whitespace-nowrap"
                                @click="buy(item.fileName)"></Button>
                        </div>
                    </div>
                </div>
            </div>        </div>
    </div>
</template>
</DataView>
</div>
</template>