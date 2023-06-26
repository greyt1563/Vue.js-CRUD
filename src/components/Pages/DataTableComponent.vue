<template>
    <div id="app" class="container">
        <h1 class="text-center">Datatable with Vue</h1>

        <table id="myTable" class="table table-bordered mt-5">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    </div>
</template>

<script>
import axios from "axios";
import $ from "jquery";
export default {
    name: 'DataTableComponent',
    mounted() {
        this.getUsers();
    },
    methods: {
        getUsers() {
            axios
                .get("https://jsonplaceholder.typicode.com/posts")
                .then((response) => {
                    $("#myTable").DataTable({
                        dom: "Bfrtip",
                        // buttons: ["excel", "print", "csv"],
                        data: response.data,
                        columns: [
                            { data: "id" },
                            { data: "title" },
                            { data: "body" },
                        ],
                    });
                })
                .catch((error) => console.log(error.response));
        },
    },
};
</script>

<style></style>