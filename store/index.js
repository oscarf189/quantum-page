export const state = () => ({
    lang: 'es',
  })
  
  export const mutations = {
    changeLang(state){
      if (state.lang == 'es'){
        state.lang = 'en'
      } else {
        state.lang = 'es'
      }
    }
  }
  