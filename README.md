# @felloh/ui — Felloh Design System (shadcn + IBM Carbon)

**Source:** `williambicknell/boilerplate/design-system` (Turbo, shadcn patterns, `cva` + `tailwind-merge`) merged with IBM Carbon v11 concepts. One library for `felloh-lite`, `reports-lite`, `felloh-cms-clean`, `finance-app-boilerplate`, and any new project.

- **Brand:** Felloh purple `primary 500 #7C3AED` kept as `$interactive-01`/`brand-01` (not IBM blue 60).
- **Carbon mapping:** `tokens/carbon.ts` — `ui-01..04, text-01/02, support-01..04, border, overlay, focus, data` → Tailwind classes via `carbonClasses`.
- **Base components (15, inherited):** Button, Input, Label, Select, Textarea, Checkbox, Switch, RadioGroup, Card, Dialog, Alert, Spinner, Badge, VisuallyHidden, SkipLink — all ARIA/WCAG 2.1, `cva` variants, `cn()`.
- **New for Felloh (7):** Table, DataTable (TanStack 8 — sorting + filtering + pagination + empty state, Carbon comfortable density), Pagination, Tabs, Separator, Search (Carbon Search affordance), Skeleton.

## Use

```ts
import { Button, DataTable, Card, carbon } from '@felloh/ui';
import '@felloh/ui/styles.css'; // tailwind preset
```

Add preset in your app `tailwind.config.ts`:

```ts
import designSystemConfig from '@felloh/ui/tailwind.config';
export default { presets: [designSystemConfig], content: ['./src/**'] }
```

## Develop / browse

```bash
pnpm install
pnpm --filter @felloh/ui storybook   # http://localhost:6006
pnpm --filter @felloh/ui check       # tsc --noEmit
```

Stories live beside components: `components/*.stories.tsx` (Button, Card, DataTable, etc).

## Workspace (Turbo) vs publish

- **Local reuse (now):** `pnpm-workspace.yaml` lists `packages/*` + `design-system` + this package — deps use `"@felloh/ui": "workspace:*"`.
- **Cross-repo (when third project needs it):** `pnpm publish` to GitHub Packages (`npm.pkg.github.com`) as `@felloh/ui 0.1.0` via `.github/workflows/publish.yml`. Consumers add `.npmrc` with `//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}`.

## Adding a component

```bash
pnpm --filter @felloh/ui exec pnpm design-system:add Button
# or copy a Carbon pattern into components/carbon-*.tsx wrapping Carbon logic but exposing shadcn cva API
```

## Spreadsheet (reports-lite) recipe

```ts
import { DataTable } from '@felloh/ui';
const columns = [
  { accessorKey: 'booking_reference', header: 'Booking' },
  { accessorKey: 'amount', header: 'Paid', cell: ({getValue}) => `£${(getValue()/100).toFixed(2)}` },
];
<DataTable columns={columns} data={bookings} searchKey="booking_reference" searchPlaceholder="Search bookings…" />
```
