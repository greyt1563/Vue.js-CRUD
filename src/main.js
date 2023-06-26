import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/routes'
import "bootstrap/dist/css/bootstrap.css"

import "datatables.net-bs5";
// import "datatables.net-bs5/css/dataTables.bootstrap4.min.css";
import "jszip";
import "pdfmake";
import "datatables.net-buttons-bs5";
// import "datatables.net-buttons-bs5/css/buttons.bootstrap4.min.css";
import "datatables.net-buttons/js/buttons.colVis";
import "datatables.net-buttons/js/buttons.flash";
import "datatables.net-buttons/js/buttons.html5";
import "datatables.net-buttons/js/buttons.print";

createApp(App).use(router).mount('#app')



import "bootstrap/dist/js/bootstrap.js"
