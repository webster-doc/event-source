export type UseToggle = (initialState?: boolean) => [boolean, () => void, (newState: boolean) => void]
