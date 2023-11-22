import { ref } from 'vue';

export function useState<T>(initialState: T) {
  const state = ref(initialState);

  const setState = (newState: T) => {
    state.value = newState as any
  };

  return [state, setState] as const;
}


