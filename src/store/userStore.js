import {ref} from "vue";
import {defineStore} from "pinia";

export const useUserStore = defineStore('user', () => {
    const name = ref('');

    function updateName(newName) {
        name.value = newName;
    }
    return {name, updateName};
});