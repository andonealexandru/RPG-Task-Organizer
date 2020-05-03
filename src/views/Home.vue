<template>
  <div class="home">
    <div class="uk-alert-danger" uk-alert>
      <p>
        Hello there! The website is not finished yet. Come back after 6 may 2020. Thank you for understanding!
      </p>
    </div>
    <vk-grid class="uk-child-width-1-3">
      <List
        :list="list"
        :group="1"
        listTitle="Treburi casnice"
        icon="home"
      />
      <List
        :list="list2"
        :group="2"
        listTitle="Treburi pe calculator"
        icon="laptop"
      />
      <List
        :list="list3"
        :group="1"
        listTitle="Teme"
        icon="copy"
      />
    </vk-grid>
  </div>
</template>

<script>
  import List from "../components/List";

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
                  },
                  {
                      name: 'Element 1.8',
                      order: 8
                  },
                  {
                      name: 'Element 1.9',
                      order: 9
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
                  },
                  {
                      name: 'Element 3.9',
                      order: 9
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
