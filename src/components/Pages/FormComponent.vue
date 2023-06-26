<template>
    <div>
        <pre>{{ JSON.stringify(formData,null,2) }}</pre>
        <form @submit="submitForm">
            <label class="pe-3">Name</label>
            <input type="text" name="name" id="name" v-model="formData.name"><br /><br />
            <label class="pe-3">Phone</label>
            <input type="tel" name="phone" id="phone" v-model="formData.phone"><br /><br />
            <label class="pe-3">Email</label>
            <input type="email" name="email" id="email" v-model="formData.email"><br /><br />
            <label class="pe-3">Country</label>
            <select v-model="formData.country">
                <option v-for="x in countries" :value="x" v-bind:key="x">{{x}}</option>
            </select><br/><br/>
            <label class="pe-3">Gender</label>
            <input type="radio" name="gender" id="gender" v-model="formData.gender" value="male">Male
            <input type="radio" name="gender" id="gender" v-model="formData.gender" value="female">Female
            <input type="radio" name="gender" id="gender" v-model="formData.gender" value="others">Others <br/><br/>
            <label class="pe-3">PWD</label>
            <input type="checkbox" name="pwd" id="pwd" v-model="formData.pwd"><br/><br/>
            <button>Submit</button>
            <button>Reset</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'FormComponent',
    data() {
        return {
            formData: formData,
            countries:countries,
        }
    },
    methods:{
        submitForm(event){
            event.preventDefault();
            console.log(this.formData);
        }
    }
}
let formData = {
    name: '',
    phone: '',
    email: '',
    country: '',
    gender: '',
    pwd: false
}
let countries = ['india','bangladesh','nepal','bhutan'];
console.log(formData);
</script>

<style lang="scss" scoped></style>