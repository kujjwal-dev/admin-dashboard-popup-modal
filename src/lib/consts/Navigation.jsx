import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'

import { CgProfile } from "react-icons/cg";
import { TbCategory } from "react-icons/tb";
import { RiParentFill } from "react-icons/ri";
import { FaUpload } from "react-icons/fa";

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'profile',
		label: 'Profile',
		path: '/profile',
		icon: <CgProfile />
	},
	{
		key: 'parent',
		label: 'Parent',
		path: '/parent',
		icon: <RiParentFill />
	},
	{
		key: 'category',
		label: 'Category',
		path: '/category',
		icon: <TbCategory />
	},
	{
		key: 'upload',
		label: 'Upload',
		path: '/upload',
		icon: <FaUpload />
	},
	{
		key: 'messages',
		label: 'Messages',
		path: '/messages',
		icon: <HiOutlineAnnotation />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]
