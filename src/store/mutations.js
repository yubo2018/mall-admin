import {
    MENU_SELECTED
} from './mutation-types'

export const mutations = {
    [MENU_SELECTED] (state, info) {
        state.menu_selected = info
    }
}
