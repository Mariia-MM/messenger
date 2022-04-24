<template>
  <div class="input">
    <label class="input__label">
      {{label}}
      <input
        class="input__field"
        :type="type"
        :placeholder="placeholder"        
        :value="modelValue"
        :class="{'input__error': showErrors }"
        @input="$emit('update:modelValue', $event.target.value)"
      >
    </label>
    <ul v-if="showErrors" class="input__errors">
      <li v-for="(error,key) in errorsList" v-bind:key="key">{{error}}</li>
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
    modelValue: String,
  }
}
</script>
