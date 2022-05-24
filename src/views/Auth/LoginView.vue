<script>
    import UserForm from '../../components/UserForm.vue';
</script>

<template>
    <UserForm 
        :showNameField=false
        :showRoleField=false
        :showReceiveNotificationField=false
        :showConfirmPassword=false
        btnText="Login"
        requestSubURL="login"

        @successful-auth="$emit('successful-auth', $event)" />
</template>