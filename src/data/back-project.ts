import { reactive } from 'vue';
import { BackProjectContent } from '@/interface';

const initialState = [
	{
		id: 'radioBlock1',
		title: 'Pledge with no reward',
		description: `Choose to support us without a reward if you simply believe in our project. As a backer, 
	you will be signed up to receive product updates via email.`,
		state: true,
		selected: false,
	},
	{
		id: 'radioBlock2',
		title: 'Bamboo Stand',
		subtitle: 'Pledge $25 or more',
		amountLeft: '101',
		description: `You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
	you’ll be added to a special Backer member list.`,
		state: true,
		selected: false,
	},
	{
		id: 'radioBlock3',
		title: 'Black Edition Stand',
		subtitle: 'Pledge $75 or more',
		amountLeft: '64',
		description: `You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
	member list. Shipping is included.`,
		state: true,
		selected: false,
	},
	{
		id: 'radioBlock4',
		title: 'Mahogany Special Edition',
		subtitle: 'Pledge $100 or more',
		amountLeft: '0',
		description: `You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
	to our Backer member list. Shipping is included.`,
		state: false,
		selected: false,
	},
];

export const BackProjectCards = reactive<BackProjectContent[]>(initialState);

export const resetStateProjectCards = () => {
	BackProjectCards.forEach((card) => (card.selected = false));
};
