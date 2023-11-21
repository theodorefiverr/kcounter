import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useAppStore = defineStore('App', () => {
  const isLoading = ref(false);
  const toggleLoading = () => {
  isLoading.value = !isLoading.value;
  };
  const isLoadingText = ref("")
  
  return { isLoading , toggleLoading , isLoadingText }
})
