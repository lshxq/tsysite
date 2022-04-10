<template lang="pug">
  .artical-list-main
    sy-pagin-data(url='/public/artical/list' style='width: 50%')
      template(slot-scope='scope')
        .data-row(v-for='(row, idx) of scope.data' :key='idx') {{row}}

</template>