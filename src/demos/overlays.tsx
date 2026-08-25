import { useState } from 'react';
import { toast as sonnerToast } from 'sonner';
import { Copy, Download, MoreHorizontal, Trash2 } from 'lucide-react';
import { Button } from '../../components/button';
import { Badge } from '../../components/badge';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../../components/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../../components/alert-dialog';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../../components/sheet';
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from '../../components/drawer';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../../components/dropdown-menu';
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from '../../components/context-menu';
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from '../../components/menubar';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from '../../components/navigation-menu';
import { Popover, PopoverContent, PopoverTrigger } from '../../components/popover';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../../components/hover-card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../../components/tooltip';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '../../components/command';
import { Combobox, ComboboxContent, ComboboxInput, ComboboxItem } from '../../components/combobox';
import { Toaster } from '../../components/sonner';
import { Avatar, AvatarFallback } from '../../components/avatar';
import { Demo, gbp, type DemoDef } from './shared';

function DialogDemo() {
  const [open, setOpen] = useState(false);
  return (
    <div className="space-y-3">
      <Button onClick={() => setOpen(true)}>Release supplier payment…</Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-[calc(100%-2rem)] max-w-md rounded-lg p-6">
          <DialogHeader>
            <DialogTitle>Release payment to Grand Budapest Hotel</DialogTitle>
            <DialogDescription>£50,550.00 will leave the client account by Faster Payments.</DialogDescription>
          </DialogHeader>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-[#525252]">Booking</span><span className="font-mono">CAS-1942-001</span></div>
            <div className="flex justify-between"><span className="text-[#525252]">Traveller</span><span>Rick Blaine</span></div>
            <div className="flex justify-between"><span className="text-[#525252]">Amount</span><span className="font-mono">{gbp(5055000)}</span></div>
          </div>
          <DialogFooter className="mt-6 gap-2">
            <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => setOpen(false)}>Release payment</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <p className="text-xs text-[#8d8d8d]">Felloh use: any money-moving action confirms through a dialog that restates the amount in mono.</p>
    </div>
  );
}

function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Void booking TIT-1997-007</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Void this booking?</AlertDialogTitle>
          <AlertDialogDescription>
            £760.00 held in trust for Jack Dawson will be refunded and the booking cannot be recovered.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Keep booking</AlertDialogCancel>
          <AlertDialogAction className="bg-[#da1e28] text-white hover:bg-[#da1e28]/90">Void booking</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild><Button variant="outline">Payment detail panel</Button></SheetTrigger>
      <SheetContent side="right" className="w-full overflow-auto p-6 sm:max-w-md">
        <SheetHeader>
          <SheetTitle>CAS-1942-001 · Ledger lines</SheetTitle>
          <SheetDescription>Rick Blaine · Casablanca suite · departs 12 Sep 2026</SheetDescription>
        </SheetHeader>
        <div className="mt-6 space-y-3 text-sm">
          <div className="flex items-center justify-between rounded border border-black/10 p-3"><span>Customer payment (Visa 4242)</span><span className="font-mono">{gbp(245000)}</span></div>
          <div className="flex items-center justify-between rounded border border-black/10 bg-[#f6f2ff] p-3"><span>To trust ledger</span><span className="font-mono">{gbp(196000)}</span></div>
          <div className="flex items-center justify-between rounded border border-black/10 p-3"><span>To supplier payable</span><span className="font-mono">{gbp(49000)}</span></div>
          <Badge variant="success-light">Sum-zero verified</Badge>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function DrawerDemo() {
  const [open, setOpen] = useState(false);
  return (
    <div className="space-y-3">
      <Button variant="outline" onClick={() => setOpen(true)}>Quick-pay drawer</Button>
      <Drawer open={open} onOpenChange={setOpen}>
        {open && (
          <DrawerContent className="border-black/10">
            <DrawerHeader>
              <DrawerTitle>Take balance payment</DrawerTitle>
              <DrawerDescription>CAS-1942-001 · £18,375.00 outstanding from Rick Blaine</DrawerDescription>
            </DrawerHeader>
            <div className="flex justify-end gap-2 px-4 pb-6 pt-2">
              <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
              <Button onClick={() => setOpen(false)}>Charge card ending 4242</Button>
            </div>
          </DrawerContent>
        )}
      </Drawer>
      <p className="text-xs text-[#8d8d8d]">Bottom drawer suits quick money actions on mobile.</p>
    </div>
  );
}

const MENU_ACTIONS = ['View ledger', 'Resend receipt', 'Download ATOL certificate'];

function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild><Button variant="ghost" size="sm" aria-label="Booking actions"><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        <DropdownMenuLabel>CAS-1942-001</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {MENU_ACTIONS.map((a) => <DropdownMenuItem key={a}>{a}</DropdownMenuItem>)}
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-[#da1e28] focus:text-[#da1e28]">Void booking</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex w-full max-w-sm cursor-context-menu items-center justify-between rounded-lg border border-dashed border-black/20 bg-[#F4F4F4] p-4 text-sm">
        <span>Right-click this row</span><span className="font-mono text-xs">PSY-1960-003 · Marion Crane</span>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        {MENU_ACTIONS.map((a) => <ContextMenuItem key={a}>{a}</ContextMenuItem>)}
        <ContextMenuItem className="text-[#da1e28] focus:text-[#da1e28]">Void booking</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}

function MenubarDemo() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Bookings</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New booking…</MenubarItem>
          <MenubarItem>Import CSV…</MenubarItem>
          <MenubarItem>Export all bookings</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Payments</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Run supplier payments</MenubarItem>
          <MenubarItem>Reconcile settlement file</MenubarItem>
          <MenubarItem>Suspend settlement</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Help</MenubarTrigger>
        <MenubarContent><MenubarItem>ATOL guidance</MenubarItem><MenubarItem>Contact support</MenubarItem></MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}

function NavigationMenuDemo() {
  return (
    <NavigationMenu className="max-w-full">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Payments</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-72 gap-1 p-3 text-sm">
              <a href="#" className="rounded p-2 hover:bg-black/5"><div className="font-medium">Charge a card</div><div className="text-xs text-[#525252]">3-D Secure supported.</div></a>
              <a href="#" className="rounded p-2 hover:bg-black/5"><div className="font-medium">Refunds</div><div className="text-xs text-[#525252]">Full or partial, back to source.</div></a>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Trust</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-72 gap-1 p-3 text-sm">
              <a href="#" className="rounded p-2 hover:bg-black/5"><div className="font-medium">ATOL protection</div><div className="text-xs text-[#525252]">How funds stay protected.</div></a>
              <a href="#" className="rounded p-2 hover:bg-black/5"><div className="font-medium">Ledger joins</div><div className="text-xs text-[#525252]">transactionreference keys.</div></a>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild><Button variant="outline">Trust split breakdown</Button></PopoverTrigger>
      <PopoverContent className="w-64">
        <div className="space-y-2 text-sm">
          <div className="flex items-baseline justify-between"><span className="font-medium">CAS-1942-001</span><Badge variant="purple">80 / 20</Badge></div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-[#F4F4F4]"><div className="h-full w-4/5 bg-[#8a3ffc]" /></div>
          <div className="flex justify-between"><span className="text-[#525252]">Trust</span><span className="font-mono">{gbp(196000)}</span></div>
          <div className="flex justify-between"><span className="text-[#525252]">Supplier payable</span><span className="font-mono">{gbp(49000)}</span></div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger href="#" className="text-sm font-medium underline decoration-dotted underline-offset-4">@rickblaine</HoverCardTrigger>
      <HoverCardContent className="w-72">
        <div className="flex gap-3">
          <Avatar className="h-10 w-10"><AvatarFallback className="bg-[#f6f2ff] text-xs font-semibold">RB</AvatarFallback></Avatar>
          <div className="space-y-1">
            <div className="text-sm font-semibold">Rick Blaine</div>
            <div className="text-xs text-[#525252]">Gold traveller · 14 bookings since 2024</div>
            <div className="flex gap-2 pt-1"><Badge variant="success-light">Verified</Badge><Badge variant="info-light">Prefers aisle</Badge></div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

function TooltipDemo() {
  const actions = [
    { icon: Copy, label: 'Copy booking reference' },
    { icon: Download, label: 'Download receipt' },
    { icon: Trash2, label: 'Void booking' },
  ];
  return (
    <TooltipProvider delayDuration={150}>
      <div className="flex gap-2">
        {actions.map((a) => (
          <Tooltip key={a.label}>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" aria-label={a.label}><a.icon className="h-4 w-4" /></Button>
            </TooltipTrigger>
            <TooltipContent>{a.label}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}

function CommandDemo() {
  return (
    <Command className="h-64 max-w-xl rounded-md border border-black/10 shadow-sm">
      <CommandInput placeholder="Type a command or search…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Jump to booking">
          <CommandItem>CAS-1942-001 · Rick Blaine</CommandItem>
          <CommandItem>ALI-1979-014 · Ellen Ripley</CommandItem>
          <CommandItem>FAR-1996-002 · Marge Gunderson</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Actions">
          <CommandItem>Create refund…</CommandItem>
          <CommandItem>Run reconciliation</CommandItem>
          <CommandItem>Export ledger CSV</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}

function ComboboxDemo() {
  return (
    <Combobox className="max-w-xs">
      <ComboboxInput placeholder="Select traveller…" readOnly />
      <ComboboxContent>
        <ComboboxItem>Rick Blaine — CAS-1942-001</ComboboxItem>
        <ComboboxItem>Ellen Ripley — ALI-1979-014</ComboboxItem>
        <ComboboxItem>Marge Gunderson — FAR-1996-002</ComboboxItem>
        <ComboboxItem>Marty McFly — BTTF-1985-001</ComboboxItem>
      </ComboboxContent>
    </Combobox>
  );
}

function SonnerDemo() {
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        <Button size="sm" onClick={() => sonnerToast.success('Payment received', { description: `${gbp(245000)} from Rick Blaine · CAS-1942-001` })}>Success toast</Button>
        <Button size="sm" variant="destructive" onClick={() => sonnerToast.error('Card declined', { description: 'Insufficient funds · do not retry within 24h' })}>Error toast</Button>
        <Button size="sm" variant="secondary" onClick={() => sonnerToast('Receipt sent', { description: 'rick@cafe-americain.ma' })}>Neutral toast</Button>
      </div>
      <Toaster position="bottom-right" richColors closeButton />
      <p className="text-xs text-[#8d8d8d]">Sonner replaces the deprecated shadcn toast component.</p>
    </div>
  );
}

export const overlayDemos: DemoDef[] = [
  { id: 'dialog', label: 'Dialog', group: 'Overlays', render: () => <DialogDemo /> },
  { id: 'alert-dialog', label: 'Alert Dialog', group: 'Overlays', render: () => <AlertDialogDemo /> },
  { id: 'sheet', label: 'Sheet', group: 'Overlays', render: () => <SheetDemo /> },
  { id: 'drawer', label: 'Drawer', group: 'Overlays', render: () => <DrawerDemo /> },
  { id: 'dropdown-menu', label: 'Dropdown Menu', group: 'Overlays', render: () => <DropdownMenuDemo /> },
  { id: 'context-menu', label: 'Context Menu', group: 'Overlays', render: () => <ContextMenuDemo /> },
  { id: 'menubar', label: 'Menubar', group: 'Overlays', render: () => <MenubarDemo /> },
  { id: 'navigation-menu', label: 'Navigation Menu', group: 'Overlays', render: () => <NavigationMenuDemo /> },
  { id: 'popover', label: 'Popover', group: 'Overlays', render: () => <PopoverDemo /> },
  { id: 'hover-card', label: 'Hover Card', group: 'Overlays', render: () => <HoverCardDemo /> },
  { id: 'tooltip', label: 'Tooltip', group: 'Overlays', render: () => <TooltipDemo /> },
  { id: 'command', label: 'Command', group: 'Overlays', render: () => <CommandDemo /> },
  { id: 'combobox', label: 'Combobox', group: 'Overlays', render: () => <ComboboxDemo /> },
  { id: 'sonner', label: 'Sonner Toasts', group: 'Overlays', render: () => <SonnerDemo /> },
];
