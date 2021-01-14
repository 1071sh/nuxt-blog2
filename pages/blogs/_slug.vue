<template>
    <div class="blog-editor-container">
        <div class="container">
            <div class="blog-section-user">
                <UserTitle
                    :name="blog.author.name"
                    :avatar="blog.author.avatar"
                    :date="blog.author.createdAt | formatDate"
                />
            </div>
            <EditorView :initialContent="blog.content" />
        </div>
    </div>
</template>

<script>
import UserTitle from "@/components/shared/UserTitle";
import EditorView from "@/components/editor/EditorView";

export default {
    head() {
        return {
            title: this.blog.title,
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: this.blog.subtitle,
                },
            ],
        };
    },
    components: {
        UserTitle,
        EditorView,
    },
    computed: {
        blog() {
            return this.$store.state.blog.item;
        },
    },
    async fetch({ store, params }) {
        await store.dispatch("blog/fetchBlogBySlug", params.slug);
    },
};
</script>

<style scoped lang="scss">
.blog-content,
.blog-section-user {
    max-width: 800px;
    margin: 10px auto;
}
</style>
