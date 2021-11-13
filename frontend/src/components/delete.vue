<template>
<div class="deleting">
        <label
                class="del" id="del"
                v-bind:class="{'del__selected': valueLocal, 'is-disabled': disabled}"
                v-on:click="del">
                
            <input
                    class="del_checkbox"
                    type="checkbox"
                    v-bind:name="name"
                    v-bind:value="valueLocal"
                    v-bind:required="required"
                    v-bind:disabled="disabled"
                    v-model="valueLocal">
            ✖️
        </label>
    </div>
</template>

<style scoped>
.deleting{
    display: inline-block
}
.del {
    margin-left:-50%;
    display: inline-block;
    padding: 3px;
    vertical-align: middle;
    line-height: 1;
    font-size: 16px;
    color: black;
    cursor: pointer;
    -webkit-transition: color .2s ease-out;
    transition: color .2s ease-out;
}
.del.is-disabled:hover {
     cursor: default;
 }
.del_checkbox {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
}
.del__selected{
    color: black;
}
</style>

<script>



export default {
  name: 'DeleteButton',
  props: {
    'name': {
            type: String,
            default: 'del'
        },
        'value': {
            type: Boolean,
            default: false
        },
        'disabled': {
            type: Boolean,
            default: false
        }
    },
    data(){
        return {
            valueLocal: this.value,
        };

    },
    methods: {
        del: function() {
            if (this.disabled==true) {
                return;
            }
            this.valueLocal = !this.valueLocal;
        }
    }
};
  

</script>