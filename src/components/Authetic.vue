<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import Toast from 'primevue/toast';


import { useToast } from 'primevue/usetoast';

const router = useRouter()

const Dash = () => {
    window.location.href = '/home'
}
const toast = useToast();

const showError = () => {
    toast.add({ severity: 'error', summary: 'Xem xem điền đủ thông tin chưa ?', detail: 'Lỗi', life: 3000 });
};

const show = () => {
    toast.add({ severity: 'success', summary: 'Okela Ngay', detail: 'Đăng Ký Thành Công', life: 3000 });
};

const show1 = () => {
    toast.add({ severity: 'success', summary: 'Okela Ngay', detail: 'Đăng Nhập Thành Công', life: 3000 });
};

const dktk = ref("")
const dkmk = ref("")
const dntk = ref("")
const dnmk = ref("")

const dangky = async () => {
    const check = ref(false)



    if (dktk.value == "" || dkmk.value == "") {
        check.value = false;
    } else {
        check.value = true;
    }

    if (check.value) {
        const user = {
            UserName: dktk.value,
            Pass: dkmk.value,
        }
        console.log(JSON.stringify(user));
        try {
            const res = await fetch("http://192.168.1.49:5286/api/user/register", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            // console.log(res.json());
            const data = await res.json();
            if (data) {

                show();
            } else {
                showError();
            }
        }

        catch (e) {
            console.log(e);
        }
    } else {
        showError()
    }
}

const dangnhap = async () => {
    const check = ref(false)

    if (dntk.value == "" || dnmk.value == "") {
        check.value = false;
    } else {
        check.value = true;
    }


    if (check.value) {
        const user = {
            UserName: dntk.value,
            Pass: dnmk.value,
        }
        try {
            const res = await fetch("http://192.168.1.49:5286/api/user/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            // console.log(res.json());
            const data1 = await res.json()
            if (data1) {
                window.localStorage.setItem('token', JSON.stringify(data1));
                show1();
                router.push('home');
            } else {
                showError();
            }
        }


        catch (e) {
            console.log(e);
        }
    } else {
        showError()
    }
}

</script>

<template>

    <div class="w-full ml-0">
        <Tabs value="0">
            <TabPanels class="!p-0 ">
                <TabPanel value="0">
                    <div class="flex gap-10 !ml-0">
                        <div class="w-[50vw] relative">
                            <img src="../assets/login.png" class="w-full h-[100vh]" alt="">
                            <div
                                class="absolute top-6 left-[48%] transform -translate-x-1/2 text-white text-2xl font-semibold">
                                UpLoadFileVN.
                            </div>
                        </div>


                        <div class="">
                            <div class="m-0 mt-[20vh] ml-[3vh]">
                                <div class="text-[2.7rem] font-semibold text-black" value=""> Đăng Ký</div>
                                <div class="mt-[2vh] text-[1.1rem] flex items-center">
                                    <span class="text-gray-500">Bạn đã có sẵn tài khoản ?</span>
                                    <Tab value="1" class="!border-none !text-green-400">Đăng Nhập</Tab>
                                </div>
                                <div class="flex flex-col items-start w-full mt-[2vh]">



                                    <label for="UserName"
                                        class="mt-[2vh] text-sm text-black font-semibold text-[1.1rem]">Tài
                                        Khoản</label>
                                    <input v-model="dktk" type="text" placeholder=""
                                        class=" text-[1.4rem] w-[50vh] py-px pl-0 bg-transparent outline-none focus:ring-0 border-0 border-b-2 border-[#909090] placeholder:text-[#909090] focus:outline-none text-[#909090] placeholder:text-xs" />


                                    <label for="Pass"
                                        class=" mt-[2vh] text-sm text-black font-semibold text-[1.1rem]">Mật
                                        Khẩu</label>
                                    <input v-model="dkmk" type="text" placeholder=""
                                        class=" text-[1.4rem] w-[50vh] py-px pl-0 bg-transparent outline-none focus:ring-0 border-0 border-b-2 border-[#909090] placeholder:text-[#909090] focus:outline-none text-[#909090] placeholder:text-xs" />


                                    <button
                                        class="w-[380px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
                                        @click="dangky">
                                        Đăng Ký
                                    </button>
                                    <Toast />
                                </div>
                                <div class="text-[1.4rem]  mt-[1vh] ml-[23vh]" @click="Dash()">Quay Lại Trang Chủ <i
                                        class="pi pi-sign-out"></i></div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value="1">
                    <div class="flex gap-10 !ml-0">
                        <div class="w-[50vw] relative">
                            <img src="../assets/logup.png" class="w-full h-[100vh]" alt="">
                            <div
                                class="absolute top-6 left-[48%] transform -translate-x-1/2 text-black text-2xl font-semibold">
                                UpLoadFileVN.
                            </div>
                        </div>

                        <div>
                            <div class="m-0 mt-[20vh] ml-[3vh]">
                                <div class="text-[2.7rem] font-semibold text-black"> Đăng Nhập</div>
                                <div class="mt-[2vh] text-[1.1rem] flex items-center">
                                    <span class="text-gray-500">Bạn chưa có tài khoản ? </span>
                                    <Tab value="0" class="!border-none !text-green-400">Đăng Ký</Tab>
                                </div>
                                <div class="flex flex-col items-start w-full mt-[2vh]">



                                    <label for="UserName"
                                        class="mt-[2vh] text-sm text-black font-semibold text-[1.1rem]">Tài
                                        Khoản</label>
                                    <input v-model="dntk" type="text" placeholder=""
                                        class=" text-[1.4rem] w-[50vh] py-px pl-0 bg-transparent outline-none focus:ring-0 border-0 border-b-2 border-[#909090] placeholder:text-[#909090] focus:outline-none text-[#909090] placeholder:text-xs" />


                                    <label for="Pass"
                                        class=" mt-[2vh] text-sm text-black font-semibold text-[1.1rem]">Mật
                                        Khẩu</label>
                                    <input v-model="dnmk" type="password" placeholder=""
                                        class=" text-[1.4rem] w-[50vh] py-px pl-0 bg-transparent outline-none focus:ring-0 border-0 border-b-2 border-[#909090] placeholder:text-[#909090] focus:outline-none text-[#909090] placeholder:text-xs" />


                                    <button
                                        class="w-[380px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
                                        @click="dangnhap">
                                        Đăng Nhập
                                    </button>
                                </div>
                            </div>
                            <div class="text-[1.4rem]  mt-[1vh] ml-[25vh]" @click="Dash()">Quay Lại Trang Chủ <i
                                    class="pi pi-sign-out"></i></div>
                        </div>
                    </div>
                </TabPanel>

            </TabPanels>
        </Tabs>
    </div>
</template>