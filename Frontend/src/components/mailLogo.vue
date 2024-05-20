<template>
    <svg class="envelope" width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" @mouseover="openFlap" @mouseout="closeFlap">
      <!-- Envelope Back -->
      <rect x="12.5" y="25" width="75" height="50" rx="5" ry="5" fill="#00aaff" />
      
      <!-- Envelope Flap -->
      <path ref="flap" class="flap" d="M12.5 25 L50 5 L87.5 25" fill="#007bff" />
  
      <!-- Envelope Front -->
      <path d="M12.5 25 L50 55 L87.5 25" fill="#00aaff" />
      <rect x="12.5" y="25" width="75" height="50" rx="5" ry="5" fill="none" stroke="#00aaff" stroke-width="1" />
  
      <!-- Cut of Envelope -->
      <path d="M12.5 25 L50 50 L87.5 25" fill="#007bff" />
      
      
    </svg>
  </template>
  
  <script>
  export default {
    name: 'MailLogo',
    methods: {
      openFlap() {
        this.$refs.flap.setAttribute('d', 'M12.5 25 L50 5 L87.5 25');
        // this.$refs.checkmark.style.opacity = 1;
      },
      closeFlap() {
        this.$refs.flap.setAttribute('d', 'M12.5 25 L50 25 L87.5 25');
        // this.$refs.checkmark.style.opacity = 0;
      }
    },
    mounted() {
      this.closeFlap();
    }
  }
  </script>
  
  <style scoped>
  .envelope {
    transition: transform 0.3s ease;
  }
  
  .envelope:hover {
    transform: scale(1.1);
  }
  
  .flap {
    transition: d 0.3s ease;
  }
  
  .checkmark {
    transition: opacity 0.3s ease;
  }
  </style>
  