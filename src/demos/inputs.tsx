import { useState } from 'react';
import { Bold, Italic, Percent, PoundSterling } from 'lucide-react';
import { Input } from '../../components/input';
import { Textarea } from '../../components/textarea';
import { NativeSelect } from '../../components/native-select';
import { Label } from '../../components/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/select';
import { Checkbox } from '../../components/checkbox';
import { Switch } from '../../components/switch';
import { RadioGroup, RadioItem } from '../../components/radio-group';
import { Slider } from '../../components/slider';
import { Toggle } from '../../components/toggle';
import { ToggleGroup, ToggleGroupItem } from '../../components/toggle-group';
import { Calendar } from '../../components/calendar';
import { DatePicker } from '../../components/date-picker';
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '../../components/input-otp';
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '../../components/input-group';
import { Search } from '../../components/search';
import { Field, FieldDescription, FieldError, FieldLabel } from '../../components/field';
import { Demo, type DemoDef } from './shared';

function InputDemo() {
  return (
    <div className="grid max-w-2xl gap-4 md:grid-cols-2">
      <div className="space-y-3">
        <div className="space-y-1.5">
          <Label htmlFor="in-ref">Booking reference</Label>
          <Input id="in-ref" placeholder="CAS-1942-001" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="in-bad">Amount (invalid)</Label>
          <Input id="in-bad" defaultValue="-50" aria-invalid />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="in-ro">Settled reference (read only)</Label>
          <Input id="in-ro" defaultValue="SAG-AFTRA-1899" disabled />
        </div>
      </div>
      <div className="space-y-3">
        <Field>
          <FieldLabel htmlFor="f-em">Receipt email</FieldLabel>
          <Input id="f-em" type="email" placeholder="rick@cafe-americain.ma" />
          <FieldDescription>Sent the moment payment settles.</FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="f-bad">Sort code</FieldLabel>
          <Input id="f-bad" defaultValue="04-00" aria-invalid />
          <FieldError>Sort codes are 6 digits — e.g. 04-00-75.</FieldError>
        </Field>
      </div>
    </div>
  );
}

function TextareaDemo() {
  return (
    <div className="max-w-xl space-y-3">
      <div className="space-y-1.5">
        <Label htmlFor="ta-1">Trust file notes</Label>
        <Textarea id="ta-1" placeholder="Reconciliation notes…" rows={3} />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="ta-2">Refund reason (required)</Label>
        <Textarea id="ta-2" rows={2} defaultValue="" required />
        <p className="text-xs text-[#8d8d8d]">Shown to the auditor — be specific.</p>
      </div>
    </div>
  );
}

function SelectDemos() {
  return (
    <div className="grid max-w-2xl gap-4 md:grid-cols-3">
      <div className="space-y-1.5">
        <Label>Settlement status</Label>
        <Select defaultValue="pending">
          <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="settled">Settled</SelectItem>
            <SelectItem value="suspended">Suspended</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-1.5">
        <Label>Supplier</Label>
        <Select defaultValue="gbh">
          <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="gbh">Grand Budapest Hotel</SelectItem>
            <SelectItem value="rca">Rick's Café Américain</SelectItem>
            <SelectItem value="overlook">Overlook Hotel</SelectItem>
            <SelectItem value="bates">Bates Motel</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="ns-cur">Currency</Label>
        <NativeSelect id="ns-cur"><option>GBP</option><option>EUR</option><option>USD</option></NativeSelect>
      </div>
    </div>
  );
}

function CheckboxDemo() {
  return (
    <div className="max-w-xl space-y-4">
      <Checkbox defaultChecked label="ATOL protected" description="Funds held in trust until travel completes." />
      <Checkbox label="Email receipt to traveller" />
      <Checkbox indeterminate label="Select all suppliers" description="3 of 8 selected." />
      <Checkbox disabled label="Archived ledger (read-only)" />
      <Checkbox label="Confirm cancellation terms" error="You must accept the cancellation terms before refunding." />
    </div>
  );
}

function SwitchDemo() {
  return (
    <div className="max-w-xl space-y-4">
      <Switch defaultChecked label="Auto-reconcile nightly" description="Runs at 02:00 against the settlement CSV." />
      <Switch label="Require dual approval over £10k" />
      <Switch defaultChecked labelPosition="left" label="Show amounts in pence" />
      <Switch disabled label="Legacy API access (deprecated)" />
    </div>
  );
}

function RadioGroupDemo() {
  const [split, setSplit] = useState('standard');
  return (
    <RadioGroup
      name="pay-split"
      value={split}
      onChange={setSplit}
      label="Supplier payment split"
      helperText={`Applies to every booking on this supplier: ${split === 'standard' ? '80% trust / 20% payable' : split === 'full' ? '100% held until return' : 'custom schedule'}`}
    >
      <RadioItem value="standard" label="Standard — 80 / 20" description="Release 20% on booking, remainder 3 days pre-departure." />
      <RadioItem value="full" label="Full hold" description="100% held in trust until the traveller returns." />
      <RadioItem value="custom" label="Custom schedule" description="Per-booking milestones agreed with the supplier." />
      <RadioItem value="net7" label="Net 7 after travel" description="Pay 7 days after return. Unavailable for new suppliers." disabled />
    </RadioGroup>
  );
}

function SliderDemo() {
  const [deposit, setDeposit] = useState(25);
  return (
    <div className="max-w-md space-y-6">
      <div className="space-y-2">
        <div className="flex justify-between text-sm"><span className="font-medium text-[#161616]">Deposit at booking</span><span className="font-mono">{deposit}%</span></div>
        <Slider value={[deposit]} onValueChange={(v: number[]) => setDeposit(v[0])} max={100} step={5} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm"><span className="font-medium text-[#161616]">Fixed example</span><span className="font-mono">40%</span></div>
        <Slider defaultValue={[40]} max={100} step={5} />
      </div>
    </div>
  );
}

function ToggleDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Toggle aria-label="Toggle bold"><Bold className="h-4 w-4" /></Toggle>
      <Toggle aria-label="Toggle italic"><Italic className="h-4 w-4" /></Toggle>
      <Toggle variant="outline">Outline</Toggle>
      <Toggle defaultPressed>Pressed</Toggle>
      <Toggle disabled>Disabled</Toggle>
    </div>
  );
}

function ToggleGroupDemo() {
  const [currencies, setCurrencies] = useState<string[]>(['GBP']);
  return (
    <div className="space-y-3">
      <ToggleGroup
        type="multiple"
        value={currencies}
        onValueChange={setCurrencies}
        className="inline-flex items-center gap-1 rounded-md border border-black/10 bg-white p-1"
      >
        <ToggleGroupItem value="GBP" className="px-3 py-1.5 text-sm data-[state=on]:bg-black data-[state=on]:text-white rounded">GBP £</ToggleGroupItem>
        <ToggleGroupItem value="EUR" className="px-3 py-1.5 text-sm data-[state=on]:bg-black data-[state=on]:text-white rounded">EUR €</ToggleGroupItem>
        <ToggleGroupItem value="USD" className="px-3 py-1.5 text-sm data-[state=on]:bg-black data-[state=on]:text-white rounded">USD $</ToggleGroupItem>
      </ToggleGroup>
      <p className="text-xs text-[#8d8d8d]">Ledger display currencies: {currencies.join(', ') || 'none'}.</p>
    </div>
  );
}

function CalendarDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date(2026, 8, 12));
  return (
    <div className="grid max-w-2xl items-start gap-6 md:grid-cols-2">
      <Calendar />
      <div className="space-y-3">
        <DatePicker value={date} onChange={(d: Date | undefined) => setDate(d)} />
        <p className="text-sm text-[#525252]">
          Balance due date:{' '}
          <span className="font-mono">{date ? date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : '—'}</span>
        </p>
        <p className="text-xs text-[#8d8d8d]">Felloh use: picking balance-due dates; the popover keeps the form compact.</p>
      </div>
    </div>
  );
}

function InputOtpDemo() {
  const [code, setCode] = useState('481');
  return (
    <div className="max-w-md space-y-3">
      <Label>3-D Secure code</Label>
      <InputOTP maxLength={6} value={code} onChange={(v: string) => setCode(v)}>
        <InputOTPGroup>
          <InputOTPSlot index={0} /><InputOTPSlot index={1} /><InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} /><InputOTPSlot index={4} /><InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <p className="text-xs text-[#8d8d8d]">Sent to the cardholder's phone ending 4417 · {code.length}/6 digits.</p>
    </div>
  );
}

function InputGroupDemo() {
  return (
    <div className="max-w-xl space-y-4">
      <InputGroup className="border-black/10">
        <InputGroupAddon><PoundSterling className="h-4 w-4" /></InputGroupAddon>
        <InputGroupInput placeholder="2450.00" inputMode="decimal" />
        <InputGroupAddon>.00</InputGroupAddon>
        <InputGroupButton type="button">Charge</InputGroupButton>
      </InputGroup>
      <InputGroup className="border-black/10">
        <InputGroupInput placeholder="CAS-1942" />
        <InputGroupAddon><Percent className="h-4 w-4" /></InputGroupAddon>
        <InputGroupButton type="button">Verify</InputGroupButton>
      </InputGroup>
    </div>
  );
}

function SearchDemo() {
  const [q, setQ] = useState('');
  return (
    <div className="max-w-md space-y-2">
      <Search placeholder="Search travellers…" value={q} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQ(e.target.value)} onClear={() => setQ('')} />
      <p className="text-xs text-[#8d8d8d]">{q ? `Filtering ledger by "${q}"` : 'Searches traveller names and booking references.'}</p>
    </div>
  );
}

export const inputsDemos: DemoDef[] = [
  { id: 'input', label: 'Input & Field', group: 'Inputs', render: () => <InputDemo /> },
  { id: 'textarea', label: 'Textarea', group: 'Inputs', render: () => <TextareaDemo /> },
  { id: 'select', label: 'Select & Native Select', group: 'Inputs', render: () => <SelectDemos /> },
  { id: 'checkbox', label: 'Checkbox', group: 'Inputs', render: () => <CheckboxDemo /> },
  { id: 'switch', label: 'Switch', group: 'Inputs', render: () => <SwitchDemo /> },
  { id: 'radio-group', label: 'Radio Group', group: 'Inputs', render: () => <RadioGroupDemo /> },
  { id: 'slider', label: 'Slider', group: 'Inputs', render: () => <SliderDemo /> },
  { id: 'toggle', label: 'Toggle & Toggle Group', group: 'Inputs', render: () => <ToggleDemo /> },
  { id: 'toggle-group', label: 'Toggle Group (multi)', group: 'Inputs', render: () => <ToggleGroupDemo /> },
  { id: 'calendar', label: 'Calendar & Date Picker', group: 'Inputs', render: () => <CalendarDemo /> },
  { id: 'input-otp', label: 'Input OTP', group: 'Inputs', render: () => <InputOtpDemo /> },
  { id: 'input-group', label: 'Input Group', group: 'Inputs', render: () => <InputGroupDemo /> },
  { id: 'search', label: 'Search', group: 'Inputs', render: () => <SearchDemo /> },
];
