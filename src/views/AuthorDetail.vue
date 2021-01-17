<template>
  <div class="author">
    <h1 class="author-name">Author: {{ AuthorInfo.name }}</h1>
    <h2 class="written-blogs">Written-Blogs: {{ AuthorInfo.written_blogs }}</h2>
    <h3>
      <span>About:</span>
      <span class="detail">{{ AuthorInfo.details }}</span>
    </h3>
  </div>
</template>


<script>
import { ref } from "vue";
export default {
  props: ["id"],
  setup(props) {
    const id = props.id;
    const AuthorInfo = ref({});
    const err = ref(null);

    const getAuthorInfo = () => {
      fetch("http://localhost:3000/users/" + id)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          AuthorInfo.value = data;
          console.log(AuthorInfo);
        })
        .catch((error) => {
          err.value = error;
        });
    };

    getAuthorInfo();
    return { AuthorInfo };
  },
};
</script>

<style >
.author {
  background: rgb(221, 239, 245);
  max-width: 480px;
  padding: 10px;
  border-radius: 20px;
  margin: 150px auto;
}
.author-name {
  text-transform: capitalize;
  color: rgb(83, 214, 105);
  letter-spacing: 1px;
}
.written-blogs {
  color: red;
  letter-spacing: 1px;
}
span {
  display: block;
  text-align: left;
  color: blueviolet;
}
.detail {
  text-indent: 10px;
  text-align: center;
  text-transform: capitalize;
  letter-spacing: 0.5px;
}
</style>