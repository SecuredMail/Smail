<template>
    <div id="app">
        <ckeditor :editor="editor"></ckeditor>
    </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditor from '@ckeditor/ckeditor5-vue';
    export default {
        name: 'app',
        components: {
            // Use the <ckeditor> component in this view.
            ckeditor: CKEditor.component
        },
        data() {
            return {
                editor: ClassicEditor,

                // ...
            };
        }
    }
</script>

<style lang="scss" scoped>

</style>