import create from 'zustand';

const useStore = create((set) => ({
  count: 0,
  // b:console.log("set is"+set),
  c:0,
  increment: () => set((state) => ({ 
    count: state.count + 1,
    // b:console.log(set),
    // c:console.log('state is',state)
    
  })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export default useStore;
