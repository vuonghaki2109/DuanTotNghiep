// import './assets/main.css'


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/style.css'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import Button from "primevue/button";
import 'primeicons/primeicons.css';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Row from 'primevue/row';                   // optional
import Image from 'primevue/image';
import Menubar from 'primevue/menubar';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import Checkbox from 'primevue/checkbox';
import Toolbar from 'primevue/toolbar';
import TreeTable from 'primevue/treetable';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import Rating from 'primevue/rating';
import Carousel from 'primevue/carousel';
import Skeleton from 'primevue/skeleton';
import FileUpload from 'primevue/fileupload';
import DataView from 'primevue/dataview';
import Chart from 'primevue/chart';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import Badge from 'primevue/badge';
import OverlayBadge from 'primevue/overlaybadge';
import Chip from 'primevue/chip';
import SplitButton from 'primevue/splitbutton';

import ProgressBar from 'primevue/progressbar';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import ToastService from 'primevue/toastservice';







const app = createApp(App)

app.component('Button', Button);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('Row', Row);
app.component('Image', Image);
app.component('Menubar', Menubar);
app.component('IconField', IconField);
app.component('InputIcon', InputIcon);
app.component('Checkbox', Checkbox);
app.component('Toolbar', Toolbar);
app.component('TreeTable', TreeTable);
app.component('InputGroup', InputGroup);
app.component('InputGroupAddon', InputGroupAddon);
app.component('Rating', Rating);
app.component('Carousel', Carousel);
app.component('Skeleton', Skeleton);
app.component('FileUpload', FileUpload);
app.component('DataView', DataView);
app.component('Chart', Chart);
app.component('Splitter', Splitter);
app.component('SplitterPanel', SplitterPanel);
app.component('Badge', Badge);
app.component('OverlayBadge', OverlayBadge);
app.component('Chip', Chip);
app.component('SplitButton', SplitButton);
app.component('ProgressBar', ProgressBar);
app.component('Tabs', Tabs);
app.component('TabList', TabList);
app.component('Tab', Tab);
app.component('TabPanels', TabPanels);
app.component('TabPanel', TabPanel);





app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.use(ToastService);
app.use(router)

app.mount('#app')