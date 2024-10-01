    <template>
        <div
            class="w-[54vw] ml-[-10vh] relative overflow-hidden z-10 bg-gray-800 p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">

            <div class="">
                <label for="inputname" class="block font-semibold text-[1.1rem] text-white">Địa Chỉ</label>
                <div class="mt-2">
                    <input name="inputname" type="text" v-model="selectedValues" readonly
                        class="block w-[28vw] rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800" />
                </div>
            </div>

            <div class="flex mb-[0.5vh] mt-9">
                <div class="text-[1.1rem] text-white">Tỉnh/Thành phố</div>
                <div class="text-[1.1rem] text-white ml-[17.5vh]">Quận/Huyện</div>
                <div class="text-[1.1rem] text-white ml-[21vh]">Phường/Xã</div>
            </div>
            <div class="flex space-x-4">
                <Dropdown v-model="selectedProvince" :options="provinces" optionLabel="nametp" placeholder="Tỉnh/Thành phố"
                    class="w-1/3" @change="onProvinceChange" />
                <Dropdown v-model="selectedDistrict" :options="districts" optionLabel="nameh" placeholder="Quận/Huyện"
                    class="w-1/3" @change="onDistrictChange" />
                <Dropdown v-model="selectedWard" :options="wards" optionLabel="name" placeholder="Phường/Xã"
                    class="w-1/3" />
            </div>


        </div>









        <!-- <div class="flex justify-center mt-[5vh]">
            <input class="w-[27vw] h-[2vw] border-[2px] border-black " type="text" v-model="selectedValues" readonly>
        </div> -->
    </template>

    <script setup>
    import { ref, watch } from 'vue';
    import Dropdown from 'primevue/dropdown';

    const selectedProvince = ref(null);
    const selectedDistrict = ref(null);
    const selectedWard = ref(null);



    const provinces = [
        {
            "nametp": "Hà Nội",
            "code": 1,
            "division_type": "thành phố trung ương",
            "phone_code": 24,
            "codename": "thanh_pho_ha_noi",
            "districts": [
                {
                    "nameh": "Quận Ba Đình",
                    "code": 1,
                    "codename": "quan_ba_dinh",
                    "division_type": "quận",
                    "province_code": 1,
                    "wards": [
                        { "name": "Phường Điện Biên", "code": 1 },
                        { "name": "Phường Đội Cấn", "code": 2 },
                        { "name": "Phường Quán Thánh", "code": 5 }
                    ]
                },
                {
                    "nameh": "Quận Tây Hồ",
                    "code": 9,
                    "codename": "quan_tay_ho",
                    "division_type": "quận",
                    "province_code": 9,
                    "wards": [
                        { "name": "Phường Bưởi", "code": 12 },
                        { "name": "Phường Nhật Tân", "code": 11 },
                        { "name": "Phường Yên Phụ", "code": 10 }
                    ]
                },
                {
                    "nameh": "Quận Hoàng Mai",
                    "code": 8,
                    "codename": "quan_hoang_mai",
                    "division_type": "quận",
                    "province_code": 8,
                    "wards": [
                        { "name": "Phường Tương Mai", "code": 13 },
                        { "name": "Phường Tân Mai", "code": 14 },
                        { "name": "Phường Hoàng Văn Thụ", "code": 15 }
                    ]
                },

                {
                    "nameh": "Huyện Quốc Oai",
                    "code": 3,
                    "codename": "huyen_quoc_oai",
                    "division_type": "quận",
                    "province_code": 3,
                    "wards": [
                        { "name": "Xã Sài Sơn", "code": 6 },
                        { "name": "Xã Cộng Hòa", "code": 7 },
                        { "name": "Xã Đồng Quang", "code": 8 }
                    ]
                },
                {
                    "nameh": "Huyện Chương Mỹ",
                    "code": 4,
                    "codename": "huyen_chuong_my",
                    "division_type": "quận",
                    "province_code": 4,
                    "wards": [
                        { "name": "Xã Tiên Phương", "code": 11 },
                        { "name": "Xã Hòa Chính", "code": 10 },
                        { "name": "Xã Phú Nghĩa", "code": 9 }
                    ]
                },
                {
                    "nameh": "Quận Hoàn Kiếm",
                    "code": 2,
                    "codename": "quan_hoan_kiem",
                    "division_type": "quận",
                    "province_code": 2,
                    "wards": [
                        { "name": "Phường Hàng Bạc ", "code": 3 },
                        { "name": "Phường Hàng Bồ", "code": 4 }
                    ]
                }
            ]
        },

        {
            "nametp": "Nam Định",
            "code": 3,
            "division_type": "thành phố trung ương",
            "phone_code": 20,
            "codename": "thanh_pho_ha_noi",
            "districts": [
                {
                    "nameh": "Thành Phố Nam Định",
                    "code": 1,
                    "codename": "thanh_pho_nam-dinh",
                    "division_type": "quận",
                    "province_code": 1,
                    "wards": [
                        { "name": "Xã Mỹ Lộc", "code": 1 },
                        { "name": "Xã Mỹ Phúc", "code": 2 },
                        { "name": "Xã Mỹ Tâm", "code": 10 },
                        { "name": "Xã Mỹ Tân", "code": 5 }
                    ]
                },
                {
                    "nameh": "Huyện Hải Hậu",
                    "code": 3,
                    "codename": "huyen_hai_hau",
                    "division_type": "quận",
                    "province_code": 3,
                    "wards": [
                        { "name": "Xã Hải An", "code": 6 },
                        { "name": "Xã Hải Anh", "code": 7 },
                        { "name": "Xã Hải Đăng", "code": 90 },
                        { "name": "Xã Hải Phan", "code": 91 },
                        { "name": "Xã Hải Quang", "code": 8 }
                    ]
                },
                {
                    "nameh": "Huyện Ý Yên",
                    "code": 4,
                    "codename": "huyen_y_yen",
                    "division_type": "quận",
                    "province_code": 4,
                    "wards": [
                        { "name": "Xã Tân Minh", "code": 11 },
                        { "name": "Xã Tân La", "code": 19 },
                        { "name": "Xã Trung Nghĩa", "code": 10 },
                        { "name": "Xã Phú Hưng", "code": 9 }
                    ]
                },
                {
                    "nameh": "Huyện Nam Trực",
                    "code": 2,
                    "codename": "huyen_nam_truc",
                    "division_type": "quận",
                    "province_code": 1,
                    "wards": [
                        { "name": "Xã Bình Minh", "code": 3 },
                        { "name": "Xã Hoàng Hôn", "code": 5 },
                        { "name": "Xã Băng Qua", "code": 6 },
                        { "name": "Xã Thụy Khuê", "code": 7 },
                        { "name": "Xã Đồng Sơn", "code": 4 }
                    ]
                }
            ]
        },

        {
            "nametp": "TP.Hồ Chí Minh",
            "code": 1,
            "division_type": "ho_chi_minh",
            "phone_code": 24,
            "codename": "thanh_pho_ha_noi",
            "districts": [
                {
                    "nameh": "Quận 2",
                    "code": 2,
                    "codename": "quan_2",
                    "division_type": "quận",
                    "province_code": 1,
                    "wards": [
                        { "name": "Phường Thảo Điền", "code": 3 },
                        { "name": "Phường Bình Trưng Tây", "code": 4 },
                        { "name": "Phường An Lợi Đông", "code": 5 }
                    ]
                },
                {
                    "nameh": "Quận 9",
                    "code": 1,
                    "codename": "quan_9",
                    "division_type": "quận",
                    "province_code": 1,
                    "wards": [
                        { "name": "Phường Phước Long", "code": 1 },
                        { "name": "Phường Biên Hòa", "code": 10 },
                        { "name": "Phường Tân Phú", "code": 2 }
                    ]
                },
                {
                    "nameh": "Quận Phú Nhuận",
                    "code": 9,
                    "codename": "quan_phu_nhuan",
                    "division_type": "quận",
                    "province_code": 9,
                    "wards": [
                        { "name": "Phường Tây Ba", "code": 16 },
                        { "name": "Phường Tây Nhì", "code": 17 },
                        { "name": "Phường Tây Nhất", "code": 18 },
                        { "name": "Phường Trung Nhì", "code": 19 },
                        { "name": "Phường Trung Nhất", "code": 20 },
                        { "name": "Phường Đông Nhất", "code": 21 },
                        { "name": "Phường Đông Nhì", "code": 22 },
                        { "name": "Phường Đông Ba", "code": 23 }
                    ]
                },
                {
                    "nameh": "Huyện Củ Chi",
                    "code": 5,
                    "codename": "huyen_cu_chi",
                    "division_type": "quận",
                    "province_code": 5,
                    "wards": [
                        { "name": "Xã Bĩnh Mỹ", "code": 11 },
                        { "name": "Xã Bĩnh Mỹ A", "code": 30 },
                        { "name": "Xã Bĩnh Mỹ B", "code": 31 },
                        { "name": "Xã Hòa Phú A", "code": 32 },
                        { "name": "Xã Hòa Phú B", "code": 33 },
                        { "name": "Xã Hòa Phú", "code": 34 }
                    ]
                },
                {
                    "nameh": "Quận Bình Tân",
                    "code": 3,
                    "codename": "quan_binh_tan",
                    "division_type": "quận",
                    "province_code": 3,
                    "wards": [
                        { "name": "Phường Bình Hưng Hòa", "code": 1 },
                        { "name": "Phường Bình Trị Đông", "code": 2 },
                        { "name": "Phường Tân Tạo", "code": 3 },
                        { "name": "Phường An Lạc", "code": 4 }
                    ]
                },
                {
                    "nameh": "Quận Gò Vấp",
                    "code": 4,
                    "codename": "quan_go_vap",
                    "division_type": "quận",
                    "province_code": 4,
                    "wards": [
                        { "name": "Phường 1", "code": 5 },
                        { "name": "Phường 3", "code": 6 },
                        { "name": "Phường 9", "code": 7 },
                        { "name": "Phường 7", "code": 8 }
                    ]
                }
            ]
        }
    ];

    const districts = ref([]);
    const wards = ref([]);

    const onProvinceChange = () => {
        districts.value = selectedProvince.value ? selectedProvince.value.districts : [];
        selectedDistrict.value = null;
        selectedWard.value = null;
    };

    const onDistrictChange = () => {
        wards.value = selectedDistrict.value ? selectedDistrict.value.wards : [];
        selectedWard.value = null;
    };


    const selectedValues = ref('');

    watch(selectedProvince, (newValue) => {
        selectedValues.value = `${newValue?.nametp}, `;
    });

    watch(selectedDistrict, (newValue) => {
        selectedValues.value = `${selectedProvince.value?.nametp}, ${newValue?.nameh},`;
    });

    watch(selectedWard, (newValue) => {
        selectedValues.value = `${selectedProvince.value?.nametp}, ${selectedDistrict.value?.nameh}, ${newValue?.name}`;
    });
    </script>

    <style scoped></style>