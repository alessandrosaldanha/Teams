import { useState } from 'react';
import { FlatList } from 'react-native';
import { Header } from '@components./Header';
import { Highlight } from '@components./Highlight';
import { GruopCard } from '@components./GroupCard';
import { ListEmpty } from '@components./ListEmpty';
import { Button } from '@components./Button';

import { Container } from './styles';

export function Gruops() {
    const [groups, setGroups] = useState<string[]>([]);

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
                message="Que tal cadastrar a primeira turma?"
            />
        )}
    />

    <Button
        title="Criar nova turma"
    />

    </Container>
    );
}

