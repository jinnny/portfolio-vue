import { reactive } from '@vue/composition-api'
import data from '../../data'

export const state = reactive({
  slides: data.slides,
  item: {},
  years: data.years
})
