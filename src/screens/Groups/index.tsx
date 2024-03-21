import { Header } from '@components./Header';
import { Highlight } from '@components./Highlight';
import { GruopCard } from '@components./GroupCard';

import { Container } from './styles';

export function Gruops() {
    return (
    <Container>
        <Header />
        <Highlight 
            title="Turmas"
            subtitle="jogue com a sua turma"
        />
        <GruopCard title="Galera do Ignite" />
    </Container>
    );
}

