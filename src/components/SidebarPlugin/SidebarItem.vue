<template>
  <li class="nav-item">
    <router-link
      :to="link.path"
      @click="linkClick"
      class="nav-link"
      :target="link.target"
      :href="'#' + link.path"
    >
      <!--      <i :class="link.icon"></i>-->
      <div class="ml-3">
        <img :src="link.src" style="width: 24px; margin-right: 1rem; line-height: 45px" />
        <span class="nav-link-text func-items" style="line-height: 40px;">{{ link.name }}</span>
      </div>
    </router-link>
  </li>
</template>
<script>
export default {
  name: "sidebar-item",
  props: {
    link: {
      type: Object,
      default: () => {
        return {
          name: "",
          path: "",
          children: [],
        };
      },
      description:
        "Sidebar link. Can contain name, path, icon and other attributes. See examples for more info",
    },
  },
  inject: {
    autoClose: {
      default: true,
    },
  },
  data() {
    return {
      children: [],
      collapsed: true,
    };
  },
  methods: {
    linkClick() {
      if (
        this.autoClose &&
        this.$sidebar &&
        this.$sidebar.showSidebar === true
      ) {
        this.$sidebar.displaySidebar(false);
      }
    },
  },
};
</script>
<style>
.func-items {
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: -0.02em;
  color: #86898c;
}
</style>
