declare module "lucide-react" {
  import type { FC, SVGProps } from "react";

  export interface LucideProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    absoluteStrokeWidth?: boolean;
  }

  export type LucideIcon = FC<LucideProps>;

  export const ArrowDownRight: LucideIcon;
  export const ArrowRight: LucideIcon;
  export const ArrowUpRight: LucideIcon;
  export const BarChart3: LucideIcon;
  export const Bell: LucideIcon;
  export const BriefcaseBusiness: LucideIcon;
  export const CalendarDays: LucideIcon;
  export const CandlestickChart: LucideIcon;
  export const ChevronDown: LucideIcon;
  export const CircleDollarSign: LucideIcon;
  export const DollarSign: LucideIcon;
  export const Eye: LucideIcon;
  export const Layers: LucideIcon;
  export const LayoutDashboard: LucideIcon;
  export const ListFilter: LucideIcon;
  export const Maximize2: LucideIcon;
  export const Menu: LucideIcon;
  export const Minimize2: LucideIcon;
  export const Moon: LucideIcon;
  export const Newspaper: LucideIcon;
  export const PieChart: LucideIcon;
  export const RefreshCcw: LucideIcon;
  export const Search: LucideIcon;
  export const SearchX: LucideIcon;
  export const Settings: LucideIcon;
  export const Sparkles: LucideIcon;
  export const Sun: LucideIcon;
  export const Target: LucideIcon;
  export const TrendingUp: LucideIcon;
  export const Wallet: LucideIcon;
  export const Wallet2: LucideIcon;
  export const X: LucideIcon;
  export const Activity: LucideIcon;
  export const AlertCircle: LucideIcon;
}
