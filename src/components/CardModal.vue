<template>

</template>

<script>
    export default {
        name: "CardModal",
        props: {
            title: '',
            description: '',
            list: null,
            dialog: null,
            closeModal: {type: Function}
        }
    }
</script>
