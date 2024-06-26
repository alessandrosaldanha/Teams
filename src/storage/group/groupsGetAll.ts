import AsyncStorage from "@react-native-async-storage/async-storage";

const GROUP_COLLECTION = '@ignite-teams:groups';

export async function groupsGetAll(){
    try {
    const storage = await AsyncStorage.getItem(GROUP_COLLECTION);

    const groups: string[] = storage ? JSON.parse(storage) : [];

    return groups;
    } catch (error) {
        throw error;
    }
}