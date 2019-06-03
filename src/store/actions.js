import {
    MENU_SELECTED
} from './mutation-types'

export const actions = {
    menuSelected: ({commit}, info) => commit(MENU_SELECTED, info)
}
