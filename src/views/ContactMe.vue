<template>
  <v-sheet width="90vw" class="pa-5 rounded-lg ma-10 elevation-10">
    <v-form>
      <v-text-field v-model="firstName" :rules="firstNameRule" label="First name and Last name"
        type="text"></v-text-field>

      <v-text-field v-model="phoneNumber" :rules="phoneNumberRule" label="Phone number" type="phone"></v-text-field>

      <v-text-field v-model="email" :rules="emailRule" label="email" type="email"></v-text-field>

      <v-textarea v-model="massage" :rules="massageRule" label="Massage for me"></v-textarea>

      <v-btn @submit="formSend" block class="mt-2" id="send">Send</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
import Email from '../smtp/smtp.js'
export default {
  data: () => ({
    firstName: '',
    firstNameRule: [
      value => {
        if (value?.length > 3 && /[^0-9]/.test(value)) return true

        return 'First name must be at least 3 characters and can not contain digits.'
      },
    ],

    phoneNumber: '',
    phoneNumberRule: [
      value => {
        if (value?.length > 4 && /[0-9-]+/.test(value)) return true

        return 'Phone number needs to be at least 4 digits and can not contain latters.'
      },
    ],

    email: '',
    emailRule: [
      value => {
        if (/^[a-z.-]+[0-9-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

        return 'Must be a valid e-mail.'
      },
    ],

    massage: '',
    massageRule: [
      value => {
        if (value?.length >= 2) return true

        return 'Must be massage for me'
      },
    ],
  }),

  methods: {
    formSend() {
      Email.send({
        SecureToken: "1b17e9cc-7dc8-403a-966b-24b7321d6e12",
        To: 'ibnodil2010@gmail.com',
        From: "ibnodil2010@gmail.com",
        Subject: "From portfolio",
        Body: `Hi, my name is ${this.firstName} My phone number ${this.phoneNumber} and my email ${this.email}. ${this.massage}`
      })
        .then(
          message => {
            alert(message)
            console.log('send')
          }
        )
        .catch(
          error => alert(error)
        )
    },
  }
}
</script>


<style></style>