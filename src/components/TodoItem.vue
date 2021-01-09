<template>
    <div class="todo-list">
        <div class="todo-item">
            <div class="todo-item-content">
                <div class="todo-item-content-title">
                    {{ title }}
                </div>
                <div class="todo-item-content-description">
                    {{ description }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // props: ["title", "description"],
    props: {
        title: {
            type: String,
            required: true,
            default: "Default Title",
        },
        description: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped lang="scss">
.todo {
    &-item {
        background-color: gray;
        min-height: 70px;
        margin: 10px;
        padding: 10px;
        color: white;
        border-radius: 5px;
        font-size: 23px;

        &-content {
            &-title {
                font-weight: bold;
            }
            &-description {
                font-size: 19px;
            }
        }
    }
}
</style>
