export interface Program {
    id: string;
    name: string;
    accountSize: number;
    profitTarget: number;
    maxDrawdown: number;
    dailyDrawdown: number;
    price: number;
    popular?: boolean;
    features: string[];
}

export const programs: Program[] = [
    {
        id: 'starter',
        name: 'Starter',
        accountSize: 25000,
        profitTarget: 8,
        maxDrawdown: 5,
        dailyDrawdown: 3,
        price: 149,
        features: [
            '1-Step Evaluation',
            '80% Profit Split',
            'No Time Limit',
            'Free Reset on 1st Try',
            'Real-time Dashboard',
        ],
    },
    {
        id: 'standard',
        name: 'Standard',
        accountSize: 50000,
        profitTarget: 8,
        maxDrawdown: 6,
        dailyDrawdown: 4,
        price: 249,
        popular: true,
        features: [
            '1-Step Evaluation',
            '85% Profit Split',
            'No Time Limit',
            'Free Reset on 1st Try',
            'Real-time Dashboard',
            'Priority Support',
        ],
    },
    {
        id: 'professional',
        name: 'Professional',
        accountSize: 100000,
        profitTarget: 8,
        maxDrawdown: 6,
        dailyDrawdown: 4,
        price: 449,
        features: [
            '1-Step Evaluation',
            '85% Profit Split',
            'No Time Limit',
            '2 Free Resets',
            'Real-time Dashboard',
            'Priority Support',
            'Dedicated Manager',
        ],
    },
    {
        id: 'elite',
        name: 'Elite',
        accountSize: 200000,
        profitTarget: 8,
        maxDrawdown: 6,
        dailyDrawdown: 4,
        price: 799,
        features: [
            '1-Step Evaluation',
            '90% Profit Split',
            'No Time Limit',
            '3 Free Resets',
            'Real-time Dashboard',
            'Priority Support',
            'Dedicated Manager',
            'Scaling Plan',
        ],
    },
    {
        id: 'master',
        name: 'Master',
        accountSize: 400000,
        profitTarget: 8,
        maxDrawdown: 6,
        dailyDrawdown: 4,
        price: 1499,
        features: [
            '1-Step Evaluation',
            '90% Profit Split',
            'No Time Limit',
            '5 Free Resets',
            'Real-time Dashboard',
            'VIP Support',
            'Dedicated Manager',
            'Scaling Plan',
            'Express Payouts',
        ],
    },
];

export const programComparison = [
    { feature: 'Account Size', starter: '$25K', standard: '$50K', professional: '$100K', elite: '$200K', master: '$400K' },
    { feature: 'Profit Target', starter: '8%', standard: '8%', professional: '8%', elite: '8%', master: '8%' },
    { feature: 'Max Drawdown', starter: '5%', standard: '6%', professional: '6%', elite: '6%', master: '6%' },
    { feature: 'Daily Drawdown', starter: '3%', standard: '4%', professional: '4%', elite: '4%', master: '4%' },
    { feature: 'Profit Split', starter: '80%', standard: '85%', professional: '85%', elite: '90%', master: '90%' },
    { feature: 'Free Resets', starter: '1', standard: '1', professional: '2', elite: '3', master: '5' },
    { feature: 'Scaling Plan', starter: '❌', standard: '❌', professional: '❌', elite: '✅', master: '✅' },
];
