<script>

  export default {
      data: () => ({
          name: '',
          email: '',
          password: '',
          role: 'author',
          receiveNotifications: false
      }),
      props: {
          showNameField: Boolean,
          showRoleField: Boolean,
          showReceiveNotificationField: Boolean,
          btnText: String,
      },
      methods: {
        onFormSubmit(e) {
            e.preventDefault();

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
                data.receiveNotifications = this.receiveNotifications && this.role === 'reader';
            }
            
            this.$emit('user-form-submit', data);
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