import { useState } from 'react';
import { BookOpen, CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';
import { Avatar, AvatarFallback } from '../../components/avatar';
import { Separator } from '../../components/separator';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../../components/breadcrumb';
import { Button } from '../../components/button';
import { Badge } from '../../components/badge';
import { Attachment } from '../../components/attachment';
import { Bubble } from '../../components/bubble';
import { Message } from '../../components/message';
import { Marker } from '../../components/marker';
import { Direction } from '../../components/direction';
import { VisuallyHidden } from '../../components/visually-hidden';
import { ButtonGroup, ButtonGroupItem } from '../../components/button-group';
import { Demo, type DemoDef } from './shared';

function SidebarBlockDemo() {
  return (
    <div className="rounded-lg border border-black/10 bg-white overflow-hidden">
      <div className="flex min-h-[380px]">
        <div className="flex w-56 shrink-0 flex-col border-r border-black/10 bg-white">
          <div className="flex h-12 items-center gap-2 border-b border-black/5 px-3">
            <div className="flex h-6 w-6 items-center justify-center bg-[#161616] text-white text-xs font-bold">F</div>
            <span className="text-sm font-semibold">Felloh Demo Co</span>
          </div>
          <div className="flex-1 p-2 text-sm">
            <div className="px-2 py-1 text-xs font-medium text-[#6f6f6f]">Platform</div>
            <div className="space-y-1">
              <div className="rounded bg-black px-2 py-1.5 text-white">Dashboard</div>
              <div className="rounded px-2 py-1.5 hover:bg-black/5">Bookings</div>
              <div className="rounded px-2 py-1.5 hover:bg-black/5">Ledger</div>
              <div className="rounded px-2 py-1.5 hover:bg-black/5">Suppliers</div>
            </div>
          </div>
          <div className="border-t p-2">
            <div className="flex items-center gap-2">
              <Avatar className="h-7 w-7"><AvatarFallback>WB</AvatarFallback></Avatar>
              <div><div className="text-xs font-medium">Will Bicknell</div><div className="text-xs text-[#8d8d8d]">will@felloh.com</div></div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col bg-[#F4F4F4]">
          <header className="flex h-12 items-center gap-2 border-b bg-white px-4">
            <Separator orientation="vertical" className="h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem><BreadcrumbLink href="#">Bookings</BreadcrumbLink></BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem><BreadcrumbPage>CAS-1942-001</BreadcrumbPage></BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </header>
          <div className="flex-1 p-4">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="aspect-video rounded-xl border border-black/10 bg-white" />
              <div className="aspect-video rounded-xl border border-black/10 bg-white" />
              <div className="aspect-video rounded-xl border border-black/10 bg-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AttachmentDemo() {
  const [removed, setRemoved] = useState<string[]>([]);
  const files = [
    { id: 'passport', name: 'passport-ripley.pdf', size: '1.2 MB' },
    { id: 'atol', name: 'atol-certificate.pdf', size: '88 KB' },
    { id: 'invoice', name: 'invoice-CAS-1942.pdf', size: '24 KB' },
  ];
  return (
    <div className="max-w-md space-y-2">
      {files.filter((f) => !removed.includes(f.id)).map((f) => (
        <Attachment key={f.id} name={f.name} size={f.size} onRemove={() => setRemoved((r) => [...r, f.id])} />
      ))}
      {files.every((f) => removed.includes(f.id)) && <p className="text-xs text-[#8d8d8d]">All attachments removed.</p>}
    </div>
  );
}

function BubbleDemo() {
  return (
    <div className="max-w-md space-y-2">
      <Bubble variant="accent" className="ml-auto max-w-[80%] rounded-lg px-3 py-2 text-sm text-white">Your balance payment of £18,375 is due on 29 Aug.</Bubble>
      <Bubble variant="default" className="mr-auto max-w-[80%] rounded-lg border border-black/10 px-3 py-2 text-sm">Here's looking at you, kid. Paying now.</Bubble>
      <Bubble variant="accent" className="ml-auto max-w-[80%] rounded-lg px-3 py-2 text-sm text-white">Payment received — receipt on its way to rick@cafe-americain.ma</Bubble>
    </div>
  );
}

function MessageDemo() {
  return (
    <div className="max-w-xl space-y-2">
      <Message variant="success" className="flex items-start gap-2 rounded-md border border-[#198038]/30 bg-[#defbe6] p-3 text-sm"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#198038]" /><span>£2,450.00 received from Rick Blaine and allocated to trust.</span></Message>
      <Message variant="error" className="flex items-start gap-2 rounded-md border border-[#da1e28]/30 bg-[#fff0f0] p-3 text-sm"><XCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#da1e28]" /><span>Card ending 4417 was declined. The traveller has 24 hours to retry before the booking lapses.</span></Message>
      <Message variant="default" className="flex items-start gap-2 rounded-md border border-black/10 bg-[#F4F4F4] p-3 text-sm"><AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[#f1c21b]" /><span>Settlement file for 24 Aug joined with one unmatched line.</span></Message>
    </div>
  );
}

const STATUSES = [
  { dot: '', label: 'Confirmed · CAS-1942-001', note: 'default blue marker' },
  { dot: 'bg-[#198038]', label: 'Completed · BTTF-1985-001', note: 'green override' },
  { dot: 'bg-[#f1c21b]', label: 'Pending settlement · FAR-1996-002', note: 'amber override' },
];

function MarkerDemo() {
  return (
    <ul className="max-w-lg space-y-2 text-sm">
      {STATUSES.map((s) => (
        <li key={s.label} className="flex items-center gap-2">
          <Marker className={s.dot || undefined} />
          <span>{s.label}</span>
          <span className="text-xs text-[#8d8d8d]">{s.note}</span>
        </li>
      ))}
    </ul>
  );
}

function DirectionDemo() {
  return (
    <div className="grid max-w-xl gap-4 md:grid-cols-2">
      <Direction dir="ltr" className="rounded-lg border border-black/10 p-3 text-sm">
        <Badge variant="info-light" className="mb-2">LTR</Badge>
        <p>Booking CAS-1942-001 · £2,450.00 paid in full.</p>
      </Direction>
      <Direction dir="rtl" className="rounded-lg border border-black/10 p-3 text-sm">
        <Badge variant="info-light" className="mb-2">RTL</Badge>
        <p>Booking CAS-1942-001 · £2,450.00 paid in full.</p>
      </Direction>
    </div>
  );
}

function VisuallyHiddenDemo() {
  return (
    <div className="max-w-xl space-y-3">
      <Button variant="outline">
        Open booking
        <VisuallyHidden>CAS-1942-001 for Rick Blaine, departing 12 September 2026</VisuallyHidden>
      </Button>
      <p className="text-xs text-[#8d8d8d]">Screen readers announce the hidden context; sighted users just see "Open booking". SkipLink ships alongside it for skip-to-content landmarks.</p>
    </div>
  );
}

function ButtonGroupDemo() {
  const [currency, setCurrency] = useState('GBP');
  return (
    <div className="space-y-3">
      <ButtonGroup>
        {['GBP', 'EUR', 'USD'].map((c) => (
          <ButtonGroupItem key={c} active={currency === c} onClick={() => setCurrency(c)}>{c}</ButtonGroupItem>
        ))}
      </ButtonGroup>
      <p className="font-mono text-sm">{currency === 'GBP' ? '£2,450.00' : currency === 'EUR' ? '€2,860.00' : '$3,110.00'}</p>
    </div>
  );
}

export const blockDemos: DemoDef[] = [
  { id: 'sidebar-demo', label: 'Sidebar (block)', group: 'Blocks', render: () => <SidebarBlockDemo /> },
  { id: 'attachment', label: 'Attachment', group: 'Blocks', render: () => <AttachmentDemo /> },
  { id: 'bubble', label: 'Bubble', group: 'Blocks', render: () => <BubbleDemo /> },
  { id: 'message', label: 'Message', group: 'Blocks', render: () => <MessageDemo /> },
  { id: 'marker', label: 'Marker', group: 'Blocks', render: () => <MarkerDemo /> },
  { id: 'direction', label: 'Direction', group: 'Blocks', render: () => <DirectionDemo /> },
  { id: 'visually-hidden', label: 'Visually Hidden', group: 'Blocks', render: () => <VisuallyHiddenDemo /> },
  { id: 'button-group', label: 'Button Group', group: 'Blocks', render: () => <ButtonGroupDemo /> },
];
