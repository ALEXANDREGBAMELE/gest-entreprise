export interface IMenuItem {
  label: string;
  icon?: string;
  route?: string;
  children?: IMenuItem[];
  open?: boolean;
}


export const MENU: IMenuItem[] = [
  {
    label: 'Dashboard',
    icon: 'dashboard-line',
    route: '/dashboard',
  },
  {
    label: 'Factures',
    icon: 'file-list-3-line',
    open: false,
    children: [
      { label: 'Toutes les factures', route: '/invoices' },
      { label: 'Créer facture', route: '/invoices/create' },
    ],
  },
  {
    label: 'Clients',
    icon: 'group-line',
    open: false,
    children: [
      { label: 'Liste clients', route: '/customers' },
      {
        label: 'Segments',
        open: false,
        children: [
          { label: 'VIP', route: '/customers/vip' },
          { label: 'Standard', route: '/customers/standard' },
        ],
      },
    ],
  },
];
