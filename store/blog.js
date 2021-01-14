import Vue from "vue";

export const state = () => ({
    item: {},
    items: {
        all: [],
        featured: [],
    },
    pagination: {
        count: 0,
        pageCount: 0,
        pageSize: 2,
        pageNum: 1,
    },
});

export const actions = {
    fetchBlogs({ commit, state }, filter) {
        const url = this.$applyParamsToUrl("/api/v1/blogs", filter);
        return this.$axios
            .$get(url)
            .then((data) => {
                const { blogs, count, pageCount } = data;
                commit("setBlogs", { resource: "all", blogs });
                commit("setPagination", { count, pageCount });
                return state.items.all;
            })
            .catch((error) => Promise.reject(error));
    },
    fetchFeaturedBlogs({ commit, state }, filter) {
        const url = this.$applyParamsToUrl("/api/v1/blogs", filter);
        return this.$axios
            .$get(url)
            .then((data) => {
                const { blogs } = data;
                commit("setBlogs", { resource: "featured", blogs });
                return state.items.featured;
            })
            .catch((error) => Promise.reject(error));
    },
    fetchBlogBySlug({ commit, state }, slug) {
        return this.$axios
            .$get(`/api/v1/blogs/s/${slug}`)
            .then((blog) => {
                commit("setBlog", blog);
                return state.item;
            })
            .catch((error) => Promise.reject(error));
    },
};

export const mutations = {
    setBlogs(state, { resource, blogs }) {
        state.items[resource] = blogs;
    },
    setBlog(state, blog) {
        state.item = blog;
    },
    setPage(state, currentPage) {
        Vue.set(state.pagination, "pageNum", currentPage);
    },
    setPagination(state, { count, pageCount }) {
        Vue.set(state.pagination, "count", count);
        Vue.set(state.pagination, "pageCount", pageCount);
    },
};
