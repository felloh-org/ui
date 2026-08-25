import { useState } from 'react';
import { ArrowRight, CreditCard, Landmark, Wallet } from 'lucide-react';
import { Button } from '../../components/button';
import { Badge } from '../../components/badge';
import { Alert, AlertTitle, AlertDescription } from '../../components/alert';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../../components/card';
import { H1, H2, H3, P, Lead, Small, Muted, Blockquote, Code } from '../../components/typography';
import { Separator } from '../../components/separator';
import { Skeleton, SkeletonText } from '../../components/skeleton';
import { Spinner } from '../../components/spinner';
import { Kbd } from '../../components/kbd';
import { Avatar, AvatarFallback } from '../../components/avatar';
import { AspectRatio } from '../../components/aspect-ratio';
import { Empty, EmptyTitle, EmptyDescription, EmptyAction } from '../../components/empty';
import { Item, ItemMedia, ItemContent, ItemTitle, ItemDescription, ItemActions } from '../../components/item';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../../components/collapsible';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../components/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/tabs';
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../../components/breadcrumb';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationInfo, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '../../components/pagination';
import { Search } from 'lucide-react';
import { Demo, bookings, gbp, type DemoDef } from './shared';

function ButtonDemo() {
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        <Button>Default (black)</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="tertiary">Tertiary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="link">Link</Button>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Button size="sm">Small</Button>
        <Button>Default</Button>
        <Button size="lg">Release payment <ArrowRight className="h-4 w-4" /></Button>
        <Button disabled>Disabled</Button>
      </div>
      <P>Felloh use: black primary for the one money-moving action per screen — everything else secondary or ghost.</P>
    </div>
  );
}

const BADGE_VARIANTS = ['default', 'secondary', 'neutral', 'outline', 'success', 'success-light', 'destructive', 'destructive-light', 'warning', 'warning-light', 'info', 'info-light', 'purple', 'teal'] as const;

function BadgeDemo() {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {BADGE_VARIANTS.map((v) => <Badge key={v} variant={v as any}>{v}</Badge>)}
      </div>
      <P>Felloh use: <Code>success</Code> = settled, <Code>warning</Code> = pending settlement, <Code>destructive</Code> = suspended, light variants on beige surfaces.</P>
    </div>
  );
}

function AlertDemos() {
  const [dismissed, setDismissed] = useState(false);
  return (
    <div className="space-y-2">
      {!dismissed && (
        <Alert variant="info" dismissible onDismiss={() => setDismissed(true)}>
          <AlertTitle>Reconciliation ready</AlertTitle>
          <AlertDescription>Trust file joined on transactionreference — 6 bookings matched.</AlertDescription>
        </Alert>
      )}
      <Alert variant="success"><AlertTitle>Ledger balanced</AlertTitle><AlertDescription>Double-entry sum-zero across trust and supplier payable.</AlertDescription></Alert>
      <Alert variant="warning"><AlertTitle>Capture booking reference</AlertTitle><AlertDescription>Mandatory field before funds can be allocated.</AlertDescription></Alert>
      <Alert variant="destructive"><AlertTitle>Settlement suspended</AlertTitle><AlertDescription>Settlestatus 2 → TRANSACTIONUPDATE required.</AlertDescription></Alert>
    </div>
  );
}

function CardDemo() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>ATOL Trust Account</CardTitle>
          <CardDescription>Protected customer funds held on trust until travel completes.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold font-mono">£245,000.00</div>
          <div className="text-xs text-[#525252] mt-1">Balance · joined on transactionreference</div>
        </CardContent>
        <CardFooter className="gap-2">
          <Button size="sm">View ledger</Button>
          <Button size="sm" variant="secondary">Reconcile</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Supplier payable</CardTitle>
          <CardDescription>Grand Budapest Hotel — release 80% until 3 days before departure.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex justify-between text-sm"><span className="text-[#525252]">Hotel deposit</span><span className="font-mono">£12,400.00</span></div>
          <div className="flex justify-between text-sm"><span className="text-[#525252]">Flight consolidation</span><span className="font-mono">£38,150.00</span></div>
          <div className="flex justify-between text-sm border-t border-black/10 pt-2 font-medium"><span>Total due</span><span className="font-mono">£50,550.00</span></div>
        </CardContent>
        <CardFooter><Badge variant="warning">Payment run pending</Badge></CardFooter>
      </Card>
    </div>
  );
}

function TypographyDemo() {
  return (
    <div className="space-y-3">
      <H1>Felloh design system</H1>
      <Lead>House style: Inter for prose, IBM Plex Mono for money and references.</Lead>
      <H2>Section heading</H2>
      <H3>Sub-section</H3>
      <P>Body copy sits at 14px in #525252 on white or beige #F4F4F4. Every amount is rendered in Plex Mono so digits align in ledgers.</P>
      <Small>Small print — ATOL 11483.</Small>
      <Muted>Muted metadata — settled 12 Aug 2026, 14:32.</Muted>
      <Blockquote>We'll always have the trust ledger. — Rick Blaine</Blockquote>
      <P>Join key: <Code>transactionreference</Code></P>
    </div>
  );
}

function SeparatorDemo() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 text-sm">
        <span>Paid £2,450.00</span>
        <Separator orientation="vertical" className="h-4" />
        <span>Trust £1,960.00</span>
        <Separator orientation="vertical" className="h-4" />
        <span>Payable £490.00</span>
      </div>
      <Separator />
      <P>Horizontal rule between ledger sections.</P>
    </div>
  );
}

function SkeletonDemo() {
  return (
    <div className="max-w-sm space-y-3 rounded-lg border border-black/10 p-4">
      <Skeleton className="h-5 w-40" />
      <SkeletonText lines={2} />
      <Skeleton className="h-24 w-full" />
      <div className="flex items-center gap-3"><Spinner /><span className="text-sm text-[#525252]">Charging card…</span></div>
    </div>
  );
}

const CAST = [
  { initials: 'RB', name: 'Rick Blaine', tint: '#f6f2ff' },
  { initials: 'ER', name: 'Ellen Ripley', tint: '#edf5ff' },
  { initials: 'MC', name: 'Marion Crane', tint: '#defbe6' },
  { initials: 'MG', name: 'Marge Gunderson', tint: '#fff0f0' },
  { initials: 'MM', name: 'Marty McFly', tint: '#fcf7e8' },
  { initials: 'JD', name: 'Jack Dawson', tint: '#e8f6fb' },
];

function AvatarDemo() {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3">
        {CAST.map((c) => (
          <Avatar key={c.initials} className="h-10 w-10">
            <AvatarFallback style={{ backgroundColor: c.tint }} className="text-xs font-semibold">{c.initials}</AvatarFallback>
          </Avatar>
        ))}
      </div>
      <div className="flex items-center gap-2">
        {CAST.slice(0, 4).map((c) => (
          <Avatar key={c.initials} className="h-8 w-8 ring-2 ring-white -ml-2 first:ml-0">
            <AvatarFallback style={{ backgroundColor: c.tint }} className="text-[10px] font-semibold">{c.initials}</AvatarFallback>
          </Avatar>
        ))}
        <span className="text-xs text-[#525252]">Travellers on booking CAS-1942-001</span>
      </div>
    </div>
  );
}

function AspectRatioDemo() {
  return (
    <div className="grid max-w-xl grid-cols-2 gap-4">
      <AspectRatio ratio={16 / 9}>
        <div className="flex h-full items-center justify-center rounded-lg bg-[#161616] text-white text-sm font-medium">Rick's Café Américain</div>
      </AspectRatio>
      <AspectRatio ratio={16 / 9}>
        <div className="flex h-full items-center justify-center rounded-lg border border-dashed border-black/20 bg-[#F4F4F4] text-sm text-[#525252]">Hotel imagery · 16:9</div>
      </AspectRatio>
    </div>
  );
}

function KbdDemo() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 rounded-md border border-black/10 bg-white px-3 py-2 text-sm text-[#8d8d8d] max-w-sm">
        <Search className="h-4 w-4" />
        <span className="flex-1">Search bookings…</span>
        <Kbd>⌘K</Kbd>
      </div>
      <div className="flex flex-wrap items-center gap-2 text-xs text-[#525252]">
        <Kbd>⇧⌘P</Kbd> command palette
        <Kbd>⌥R</Kbd> run reconciliation
        <Kbd>esc</Kbd> close dialog
      </div>
    </div>
  );
}

function ItemDemo() {
  const methods = [
    { icon: CreditCard, title: 'Visa ending 4242', description: 'Default card · expires 09/28', tint: '#edf5ff' },
    { icon: Landmark, title: 'Faster Payments', description: 'Theodore Norman Bank · sort 04-00-75', tint: '#defbe6' },
    { icon: Wallet, title: 'Direct debit', description: 'Mandate DD-1942 · monthly collection', tint: '#fcf7e8' },
  ];
  return (
    <div className="max-w-xl space-y-2">
      {methods.map((m) => (
        <Item key={m.title}>
          <ItemMedia><m.icon className="h-4 w-4" /></ItemMedia>
          <ItemContent>
            <ItemTitle>{m.title}</ItemTitle>
            <ItemDescription>{m.description}</ItemDescription>
          </ItemContent>
          <ItemActions><Button size="sm" variant="secondary">Set default</Button></ItemActions>
        </Item>
      ))}
    </div>
  );
}

function CollapsibleDemo() {
  return (
    <Collapsible defaultOpen className="space-y-3">
      <div className="flex items-center justify-between">
        <P className="font-medium text-[#161616]">Payment schedule — CAS-1942-001</P>
        <CollapsibleTrigger asChild><Button variant="secondary" size="sm">Details</Button></CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-1.5 text-sm">
        <div className="flex justify-between border-b border-black/5 pb-1.5"><span className="text-[#525252]">Deposit (25%)</span><span className="font-mono">{gbp(61250)}</span></div>
        <div className="flex justify-between border-b border-black/5 pb-1.5"><span className="text-[#525252]">Balance due 2026-08-29</span><span className="font-mono">{gbp(183750)}</span></div>
        <div className="flex justify-between font-medium"><span>Total held in trust</span><span className="font-mono">{gbp(196000)}</span></div>
      </CollapsibleContent>
    </Collapsible>
  );
}

function AccordionDemo() {
  return (
    <Accordion type="single" collapsible defaultValue="atol">
      <AccordionItem value="atol">
        <AccordionTrigger>ATOL Trust — how protected funds work</AccordionTrigger>
        <AccordionContent>Customer money is held at the trust ledger until travel completes, then released to the supplier.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="supplier">
        <AccordionTrigger>Supplier payable — when to release</AccordionTrigger>
        <AccordionContent>80% until 3 days before departure, then Faster Payments to the supplier account.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="recon">
        <AccordionTrigger>Reconciliation — settlement file join</AccordionTrigger>
        <AccordionContent>The trust CSV joins on transactionreference; mismatches raise a warning badge.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

function TabsDemo() {
  return (
    <Tabs defaultValue="overview">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="ledger">Ledger</TabsTrigger>
        <TabsTrigger value="documents">Documents</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="pt-3 text-sm text-[#525252]">
        Booking CAS-1942-001 — Rick Blaine, Casablanca suite, departing 12 Sep 2026.
      </TabsContent>
      <TabsContent value="ledger" className="pt-3 text-sm text-[#525252]">
        4 ledger lines · sum-zero verified · last joined 14:32.
      </TabsContent>
      <TabsContent value="documents" className="pt-3 text-sm text-[#525252]">
        atol-certificate.pdf · invoice-1942.pdf · passport-scan.pdf
      </TabsContent>
    </Tabs>
  );
}

function BreadcrumbDemo() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbEllipsis /></BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbLink href="#">Bookings</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbPage>CAS-1942-001</BreadcrumbPage></BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

function PaginationDemo() {
  const [page, setPage] = useState(2);
  return (
    <Pagination className="justify-between">
      <PaginationInfo>Showing {(page - 1) * 6 + 1}–{page * 6} of 248 bookings</PaginationInfo>
      <PaginationContent>
        <PaginationItem><PaginationPrevious href="#" onClick={(e: React.MouseEvent) => e.preventDefault()} /></PaginationItem>
        {[1, 2, 3].map((n) => (
          <PaginationItem key={n}>
            <PaginationLink href="#" isActive={page === n} onClick={(e: React.MouseEvent) => { e.preventDefault(); setPage(n); }}>{n}</PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem><PaginationEllipsis /></PaginationItem>
        <PaginationItem><PaginationNext href="#" onClick={(e: React.MouseEvent) => e.preventDefault()} /></PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

function EmptyDemo() {
  return (
    <Empty>
      <EmptyTitle>No bookings match "Bogart"</EmptyTitle>
      <EmptyDescription>Try a different traveller name or clear the filters to see all 248 bookings.</EmptyDescription>
      <EmptyAction><Button size="sm" variant="secondary">Clear filters</Button></EmptyAction>
    </Empty>
  );
}

export const baseDemos: DemoDef[] = [
  { id: 'button', label: 'Button', group: 'Base', render: () => <ButtonDemo /> },
  { id: 'badge', label: 'Badge', group: 'Base', render: () => <BadgeDemo /> },
  { id: 'alert', label: 'Alert', group: 'Base', render: () => <AlertDemos /> },
  { id: 'card', label: 'Card', group: 'Base', render: () => <CardDemo /> },
  { id: 'typography', label: 'Typography', group: 'Base', render: () => <TypographyDemo /> },
  { id: 'separator', label: 'Separator', group: 'Base', render: () => <SeparatorDemo /> },
  { id: 'skeleton', label: 'Skeleton & Spinner', group: 'Base', render: () => <SkeletonDemo /> },
  { id: 'avatar', label: 'Avatar', group: 'Base', render: () => <AvatarDemo /> },
  { id: 'aspect-ratio', label: 'Aspect Ratio', group: 'Base', render: () => <AspectRatioDemo /> },
  { id: 'kbd', label: 'Kbd', group: 'Base', render: () => <KbdDemo /> },
  { id: 'item', label: 'Item', group: 'Base', render: () => <ItemDemo /> },
  { id: 'collapsible', label: 'Collapsible', group: 'Base', render: () => <CollapsibleDemo /> },
  { id: 'accordion', label: 'Accordion', group: 'Base', render: () => <AccordionDemo /> },
  { id: 'tabs', label: 'Tabs', group: 'Base', render: () => <TabsDemo /> },
  { id: 'breadcrumb', label: 'Breadcrumb', group: 'Base', render: () => <BreadcrumbDemo /> },
  { id: 'pagination', label: 'Pagination', group: 'Base', render: () => <PaginationDemo /> },
  { id: 'empty', label: 'Empty', group: 'Base', render: () => <EmptyDemo /> },
];
