<template>
  <div class="awards">
    <awards-header></awards-header>
    <awards-list></awards-list>
  </div>
</template>

<script>
import AwardsHeader from './AwardsHeader.vue';
import AwardsList from './AwardsList.vue';

export default {
  components: { AwardsHeader, AwardsList },
};
</script>

<style lang="scss" scoped>
.awards {
  width: 1300px;
  margin-bottom: 50px;
}
</style>
