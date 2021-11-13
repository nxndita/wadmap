<template>
<div class="favoriting">
        <label
                class="favorite__heart" id="favorite__heart"
                v-bind:class="{'favorite__heart__selected': valueLocal, 'is-disabled': disabled}"
                v-on:click="favorite">
                
            <input
                    class="favorite__checkbox"
                    type="checkbox"
                    v-bind:name="name"
                    v-bind:value="valueLocal"
                    v-bind:required="required"
                    v-bind:disabled="disabled"
                    v-model="valueLocal">
            ❤
        </label>
    </div>
</template>

<style scoped>
.favoriting{
    display: inline-block
}
.favorite__heart {
    margin-left:-50%;
    display: inline-block;
    padding: 3px;
    vertical-align: middle;
    line-height: 1;
    font-size: 20px;
    color: #df470b;
    cursor: pointer;
    -webkit-transition: color .2s ease-out;
    transition: color .2s ease-out;
}
.favorite__heart.is-disabled:hover {
     cursor: default;
 }
.favorite__checkbox {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
}
.favorite__heart__selected{
    color: #df470b;
}
</style>

<script>



export default {
  name: 'FavouriteButton',
  props: {
    'name': {
            type: String,
            default: 'favorite'
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
        favorite: function() {
            if (this.disabled==true) {
                return;
            }
            this.valueLocal = !this.valueLocal;
        }
    }
};
  

</script>