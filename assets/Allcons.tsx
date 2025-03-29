import watermelon from '@/assets/images/waterlemon.png';
import customerCare from '@/assets/images/custormercare.png'
import copyIcon from '@/assets/images/copyIcon.png'
import notification from '@/assets/images/notification.png'
import uniusPI from '@/assets/images/uniusHome.png'
import wallet from '@/assets/images/wallet.png'
import withdraw from '@/assets/images/transfer.png'
import sui from '@/assets/images/sui.png'
import bitcoin from '@/assets/images/bitcoin.png'
import ethereum from '@/assets/images/ETH.png'
import litecoin from '@/assets/images/LTH.png'
import bnb from '@/assets/images/bnb.png'
import apt from '@/assets/images/apt.png'

type MenuItemType = {
    id: string;
    coinCapId?: string;
    names?: string;
    icon: any;
    title?: string;
    page?: any;
};


type TransactionItemType = {
    id: string;
    coinCapId?: string;
    names?: string;
    icon: any;
    title?: string;

};

type CurrencyItemType = {
    id: string;
    coinCapId?: string;
    names?: string;
    icon: any;
    title?: string;
    page?: string;
};


const MenuItem: MenuItemType[] = [
    {id: '1', icon: watermelon, page:'/'},
    {id: '2', icon: customerCare, page:'/customerCare'},
    {id: '3', icon: copyIcon, page:'/'},
    {id: '4', icon: notification, page:'/notifications'},
];

const TransactionOption: MenuItemType[] = [
    {id: '1', icon: uniusPI, title: 'To Unius', page: '/sendUwt'},
    {id: '2', icon: wallet, title:'Other Wallets', page: '/otherwallet'},
    {id: '3', icon: withdraw, title:'Withdraw', page: '/'},
];

const currency: MenuItemType[] = [
    { id: '1', coinCapId: 'sui', names: 'SUI', icon: sui },
    { id: '2', coinCapId: 'bitcoin', names: 'BTC', icon: bitcoin },
    { id: '3', coinCapId: 'ethereum', names: 'ETH', icon: ethereum },
    { id: '4', coinCapId: 'litecoin', names: 'LTH', icon: litecoin },
    { id: '5', coinCapId: 'binance-coin', names: 'BNB', icon: bnb },
    { id: '6', coinCapId: 'aptos', names: 'APT', icon: apt }
]

export {MenuItem, TransactionOption, currency}