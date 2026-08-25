import type { ReactNode } from 'react';
import { cn } from '../../utils/cn';

export type DemoGroup = 'Base' | 'Inputs' | 'Overlays' | 'Data' | 'Blocks';

export type DemoDef = {
  id: string;
  label: string;
  group: DemoGroup;
  render: () => ReactNode;
};

export function Demo({ title, hint, children, pad = true }: { title: string; hint?: string; children: ReactNode; pad?: boolean }) {
  return (
    <section className="space-y-2">
      <div className="flex flex-wrap items-baseline gap-x-3">
        <h2 className="text-sm font-bold uppercase tracking-wider text-[#525252]">{title}</h2>
        {hint && <span className="text-xs text-[#8d8d8d]">{hint}</span>}
      </div>
      <div className={cn('rounded-lg border border-black/10 bg-white', pad && 'p-4')}>{children}</div>
    </section>
  );
}

export type Booking = {
  reference: string;
  customer: string;
  amount: number;
  trust: number;
  status: 'pending' | 'confirmed' | 'completed';
  departure: string;
};

const rawBookings: Omit<Booking, 'trust'>[] = [
  { reference: 'CAS-1942-001', customer: 'Rick Blaine', amount: 245000, status: 'confirmed', departure: '2026-09-12' },
  { reference: 'ALI-1979-014', customer: 'Ellen Ripley', amount: 189000, status: 'pending', departure: '2026-10-03' },
  { reference: 'PSY-1960-003', customer: 'Marion Crane', amount: 85000, status: 'confirmed', departure: '2026-09-30' },
  { reference: 'FAR-1996-002', customer: 'Marge Gunderson', amount: 120000, status: 'pending', departure: '2026-11-18' },
  { reference: 'BTTF-1985-001', customer: 'Marty McFly', amount: 310000, status: 'completed', departure: '2026-08-02' },
  { reference: 'TIT-1997-007', customer: 'Jack Dawson', amount: 76000, status: 'pending', departure: '2026-12-05' },
];

export const bookings: Booking[] = rawBookings.map((b) => ({ ...b, trust: Math.round(b.amount * 0.8) }));

export const gbp = (pence: number) => `£${(pence / 100).toLocaleString('en-GB', { minimumFractionDigits: 2 })}`;
