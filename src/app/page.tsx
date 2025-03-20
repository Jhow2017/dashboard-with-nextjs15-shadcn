import { ModeToggle } from '@ds/components/global/mode-toggle';
import DsTitle from '@ds/components/typography/title';

export default function Home() {
    return (
        <div>
            <DsTitle as="h2" size={'large'}>
                Ola
            </DsTitle>
            <ModeToggle />
        </div>
    );
}
