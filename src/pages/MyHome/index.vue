<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from "@/pages/MyHome/ListContainer";
import Recommend from "@/pages/MyHome/Recommend";
import Rank from "@/pages/MyHome/Rank";
import Like from "@/pages/MyHome/Like";
import Floor from "@/pages/MyHome/Floor";
import Brand from "@/pages/MyHome/Brand";
import { mapState } from "vuex";
export default {
  name: "",
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
};
</script>

<style>
</style>