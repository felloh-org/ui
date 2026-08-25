import { useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  Palette, Eye, Keyboard, BookOpen, Component, LayoutDashboard,
  FormInput, MousePointerClick, BarChart3, Blocks as BlocksIcon, Sparkles, ArrowRight,
} from 'lucide-react';
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from '../components/sidebar';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../components/breadcrumb';
import { Avatar, AvatarFallback } from '../components/avatar';
import { Separator } from '../components/separator';
import { Card, CardContent } from '../components/card';
import { DEMOS, GROUPS, COMPONENT_COUNT, NOT_PORTED, ALL_COMPONENTS, type DemoDef } from './demos';

const GROUP_ICONS: Record<string, LucideIcon> = {
  Base: Component,
  Inputs: FormInput,
  Overlays: MousePointerClick,
  Data: BarChart3,
  Blocks: BlocksIcon,
};

export function Browse() {
  const [selected, setSelected] = useState<string>('overview');
  const demo = DEMOS.find((d) => d.id === selected);
  const label = selected === 'overview' ? 'Overview' : selected === 'all' ? 'All components' : demo?.label ?? selected;

  const renderContent = () => {
    if (selected === 'overview') return <Overview />;
    if (selected === 'all') return <AllComponents />;
    if (!demo) {
      return (
        <div className="rounded-lg border border-[#da1e28] bg-[#fff0f0] p-4 text-sm">
          No demo registered for <span className="font-mono">{selected}</span>. Registered pages: {DEMOS.length}.
        </div>
      );
    }
    return demo.render();
  };

  const NavButton = ({ item, active, onClick, icon }: { item: { label: string }; active: boolean; onClick: () => void; icon: LucideIcon }) => (
    <SidebarMenuItem>
      <SidebarMenuButton isActive={active} onClick={onClick}>
        <icon className="h-4 w-4 shrink-0 opacity-60" /><span>{item.label}</span>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );

  return (
    <SidebarProvider style={{ '--sidebar-width': '16rem' } as any}>
      <Sidebar collapsible="icon">
        <SidebarHeader className="border-b border-black/5">
          <div className="flex items-center gap-2 px-2 py-1">
            <div className="flex h-8 w-8 items-center justify-center bg-[#161616] text-white text-xs font-bold">F</div>
            <div className="group-data-[collapsible=icon]:hidden"><div className="text-sm font-bold">@felloh/ui</div><div className="text-xs text-[#525252] truncate">House · Headroom</div></div>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Start</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {[{ id: 'overview', label: 'Overview' }, { id: 'all', label: 'All components' }].map((item) => (
                  <NavButton key={item.id} item={item} active={selected === item.id} onClick={() => setSelected(item.id)} icon={Sparkles} />
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          {GROUPS.map((g) => (
            <SidebarGroup key={g}>
              <SidebarGroupLabel>{g}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {DEMOS.filter((d) => d.group === g).map((item) => (
                    <NavButton
                      key={item.id}
                      item={item}
                      active={selected === item.id}
                      onClick={() => setSelected(item.id)}
                      icon={GROUP_ICONS[g]}
                    />
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
          <SidebarGroup>
            <SidebarGroupLabel>House</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem><SidebarMenuButton onClick={() => window.open('https://escrow.testrig.dev/atol/app', '_blank')}><BookOpen /> escrow.testrig.dev</SidebarMenuButton></SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <div className="flex items-center gap-2 px-2 py-2">
            <Avatar className="h-7 w-7"><AvatarFallback>WB</AvatarFallback></Avatar>
            <div className="group-data-[collapsible=icon]:hidden"><div className="text-xs font-medium">Will Bicknell</div><div className="text-xs text-[#8d8d8d]">will@felloh.com</div></div>
          </div>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center gap-2 border-b border-black/10 bg-white px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block"><BreadcrumbLink href="#">@felloh/ui</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem><BreadcrumbPage>{label}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col bg-[#F4F4F4]">
          <div className="bg-[#161616] px-6 py-6 text-white">
            <h1 className="text-xl font-bold">{label}</h1>
            <p className="text-sm text-gray-400">{demo ? `${demo.group} · house example` : 'Felloh component showcase'} — beige #F4F4F4 · ink #161616 · purple #8a3ffc · Tailwind v4 · Inter / IBM Plex Mono</p>
          </div>
          <div className="flex-1 space-y-6 p-6">
            {renderContent()}
            <div className="rounded-lg border border-dashed border-black/10 bg-white p-3 text-xs text-[#525252]">
              Source <span className="font-mono">packages/ui</span> · <span className="font-mono">pnpm --filter @felloh/ui dev</span> → http://localhost:6006 · {COMPONENT_COUNT} components, film-character data only.
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

function Overview() {
  return (
    <div className="space-y-6">
      <Card><CardContent className="p-5">
        <div className="font-semibold text-sm">@felloh/ui — the Felloh house design system</div>
        <p className="mt-1 max-w-2xl text-sm text-[#525252]">
          Every shadcn/ui component, restyled in our IBM Carbon-inspired look and shown with a Felloh-flavoured example — trust ledgers,
          supplier payments, booking references. Person names throughout are film characters; no customer data.
        </p>
      </CardContent></Card>
      <div className="grid gap-4 md:grid-cols-3">
        <Card><CardContent className="p-5"><div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#defbe6]"><Eye className="h-5 w-5 text-[#198038]" /></div><div className="font-semibold text-sm">Color Contrast</div><div className="text-xs text-[#525252]">WCAG AA 4.5:1 on beige and white.</div></CardContent></Card>
        <Card><CardContent className="p-5"><div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#edf5ff]"><Keyboard className="h-5 w-5 text-[#0043ce]" /></div><div className="font-semibold text-sm">Keyboard</div><div className="text-xs text-[#525252]">focus-visible rings everywhere.</div></CardContent></Card>
        <Card><CardContent className="p-5"><div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#f6f2ff]"><Palette className="h-5 w-5 text-[#8a3ffc]" /></div><div className="font-semibold text-sm">Carbon Scales</div><div className="text-xs text-[#525252]">Gray 10–100, mono numerals.</div></CardContent></Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card><CardContent className="p-5">
          <div className="font-semibold text-sm">What's here</div>
          <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-[#525252]">
            <li>{DEMOS.length} demo pages across {GROUPS.length + 1} groups — every shadcn component has one.</li>
            <li>{COMPONENT_COUNT} components in the package, including house extras (Attachment, Bubble, Message…).</li>
            <li>Felloh examples: bookings, trust splits, settlement statuses.</li>
          </ul>
        </CardContent></Card>
        <Card><CardContent className="p-5">
          <div className="font-semibold text-sm">Not ported from shadcn</div>
          <ul className="mt-2 space-y-1.5 text-sm text-[#525252]">
            {NOT_PORTED.map((n) => (
              <li key={n.name}><span className="font-mono text-xs">{n.name}</span> — {n.note}</li>
            ))}
          </ul>
        </CardContent></Card>
      </div>
      <div className="rounded-lg border border-dashed border-black/10 bg-white p-4 text-sm text-[#525252]">
        Pick any component from the sidebar — every entry renders a real, working example. <ArrowRight className="inline h-4 w-4" />
      </div>
    </div>
  );
}

function AllComponents() {
  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-black/10 bg-white p-4">
        <div className="mb-3 text-sm font-medium">{ALL_COMPONENTS.length} components in the package</div>
        <div className="flex flex-wrap gap-1.5 font-mono text-xs">
          {ALL_COMPONENTS.map((c) => <span key={c} className="rounded border bg-[#F4F4F4] px-2 py-1">{c}</span>)}
        </div>
      </div>
      <div className="rounded-lg border border-black/10 bg-white p-4">
        <div className="mb-3 text-sm font-medium">In upstream shadcn but not yet ported ({NOT_PORTED.length})</div>
        <div className="flex flex-wrap gap-1.5 font-mono text-xs">
          {NOT_PORTED.map((n) => <span key={n.name} className="rounded border border-dashed bg-white px-2 py-1 text-[#8d8d8d]" title={n.note}>{n.name}</span>)}
        </div>
      </div>
    </div>
  );
}

export type { DemoDef };
