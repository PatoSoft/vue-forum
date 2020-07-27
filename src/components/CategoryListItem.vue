<template>
  <div class="forum-list">
    <div class="list-title">
      <router-link :to="{name: 'Category', params: {id: category['.key']}}">
        {{category.name}}
      </router-link>
    </div>

    <ForumList :forums="categoryForums"/>
  </div>
</template>

<script>
  import sourceData from '@/data'
  import ForumList from './ForumList'

  export default {
    components: {
      ForumList
    },

    props: {
      category: {
        required: true,
        type: Object
      }
    },

    computed: {
      categoryForums () {
        return Object.values(sourceData.forums)
          .filter(forum => forum.categoryId === this.category['.key'])
      }
    }
  }
</script>

<style scoped>

</style>
