<template>
  <div class="thread">
    <div>
      <p>
        <router-link :to="{name: 'ThreadShow', params: {id: thread['.key']}}">
          {{thread.title}}
        </router-link>
      </p>

      <p class="text-faded text-xsmall">
        By <a href="#">{{user.name}}</a>, <AppDate :timestamp="thread.publishedAt" />.
      </p>
    </div>

    <div class="activity">
      <p class="replies-count">
        {{repliesCount}} replies
      </p>

<!--      <img class="avatar-medium" src="#"></img>-->

<!--      <div>
        <span>
          <a href="#" class="text-small">...</a>
          <p class="text-faded text-xsmall">1 month ago</p>
        </span>
      </div>-->
    </div>
  </div>
</template>

<script>
  import sourceData from '@/data'

  export default {
    props: {
      thread: {
        required: true,
        type: Object
      }
    },

    computed: {
      repliesCount () {
        return Object.keys(this.thread.posts).length - 1
      },
      user () {
        return sourceData.users[this.thread.userId]
      }
    }
  }
</script>

<style scoped>

</style>
