<template>
    <div class="container">
        <div>
            <Navbar />
            <div class="blogs-page">
                <div class="main-content">
                    <div class="container">
                        <div class="columns is-mobile">
                            <div class="column is-8 is-offset-2">
                                <div class="section">
                                    <div class="title">
                                        <h1>Newest Posts</h1>
                                        <hr />
                                    </div>
                                    <PostItem
                                        v-for="post in posts"
                                        :key="post._id"
                                        :title="post.title"
                                        :subtitle="post.subtitle"
                                        :date="post.createedAt"
                                        :isRead="post.isRead"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import PostItem from "@/components/PostItem";
export default {
    components: {
        Navbar,
        PostItem
    },
    data() {
        return {
            title: "My Title From Page",
            posts: [
                {
                    _id: "1",
                    title: "My First Post",
                    subtitle: "My First Subtitle",
                    createedAt: new Date(),
                    isRead: false
                },
                {
                    _id: "2",
                    title: "My Seconde Post",
                    subtitle: "My Seconde Subtitle",
                    createedAt: new Date(),
                    isRead: true
                }
            ]
        };
    }
};
</script>

<style scoped></style>
