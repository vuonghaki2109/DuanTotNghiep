<template>
  <div class="card flex justify-center mt-[2.5vh]">
    <DataTable :value="file" scrollable :rows="10" paginator scrollHeight="550px" tableStyle="min-width: 50rem" class="w-[95vw]">
      <Column field="id" header="Stt " style="width: 7%"></Column>
      <Column field="fileName" header="Tên file" style="width: 12%"></Column>
      <Column field="pathFile" header="Đường dẫn" style="width: 20%"></Column>
      <Column field="price" header="Giá" style="width: 10%"></Column>
      <Column field="statu" header="Trạng thái" style="width: 10%">
        <template #body="slotProps">
          <SelectButton v-model="slotProps.data.statu" :options="options"
            @click="UpdateStatus(slotProps.data.fileName, slotProps.data.statu)" aria-labelledby="basic" />
        </template>
      </Column>
      <Column field="userID" header="Chủ sở hữu" style="width: 10%"></Column>
      <Column field="id" header="Xóa tại đây" style="width: 21%">
        <template #body="datta">
          <span @click="openPosition(datta.data)" class="text-red-600 pi pi-trash cursor-pointer" label="BottomRight"
            severity="secondary" style="min-width: 10rem"></span>
        </template>
      </Column>
    </DataTable>
  </div>
  <Toast />
  <Dialog v-model:visible="visible" header="Chỗ này không cho trẻ con đâu" :style="{ width: '25rem' }" :modal="true"
    :draggable="false">
    <span class="text-surface-500 dark:text-surface-400 block mb-8">Đây là thời khắc của sự lựa chọn đó con</span>
    <div class="flex justify-end gap-2">
      <Button type="button" label="bấm nút này thì không xóa" severity="secondary" @click="visible = false"></Button>
      <Button type="button" label="Ấn nút này là xóa thật đấy" @click="xoaFile"></Button>
    </div>
  </Dialog>
  <Button label="Thêm file" @click="openPosition2('top')" severity="secondary" style="min-width: 10rem" />
  <Dialog v-model:visible="visible2" header="Hãy chọn file" :style="{ width: '25rem' }" :position="position"
    :modal="true" :draggable="false">
    <div class="items-center gap-4 mb-4">
      <div class="mt-[2vh]"><input type="file" @change="onFileChange" /></div>
      <div class="mt-[5vh]">
        <InputText v-model="price" placeholder="Enter price" />
      </div>
    </div>

    <div class="flex justify-end gap-2">
      <Button type="button" label="Thoát" severity="secondary" @click="visible2 = false"></Button>
      <Button type="button" label="Upload File" @click="(visible2 = false), uploadFile"></Button>
    </div>
  </Dialog>
  <div class="text-[1.4rem]  mt-[1vh] ml-[80vw]" @click="Dash()">Quay Lại Trang Chủ <i class="pi pi-sign-out"></i></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import SelectButton from "primevue/selectbutton";
import axios from "axios";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Dialog from "primevue/dialog";
const selectedFile = ref(null);
const price = ref(0);
const toast = useToast();
const token = ref("");
const data = ref({});
const file = ref([]);

const Dash = () => {
  window.location.href = '/home'
}


onMounted(async () => {
  try {
    token.value = JSON.parse(window.localStorage.getItem("token")).token;
    const res = await axios.get(
      "http://192.168.1.49:5286/api/User/datafile/chothangad",
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
          "Content-Type": "application/json",
        },
      }
    );
    data.value = res.data; // Truy cập dữ liệu từ res.data
    file.value = data.value.data; // Đảm bảo biến file đã được khai báo
  } catch (error) {
    console.log(error);
  }
});

const showSuccess = () => {
  toast.add({
    severity: "success",
    summary: "Được",
    detail: "Chắc mày đã thành công rồi đó con",
    life: 3000,
  });
};

const showError = () => {
  toast.add({
    severity: "error",
    summary: "Úi dồi ôi",
    detail: "Lỗi rồi con ạ",
    life: 3000,
  });
};

const UpdateStatus = async (x, y) => {
  const response = await axios.post(
    "http://192.168.1.49:5286/api/User/thang/ad/update/file",
    {
      name: x,
      trangThai: y,
    },
    {
      headers: {
        Authorization: `Bearer ${token.value}`,
        "Content-Type": "application/json",
      },
    }
  );
  let u = response.data;
  console.log(u);
  if (u) {
    showSuccess();
  } else {
    showError();
  }
};

const options = ref([true, false]);

const position = ref("center");
const visible = ref(false);

const visible2 = ref(false);

const openPosition2 = (pos) => {
  position.value = pos;
  visible2.value = true;
};

const openPosition = (pos) => {
  _file.value = pos;
  visible.value = true;
};

const _file = ref();
const xoaFile = async () => {
  const resp = await axios.delete(
    `http://192.168.1.49:5286/api/User/admin/di/xoa/may/cai/file/${_file.value.fileName}`,
    {
      headers: {
        Authorization: `Bearer ${token.value}`,
        "Content-Type": "application/json",
      },
    }
  );

  const u = await resp.data;
  console.log(u);
  if (u != null) {
    visible.value = false;
    showSuccess();
  } else {
    showError();
  }
};

const onFileChange = (event) => {
  selectedFile.value = event.target.files[0];
};

const uploadFile = async () => {
  if (!selectedFile.value) {
    alert("Vui lòng chọn một tệp trước.");
    return;
  }

  const formData = new FormData();
  formData.append("file", selectedFile.value);

  try {
    const response = await axios.post(
      `http://192.168.1.49:5286/api/User/upload/${price.value}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
          "Content-Type": "multipart/form-data", // Important for file uploads
        },
      }
    );

    if (response.status === 200) {
      const result = response.data;
      alert(`Tệp đã được tải lên thành công: ${result.filePath}`);
      showSuccess(); // Optional: show a success toast notification
    } else {
      alert(`Lỗi: ${response.data.message || "Tải lên tệp không thành công."}`);
      showError(); // Optional: show an error toast notification
    }
  } catch (error) {
    console.error("Lỗi khi tải lên tệp:", error);
    alert("Đã xảy ra lỗi trong quá trình tải lên tệp.");
    showError(); // Optional: show an error toast notification
  }
};
</script>