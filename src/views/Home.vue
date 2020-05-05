<template>
  <div class="home">
    <v-btn @click="$router.push('game')">Joc</v-btn>
    <vk-grid class="uk-child-width-1-3@m uk-padding-large">
      <List
        :list="list"
        :group="1"
        listTitle="To do"
        icon="star"
      />
      <List
        :list="list2"
        :group="2"
        listTitle="Daily tasks"
        icon="future"
      />
      <List
        :list="list3"
        :group="1"
        listTitle="Habits"
        icon="bolt"
      />
    </vk-grid>
  </div>
</template>

<script>
  import List from "../components/website/List";

  export default {
      name: "home",
      display: "Transitions",
      order: 7,
      components: {
          List
      },
      data() {
          return {
              list: [
                  {
                      name: 'Element 1.1',
                      order: 1
                  },
                  {
                      name: 'Element 1.2',
                      order: 2
                  },
                  {
                      name: 'Element 1.3',
                      order: 3
                  },
                  {
                      name: 'Element 1.4',
                      order: 4
                  },
                  {
                      name: 'Element 1.5',
                      order: 5
                  },
                  {
                      name: 'Element 1.6',
                      order: 6
                  },
                  {
                      name: 'Element 1.7',
                      order: 7
                  }
              ],
              list2: [
                  {
                      name: 'Element 2.1',
                      order: 1
                  },
                  {
                      name: 'Element 2.2',
                      order: 2
                  },
                  {
                      name: 'Element 2.3',
                      order: 3
                  },
                  {
                      name: 'Element 2.4',
                      order: 4
                  },
                  {
                      name: 'Element 2.5',
                      order: 5
                  },
                  {
                      name: 'Element 2.6',
                      order: 6
                  },
                  {
                      name: 'Element 2.7',
                      order: 7
                  },
                  {
                      name: 'Element 2.8',
                      order: 8
                  },
                  {
                      name: 'Element 2.9',
                      order: 9
                  }
              ],
              list3: [
                  {
                      name: 'Element 3.1',
                      order: 1
                  },
                  {
                      name: 'Element 3.2',
                      order: 2
                  },
                  {
                      name: 'Element 3.3',
                      order: 3
                  },
                  {
                      name: 'Element 3.4',
                      order: 4
                  },
                  {
                      name: 'Element 3.5',
                      order: 5
                  },
                  {
                      name: 'Element 3.6',
                      order: 6
                  },
                  {
                      name: 'Element 3.7',
                      order: 7
                  },
                  {
                      name: 'Element 3.8',
                      order: 8
                  }
              ]
          };
      }
  };
</script>

<style>
  .button {
    margin-top: 35px;
  }
  .flip-list-move {
    transition: transform 0.5s;
  }
  .no-move {
    transition: transform 0s;
  }
  .ghost {
    opacity: 0.5;
    background: #c8ebfb;
  }
  .list-group {
    min-height: 20px;
  }
  .list-group-item {
    cursor: move;
  }
  .list-group-item i {
    cursor: pointer;
  }
</style>
