import { Badge } from '../../components/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/card';
import { Button } from '../../components/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/table';
import { DataTable, type DataTableColumn } from '../../components/data-table';
import { ChartContainer, ChartTooltip } from '../../components/chart';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../../components/carousel';
import { Progress } from '../../components/progress';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '../../components/resizable';
import { ScrollArea, ScrollBar } from '../../components/scroll-area';
import { Demo, bookings, gbp, type Booking, type DemoDef } from './shared';

const statusBadge = (s: Booking['status']) => (
  <Badge variant={s === 'completed' ? 'success' : s === 'confirmed' ? 'success-light' : 'warning'}>{s.toUpperCase()}</Badge>
);

function TableDemo() {
  return (
    <Card className="overflow-hidden p-0">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Booking</TableHead><TableHead>Traveller</TableHead><TableHead>Departs</TableHead><TableHead className="text-right">Paid</TableHead><TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings.map((b) => (
            <TableRow key={b.reference}>
              <TableCell className="font-mono text-xs">{b.reference}</TableCell>
              <TableCell>{b.customer}</TableCell>
              <TableCell>{new Date(b.departure).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}</TableCell>
              <TableCell className="text-right font-mono">{gbp(b.amount)}</TableCell>
              <TableCell>{statusBadge(b.status)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}

const columns: DataTableColumn<Booking>[] = [
  { key: 'reference', header: 'Booking', cell: (r) => <span className="font-mono text-xs">{r.reference}</span>, sortValue: (r) => r.reference, searchValue: (r) => r.reference },
  { key: 'customer', header: 'Traveller', cell: (r) => r.customer, sortValue: (r) => r.customer, searchValue: (r) => `${r.customer} ${r.reference}` },
  { key: 'amount', header: 'Paid', cell: (r) => gbp(r.amount), sortValue: (r) => r.amount },
  { key: 'trust', header: 'Trust', cell: (r) => gbp(r.trust), sortValue: (r) => r.trust },
  { key: 'departure', header: 'Departs', cell: (r) => new Date(r.departure).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }), sortValue: (r) => r.departure },
  { key: 'status', header: 'Status', cell: (r) => statusBadge(r.status), sortValue: (r) => r.status },
];

function DataTableDemo() {
  return (
    <Card className="p-4">
      <CardHeader className="p-0 pb-3">
        <CardTitle>Live ledger — bookings</CardTitle>
        <CardDescription>Search across traveller and reference · click headers to sort.</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <DataTable data={bookings} columns={columns} getRowKey={(r) => r.reference} searchable searchPlaceholder="Search bookings…" />
      </CardContent>
    </Card>
  );
}

const WEEK = [
  { day: 'Mon', settled: 18200 }, { day: 'Tue', settled: 24600 }, { day: 'Wed', settled: 15900 },
  { day: 'Thu', settled: 31200 }, { day: 'Fri', settled: 28400 }, { day: 'Sat', settled: 9100 }, { day: 'Sun', settled: 6400 },
];

function ChartDemo() {
  const max = Math.max(...WEEK.map((d) => d.settled));
  return (
    <div className="max-w-2xl space-y-2">
      <ChartContainer>
        <div className="relative flex h-44 items-end gap-3 rounded-lg border border-black/10 bg-white p-4">
          {WEEK.map((d) => (
            <div key={d.day} className="flex flex-1 flex-col items-center gap-2">
              <span className="font-mono text-[10px] text-[#525252]">£{(d.settled / 1000).toFixed(1)}k</span>
              <div className="w-full max-w-12 rounded-t bg-[#8a3ffc]" style={{ height: `${(d.settled / max) * 110}px` }} />
              <span className="text-xs text-[#8d8d8d]">{d.day}</span>
            </div>
          ))}
          <div className="absolute right-8 top-6"><ChartTooltip>Thu · £31,200 settled</ChartTooltip></div>
        </div>
      </ChartContainer>
      <p className="text-xs text-[#8d8d8d]">ChartContainer and ChartTooltip are house wrappers — bring your own chart library (Recharts, visx) inside them for themed axes and tooltips.</p>
    </div>
  );
}

const DESTINATIONS = [
  { title: "Rick's Café Américain", nights: 'Casablanca · 4 nights', price: '£2,450' },
  { title: 'Grand Budapest Hotel', nights: 'Zubrowka · 2 nights', price: '£1,180' },
  { title: 'Overlook Hotel', nights: 'Colorado · winter season', price: '£960' },
];

function CarouselDemo() {
  return (
    <Carousel className="max-w-xl">
      <CarouselContent>
        {DESTINATIONS.map((d) => (
          <CarouselItem key={d.title} className="basis-full md:basis-1/2 lg:basis-1/3">
            <div className="space-y-1 rounded-lg border border-black/10 bg-white p-4">
              <div className="mb-2 h-20 rounded-md bg-gradient-to-br from-[#161616] to-[#525252]" />
              <div className="text-sm font-semibold">{d.title}</div>
              <div className="text-xs text-[#525252]">{d.nights}</div>
              <div className="pt-1 font-mono text-sm">{d.price}</div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious aria-label="Previous" /><CarouselNext aria-label="Next" />
    </Carousel>
  );
}

const LEDGER_LINES = [
  'CAS-1942-001 · trust credit · £2,450.00',
  'ALI-1979-014 · trust credit · £1,890.00',
  'PSY-1960-003 · supplier debit · £680.00',
  'FAR-1996-002 · trust credit · £1,200.00',
  'BTTF-1985-001 · released to supplier · £2,480.00',
  'TIT-1997-007 · refund pending · £760.00',
  'CAS-1942-001 · supplier payable · £490.00',
  'PSY-1960-003 · trust credit · £850.00',
  'FAR-1996-002 · supplier payable · £240.00',
  'BTTF-1985-001 · trust release · £620.00',
  'TIT-1997-007 · chargeback review · £76.00',
  'ALI-1979-014 · FX adjustment · £18.40',
];

function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-40 w-full max-w-xl rounded-md border border-black/10 bg-white p-3">
      <ul className="space-y-1 font-mono text-xs">
        {LEDGER_LINES.map((l) => <li key={l} className="border-b border-black/5 pb-1">{l}</li>)}
      </ul>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

function ResizableDemo() {
  return (
    <ResizablePanelGroup className="h-48 max-w-2xl rounded-lg border border-black/10 bg-white">
      <ResizablePanel className="flex items-center justify-center bg-white p-4 text-sm">Trust ledger · £196,000 held</ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel className="flex w-1/3 items-center justify-center bg-[#F4F4F4] p-4 text-sm">Supplier payables</ResizablePanel>
    </ResizablePanelGroup>
  );
}

function ProgressDemo() {
  const stages = [
    { label: 'Deposits collected', value: 82 },
    { label: 'Balances invoiced', value: 54 },
    { label: 'Supplier payments run', value: 31 },
  ];
  return (
    <div className="max-w-xl space-y-4">
      {stages.map((s) => (
        <div key={s.label} className="space-y-1.5">
          <div className="flex justify-between text-sm"><span>{s.label}</span><span className="font-mono text-xs text-[#525252]">{s.value}%</span></div>
          <Progress value={s.value} />
        </div>
      ))}
      <Button size="sm" variant="secondary">Export month-end pack</Button>
    </div>
  );
}

export const dataDemos: DemoDef[] = [
  { id: 'table', label: 'Table', group: 'Data', render: () => <TableDemo /> },
  { id: 'datatable', label: 'Data Table', group: 'Data', render: () => <DataTableDemo /> },
  { id: 'chart', label: 'Chart', group: 'Data', render: () => <ChartDemo /> },
  { id: 'carousel', label: 'Carousel', group: 'Data', render: () => <CarouselDemo /> },
  { id: 'progress', label: 'Progress', group: 'Data', render: () => <ProgressDemo /> },
  { id: 'scroll-area', label: 'Scroll Area', group: 'Data', render: () => <ScrollAreaDemo /> },
  { id: 'resizable', label: 'Resizable', group: 'Data', render: () => <ResizableDemo /> },
];
