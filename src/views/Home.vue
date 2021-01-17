<template>
  <div v-if="!error">
    <h1 class="title">welcome to blog</h1>
    <div v-for="blog in blogs" class="blog" :key="blog.id">
      <p class="title-link">Title: {{ blog.title }}</p>
      <router-link
        :to="{ name: 'AuthorDetail', params: { id: blog.author_id } }"
        class="author-link"
        >Author: {{ blog.author }}</router-link
      >
      <p class="blog-detail">{{ blog.detail }}</p>
    </div>
    <img :src="imageUrl                                                                                                                             " alt="">
  </div>
  <div v-else>
    {{ error }}
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  setup() {
    const blogs = ref([]);
    const error = ref(null);
    const gettingBlogs = async () => {
      try {
        const response = await fetch("http://localhost:3000/blogs");
        const data = await response.json();
        if (!response.ok) {
          throw new Error("oops no data available");
        }
        blogs.value = data;
      } catch (err) {
        error.value = err.message;
      }
    };

    gettingBlogs();

    return { blogs, error,  };
  },
};
</script>

<style>
body {
  background: white;
  color: black;
}
.title {
  color: rgb(83, 214, 105);
  text-transform: capitalize;
}
.blog {
  background: rgb(221, 239, 245);
  max-width: 480px;
  color: black;
  text-decoration: None;
  border-radius: 20px;
  padding: 10px;
  margin: 20px auto;
}
.blog a {
  text-decoration: none;
  display: inline-block;
  padding: 0px 10px 0px 10px;
}
.title-link {
  color: red;
  text-transform: capitalize;
  letter-spacing: 1px;
}
.author-link {
  color: rgb(83, 214, 105);
  letter-spacing: 1px;
  text-transform: capitalize;
}
.blog-detail {
  color: blueviolet;
  letter-spacing: 1px;
  font-size: 18px;
}
</style>