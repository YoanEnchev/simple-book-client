<script>

  import config from '../data/config.json';

  export default {

      data: () => ({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          role: 'author',
          receiveNotifications: false
      }),
      props: {
          showNameField: Boolean,
          showRoleField: Boolean,
          showReceiveNotificationField: Boolean,
          showConfirmPassword: Boolean,
          btnText: String,
          requestSubURL: String
      },
      methods: {
        async onFormSubmit(e) {
            e.preventDefault();

            if(this.showConfirmPassword && this.password !== this.confirmPassword) {
              alert('Password and confirm password must match.');
              return;
            }

            let data = {
              // Set fields that are always displayed
              email: this.email,
              password: this.password
            }

            if(this.showNameField) {
              data.name = this.name;
            }

            if(this.showRoleField) {
              data.role = this.role;
            }

            if(this.showReceiveNotificationField) {
              data.receive_notifications = this.receiveNotifications && this.role === 'reader';
            }

            if(this.showConfirmPassword) {
              data.password_confirmation = this.confirmPassword;
            }

            let response = await fetch(`${config.apiBaseURL}/${this.$props.requestSubURL}`, {
              method: 'POST',
              headers: config.jsonHeaderParam,
              body: JSON.stringify(data)
            });
            
            let responseData = await response.json();

            if(!response.ok) {
              alert('Action failed. ' + responseData);
              return;
            }

            this.$emit('successful-auth', responseData);

            this.$router.push('/');
        },
      }
  }
</script>

<template>
  <div>
    <form method="POST" @submit="onFormSubmit">
        <div class="mb-3" v-if="showNameField">
          <label for="name" class="form-label">Name</label>
          <input class="form-control" id="name" v-model="name" required>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" v-model="email" required>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password" v-model="password" required>
        </div>
        <div class="mb-3" v-if="showConfirmPassword">
          <label for="confirm_password" class="form-label">Confirm Password</label>
          <input class="form-control" type="password" id="confirm_password" v-model="confirmPassword" required>
        </div>
        <div class="mb-3" v-if="showRoleField">
          <label for="role" class="form-label">Role</label>
          <select class="form-select" id="role" v-model="role">
            <option value="author">Author</option>
            <option value="reader">Reader</option>
          </select>
        </div>
        <div class="mb-3" v-if="showReceiveNotificationField && this.role === 'reader'">
            <input class="form-check-input me-2" type="checkbox" id="receive-notifications" v-model="receiveNotifications">
            <label for="receive-notifications" class="form-label">Receive Notifications</label>
        </div>
        <button type="submit" class="btn btn-primary">
            {{ btnText }}
        </button>
    </form>
  </div>
</template>