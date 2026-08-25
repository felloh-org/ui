import { jsx as t, jsxs as d, Fragment as fe } from "react/jsx-runtime";
import * as f from "react";
import { forwardRef as S, useId as M, createContext as K, useContext as O, useState as me } from "react";
import { cva as D } from "class-variance-authority";
import { Check as ue, ChevronDown as U, ChevronUp as Y, X as E, Info as X, AlertTriangle as pe, AlertCircle as he, CheckCircle as be, Search as G, ChevronsUpDown as ge, MoreHorizontal as xe, ChevronRight as ye, ChevronLeft as ve } from "lucide-react";
import { clsx as Ne } from "clsx";
import { twMerge as we } from "tailwind-merge";
import { Slot as ke } from "@radix-ui/react-slot";
import * as Z from "@radix-ui/react-label";
import * as g from "@radix-ui/react-select";
function s(...a) {
  return we(Ne(a));
}
const Ce = D(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold tracking-normal transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#161616] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Primary - Black like landing page
        default: "bg-[#161616] text-white hover:bg-[#393939] active:bg-[#525252]",
        // Secondary - Gray
        secondary: "bg-[#E6E4E1] text-[#161616] hover:bg-[#d0d0d0] active:bg-[#c6c6c6]",
        // Tertiary - Outline black
        tertiary: "bg-transparent text-[#161616] border border-[#161616] hover:bg-[#161616] hover:text-white active:bg-[#393939]",
        // Ghost - No background
        ghost: "bg-transparent text-[#161616] hover:bg-black/5 active:bg-black/10",
        // Danger - Red
        destructive: "bg-[#da1e28] text-white hover:bg-[#ba1b23] active:bg-[#750e13]",
        // Danger Tertiary
        "danger-tertiary": "bg-transparent text-[#da1e28] border border-[#da1e28] hover:bg-[#da1e28] hover:text-white active:bg-[#750e13]",
        // Danger Ghost
        "danger-ghost": "bg-transparent text-[#da1e28] hover:bg-[#fff1f1] active:bg-[#ffd7d9]",
        // Outline variant
        outline: "bg-transparent text-[#161616] border border-black/20 hover:bg-black/5 active:bg-black/10",
        // Link style
        link: "bg-transparent text-[#161616] hover:opacity-70 underline decoration-1 underline-offset-4"
      },
      size: {
        sm: "h-8 px-4 text-sm",
        default: "h-10 px-6 text-sm",
        lg: "h-12 px-6 text-sm",
        xl: "h-14 px-8 text-base",
        icon: "h-10 w-10",
        "icon-sm": "h-8 w-8",
        "icon-lg": "h-12 w-12"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), ee = f.forwardRef(
  ({ className: a, variant: e, size: r, asChild: i = !1, "aria-label": n, children: c, ...o }, m) => /* @__PURE__ */ t(
    i ? ke : "button",
    {
      className: s(Ce({ variant: e, size: r, className: a })),
      ref: m,
      "aria-label": n,
      ...o,
      children: c
    }
  )
);
ee.displayName = "Button";
const W = f.forwardRef(
  ({ className: a, type: e, error: r, hint: i, label: n, prefix: c, suffix: o, id: m, "aria-describedby": h, ...p }, x) => {
    const y = r && m ? `${m}-error` : void 0, N = i && m ? `${m}-hint` : void 0, b = [h, y, N].filter(Boolean).join(" ") || void 0, k = /* @__PURE__ */ t(
      "input",
      {
        type: e,
        id: m,
        "aria-invalid": r ? "true" : void 0,
        "aria-describedby": b,
        className: s(
          // Headroom text input: 40px height, full border style
          "flex h-10 w-full bg-white px-4 text-sm text-[#161616] tracking-normal transition-all duration-300",
          // Border - full border with subtle color
          "border border-black/20",
          r ? "border-[#da1e28]" : "border-black/20",
          // Placeholder
          "placeholder:text-[#a8a8a8]",
          // Hover state
          r ? "hover:border-[#750e13]" : "hover:border-[#161616]",
          // Focus state - Headroom uses black outline
          r ? "focus:outline-none focus:border-[#da1e28] focus:ring-2 focus:ring-[#da1e28]/20" : "focus:outline-none focus:border-[#161616] focus:ring-2 focus:ring-[#161616]/10",
          // Disabled state
          "disabled:cursor-not-allowed disabled:bg-[#E6E4E1] disabled:text-[#a8a8a8] disabled:border-black/10",
          // File input styling
          "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-[#161616]",
          // Add padding for prefix/suffix
          c ? "pl-8" : "",
          o ? "pr-10" : "",
          a
        ),
        ref: x,
        ...p
      }
    );
    return /* @__PURE__ */ d("div", { className: "w-full", children: [
      n && /* @__PURE__ */ t(
        "label",
        {
          htmlFor: m,
          className: "block text-xs text-[#525252] tracking-[0.32px] mb-2",
          children: n
        }
      ),
      c || o ? /* @__PURE__ */ d("div", { className: "relative", children: [
        c && /* @__PURE__ */ t("span", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#525252] pointer-events-none", children: c }),
        k,
        o && /* @__PURE__ */ t("span", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[#525252] pointer-events-none", children: o })
      ] }) : k,
      r && /* @__PURE__ */ t("p", { id: y, className: "mt-1 text-xs text-[#da1e28] tracking-[0.32px]", role: "alert", children: r }),
      i && !r && /* @__PURE__ */ t("p", { id: N, className: "mt-1 text-xs text-[#6f6f6f] tracking-[0.32px]", children: i })
    ] });
  }
);
W.displayName = "Input";
const Se = D(
  "text-sm font-semibold leading-none text-[#1a1a2e] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Te = f.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ t(
  Z.Root,
  {
    ref: r,
    className: s(Se(), a),
    ...e
  }
));
Te.displayName = Z.Root.displayName;
const Ft = g.Root, Lt = g.Group, $t = g.Value, Ie = f.forwardRef(({ className: a, children: e, error: r, ...i }, n) => /* @__PURE__ */ d(
  g.Trigger,
  {
    ref: n,
    "aria-invalid": r ? "true" : void 0,
    className: s(
      "flex h-11 w-full items-center justify-between whitespace-nowrap rounded-lg border-2 bg-white px-4 py-2 text-base text-[#1a1a2e] transition-all duration-300",
      // Default/error border
      r ? "border-[#b91c1c]" : "border-[#d1d5db]",
      // Hover state
      r ? "hover:border-[#991b1b]" : "hover:border-[#670399]",
      // Focus state with visible ring
      r ? "focus:outline-none focus:border-[#b91c1c] focus:ring-2 focus:ring-[#b91c1c]/20" : "focus:outline-none focus:border-[#670399] focus:ring-2 focus:ring-[#670399]/20",
      // Disabled state
      "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[#f5f5f7]",
      // Placeholder with WCAG AA contrast
      "data-[placeholder]:text-[#6b7280]",
      "[&>span]:line-clamp-1",
      a
    ),
    ...i,
    children: [
      e,
      /* @__PURE__ */ t(g.Icon, { asChild: !0, children: /* @__PURE__ */ t(U, { className: "h-5 w-5 text-[#374151]", "aria-hidden": "true" }) })
    ]
  }
));
Ie.displayName = g.Trigger.displayName;
const te = f.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ t(
  g.ScrollUpButton,
  {
    ref: r,
    className: s(
      "flex cursor-default items-center justify-center py-1",
      a
    ),
    ...e,
    children: /* @__PURE__ */ t(Y, { className: "h-4 w-4", "aria-hidden": "true" })
  }
));
te.displayName = g.ScrollUpButton.displayName;
const ae = f.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ t(
  g.ScrollDownButton,
  {
    ref: r,
    className: s(
      "flex cursor-default items-center justify-center py-1",
      a
    ),
    ...e,
    children: /* @__PURE__ */ t(U, { className: "h-4 w-4", "aria-hidden": "true" })
  }
));
ae.displayName = g.ScrollDownButton.displayName;
const ze = f.forwardRef(({ className: a, children: e, position: r = "popper", ...i }, n) => /* @__PURE__ */ t(g.Portal, { children: /* @__PURE__ */ d(
  g.Content,
  {
    ref: n,
    className: s(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-xl border-2 border-[#e0e0e0] bg-white text-[#1a1a2e] shadow-lg",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      r === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      a
    ),
    position: r,
    ...i,
    children: [
      /* @__PURE__ */ t(te, {}),
      /* @__PURE__ */ t(
        g.Viewport,
        {
          className: s(
            "p-1.5",
            r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: e
        }
      ),
      /* @__PURE__ */ t(ae, {})
    ]
  }
) }));
ze.displayName = g.Content.displayName;
const Re = f.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ t(
  g.Label,
  {
    ref: r,
    className: s("px-2 py-1.5 text-sm font-semibold", a),
    ...e
  }
));
Re.displayName = g.Label.displayName;
const De = f.forwardRef(({ className: a, children: e, ...r }, i) => /* @__PURE__ */ d(
  g.Item,
  {
    ref: i,
    className: s(
      "relative flex w-full cursor-pointer select-none items-center rounded-lg py-2.5 pl-3 pr-9 text-base outline-none transition-colors",
      "hover:bg-[#f3e8ff] focus:bg-[#f3e8ff]",
      "data-[state=checked]:bg-[#f3e8ff] data-[state=checked]:text-[#670399] data-[state=checked]:font-medium",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      a
    ),
    ...r,
    children: [
      /* @__PURE__ */ t("span", { className: "absolute right-3 flex h-4 w-4 items-center justify-center", "aria-hidden": "true", children: /* @__PURE__ */ t(g.ItemIndicator, { children: /* @__PURE__ */ t(ue, { className: "h-4 w-4 text-[#670399]" }) }) }),
      /* @__PURE__ */ t(g.ItemText, { children: e })
    ]
  }
));
De.displayName = g.Item.displayName;
const Ve = f.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ t(
  g.Separator,
  {
    ref: r,
    className: s("-mx-1 my-1 h-px bg-muted", a),
    ...e
  }
));
Ve.displayName = g.Separator.displayName;
const Pe = D(
  [
    "flex w-full rounded-lg border bg-white px-3 py-2 text-sm",
    "transition-colors duration-200",
    "placeholder:text-gray-400",
    "resize-y min-h-[80px]",
    // Focus styles
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    // Disabled state
    "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-50",
    // Read-only state
    "read-only:bg-gray-50"
  ],
  {
    variants: {
      variant: {
        default: [
          "border-gray-300",
          "hover:border-gray-400",
          "focus-visible:ring-primary-500 focus-visible:border-primary-500"
        ],
        error: [
          "border-error-500",
          "focus-visible:ring-error-500 focus-visible:border-error-500"
        ]
      },
      resize: {
        none: "resize-none",
        vertical: "resize-y",
        horizontal: "resize-x",
        both: "resize"
      }
    },
    defaultVariants: {
      variant: "default",
      resize: "vertical"
    }
  }
), je = S(
  ({
    className: a,
    variant: e,
    resize: r,
    label: i,
    labelHidden: n,
    error: c,
    helperText: o,
    required: m,
    showCount: h,
    maxLength: p,
    id: x,
    value: y,
    defaultValue: N,
    "aria-describedby": b,
    ...k
  }, w) => {
    const I = M(), C = x || I, R = `${C}-error`, j = `${C}-helper`, B = `${C}-count`, A = typeof y == "string" ? y.length : typeof N == "string" ? N.length : 0, z = [];
    b && z.push(b), c && z.push(R), o && !c && z.push(j), h && p && z.push(B);
    const F = z.length > 0 ? z.join(" ") : void 0;
    return /* @__PURE__ */ d("div", { className: "w-full", children: [
      i && /* @__PURE__ */ d(
        "label",
        {
          htmlFor: C,
          className: s(
            "mb-1.5 block text-sm font-medium text-gray-700",
            n && "sr-only"
          ),
          children: [
            i,
            m && /* @__PURE__ */ t("span", { className: "ml-1 text-error-500", "aria-hidden": "true", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ t(
        "textarea",
        {
          ref: w,
          id: C,
          className: s(
            Pe({
              variant: c ? "error" : e,
              resize: r,
              className: a
            })
          ),
          "aria-invalid": c ? "true" : void 0,
          "aria-describedby": F,
          "aria-required": m || void 0,
          maxLength: p,
          value: y,
          defaultValue: N,
          ...k
        }
      ),
      /* @__PURE__ */ d("div", { className: "mt-1.5 flex justify-between gap-4", children: [
        /* @__PURE__ */ d("div", { className: "flex-1", children: [
          c && /* @__PURE__ */ t(
            "p",
            {
              id: R,
              className: "text-sm text-error-600",
              role: "alert",
              "aria-live": "polite",
              children: c
            }
          ),
          o && !c && /* @__PURE__ */ t("p", { id: j, className: "text-sm text-gray-500", children: o })
        ] }),
        h && p && /* @__PURE__ */ d(
          "p",
          {
            id: B,
            className: s(
              "text-sm tabular-nums",
              A > p ? "text-error-600" : "text-gray-500"
            ),
            "aria-live": "polite",
            "aria-atomic": "true",
            children: [
              /* @__PURE__ */ t("span", { className: "sr-only", children: "Character count:" }),
              A,
              "/",
              p
            ]
          }
        )
      ] })
    ] });
  }
);
je.displayName = "Textarea";
const Be = D(
  [
    "peer h-5 w-5 shrink-0 rounded border-2",
    "appearance-none cursor-pointer",
    "transition-colors duration-200",
    // Focus styles
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    // Disabled styles
    "disabled:cursor-not-allowed disabled:opacity-50",
    // Checked styles (using Tailwind's peer)
    "checked:bg-primary-500 checked:border-primary-500",
    // Indeterminate styles
    "indeterminate:bg-primary-500 indeterminate:border-primary-500"
  ],
  {
    variants: {
      variant: {
        default: [
          "border-gray-300",
          "hover:border-gray-400",
          "focus-visible:ring-primary-500"
        ],
        error: [
          "border-error-500",
          "focus-visible:ring-error-500"
        ]
      },
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
), Fe = S(
  ({
    className: a,
    variant: e,
    size: r,
    label: i,
    description: n,
    error: c,
    indeterminate: o,
    id: m,
    disabled: h,
    ...p
  }, x) => {
    const y = M(), N = m || y, b = `${N}-description`, k = `${N}-error`, w = [];
    n && w.push(b), c && w.push(k);
    const I = w.length > 0 ? w.join(" ") : void 0;
    return /* @__PURE__ */ d("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ d("div", { className: "relative flex items-center justify-center", children: [
        /* @__PURE__ */ t(
          "input",
          {
            ref: (C) => {
              C && (C.indeterminate = o || !1), typeof x == "function" ? x(C) : x && (x.current = C);
            },
            type: "checkbox",
            id: N,
            className: s(
              Be({ variant: c ? "error" : e, size: r }),
              a
            ),
            disabled: h,
            "aria-invalid": c ? "true" : void 0,
            "aria-describedby": I,
            ...p
          }
        ),
        /* @__PURE__ */ t(
          "svg",
          {
            className: s(
              "pointer-events-none absolute text-white",
              "opacity-0 peer-checked:opacity-100",
              "peer-indeterminate:opacity-100",
              r === "sm" && "h-3 w-3",
              r === "md" && "h-3.5 w-3.5",
              r === "lg" && "h-4 w-4"
            ),
            viewBox: "0 0 16 16",
            fill: "none",
            "aria-hidden": "true",
            children: o ? /* @__PURE__ */ t(
              "path",
              {
                d: "M4 8h8",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round"
              }
            ) : /* @__PURE__ */ t(
              "path",
              {
                d: "M4 8l3 3 5-6",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }
            )
          }
        )
      ] }),
      (i || n || c) && /* @__PURE__ */ d("div", { className: "flex flex-col", children: [
        i && /* @__PURE__ */ t(
          "label",
          {
            htmlFor: N,
            className: s(
              "text-sm font-medium leading-none cursor-pointer",
              h ? "cursor-not-allowed text-gray-400" : "text-gray-700",
              c && "text-error-600"
            ),
            children: i
          }
        ),
        n && !c && /* @__PURE__ */ t(
          "p",
          {
            id: b,
            className: "mt-1 text-sm text-gray-500",
            children: n
          }
        ),
        c && /* @__PURE__ */ t(
          "p",
          {
            id: k,
            className: "mt-1 text-sm text-error-600",
            role: "alert",
            children: c
          }
        )
      ] })
    ] });
  }
);
Fe.displayName = "Checkbox";
const Le = D(
  [
    "relative inline-flex shrink-0 cursor-pointer rounded-full",
    "transition-colors duration-200",
    // Focus styles on the track (will be triggered by hidden input)
    "focus-within:ring-2 focus-within:ring-offset-2",
    // Disabled styles
    "has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50"
  ],
  {
    variants: {
      variant: {
        default: [
          "bg-gray-200",
          "has-[:checked]:bg-primary-500",
          "focus-within:ring-primary-500"
        ],
        error: [
          "bg-gray-200",
          "has-[:checked]:bg-error-500",
          "focus-within:ring-error-500"
        ]
      },
      size: {
        sm: "h-5 w-9",
        md: "h-6 w-11",
        lg: "h-7 w-14"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
), $e = D(
  [
    "pointer-events-none absolute top-0.5 left-0.5",
    "rounded-full bg-white shadow-md",
    "transition-transform duration-200",
    "peer-checked:translate-x-full"
  ],
  {
    variants: {
      size: {
        sm: "h-4 w-4 peer-checked:translate-x-4",
        md: "h-5 w-5 peer-checked:translate-x-5",
        lg: "h-6 w-6 peer-checked:translate-x-7"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
), Ee = S(
  ({
    className: a,
    variant: e,
    size: r,
    label: i,
    labelPosition: n = "right",
    description: c,
    error: o,
    id: m,
    disabled: h,
    checked: p,
    ...x
  }, y) => {
    const N = M(), b = m || N, k = `${b}-description`, w = `${b}-error`, I = [];
    c && I.push(k), o && I.push(w);
    const C = I.length > 0 ? I.join(" ") : void 0, R = i && /* @__PURE__ */ t(
      "label",
      {
        htmlFor: b,
        className: s(
          "text-sm font-medium cursor-pointer",
          h ? "cursor-not-allowed text-gray-400" : "text-gray-700",
          o && "text-error-600"
        ),
        children: i
      }
    );
    return /* @__PURE__ */ d("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ d(
        "div",
        {
          className: s(
            "flex items-center gap-3",
            n === "left" && "flex-row-reverse justify-end"
          ),
          children: [
            R,
            /* @__PURE__ */ d(
              "span",
              {
                className: s(
                  Le({ variant: o ? "error" : e, size: r }),
                  a
                ),
                children: [
                  /* @__PURE__ */ t(
                    "input",
                    {
                      ref: y,
                      type: "checkbox",
                      role: "switch",
                      id: b,
                      checked: p,
                      disabled: h,
                      "aria-checked": p,
                      "aria-invalid": o ? "true" : void 0,
                      "aria-describedby": C,
                      className: "peer sr-only",
                      ...x
                    }
                  ),
                  /* @__PURE__ */ t(
                    "span",
                    {
                      className: $e({ size: r }),
                      "aria-hidden": "true"
                    }
                  )
                ]
              }
            )
          ]
        }
      ),
      c && !o && /* @__PURE__ */ t(
        "p",
        {
          id: k,
          className: s(
            "mt-1 text-sm text-gray-500",
            n === "right" && "ml-14",
            n === "left" && "mr-14"
          ),
          children: c
        }
      ),
      o && /* @__PURE__ */ t(
        "p",
        {
          id: w,
          className: s(
            "mt-1 text-sm text-error-600",
            n === "right" && "ml-14",
            n === "left" && "mr-14"
          ),
          role: "alert",
          children: o
        }
      )
    ] });
  }
);
Ee.displayName = "Switch";
const Me = D(
  [
    "peer h-5 w-5 shrink-0 rounded-full border-2",
    "appearance-none cursor-pointer",
    "transition-colors duration-200",
    // Focus styles
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    // Disabled styles
    "disabled:cursor-not-allowed disabled:opacity-50",
    // Checked styles
    "checked:border-primary-500"
  ],
  {
    variants: {
      variant: {
        default: [
          "border-gray-300",
          "hover:border-gray-400",
          "focus-visible:ring-primary-500"
        ],
        error: [
          "border-error-500",
          "focus-visible:ring-error-500"
        ]
      },
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
), re = K(
  void 0
);
function Ae() {
  const a = O(re);
  if (!a)
    throw new Error("RadioItem must be used within a RadioGroup");
  return a;
}
const He = S(
  ({
    name: a,
    value: e,
    onChange: r,
    children: i,
    label: n,
    labelHidden: c,
    error: o,
    helperText: m,
    required: h,
    disabled: p,
    orientation: x = "vertical",
    size: y = "md",
    className: N
  }, b) => {
    const k = M(), w = `${k}-label`, I = `${k}-error`, C = `${k}-helper`, R = [];
    o && R.push(I), m && !o && R.push(C);
    const j = R.length > 0 ? R.join(" ") : void 0;
    return /* @__PURE__ */ t(
      re.Provider,
      {
        value: {
          name: a,
          value: e,
          onChange: r,
          disabled: p,
          required: h,
          error: o,
          variant: o ? "error" : "default",
          size: y
        },
        children: /* @__PURE__ */ d("div", { ref: b, className: s("w-full", N), children: [
          n && /* @__PURE__ */ d(
            "div",
            {
              id: w,
              className: s(
                "mb-2 text-sm font-medium text-gray-700",
                c && "sr-only",
                o && "text-error-600"
              ),
              children: [
                n,
                h && /* @__PURE__ */ t("span", { className: "ml-1 text-error-500", "aria-hidden": "true", children: "*" })
              ]
            }
          ),
          /* @__PURE__ */ t(
            "div",
            {
              role: "radiogroup",
              "aria-labelledby": n ? w : void 0,
              "aria-describedby": j,
              "aria-required": h || void 0,
              className: s(
                "flex gap-4",
                x === "vertical" && "flex-col",
                x === "horizontal" && "flex-row flex-wrap"
              ),
              children: i
            }
          ),
          o && /* @__PURE__ */ t(
            "p",
            {
              id: I,
              className: "mt-2 text-sm text-error-600",
              role: "alert",
              "aria-live": "polite",
              children: o
            }
          ),
          m && !o && /* @__PURE__ */ t("p", { id: C, className: "mt-2 text-sm text-gray-500", children: m })
        ] })
      }
    );
  }
);
He.displayName = "RadioGroup";
const Ge = S(
  ({ value: a, label: e, description: r, disabled: i, className: n }, c) => {
    const o = Ae(), m = M(), h = `${m}-description`, p = i || o.disabled, x = o.value === a;
    return /* @__PURE__ */ d("div", { className: s("flex items-start gap-3", n), children: [
      /* @__PURE__ */ d("div", { className: "relative flex items-center justify-center", children: [
        /* @__PURE__ */ t(
          "input",
          {
            ref: c,
            type: "radio",
            id: m,
            name: o.name,
            value: a,
            checked: x,
            onChange: () => o.onChange(a),
            disabled: p,
            required: o.required,
            className: s(Me({ variant: o.variant, size: o.size })),
            "aria-describedby": r ? h : void 0
          }
        ),
        /* @__PURE__ */ t(
          "div",
          {
            className: s(
              "pointer-events-none absolute rounded-full bg-primary-500",
              "opacity-0 peer-checked:opacity-100",
              "transition-opacity duration-200",
              o.size === "sm" && "h-2 w-2",
              o.size === "md" && "h-2.5 w-2.5",
              o.size === "lg" && "h-3 w-3"
            ),
            "aria-hidden": "true"
          }
        )
      ] }),
      /* @__PURE__ */ d("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ t(
          "label",
          {
            htmlFor: m,
            className: s(
              "text-sm font-medium cursor-pointer",
              p ? "cursor-not-allowed text-gray-400" : "text-gray-700",
              o.error && "text-error-600"
            ),
            children: e
          }
        ),
        r && /* @__PURE__ */ t(
          "p",
          {
            id: h,
            className: "mt-0.5 text-sm text-gray-500",
            children: r
          }
        )
      ] })
    ] });
  }
);
Ge.displayName = "RadioItem";
const _e = f.forwardRef(
  ({ className: a, interactive: e, asArticle: r, ...i }, n) => /* @__PURE__ */ t(
    r ? "article" : "div",
    {
      ref: n,
      className: s(
        "bg-white text-[#161616] border border-black/10 shadow-sm min-h-[4rem]",
        e && [
          "cursor-pointer transition-all duration-300",
          "hover:shadow-md hover:-translate-y-0.5",
          "focus:outline-none focus:ring-2 focus:ring-[#161616] focus:ring-offset-2",
          "active:translate-y-0"
        ],
        a
      ),
      tabIndex: e ? 0 : void 0,
      ...i
    }
  )
);
_e.displayName = "Card";
const Oe = f.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ t(
  "div",
  {
    ref: r,
    className: s("flex flex-col space-y-1 p-4", a),
    ...e
  }
));
Oe.displayName = "CardHeader";
const Ue = f.forwardRef(
  ({ className: a, as: e = "h3", ...r }, i) => /* @__PURE__ */ t(
    e,
    {
      ref: i,
      className: s("text-sm font-semibold leading-tight tracking-[0.16px] text-[#161616]", a),
      ...r
    }
  )
);
Ue.displayName = "CardTitle";
const We = f.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ t(
  "p",
  {
    ref: r,
    className: s("text-xs text-[#525252] tracking-[0.32px]", a),
    ...e
  }
));
We.displayName = "CardDescription";
const Qe = f.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ t("div", { ref: r, className: s("p-4 pt-0", a), ...e }));
Qe.displayName = "CardContent";
const qe = f.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ t(
  "div",
  {
    ref: r,
    className: s("flex items-center p-4 pt-0", a),
    ...e
  }
));
qe.displayName = "CardFooter";
const se = f.createContext(null), Et = ({ open: a, onOpenChange: e, children: r }) => /* @__PURE__ */ t(se.Provider, { value: { open: a, onOpenChange: e }, children: r }), Mt = ({ children: a, className: e }) => {
  const r = f.useContext(se);
  if (!r) throw new Error("DialogContent must be used within Dialog");
  return r.open ? /* @__PURE__ */ d("div", { className: "fixed inset-0 z-50 flex items-center justify-center", children: [
    /* @__PURE__ */ t(
      "div",
      {
        className: "fixed inset-0 bg-black/50",
        onClick: () => r.onOpenChange(!1)
      }
    ),
    /* @__PURE__ */ d(
      "div",
      {
        className: s(
          "relative z-50 bg-white rounded-lg shadow-xl max-h-[85vh] overflow-auto",
          "animate-in fade-in-0 zoom-in-95",
          e
        ),
        children: [
          /* @__PURE__ */ d(
            "button",
            {
              onClick: () => r.onOpenChange(!1),
              className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#0f62fe] focus:ring-offset-2",
              children: [
                /* @__PURE__ */ t(E, { className: "h-4 w-4" }),
                /* @__PURE__ */ t("span", { className: "sr-only", children: "Close" })
              ]
            }
          ),
          a
        ]
      }
    )
  ] }) : null;
}, At = ({ children: a, className: e }) => /* @__PURE__ */ t("div", { className: s("flex flex-col space-y-1.5 text-center sm:text-left", e), children: a }), Ht = ({ children: a, className: e }) => /* @__PURE__ */ t("h2", { className: s("text-lg font-semibold leading-none tracking-tight", e), children: a }), Gt = ({ children: a, className: e }) => /* @__PURE__ */ t("p", { className: s("text-sm text-[#525252]", e), children: a }), _t = ({ children: a, className: e }) => /* @__PURE__ */ t("div", { className: s("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e), children: a }), Je = D(
  "relative w-full rounded-xl p-4 flex gap-3 items-start",
  {
    variants: {
      variant: {
        // Felloh Neutral - general information (WCAG AA 7.1:1)
        default: "bg-[#f5f5f7] text-[#374151] border border-[#d1d5db]",
        // Success messages (WCAG AA 4.7:1)
        success: "bg-[#dcfce7] text-[#166534] border border-[#86efac]",
        // Error messages (WCAG AA 4.5:1)
        destructive: "bg-[#fee2e2] text-[#b91c1c] border border-[#fca5a5]",
        // Warning messages (WCAG AA 4.5:1)
        warning: "bg-[#fef3c7] text-[#92400e] border border-[#fcd34d]",
        // Info - Felloh Purple tint (WCAG AA 7.2:1)
        info: "bg-[#f3e8ff] text-[#670399] border border-[#c084fc]"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), Xe = {
  default: X,
  success: be,
  destructive: he,
  warning: pe,
  info: X
}, Ke = {
  default: "polite",
  success: "polite",
  destructive: "assertive",
  warning: "polite",
  info: "polite"
}, Ye = f.forwardRef(
  ({ className: a, variant: e = "default", dismissible: r, onDismiss: i, children: n, ...c }, o) => {
    const m = Xe[e || "default"], h = Ke[e || "default"];
    return /* @__PURE__ */ d(
      "div",
      {
        ref: o,
        role: "alert",
        "aria-live": h,
        className: s(Je({ variant: e }), a),
        ...c,
        children: [
          /* @__PURE__ */ t(m, { className: "h-5 w-5 shrink-0 mt-0.5", "aria-hidden": "true" }),
          /* @__PURE__ */ t("div", { className: "flex-1 min-w-0", children: n }),
          r && /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: i,
              className: "shrink-0 p-1.5 rounded-lg hover:bg-black/5 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-current",
              "aria-label": "Dismiss alert",
              children: /* @__PURE__ */ t(E, { className: "h-4 w-4", "aria-hidden": "true" })
            }
          )
        ]
      }
    );
  }
);
Ye.displayName = "Alert";
const Ze = f.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ t(
  "h5",
  {
    ref: r,
    className: s("font-semibold leading-tight tracking-tight", a),
    ...e
  }
));
Ze.displayName = "AlertTitle";
const et = f.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ t(
  "p",
  {
    ref: r,
    className: s("text-sm mt-1 opacity-90", a),
    ...e
  }
));
et.displayName = "AlertDescription";
const tt = D("animate-spin", {
  variants: {
    size: {
      xs: "h-3 w-3",
      sm: "h-4 w-4",
      md: "h-6 w-6",
      lg: "h-8 w-8",
      xl: "h-12 w-12"
    },
    variant: {
      default: "text-gray-400",
      primary: "text-primary-500",
      white: "text-white",
      current: "text-current"
    }
  },
  defaultVariants: {
    size: "md",
    variant: "default"
  }
}), ie = S(
  ({ className: a, size: e, variant: r, label: i = "Loading...", ...n }, c) => /* @__PURE__ */ d("div", { role: "status", "aria-label": i, children: [
    /* @__PURE__ */ d(
      "svg",
      {
        ref: c,
        className: s(tt({ size: e, variant: r, className: a })),
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        ...n,
        children: [
          /* @__PURE__ */ t(
            "circle",
            {
              className: "opacity-25",
              cx: "12",
              cy: "12",
              r: "10",
              stroke: "currentColor",
              strokeWidth: "4"
            }
          ),
          /* @__PURE__ */ t(
            "path",
            {
              className: "opacity-75",
              fill: "currentColor",
              d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ t("span", { className: "sr-only", children: i })
  ] })
);
ie.displayName = "Spinner";
const at = S(
  ({ visible: a, message: e = "Loading...", size: r = "lg" }, i) => a ? /* @__PURE__ */ t(
    "div",
    {
      ref: i,
      className: "fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm",
      role: "alert",
      "aria-busy": "true",
      "aria-live": "polite",
      children: /* @__PURE__ */ d("div", { className: "flex flex-col items-center gap-4", children: [
        /* @__PURE__ */ t(ie, { size: r, variant: "primary", label: e }),
        /* @__PURE__ */ t("p", { className: "text-sm font-medium text-gray-600", children: e })
      ] })
    }
  ) : null
);
at.displayName = "LoadingOverlay";
const rt = D(
  "inline-flex items-center px-2 py-0.5 text-xs font-normal tracking-[0.32px] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0f62fe] focus:ring-offset-1",
  {
    variants: {
      variant: {
        // Carbon Blue (default)
        default: "bg-[#0f62fe] text-white",
        // Carbon Gray - High contrast
        secondary: "bg-[#393939] text-white",
        // Carbon Gray - Cool gray
        neutral: "bg-[#e0e0e0] text-[#161616]",
        // Carbon Outline
        outline: "bg-transparent border border-[#8d8d8d] text-[#161616]",
        // Carbon Green - Success
        success: "bg-[#198038] text-white",
        // Carbon Green - Light
        "success-light": "bg-[#defbe6] text-[#198038]",
        // Carbon Red - Error
        destructive: "bg-[#da1e28] text-white",
        // Carbon Red - Light
        "destructive-light": "bg-[#fff1f1] text-[#da1e28]",
        // Carbon Yellow - Warning
        warning: "bg-[#f1c21b] text-[#161616]",
        // Carbon Yellow - Light
        "warning-light": "bg-[#fcf4d6] text-[#161616]",
        // Carbon Blue - Info
        info: "bg-[#0043ce] text-white",
        // Carbon Blue - Light
        "info-light": "bg-[#edf5ff] text-[#0043ce]",
        // Carbon Purple
        purple: "bg-[#8a3ffc] text-white",
        // Carbon Purple - Light
        "purple-light": "bg-[#f6f2ff] text-[#8a3ffc]",
        // Carbon Teal
        teal: "bg-[#007d79] text-white",
        // Carbon Teal - Light
        "teal-light": "bg-[#d9fbfb] text-[#007d79]"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Ot({ className: a, variant: e, ...r }) {
  return /* @__PURE__ */ t(
    "span",
    {
      className: s(rt({ variant: e }), a),
      ...r
    }
  );
}
const st = S(
  ({ children: a, as: e = "span", className: r, ...i }, n) => /* @__PURE__ */ t(
    e,
    {
      ref: n,
      className: s(
        // Screen reader only styles
        "absolute w-px h-px p-0 -m-px overflow-hidden",
        "whitespace-nowrap border-0",
        // Using clip-path instead of clip (deprecated)
        "[clip-path:inset(50%)]",
        r
      ),
      ...i,
      children: a
    }
  )
);
st.displayName = "VisuallyHidden";
const it = S(
  ({ contentId: a = "main-content", children: e = "Skip to main content", ...r }, i) => /* @__PURE__ */ t(
    "a",
    {
      ref: i,
      href: `#${a}`,
      className: s(
        // Hidden by default
        "absolute left-0 top-0 z-[100] -translate-y-full",
        // Shown on focus
        "focus:translate-y-0",
        // Styling
        "bg-primary-500 text-white px-4 py-2 font-medium",
        "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
        "transition-transform duration-200"
      ),
      ...r,
      children: e
    }
  )
);
it.displayName = "SkipLink";
const ne = f.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ t("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ t(
  "table",
  {
    ref: r,
    className: s("w-full caption-bottom text-sm", a),
    ...e
  }
) }));
ne.displayName = "Table";
const oe = f.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ t(
  "thead",
  {
    ref: r,
    className: s(
      "bg-[#e0e0e0] text-[#161616] [&_tr]:border-b [&_tr]:border-[#c6c6c6]",
      a
    ),
    ...e
  }
));
oe.displayName = "TableHeader";
const le = f.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ t(
  "tbody",
  {
    ref: r,
    className: s("[&_tr:last-child]:border-0", a),
    ...e
  }
));
le.displayName = "TableBody";
const nt = f.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ t(
  "tfoot",
  {
    ref: r,
    className: s(
      "border-t border-[#e0e0e0] bg-[#f4f4f4] font-medium [&>tr]:last:border-b-0",
      a
    ),
    ...e
  }
));
nt.displayName = "TableFooter";
const $ = f.forwardRef(
  ({ className: a, interactive: e, ...r }, i) => /* @__PURE__ */ t(
    "tr",
    {
      ref: i,
      className: s(
        "border-b border-[#e0e0e0] transition-colors",
        e ? "cursor-pointer hover:bg-[#e5e5e5] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0f62fe]" : "hover:bg-[#f4f4f4]",
        "data-[state=selected]:bg-[#e0e0e0]",
        a
      ),
      tabIndex: e ? 0 : void 0,
      ...r
    }
  )
);
$.displayName = "TableRow";
const _ = f.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ t(
  "th",
  {
    ref: r,
    scope: "col",
    className: s(
      // Carbon: 48px header height, 14px semibold text
      "h-12 px-4 text-left align-middle text-xs font-semibold uppercase tracking-[0.32px] text-[#525252]",
      "[&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      a
    ),
    ...e
  }
));
_.displayName = "TableHead";
const H = f.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ t(
  "td",
  {
    ref: r,
    className: s(
      // Carbon: 48px row height, 14px text
      "h-12 px-4 align-middle text-sm text-[#161616]",
      "[&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      a
    ),
    ...e
  }
));
H.displayName = "TableCell";
const ot = f.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ t(
  "caption",
  {
    ref: r,
    className: s("mt-4 text-sm text-[#525252]", a),
    ...e
  }
));
ot.displayName = "TableCaption";
function Ut({
  data: a,
  columns: e,
  getRowKey: r,
  onRowClick: i,
  searchable: n = !1,
  searchPlaceholder: c = "Search...",
  emptyMessage: o = "No data available",
  maxRows: m,
  className: h
}) {
  const [p, x] = f.useState(null), [y, N] = f.useState(null), [b, k] = f.useState(""), [w, I] = f.useState({}), C = e.some((l) => l.searchValue), R = (l, v) => {
    I((T) => ({
      ...T,
      [l]: v
    }));
  }, j = (l) => {
    I((v) => {
      const T = { ...v };
      return delete T[l], T;
    });
  }, B = Object.values(w).some((l) => l.trim()), A = (l) => {
    p === l ? y === "asc" ? N("desc") : y === "desc" && (x(null), N(null)) : (x(l), N("asc"));
  }, z = f.useMemo(() => {
    let l = a;
    if (b.trim()) {
      const v = b.toLowerCase();
      l = l.filter((T) => e.some((V) => V.searchValue ? V.searchValue(T).toLowerCase().includes(v) : !1));
    }
    return B && (l = l.filter((v) => Object.entries(w).every(([T, V]) => {
      if (!V.trim()) return !0;
      const P = e.find((L) => L.key === T);
      return P != null && P.searchValue ? P.searchValue(v).toLowerCase().includes(V.toLowerCase()) : !0;
    }))), l;
  }, [a, b, e, w, B]), F = f.useMemo(() => {
    if (!p || !y) return z;
    const l = e.find((v) => v.key === p);
    return l != null && l.sortValue ? [...z].sort((v, T) => {
      const V = l.sortValue(v), P = l.sortValue(T);
      let L = 0;
      return V < P && (L = -1), V > P && (L = 1), y === "desc" ? -L : L;
    }) : z;
  }, [z, p, y, e]), J = m ? F.slice(0, m) : F, ce = m && F.length > m, de = (l) => p !== l ? /* @__PURE__ */ t(ge, { className: "h-4 w-4 text-[#8d8d8d]" }) : y === "asc" ? /* @__PURE__ */ t(Y, { className: "h-4 w-4 text-[#0f62fe]" }) : /* @__PURE__ */ t(U, { className: "h-4 w-4 text-[#0f62fe]" });
  return /* @__PURE__ */ d("div", { className: s("space-y-0", h), children: [
    n && /* @__PURE__ */ d("div", { className: "p-4 bg-[#f4f4f4] border-b border-[#e0e0e0]", children: [
      /* @__PURE__ */ d("div", { className: "relative max-w-sm", children: [
        /* @__PURE__ */ t(G, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#525252]" }),
        /* @__PURE__ */ t(
          W,
          {
            type: "text",
            placeholder: c,
            value: b,
            onChange: (l) => k(l.target.value),
            className: "pl-10 pr-10 bg-white"
          }
        ),
        b && /* @__PURE__ */ t(
          "button",
          {
            onClick: () => k(""),
            className: "absolute right-3 top-1/2 -translate-y-1/2 text-[#525252] hover:text-[#161616]",
            "aria-label": "Clear search",
            children: /* @__PURE__ */ t(E, { className: "h-4 w-4" })
          }
        )
      ] }),
      b && /* @__PURE__ */ d("p", { className: "mt-2 text-xs text-[#525252]", children: [
        z.length,
        " result",
        z.length !== 1 ? "s" : "",
        " found"
      ] })
    ] }),
    /* @__PURE__ */ d(ne, { children: [
      /* @__PURE__ */ d(oe, { children: [
        /* @__PURE__ */ t($, { children: e.map((l) => /* @__PURE__ */ t(
          _,
          {
            className: s(
              l.sortable && "cursor-pointer select-none hover:bg-[#c6c6c6]",
              l.headerClassName
            ),
            onClick: l.sortable ? () => A(l.key) : void 0,
            "aria-sort": p === l.key ? y === "asc" ? "ascending" : "descending" : void 0,
            children: /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ t("span", { children: l.header }),
              l.sortable && de(l.key)
            ] })
          },
          l.key
        )) }),
        C && /* @__PURE__ */ t($, { className: "bg-[#f4f4f4] hover:bg-[#f4f4f4]", children: e.map((l) => {
          var v;
          return /* @__PURE__ */ t(_, { className: s("py-2", l.headerClassName), children: l.searchValue ? /* @__PURE__ */ d("div", { className: "relative", children: [
            /* @__PURE__ */ t(G, { className: "absolute left-2 top-1/2 -translate-y-1/2 h-3 w-3 text-[#8d8d8d]" }),
            /* @__PURE__ */ t(
              "input",
              {
                type: "text",
                placeholder: "Filter...",
                value: w[l.key] || "",
                onChange: (T) => R(l.key, T.target.value),
                onClick: (T) => T.stopPropagation(),
                className: s(
                  "w-full h-7 pl-7 pr-7 text-xs bg-white border border-[#e0e0e0] text-[#161616]",
                  "placeholder:text-[#a8a8a8]",
                  "focus:outline-none focus:border-[#0f62fe] focus:ring-1 focus:ring-[#0f62fe]",
                  ((v = l.headerClassName) == null ? void 0 : v.includes("text-right")) && "text-right"
                ),
                "aria-label": `Filter ${l.header}`
              }
            ),
            w[l.key] && /* @__PURE__ */ t(
              "button",
              {
                onClick: (T) => {
                  T.stopPropagation(), j(l.key);
                },
                className: "absolute right-2 top-1/2 -translate-y-1/2 text-[#8d8d8d] hover:text-[#161616]",
                "aria-label": `Clear ${l.header} filter`,
                children: /* @__PURE__ */ t(E, { className: "h-3 w-3" })
              }
            )
          ] }) : /* @__PURE__ */ t("span", { className: "text-xs text-[#8d8d8d]", children: "—" }) }, `filter-${l.key}`);
        }) })
      ] }),
      /* @__PURE__ */ t(le, { children: J.length === 0 ? /* @__PURE__ */ t($, { children: /* @__PURE__ */ t(H, { colSpan: e.length, className: "h-24 text-center text-[#525252]", children: b || B ? "No matching results" : o }) }) : /* @__PURE__ */ d(fe, { children: [
        J.map((l) => /* @__PURE__ */ t(
          $,
          {
            interactive: !!i,
            onClick: i ? () => i(l) : void 0,
            onKeyDown: i ? (v) => v.key === "Enter" && i(l) : void 0,
            children: e.map((v) => /* @__PURE__ */ t(H, { className: v.cellClassName, children: v.cell(l) }, v.key))
          },
          r(l)
        )),
        ce && /* @__PURE__ */ t($, { children: /* @__PURE__ */ d(H, { colSpan: e.length, className: "text-center text-[#525252]", children: [
          "... and ",
          F.length - m,
          " more rows"
        ] }) })
      ] }) })
    ] })
  ] });
}
function Wt() {
  const [a, e] = f.useState(null), [r, i] = f.useState(null), [n, c] = f.useState("");
  return {
    sortColumn: a,
    setSortColumn: e,
    sortDirection: r,
    setSortDirection: i,
    searchQuery: n,
    setSearchQuery: c
  };
}
const lt = ({ className: a, ...e }) => /* @__PURE__ */ t("nav", { role: "navigation", "aria-label": "pagination", className: s("mx-auto flex w-full justify-center", a), ...e });
lt.displayName = "Pagination";
const ct = S(({ className: a, ...e }, r) => /* @__PURE__ */ t("ul", { ref: r, className: s("flex flex-row items-center gap-1", a), ...e }));
ct.displayName = "PaginationContent";
const dt = S(({ className: a, ...e }, r) => /* @__PURE__ */ t("li", { ref: r, className: s("", a), ...e }));
dt.displayName = "PaginationItem";
const Q = ({ className: a, isActive: e, size: r = "icon", ...i }) => /* @__PURE__ */ t(
  ee,
  {
    "aria-current": e ? "page" : void 0,
    variant: e ? "default" : "outline",
    size: r,
    className: s(e && "pointer-events-none", a),
    ...i
  }
);
Q.displayName = "PaginationLink";
const ft = ({ className: a, ...e }) => /* @__PURE__ */ d(Q, { "aria-label": "Go to previous page", size: "default", className: s("gap-1 pl-2.5", a), ...e, children: [
  /* @__PURE__ */ t(ve, { className: "h-4 w-4" }),
  /* @__PURE__ */ t("span", { children: "Previous" })
] });
ft.displayName = "PaginationPrevious";
const mt = ({ className: a, ...e }) => /* @__PURE__ */ d(Q, { "aria-label": "Go to next page", size: "default", className: s("gap-1 pr-2.5", a), ...e, children: [
  /* @__PURE__ */ t("span", { children: "Next" }),
  /* @__PURE__ */ t(ye, { className: "h-4 w-4" })
] });
mt.displayName = "PaginationNext";
const ut = ({ className: a, ...e }) => /* @__PURE__ */ d("span", { "aria-hidden": !0, className: s("flex h-9 w-9 items-center justify-center", a), ...e, children: [
  /* @__PURE__ */ t(xe, { className: "h-4 w-4" }),
  /* @__PURE__ */ t("span", { className: "sr-only", children: "More pages" })
] });
ut.displayName = "PaginationEllipsis";
const Qt = ({ className: a, ...e }) => /* @__PURE__ */ t("span", { className: s("text-sm text-gray-600", a), ...e }), q = K(null), pt = S(({ className: a, value: e, defaultValue: r, onValueChange: i, ...n }, c) => {
  const [o, m] = me(r ?? ""), h = e ?? o, p = (x) => {
    e === void 0 && m(x), i == null || i(x);
  };
  return /* @__PURE__ */ t(q.Provider, { value: { value: h, onValueChange: p }, children: /* @__PURE__ */ t("div", { ref: c, className: s("", a), ...n }) });
});
pt.displayName = "Tabs";
const ht = S(({ className: a, ...e }, r) => /* @__PURE__ */ t(
  "div",
  {
    ref: r,
    role: "tablist",
    className: s("inline-flex items-center justify-center rounded-lg bg-gray-100 p-1", a),
    ...e
  }
));
ht.displayName = "TabsList";
const bt = S(({ className: a, value: e, children: r, ...i }, n) => {
  const c = O(q);
  if (!c) throw new Error("TabsTrigger must be inside Tabs");
  const o = c.value === e;
  return /* @__PURE__ */ t(
    "button",
    {
      ref: n,
      role: "tab",
      "aria-selected": o,
      "data-state": o ? "active" : "inactive",
      onClick: () => c.onValueChange(e),
      className: s(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500",
        "disabled:pointer-events-none disabled:opacity-50",
        o ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900",
        a
      ),
      ...i,
      children: r
    }
  );
});
bt.displayName = "TabsTrigger";
const gt = S(({ className: a, value: e, children: r, ...i }, n) => {
  const c = O(q);
  if (!c) throw new Error("TabsContent must be inside Tabs");
  return c.value !== e ? null : /* @__PURE__ */ t("div", { ref: n, role: "tabpanel", className: s("mt-4 focus-visible:outline-none", a), ...i, children: r });
});
gt.displayName = "TabsContent";
const xt = S(
  ({ className: a, orientation: e = "horizontal", decorative: r = !0, ...i }, n) => /* @__PURE__ */ t(
    "div",
    {
      ref: n,
      "data-decorative": r,
      role: r ? "none" : "separator",
      "aria-orientation": e,
      className: s(
        "shrink-0 bg-gray-200",
        e === "horizontal" ? "h-px w-full" : "h-full w-px",
        a
      ),
      ...i
    }
  )
);
xt.displayName = "Separator";
const yt = S(({ className: a, value: e, onClear: r, ...i }, n) => {
  const c = e !== void 0 && String(e).length > 0 && r;
  return /* @__PURE__ */ d("div", { className: s("relative flex items-center", a), children: [
    /* @__PURE__ */ t(G, { className: "pointer-events-none absolute left-3 h-4 w-4 text-gray-400", "aria-hidden": !0 }),
    /* @__PURE__ */ t(W, { ref: n, value: e, className: "pl-9 pr-9", type: "search", ...i }),
    c && /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        onClick: r,
        className: "absolute right-2 inline-flex h-7 w-7 items-center justify-center rounded-md hover:bg-gray-100",
        "aria-label": "Clear search",
        children: /* @__PURE__ */ t(E, { className: "h-4 w-4 text-gray-600" })
      }
    )
  ] });
});
yt.displayName = "Search";
function vt({ className: a, ...e }) {
  return /* @__PURE__ */ t("div", { className: s("animate-pulse rounded-md bg-gray-200", a), ...e });
}
function qt({ lines: a = 3, className: e, ...r }) {
  return /* @__PURE__ */ t("div", { className: s("space-y-2", e), ...r, children: Array.from({ length: a }).map((i, n) => /* @__PURE__ */ t(vt, { className: s("h-4 w-full", n === a - 1 && "w-3/4") }, n)) });
}
const u = {
  // Primary - brand color
  primary: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#7C3AED",
    // Main brand color
    600: "#6d28d9",
    700: "#5b21b6",
    800: "#4c1d95",
    900: "#3b0764"
  },
  // Neutral grays
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712"
  },
  // Semantic colors
  success: {
    50: "#f0fdf4",
    100: "#dcfce7",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d"
  },
  warning: {
    50: "#fffbeb",
    100: "#fef3c7",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309"
  },
  error: {
    50: "#fef2f2",
    100: "#fee2e2",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c"
  },
  info: {
    50: "#eff6ff",
    100: "#dbeafe",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8"
  },
  // Base colors
  white: "#ffffff",
  black: "#000000",
  transparent: "transparent"
}, Nt = {
  sans: '"Plus Jakarta Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  mono: '"JetBrains Mono", "Fira Code", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace'
}, wt = {
  xs: "0.75rem",
  // 12px
  sm: "0.875rem",
  // 14px
  base: "1rem",
  // 16px
  lg: "1.125rem",
  // 18px
  xl: "1.25rem",
  // 20px
  "2xl": "1.5rem",
  // 24px
  "3xl": "1.875rem",
  // 30px
  "4xl": "2.25rem",
  // 36px
  "5xl": "3rem",
  // 48px
  "6xl": "3.75rem"
  // 60px
}, kt = {
  normal: "400",
  medium: "500",
  semibold: "600",
  bold: "700"
}, Ct = {
  none: "1",
  tight: "1.25",
  snug: "1.375",
  normal: "1.5",
  relaxed: "1.625",
  loose: "2"
}, Jt = {
  tighter: "-0.05em",
  tight: "-0.025em",
  normal: "0",
  wide: "0.025em",
  wider: "0.05em",
  widest: "0.1em"
}, St = {
  0: "0",
  px: "1px",
  0.5: "0.125rem",
  // 2px
  1: "0.25rem",
  // 4px
  1.5: "0.375rem",
  // 6px
  2: "0.5rem",
  // 8px
  2.5: "0.625rem",
  // 10px
  3: "0.75rem",
  // 12px
  3.5: "0.875rem",
  // 14px
  4: "1rem",
  // 16px
  5: "1.25rem",
  // 20px
  6: "1.5rem",
  // 24px
  7: "1.75rem",
  // 28px
  8: "2rem",
  // 32px
  9: "2.25rem",
  // 36px
  10: "2.5rem",
  // 40px
  11: "2.75rem",
  // 44px
  12: "3rem",
  // 48px
  14: "3.5rem",
  // 56px
  16: "4rem",
  // 64px
  20: "5rem",
  // 80px
  24: "6rem",
  // 96px
  28: "7rem",
  // 112px
  32: "8rem",
  // 128px
  36: "9rem",
  // 144px
  40: "10rem",
  // 160px
  44: "11rem",
  // 176px
  48: "12rem",
  // 192px
  52: "13rem",
  // 208px
  56: "14rem",
  // 224px
  60: "15rem",
  // 240px
  64: "16rem",
  // 256px
  72: "18rem",
  // 288px
  80: "20rem",
  // 320px
  96: "24rem"
  // 384px
}, Tt = {
  none: "0",
  sm: "0.25rem",
  // 4px
  md: "0.375rem",
  // 6px
  lg: "0.5rem",
  // 8px
  xl: "0.75rem",
  // 12px
  "2xl": "1rem",
  // 16px
  "3xl": "1.5rem",
  // 24px
  full: "9999px"
}, It = {
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
  inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
  none: "none"
}, Xt = {
  // Interactive — Carbon's brand layer. We keep Felloh purple, not IBM blue 60.
  interactive: {
    primary: u.primary[500],
    // Carbon $interactive-01
    primaryHover: u.primary[600],
    primaryActive: u.primary[700],
    secondary: u.gray[800],
    // Carbon $interactive-02
    tertiary: u.primary[500]
    // outline variant
  },
  // UI backgrounds — Carbon $ui-01 .. $ui-04, $field-01
  ui: {
    background: u.gray[50],
    // $ui-background / $carbon--gray-10
    "01": "#ffffff",
    // $ui-01
    "02": u.gray[50],
    // $ui-02
    "03": u.gray[100],
    // $ui-03
    "04": u.gray[200],
    // $ui-04
    field: "#ffffff"
    // $field-01
  },
  // Text — Carbon $text-01, $text-02, $text-04
  text: {
    primary: u.gray[900],
    // $text-01
    secondary: u.gray[600],
    // $text-02
    placeholder: u.gray[400],
    // $text-04
    onColor: "#ffffff",
    error: u.error[600]
  },
  // Icon — Carbon $icon-01 .. $icon-03
  icon: {
    primary: u.gray[900],
    secondary: u.gray[600],
    disabled: u.gray[400]
  },
  // Support / semantic — Carbon $support-01..04
  support: {
    error: u.error[500],
    // $support-01
    success: u.success[500],
    // $support-02
    warning: u.warning[500],
    // $support-03
    info: u.info[500],
    // $support-04
    errorInverse: u.error[100],
    successInverse: u.success[100]
  },
  // Border / decorative
  border: {
    subtle: u.gray[200],
    // $ui-03
    strong: u.gray[300],
    // $ui-04
    inverse: u.gray[800]
  },
  // Layer / overlay — Carbon $overlay-01
  overlay: "rgba(22,22,22,0.5)",
  // Focus — Carbon $focus
  focus: u.primary[500],
  // Data viz fallbacks (Carbon palette, kept for charts)
  data: [
    "#6929c4",
    "#1192e8",
    "#005d5d",
    "#9f1853",
    "#520408",
    "#198038"
  ]
}, Kt = {
  interactivePrimary: "bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-white",
  interactiveSecondary: "bg-gray-800 hover:bg-gray-900 text-white",
  uiBackground: "bg-gray-50",
  textPrimary: "text-gray-900",
  textSecondary: "text-gray-600",
  borderSubtle: "border-gray-200"
}, Yt = {
  colors: u,
  fonts: Nt,
  fontSizes: wt,
  fontWeights: kt,
  lineHeights: Ct,
  spacing: St,
  radii: Tt,
  shadows: It
};
export {
  Ye as Alert,
  et as AlertDescription,
  Ze as AlertTitle,
  Ot as Badge,
  ee as Button,
  _e as Card,
  Qe as CardContent,
  We as CardDescription,
  qe as CardFooter,
  Oe as CardHeader,
  Ue as CardTitle,
  Fe as Checkbox,
  Ut as DataTable,
  Et as Dialog,
  Mt as DialogContent,
  Gt as DialogDescription,
  _t as DialogFooter,
  At as DialogHeader,
  Ht as DialogTitle,
  W as Input,
  Te as Label,
  at as LoadingOverlay,
  lt as Pagination,
  ct as PaginationContent,
  ut as PaginationEllipsis,
  Qt as PaginationInfo,
  dt as PaginationItem,
  Q as PaginationLink,
  mt as PaginationNext,
  ft as PaginationPrevious,
  He as RadioGroup,
  Ge as RadioItem,
  yt as Search,
  Ft as Select,
  ze as SelectContent,
  Lt as SelectGroup,
  De as SelectItem,
  Re as SelectLabel,
  ae as SelectScrollDownButton,
  te as SelectScrollUpButton,
  Ve as SelectSeparator,
  Ie as SelectTrigger,
  $t as SelectValue,
  xt as Separator,
  vt as Skeleton,
  qt as SkeletonText,
  it as SkipLink,
  ie as Spinner,
  Ee as Switch,
  ne as Table,
  le as TableBody,
  ot as TableCaption,
  H as TableCell,
  nt as TableFooter,
  _ as TableHead,
  oe as TableHeader,
  $ as TableRow,
  pt as Tabs,
  gt as TabsContent,
  ht as TabsList,
  bt as TabsTrigger,
  je as Textarea,
  st as VisuallyHidden,
  Je as alertVariants,
  rt as badgeVariants,
  Ce as buttonVariants,
  Xt as carbon,
  Kt as carbonClasses,
  Be as checkboxVariants,
  s as cn,
  u as colors,
  wt as fontSizes,
  kt as fontWeights,
  Nt as fonts,
  Jt as letterSpacings,
  Ct as lineHeights,
  Tt as radii,
  Me as radioVariants,
  It as shadows,
  St as spacing,
  tt as spinnerVariants,
  $e as switchThumbVariants,
  Le as switchTrackVariants,
  Pe as textareaVariants,
  Yt as tokens,
  Wt as useDataTableState
};
