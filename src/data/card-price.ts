import { CardPrices } from '@/interface';

export const cardPrices: CardPrices[] = [
	{
		title: 'Bamboo Stand',
		price: 'Pledge $25 or more',
		description: `You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
        you’ll be added to a special Backer member list.`,
		amountLeft: '101',
		state: true,
	},
	{
		title: 'Black Edition Stand',
		price: 'Pledge $75 or more',
		description: `You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
        member list. Shipping is included.`,
		amountLeft: '64',
		state: true,
	},
	{
		title: 'Mahogany Special Edition',
		price: 'Pledge $200 or more',
		description: `You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
        to our Backer member list. Shipping is included.`,
		amountLeft: '0',
		state: false,
	},
];
