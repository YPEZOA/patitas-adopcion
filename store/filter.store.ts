import { create } from 'zustand'

interface FilterStore {
  isOpenModal: boolean
  openModal: () => void
  closeModal: () => void
  selectRegion: (region: number) => void
  selectCommune: (commune: string) => void
  selectAnimalState: (animalState: string) => void
  filters: {
    region: number
    commune: string
    animalState: string
  }
}

const initialStates = {
  filters: {
    region: 0,
    commune: '',
    animalState: ''
  },
  openModal: () => {},
  closeModal: () => {},
  selectRegion: (region: string) => null,
  selectCommune: (commune: string) => null,
  selectAnimalState: (animalState: string) => null,
  isOpenModal: false
}

const useFilterStore = create<FilterStore>(set => ({
  ...initialStates,
  isOpenModal: false,
  openModal: () => set({ isOpenModal: true, filters: initialStates.filters }),
  closeModal: () => set({ isOpenModal: false }),
  selectRegion: (region: number) =>
    set(state => ({
      filters: {
        ...state.filters,
        region: region,
        commune: ''
      }
    })),
  selectCommune: (commune: string) =>
    set(state => ({
      filters: {
        ...state.filters,
        commune: commune
      }
    })),
  selectAnimalState: (animalState: string) =>
    set(state => ({
      filters: {
        ...state.filters,
        animalState: animalState
      }
    }))
}))

export default useFilterStore
