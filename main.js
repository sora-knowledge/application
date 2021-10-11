new Vue({
  el: '#container',
  data: {
    activeTab: 'todo',
    toDoText: '',
    changeList: '',
    lists: [],
    doneLists: [],
  },
  methods: {
    addList() {
      $('#add-option, #background').css('display', 'block');
    },
    crossButton() {
      $('#add-option, #edit-option, #background').css('display', 'none');
    },
    getList() {
      $('#add-option, #background').css('display', 'none');
      $('#edit-option, #background').css('display', 'none');
      this.lists.push(this.toDoText);
    },
    getNewList() {
      $('#add-option, #background').css('display', 'none');
      $('#edit-option, #background').css('display', 'none');
      // this.lists.splice(-1, 1, this.toDoText);
    },
    moveList(target) {
      this.lists.splice(target, 1);
      this.doneLists.push(this.toDoText);
    },
    allTrushButton() {
      $('#all-trush-option, #background').css('display', 'block');
    },
    trushAll() {
      $('#all-trush-option, #background').css('display', 'none');
      this.lists.splice(0);
    },
    allNo() {
      $('#all-trush-option, #background').css('display', 'none');
      $('#trush-option, #background').css('display', 'none');
    },
    editList() {
      $('#edit-option, #background').css('display', 'block');
    },
    trushList(index) {
      $('#trush-option, #background').css('display', 'block');
      console.log(index);
    },
    trushOne(index) {
      $('#trush-option, #background').css('display', 'none');
      this.lists.splice(index, 1);
    },
    notTrushOne() {
      $('#trush-option, #background').css('display', 'none');
    },
  },
});