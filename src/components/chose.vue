<template>
 <table class="table">
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" v-model="allChecked" />全选（{{checkedCount}}）</label>
        </th>
        <th>Name</th>
        <th>Age</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in list">
        <td>
          <input type="checkbox" :value="item.name" v-model="checked" />
        </td>
        <td>{{item.name}}</td>
        <td>{{item.age}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
   var _list = [{
        name: "小明",
        age: 23
        }, {
        name: "小红",
        age: 20
        }, {
        name: "Sigma",
        age: 28
        }];

new Vue({
    el: '.app',
    computed: {
        allChecked: {
        get: function() {
            return this.checkedCount == this.list.length;
        },
        set: function(value) {
            if (value) {
            this.checked = this.list.map(function(item) {
                return item.name
            })
            } else {
            this.checked = []
            }
        }
        },
        checkedCount: {
        get: function() {
            return this.checked.length;
        }
        }
    },
    data: {
        list: _list,
        checked: []
    }
});
</script>