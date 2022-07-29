import { useRouter } from 'next/router';
import { SkipNavContent } from '@reach/skip-nav';

import Page from '@components/page';
import HomeContent from '@components/index';
import { META_DESCRIPTION } from '@lib/constants';

export default function Home() {
  const { query } = useRouter();
  const meta = {
    title: 'Crakd - Enter. Play. Win.',
    description: META_DESCRIPTION
  };
  
  return (
    <Page meta={meta} fullViewport>
      <SkipNavContent />
      <HomeContent />
    </Page>
  );
}
