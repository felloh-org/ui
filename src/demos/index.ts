import { baseDemos } from './base';
import { inputsDemos } from './inputs';
import { overlayDemos } from './overlays';
import { dataDemos } from './data';
import { blockDemos } from './blocks';
import type { DemoDef } from './shared';

export const DEMOS: DemoDef[] = [...baseDemos, ...inputsDemos, ...overlayDemos, ...dataDemos, ...blockDemos];

export const GROUPS = ['Base', 'Inputs', 'Overlays', 'Data', 'Blocks'] as const;

export const COMPONENT_COUNT = 64;

export const NOT_PORTED = [
  { name: 'message-scroller', note: 'upstream new — port on demand' },
  { name: 'questionnaire', note: 'upstream new — port on demand' },
  { name: 'toast', note: 'deprecated upstream — use Sonner' },
];

export const ALL_COMPONENTS = [
  'accordion', 'alert', 'alert-dialog', 'aspect-ratio', 'attachment', 'avatar', 'badge', 'breadcrumb', 'bubble',
  'button', 'button-group', 'calendar', 'card', 'carousel', 'chart', 'checkbox', 'collapsible', 'combobox',
  'command', 'context-menu', 'data-table', 'date-picker', 'dialog', 'direction', 'drawer', 'dropdown-menu',
  'empty', 'field', 'hover-card', 'input', 'input-group', 'input-otp', 'item', 'kbd', 'label', 'marker',
  'menubar', 'message', 'native-select', 'navigation-menu', 'pagination', 'popover', 'progress', 'radio-group',
  'resizable', 'scroll-area', 'search', 'select', 'separator', 'sheet', 'sidebar', 'skeleton', 'slider',
  'sonner', 'spinner', 'switch', 'table', 'tabs', 'textarea', 'toggle', 'toggle-group', 'tooltip', 'typography',
  'visually-hidden',
];
