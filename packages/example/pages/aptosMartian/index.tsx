import React from 'react';
import dynamic from 'next/dynamic';
import PageLayout from '../../components/PageLayout';

// injected provider works only if nextjs ssr disabled
const AptosExample = dynamic(() => import('../../components/aptosMartian/AptosExample'), {
  ssr: false,
});

export default function () {
  return (
    <PageLayout title={'Aptos Martian DApp Example'}>
      <AptosExample />
    </PageLayout>
  );
}
