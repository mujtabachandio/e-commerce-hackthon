// lib/sanity.ts

import { createClient, ClientConfig } from '@sanity/client';

export const client = createClient({
  projectId: 'xp1ocyiu', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset name
  apiVersion: 'v2025-01-18', // Use the current date
  useCdn: true, // Set to true for production, false for fresh data
} as ClientConfig);
