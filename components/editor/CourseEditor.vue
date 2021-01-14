<template>
    <div class="editor course-editor">
        <CourseMenu :editor="editor" />
        <EditorContent class="editor__content" :editor="editor" />
    </div>
</template>

<script>
import { Editor, EditorContent } from "tiptap";
import CourseMenu from "@/components/editor/CourseMenu";

import {
    Bold,
    Italic,
    History,
    OrderedList,
    BulletList,
    ListItem,
} from "tiptap-extensions";

import javascript from "highlight.js/lib/languages/javascript";
import css from "highlight.js/lib/languages/css";

export default {
    components: {
        EditorContent,
        CourseMenu,
    },
    props: {
        initialContent: {
            required: true,
            type: String,
        },
    },
    data() {
        return {
            editor: null,
        };
    },
    // This is called only on client (in browser)
    mounted() {
        this.editor = new Editor({
            extensions: [
                new Bold(),
                new Italic(),
                new History(),
                new OrderedList(),
                new BulletList(),
                new ListItem(),
            ],
            onUpdate: () => {
                this.emitUpdate();
            },
        });

        this.initialContent && this.editor.setContent(this.initialContent);
    },
    beforeDestroy() {
        this.editor && this.editor.destroy();
    },
    methods: {
        emitUpdate() {
            const content = this.editor.getHTML();
            this.$emit("editorUpdated", content);
        },
    },
};
</script>

<style lang="scss" scoped>
.course-editor {
    * {
        &:foucs {
            outline: none;
        }
    }
    border: 1px solid gray;

    .editor__content {
        padding: 0 20px 20px 20px;
    }
}
</style>
