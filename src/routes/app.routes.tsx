
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Gruops } from '@screens/Groups';
import { Players } from '@screens/Players';
import { NewGroup } from '@screens/NewGroup';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }} >
            <Screen 
                name="groups"
                component={Gruops}
            />

            <Screen 
                name="new"
                component={NewGroup}
            />

            <Screen 
                name="players"
                component={Players}
            />
        </Navigator>
    );
}

