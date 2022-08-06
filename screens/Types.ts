import { NavigationProp, NavigatorScreenParams, useNavigation } from "@react-navigation/native"

export type RootTabParamList = {
    Home: undefined
    RestaurantDetails: undefined
    OrderComplited: undefined
}

// useAppNavigation hook helper
type UseNavigationType = NavigationProp<RootTabParamList>

export const useAppNavigation = () => useNavigation<UseNavigationType>()
