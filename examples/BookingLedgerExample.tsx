import { DataTable } from '../components/data-table';
import { Badge } from '../components/badge';
import { Card, CardHeader, CardTitle, CardContent } from '../components/card';
import type { ColumnDef } from '@tanstack/react-table';

// Example: how felloh-lite reports-lite will use @felloh/ui
// One live ledger per booking — spreadsheet style finance team loves.

type LedgerRow = {
  booking_reference: string;
  traveller: string;
  paid: number; // minor units GBX
  trust: number;
  payable: number;
  status: 'COMPLETE' | 'PENDING' | 'FAILED' | 'SETTLING';
  departure: string;
};

const rows: LedgerRow[] = [
  { booking_reference: 'BAL-4401', traveller: 'Ilsa Lund', paid: 85000, trust: 68000, payable: 17000, status: 'COMPLETE', departure: '2026-08-15' },
  { booking_reference: 'SKI-2103', traveller: 'Victor Laszlo', paid: 120000, trust: 96000, payable: 24000, status: 'PENDING', departure: '2026-09-01' },
  { booking_reference: 'QS-1001', traveller: 'Alex Example', paid: 25000, trust: 20000, payable: 5000, status: 'SETTLING', departure: '2026-08-22' },
];

const columns: ColumnDef<LedgerRow>[] = [
  { accessorKey: 'booking_reference', header: 'Booking' },
  { accessorKey: 'traveller', header: 'Traveller' },
  {
    accessorKey: 'paid',
    header: 'Paid',
    cell: ({ getValue }) => `£${((getValue<number>() / 100).toFixed(2))}`,
  },
  {
    accessorKey: 'trust',
    header: 'Trust (protected)',
    cell: ({ getValue }) => `£${((getValue<number>() / 100).toFixed(2))}`,
  },
  {
    accessorKey: 'payable',
    header: 'Supplier payable',
    cell: ({ getValue }) => `£${((getValue<number>() / 100).toFixed(2))}`,
  },
  {
    accessorKey: 'status',
    header: 'Trust status',
    cell: ({ getValue }) => {
      const v = getValue<string>();
      const variant = v === 'COMPLETE' ? 'success' : v === 'PENDING' ? 'warning' : v === 'FAILED' ? 'error' : 'info';
      return <Badge variant={variant as any}>{v}</Badge>;
    },
  },
  { accessorKey: 'departure', header: 'Departure' },
];

export function BookingLedgerExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Live ledger — Baltic + Skisfari</CardTitle>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={rows} searchKey="booking_reference" searchPlaceholder="Search booking reference…" pageSize={10} />
      </CardContent>
    </Card>
  );
}
