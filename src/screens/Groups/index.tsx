import { useState, useCallback } from 'react';
import { FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { Header } from '@components./Header';
import { Highlight } from '@components./Highlight';
import { GruopCard } from '@components./GroupCard';
import { ListEmpty } from '@components./ListEmpty';
import { Button } from '@components./Button';

import { Container } from './styles';
import { groupsGetAll } from '@storage/group/groupsGetAll';

export function Gruops( ) {
    const [groups, setGroups] = useState<string[]>([]);

    const navigation = useNavigation();

    function handleNewGroup(){
        navigation.navigate('new');
    }
        async function fetchGroups() {
            try {
            const data = await groupsGetAll();
            setGroups(data);

            }catch(error){
                console.log(error);
            }
        }
    

        useFocusEffect(useCallback(() => {
            fetchGroups();
    }, []));

    return (
    <Container>
        <Header />
        <Highlight 
            title="Turmas"
            subtitle="jogue com a sua turma"
        />

<FlatList 
    data={groups}
    keyExtractor={item => item}
    renderItem={({ item }) => (
        <GruopCard
            title={item}
        />
    )}

    contentContainerStyle={groups.length === 0 && { flex: 1}}
    ListEmptyComponent={() => (
        <ListEmpty 
                message="Cadastrar a primeira turma?"
            />
        )}
        showsVerticalScrollIndicator={false}
    />

    <Button
        title="Criar nova turma"
        onPress={handleNewGroup}
    />

    </Container>
    );
}

