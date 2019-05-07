<template>
  <div class="main users-index">
    <div class="container">
      <h1 class="users-heading">ユーザー一覧</h1>
      <!-- 以下の<% %>を使ってeach文を追加してください -->
      <div class="users-index-item" v-for="user in users" v-bind:key="user.id">
        <div class="user-right">
          <!-- 以下の<%= %>を使ってユーザー名を表示してください -->
          <p>name: {{user.name}}</p>
          <p>email: {{user.email}}</p>
          <p>pass: {{user.pass}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    users() {
      return this.$store.state.uM.userIndex;
    }
  },
  created: function() {
    // this.$nextTick(function() {
    this.$store.dispatch("uM/userIndex");
    // });
  }
};
</script>

<style scoped>
/* users/index ================================ */
.users-heading {
  font-weight: 300;
  margin: 60px 0 20px;
  font-size: 48px;
  color: #bcc8d4;
}

.users-index-item {
  padding: 20px 30px;
  background-color: white;
  overflow: hidden;
  box-shadow: 0 2px 6px #c1ced7;
  display: table;
  width: 100%;
}

.user-left img {
  width: 50px;
  height: 50px;
  border-radius: 40%;
  box-shadow: 0 2px 6px #c1ced7;
  object-fit: cover;
}

.user-name a {
  font-weight: 600;
}

.user-name a:hover {
  color: #3ecdc6;
}

.user-left {
  float: left;
  width: 10%;
}

.user-right {
  width: 90%;
  padding-left: 25px;
  text-align: left;
  display: table-cell;
  vertical-align: middle;
}

/* users/show ================================ */
.user-show {
  text-align: center;
}

.user {
  margin-bottom: 20px;
}

.user img {
  width: 80px;
  height: 80px;
  border-radius: 40%;
  box-shadow: 0 2px 6px #c1ced7;
  margin: 20px 0 10px;
  object-fit: cover;
}

.user h2 {
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
}

.user p {
  font-size: 13px;
  margin-bottom: 15px;
}

.user a {
  color: #8899a6;
  text-decoration: underline;
  font-weight: 200;
}

.user span {
  color: #afb6bf;
  font-weight: 200;
  padding: 0 6px 0 8px;
}

.user-tabs {
  margin-top: 40px;
  background-color: white;
  overflow: hidden;
  box-shadow: 0 2px 6px #c1ced7;
}

.user-tabs li {
  float: left;
}

.user-tabs li.active {
  border-bottom: 2px solid #3ecdc6;
}

.user-tabs li.active a {
  color: #57575f;
}

.user-tabs a {
  display: inline-block;
  padding: 16px 30px;
  color: #afb6bf;
}

/* users/new, users/edit ================================ */
.users-form input {
  margin-bottom: 15px;
}
</style>

