import watermelon from '@/assets/images/waterlemon.png';
import customerCare from '@/assets/images/custormercare.png'
import copyIcon from '@/assets/images/copyIcon.png'
import notification from '@/assets/images/notification.png'

type MenuItemType = {
    id: string;
    icon: any;
};

const MenuItem: MenuItemType[] = [
    {id: '1', icon: watermelon},
    {id: '2', icon: customerCare},
    {id: '3', icon: copyIcon},
    {id: '4', icon: notification},
];

export {MenuItem}