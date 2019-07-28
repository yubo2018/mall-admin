import MaterialLibraryComponents from './MaterialLibrary.vue';

const MaterialLibrary = {
    install: function(Vue) {
        // Vue.component('MaterialLibrary', MaterialLibraryComponents)
        const MaterialLibrary = Vue.extend(MaterialLibraryComponents);
        Vue.prototype.$openFile = function (methodOptions) {
            // 逻辑...
            MaterialLibraryComponents.methods.show()
            console.log(MaterialLibraryComponents.methods)
        }
    }
}

export default MaterialLibrary;