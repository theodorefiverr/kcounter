import { ref, computed } from 'vue'

export const collapsed = ref(false)
export const hidden = ref(false)
export const toggleSidebar = () => (collapsed.value = !collapsed.value)
export const toggleHidden = () => (hidden.value = !hidden.value)
export const matches = ref(window.matchMedia("(max-width: 638px)").matches)

export const SIDEBAR_WIDTH = 180
export const SIDEBAR_WIDTH_COLLAPSED = 38
export const sidebarWidth = computed(
  () => `${collapsed.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px`
)

const updateState = (x:MediaQueryList) =>{
  if (x.matches) { // If media query matches
   hidden.value = true;
   matches.value=true;
  } else {
    hidden.value = false;
    matches.value=false;
  }
}

const x = window.matchMedia("(max-width: 638px)");
updateState(x) // Call listener function at run time
x.addEventListener('change',(e)=>{
  updateState(e.target as MediaQueryList) 
})