import { SideNavInterface } from '../../interfaces/side-nav.type';
export const ROUTES: SideNavInterface[] = [
    {
        path: '/dashboard/home',
        title: 'Dashboard',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'dashboard',
        submenu: []
    },
  {
    path: '/pages/search',
    title: 'Search',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: 'file-search',
    submenu: []
  },
  {
    path: '/pages/uploader',
    title: 'Auto Tagging',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: 'cloud-upload',
    submenu: []
  },
  {
    path: '/pages/convert/',
    title: 'Convert Docs',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: 'file-sync',
    submenu: [{
      path: '/pages/convert/json2csv',
      title: 'Json2CSV',
      iconType: '',
      icon: '',
      iconTheme: '',
      submenu: []
    },
      {
        path: '/pages/convert//csv2json',
        title: 'CSV2JSON',
        iconType: '',
        icon: '',
        iconTheme: '',
        submenu: []
      } ,
      {
        path: '/pages/convert//html2pdf',
        title: 'HTML2PDF',
        iconType: '',
        icon: '',
        iconTheme: '',
        submenu: []
      },
      {
        path: '/pages/convert//image2Text',
        title: 'Image2Text',
        iconType: '',
        icon: '',
        iconTheme: '',
        submenu: []
      }]
  },
  {
    path: '/pages/mydocs',
    title: 'My Docs',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: 'file-text',
    submenu: []
  }

]
