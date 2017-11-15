<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col"></div>
      <div class="col align-self-center">
        <b-form @submit="onSubmit">

          <b-form-group id="exampleInputGroup1"
                        label="Email address:" label-for="exampleInput1"
                        description="We'll never share your email with anyone else.">
            <b-form-input id="exampleInput1"
                          type="email" v-model="form.email" required
                          placeholder="Enter email"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="exampleInputGroup2"
                        label="Your Name:" label-for="exampleInput2">
            <b-form-input id="exampleInput2"
                          type="text" v-model="form.name" required
                          placeholder="Enter name"
            ></b-form-input>
          </b-form-group>


          <b-form-group id="exampleInputGroup3"
                        label="Password:" label-for="exampleInput3">
            <b-form-input id="exampleInput3"
                          type="text" v-model="form.password" required
                          placeholder="Enter password"
            ></b-form-input>
          </b-form-group>


          <b-form-group id="exampleInputGroup5"
                        label="Confirm Password:" label-for="exampleInput5">
            <b-form-input id="exampleInput5"
                          type="text" v-model="form.confirm_password" required
                          placeholder="Enter password again"
            ></b-form-input>
          </b-form-group>


          <b-form-group id="exampleGroup4">
            <b-form-checkbox v-model="form.checked" id="exampleInput4">
              Check me out
            </b-form-checkbox>
          </b-form-group>
          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="secondary">Reset</b-button>
        </b-form>      
      </div>
      <div class="col"></div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        name: '',
        password: '',
        confirm_password: '',
        checked: false,
      }
    }
  },methods:{
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    }
  }
}
</script>