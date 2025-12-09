import React from 'react';

export interface MenuItem {
  name: string;
  icon: React.ReactNode;
  isActive?: boolean;
  hasDropdown?: boolean;
  badgeCount?: number;
}

export interface Transaction {
  id: string;
  productTitle: string;
  date: string;
  status: 'Completed' | 'Pending' | 'Failed';
  amount: string;
  iconBg: string;
}

export interface RevenueData {
  month: string;
  income: number;
  expenses: number;
}

export interface SalesData {
  category: string;
  value: number;
  color: string;
}

export enum PerformanceSegment {
  SocialMedia = 'Social Media',
  Organic = 'Organic Search',
  Direct = 'Direct',
}