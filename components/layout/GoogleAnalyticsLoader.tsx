'use client';

import dynamic from 'next/dynamic';

const GoogleAnalytics = dynamic(
  () => import('@/components/layout/GoogleAnalytics'),
  { ssr: false }
);

export default function GoogleAnalyticsLoader({ ga_id }: { ga_id: string }) {
  return <GoogleAnalytics ga_id={ga_id} />;
}
