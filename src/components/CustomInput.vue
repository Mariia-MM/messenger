<template>
  <div class="input">
    <label class="label">
      {{label}}
      <input
        class="input__field"
        :type="type"
        :placeholder="placeholder"        
        :value="value"
        :class="{'input__error':'showErrors'}"
      >
    </label>
    <ul v-if="showErrors" class="input__errors">
      <li v-for="(error,key) in errorsList" :key="key">{{error}}</li>
    </ul>
    
  </div>
</template>

<script>
export default {
  name: 'CustomInput',
  props: {
    type: String,
    placeholder: String,
    label: String,
    showErrors : Boolean,
    errorsList : Array,
    value: String,
  }
}
</script>
