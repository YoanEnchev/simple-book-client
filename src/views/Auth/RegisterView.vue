<script>
    import UserForm from '../../components/UserForm.vue';
</script>

<template>
    <UserForm 
        :showNameField=true
        :showRoleField=true
        :showReceiveNotificationField=true
        btnText="Register"
        
        @user-form-submit="$emit('user-form-submit', $event)" />
</template>

<!-- TODO: Send register request. -->