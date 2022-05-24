<script>
    import UserForm from '../../components/UserForm.vue';
</script>

<template>
    <UserForm 
        :showNameField=true
        :showRoleField=true
        :showReceiveNotificationField=true
        :showConfirmPassword=true
        btnText="Register"
        requestSubURL="register"
        
        @successful-auth="$emit('successful-auth', $event)" />
</template>