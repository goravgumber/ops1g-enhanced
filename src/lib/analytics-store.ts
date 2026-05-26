/**
 * Analytics Store - Mock data and state for analytics dashboard
 *
 * Provides realistic mock datasets for:
 * - Lead funnel metrics
 * - Intent distribution (hot/warm/cold)
 * - Conversion rates
 * - Activity trends
 * - Tour performance
 * - Sequence performance
 */

export interface FunnelData {
  stage: string;
  count: number;
  conversionRate: number; // percentage
}

export interface IntentDistribution {
  intent: "hot" | "warm" | "cold";
  count: number;
  percentage: number;
}

export interface DailyMetric {
  date: string;
  leads: number;
  tours: number;
  bookings: number;
  revenue: number; // in lakhs
}

export interface SequenceMetric {
  name: string;
  sent: number;
  responded: number;
  converted: number;
  conversionRate: number;
}

export interface TCMPerformance {
  name: string;
  leads: number;
  tours: number;
  bookings: number;
  revenue: number; // in lakhs
  conversionRate: number;
}

// Lead Funnel Data - Realistic CRM pipeline
export const leadFunnelData: FunnelData[] = [
  { stage: "New", count: 487, conversionRate: 100 },
  { stage: "Contacted", count: 342, conversionRate: 70.2 },
  { stage: "Tour Scheduled", count: 198, conversionRate: 57.9 },
  { stage: "Tour Completed", count: 156, conversionRate: 78.8 },
  { stage: "Negotiation", count: 89, conversionRate: 57.1 },
  { stage: "Booked", count: 34, conversionRate: 38.2 },
];

// Intent Distribution
export const intentDistributionData: IntentDistribution[] = [
  { intent: "hot", count: 112, percentage: 23 },
  { intent: "warm", count: 198, percentage: 41 },
  { intent: "cold", count: 177, percentage: 36 },
];

// Daily Activity Metrics (Last 30 days)
export const dailyMetricsData: DailyMetric[] = [
  { date: "Day 1", leads: 12, tours: 3, bookings: 1, revenue: 2.5 },
  { date: "Day 2", leads: 15, tours: 5, bookings: 2, revenue: 4.2 },
  { date: "Day 3", leads: 18, tours: 6, bookings: 1, revenue: 2.8 },
  { date: "Day 4", leads: 22, tours: 8, bookings: 3, revenue: 6.5 },
  { date: "Day 5", leads: 20, tours: 7, bookings: 2, revenue: 4.1 },
  { date: "Day 6", leads: 25, tours: 9, bookings: 4, revenue: 8.2 },
  { date: "Day 7", leads: 28, tours: 11, bookings: 3, revenue: 6.8 },
  { date: "Day 8", leads: 19, tours: 4, bookings: 2, revenue: 3.9 },
  { date: "Day 9", leads: 23, tours: 8, bookings: 2, revenue: 5.1 },
  { date: "Day 10", leads: 26, tours: 10, bookings: 3, revenue: 7.2 },
  { date: "Day 11", leads: 21, tours: 6, bookings: 1, revenue: 2.3 },
  { date: "Day 12", leads: 24, tours: 9, bookings: 4, revenue: 9.1 },
  { date: "Day 13", leads: 29, tours: 12, bookings: 5, revenue: 11.3 },
  { date: "Day 14", leads: 17, tours: 5, bookings: 1, revenue: 1.9 },
];

// Sequence Performance
export const sequencePerformanceData: SequenceMetric[] = [
  { name: "Site Visit Reminder", sent: 234, responded: 89, converted: 12, conversionRate: 5.1 },
  { name: "Price Drop Alert", sent: 456, responded: 178, converted: 34, conversionRate: 7.5 },
  { name: "Inventory New", sent: 312, responded: 92, converted: 15, conversionRate: 4.8 },
  { name: "Follow-up Gentle", sent: 178, responded: 64, converted: 8, conversionRate: 4.5 },
  { name: "Hot Lead Nurture", sent: 89, responded: 56, converted: 18, conversionRate: 20.2 },
  { name: "Re-engagement", sent: 267, responded: 71, converted: 9, conversionRate: 3.4 },
];

// TCM Performance
export const tcmPerformanceData: TCMPerformance[] = [
  { name: "Rahul Sharma", leads: 45, tours: 28, bookings: 8, revenue: 18.5, conversionRate: 28.6 },
  { name: "Priya Desai", leads: 52, tours: 32, bookings: 10, revenue: 22.3, conversionRate: 31.3 },
  { name: "Vikram Singh", leads: 38, tours: 22, bookings: 6, revenue: 14.2, conversionRate: 27.3 },
  { name: "Neha Patel", leads: 41, tours: 25, bookings: 7, revenue: 16.8, conversionRate: 28.0 },
  { name: "Amit Kumar", leads: 44, tours: 26, bookings: 9, revenue: 20.1, conversionRate: 34.6 },
];

// Conversion Funnel Data (for step-by-step conversion tracking)
export const conversionFunnelData = [
  { stage: "Website Visitor", value: 10000, percentage: 100 },
  { stage: "Lead Form", value: 2450, percentage: 24.5 },
  { stage: "Contacted", value: 1890, percentage: 77.1 },
  { stage: "Property Tour", value: 856, percentage: 45.3 },
  { stage: "Offer Sent", value: 342, percentage: 39.9 },
  { stage: "Deal Closed", value: 128, percentage: 37.4 },
];

// Area Performance (Property location performance)
export const areaPerformanceData = [
  { name: "Bandra West", leads: 89, tours: 45, bookings: 12, avg_value: 2.5 },
  { name: "Worli Seaface", leads: 76, tours: 38, bookings: 10, avg_value: 2.1 },
  { name: "Colaba", leads: 64, tours: 31, bookings: 8, avg_value: 3.2 },
  { name: "Marine Drive", leads: 58, tours: 28, bookings: 7, avg_value: 2.8 },
  { name: "Kala Ghoda", leads: 52, tours: 24, bookings: 6, avg_value: 1.8 },
];

// Source Performance
export const sourcePerformanceData = [
  { name: "Direct", count: 156, conversion: 18.6 },
  { name: "Google Ads", count: 234, conversion: 14.5 },
  { name: "Facebook", count: 189, conversion: 12.2 },
  { name: "Partner Sites", count: 98, conversion: 22.4 },
  { name: "Referral", count: 67, conversion: 31.3 },
];

/**
 * Calculate summary statistics
 */
export function getAnalyticsSummary() {
  const totalLeads = leadFunnelData[0].count;
  const totalTours = leadFunnelData[2].count;
  const totalBookings = leadFunnelData[5].count;
  const conversionRate = (totalBookings / totalLeads) * 100;

  const totalRevenue = tcmPerformanceData.reduce((sum, tcm) => sum + tcm.revenue, 0);
  const avgDealSize = totalRevenue / totalBookings;

  return {
    totalLeads,
    totalTours,
    totalBookings,
    conversionRate: conversionRate.toFixed(1),
    totalRevenue: totalRevenue.toFixed(1),
    avgDealSize: avgDealSize.toFixed(1),
    activeSequences: sequencePerformanceData.length,
    topTCM: tcmPerformanceData[1], // Priya Desai
  };
}

/**
 * Get metrics for a specific date range
 */
export function getMetricsForRange(startIndex: number, endIndex: number) {
  const range = dailyMetricsData.slice(startIndex, endIndex);
  return {
    totalLeads: range.reduce((sum, d) => sum + d.leads, 0),
    totalTours: range.reduce((sum, d) => sum + d.tours, 0),
    totalBookings: range.reduce((sum, d) => sum + d.bookings, 0),
    totalRevenue: range.reduce((sum, d) => sum + d.revenue, 0),
    avgLeadsPerDay: (range.reduce((sum, d) => sum + d.leads, 0) / range.length).toFixed(1),
    avgToursPerDay: (range.reduce((sum, d) => sum + d.tours, 0) / range.length).toFixed(1),
    avgBookingsPerDay: (range.reduce((sum, d) => sum + d.bookings, 0) / range.length).toFixed(1),
  };
}
